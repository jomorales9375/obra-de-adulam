import { useEffect, useRef, useCallback } from 'react';

// Performance monitoring hook
export const usePerformance = () => {
  const performanceRef = useRef({
    startTime: performance.now(),
    measurements: new Map(),
  });

  const performanceData = useRef({
    videoLoadTime: 0,
    connectionSpeed: 'unknown',
    deviceType: 'unknown',
    videoSupported: true
  });

  // Measure component render time
  const measureRender = useCallback((componentName) => {
    const start = performance.now();
    
    return () => {
      const end = performance.now();
      const duration = end - start;
      
      performanceRef.current.measurements.set(componentName, duration);
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`${componentName} render time: ${duration.toFixed(2)}ms`);
      }
      
      // Send to analytics in production
      if (process.env.NODE_ENV === 'production' && window.gtag) {
        window.gtag('event', 'component_render', {
          event_category: 'Performance',
          event_label: componentName,
          value: Math.round(duration),
          non_interaction: true,
        });
      }
    };
  }, []);

  // Measure function execution time
  const measureFunction = useCallback((functionName, fn) => {
    return async (...args) => {
      const start = performance.now();
      try {
        const result = await fn(...args);
        const end = performance.now();
        const duration = end - start;
        
        if (process.env.NODE_ENV === 'development') {
          console.log(`${functionName} execution time: ${duration.toFixed(2)}ms`);
        }
        
        return result;
      } catch (error) {
        const end = performance.now();
        const duration = end - start;
        
        if (process.env.NODE_ENV === 'development') {
          console.error(`${functionName} failed after ${duration.toFixed(2)}ms:`, error);
        }
        throw error;
      }
    };
  }, []);

  // Monitor memory usage
  const getMemoryInfo = useCallback(() => {
    if ('memory' in performance) {
      return {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit,
      };
    }
    return null;
  }, []);

  // Monitor network performance
  const getNetworkInfo = useCallback(() => {
    if ('connection' in navigator) {
      return {
        effectiveType: navigator.connection.effectiveType,
        downlink: navigator.connection.downlink,
        rtt: navigator.connection.rtt,
        saveData: navigator.connection.saveData,
      };
    }
    return null;
  }, []);

  // Debounce function for performance
  const debounce = useCallback((func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  // Throttle function for performance
  const throttle = useCallback((func, limit) => {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }, []);

  // Preload critical resources
  const preloadResource = useCallback((url, type = 'fetch') => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = type;
    document.head.appendChild(link);
  }, []);

  // Get performance summary
  const getPerformanceSummary = useCallback(() => {
    const endTime = performance.now();
    const totalTime = endTime - performanceRef.current.startTime;
    
    return {
      totalTime: totalTime.toFixed(2),
      measurements: Object.fromEntries(performanceRef.current.measurements),
      memory: getMemoryInfo(),
      network: getNetworkInfo(),
    };
  }, [getMemoryInfo, getNetworkInfo]);

  useEffect(() => {
    // Track video loading performance
    const trackVideoPerformance = () => {
      const startTime = performance.now();
      
      return () => {
        const loadTime = performance.now() - startTime;
        performanceData.current.videoLoadTime = loadTime;
        
        // Log performance data for analytics
        console.log('Video Performance:', {
          loadTime: `${loadTime.toFixed(2)}ms`,
          connectionSpeed: performanceData.current.connectionSpeed,
          deviceType: performanceData.current.deviceType
        });
      };
    };

    // Detect connection speed
    const detectConnectionSpeed = () => {
      if (navigator.connection) {
        const connection = navigator.connection;
        performanceData.current.connectionSpeed = connection.effectiveType || 'unknown';
        
        // Log connection info
        console.log('Connection Info:', {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData
        });
      }
    };

    // Detect device type
    const detectDeviceType = () => {
      const userAgent = navigator.userAgent;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      performanceData.current.deviceType = isMobile ? 'mobile' : 'desktop';
    };

    // Check video format support
    const checkVideoSupport = () => {
      const video = document.createElement('video');
      performanceData.current.videoSupported = !!video.canPlayType;
    };

    detectConnectionSpeed();
    detectDeviceType();
    checkVideoSupport();

    return trackVideoPerformance();
  }, []);

  return {
    measureRender,
    measureFunction,
    getMemoryInfo,
    getNetworkInfo,
    debounce,
    throttle,
    preloadResource,
    getPerformanceSummary,
  };
};

// Hook for monitoring component performance
export const useComponentPerformance = (componentName) => {
  const { measureRender } = usePerformance();
  
  useEffect(() => {
    const cleanup = measureRender(componentName);
    return cleanup;
  }, [componentName, measureRender]);
};

// Hook for monitoring API calls
export const useApiPerformance = () => {
  const { measureFunction } = usePerformance();
  
  const measureApiCall = useCallback((apiCall, name) => {
    return measureFunction(name, apiCall);
  }, [measureFunction]);
  
  return { measureApiCall };
};

// Custom hook for Intersection Observer
export const useIntersectionObserver = (callback, options = {}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options,
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [callback, options]);

  return elementRef;
}; 