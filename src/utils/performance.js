// Performance monitoring utilities for Obra de Adulam

class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
    this.observers = new Map();
    this.startTime = performance.now();
  }

  // Measure function execution time
  measureFunction(name, fn) {
    return async (...args) => {
      const start = performance.now();
      try {
        const result = await fn(...args);
        const duration = performance.now() - start;
        this.recordMetric(name, duration);
        return result;
      } catch (error) {
        const duration = performance.now() - start;
        this.recordMetric(`${name}_error`, duration);
        throw error;
      }
    };
  }

  // Record performance metric
  recordMetric(name, value) {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    this.metrics.get(name).push({
      value,
      timestamp: Date.now(),
    });

    // Keep only last 100 measurements
    if (this.metrics.get(name).length > 100) {
      this.metrics.get(name).shift();
    }
  }

  // Get metric statistics
  getMetricStats(name) {
    const measurements = this.metrics.get(name) || [];
    if (measurements.length === 0) return null;

    const values = measurements.map(m => m.value);
    return {
      count: values.length,
      min: Math.min(...values),
      max: Math.max(...values),
      avg: values.reduce((a, b) => a + b, 0) / values.length,
      median: this.getMedian(values),
      p95: this.getPercentile(values, 95),
      p99: this.getPercentile(values, 99),
    };
  }

  // Calculate median
  getMedian(values) {
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  }

  // Calculate percentile
  getPercentile(values, percentile) {
    const sorted = [...values].sort((a, b) => a - b);
    const index = Math.ceil((percentile / 100) * sorted.length) - 1;
    return sorted[index];
  }

  // Monitor Core Web Vitals using Performance Observer
  monitorWebVitals() {
    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const paintObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            this.recordMetric(entry.name, entry.startTime);
          }
        });
        paintObserver.observe({ entryTypes: ['paint'] });
      } catch (error) {
        console.log('Paint observer not supported:', error);
      }
    }

    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            this.recordMetric('LCP', entry.startTime);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.log('LCP observer not supported:', error);
      }
    }

    // First Input Delay
    if ('PerformanceObserver' in window) {
      try {
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            this.recordMetric('FID', entry.processingStart - entry.startTime);
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.log('FID observer not supported:', error);
      }
    }

    // Cumulative Layout Shift
    if ('PerformanceObserver' in window) {
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          this.recordMetric('CLS', clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.log('CLS observer not supported:', error);
      }
    }
  }

  // Monitor memory usage
  monitorMemory() {
    if ('memory' in performance) {
      setInterval(() => {
        const memory = performance.memory;
        this.recordMetric('memory_used', memory.usedJSHeapSize);
        this.recordMetric('memory_total', memory.totalJSHeapSize);
        this.recordMetric('memory_limit', memory.jsHeapSizeLimit);
      }, 30000); // Every 30 seconds
    }
  }

  // Monitor network performance
  monitorNetwork() {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      this.recordMetric('network_effective_type', connection.effectiveType);
      this.recordMetric('network_downlink', connection.downlink);
      this.recordMetric('network_rtt', connection.rtt);
    }
  }

  // Monitor resource loading
  monitorResources() {
    if ('PerformanceObserver' in window) {
      try {
        const resourceObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            this.recordMetric(`resource_${entry.initiatorType}`, entry.duration);
          }
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
      } catch (error) {
        console.log('Resource observer not supported:', error);
      }
    }
  }

  // Monitor long tasks
  monitorLongTasks() {
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            this.recordMetric('long_task', entry.duration);
          }
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch (error) {
        console.log('Long task observer not supported:', error);
      }
    }
  }

  // Start all monitoring
  startMonitoring() {
    this.monitorWebVitals();
    this.monitorMemory();
    this.monitorNetwork();
    this.monitorResources();
    this.monitorLongTasks();
  }

  // Get performance report
  getPerformanceReport() {
    const report = {
      timestamp: new Date().toISOString(),
      uptime: performance.now() - this.startTime,
      metrics: {},
      summary: {
        totalMetrics: this.metrics.size,
        totalMeasurements: Array.from(this.metrics.values()).reduce((sum, measurements) => sum + measurements.length, 0),
      },
    };

    // Add metric statistics
    for (const [name, measurements] of this.metrics) {
      report.metrics[name] = this.getMetricStats(name);
    }

    return report;
  }

  // Send performance data to analytics
  sendToAnalytics() {
    const report = this.getPerformanceReport();
    
    if (process.env.NODE_ENV === 'production' && window.gtag) {
      // Send Core Web Vitals
      if (report.metrics.LCP) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'LCP',
          value: Math.round(report.metrics.LCP.avg),
          non_interaction: true,
        });
      }

      if (report.metrics.FID) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'FID',
          value: Math.round(report.metrics.FID.avg),
          non_interaction: true,
        });
      }

      if (report.metrics.CLS) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'CLS',
          value: Math.round(report.metrics.CLS.avg * 1000) / 1000,
          non_interaction: true,
        });
      }
    }

    return report;
  }
}

// Create singleton instance
const performanceMonitor = new PerformanceMonitor();

// Export utilities
export const measureFunction = (name, fn) => performanceMonitor.measureFunction(name, fn);
export const recordMetric = (name, value) => performanceMonitor.recordMetric(name, value);
export const getMetricStats = (name) => performanceMonitor.getMetricStats(name);
export const getPerformanceReport = () => performanceMonitor.getPerformanceReport();
export const sendToAnalytics = () => performanceMonitor.sendToAnalytics();
export const startPerformanceMonitoring = () => performanceMonitor.startMonitoring();

// Auto-start monitoring
if (typeof window !== 'undefined') {
  startPerformanceMonitoring();
}

export default performanceMonitor; 