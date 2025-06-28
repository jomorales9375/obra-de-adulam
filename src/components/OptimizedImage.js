import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useIntersectionObserver } from '../hooks/usePerformance';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  placeholder = '/placeholder.jpg',
  fallback = '/fallback.jpg',
  loading = 'lazy',
  sizes = '100vw',
  onLoad,
  onError,
  priority = false,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(priority ? src : placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  
  const imageRef = useRef(null);
  const { useIntersectionObserver: useIO } = useIntersectionObserver();

  // Intersection Observer for lazy loading
  const observerRef = useIO(
    useCallback((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, []),
    { threshold: 0.1, rootMargin: '50px' }
  );

  // Load image when in view
  useEffect(() => {
    if (isInView && !isLoaded && !hasError) {
      const img = new Image();
      
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
        onLoad?.(img);
      };
      
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
        setHasError(true);
        setImageSrc(fallback);
        onError?.(new Error(`Failed to load image: ${src}`));
      };
      
      img.src = src;
    }
  }, [isInView, src, isLoaded, hasError, fallback, onLoad, onError]);

  // Preload critical images
  useEffect(() => {
    if (priority) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, src]);

  return (
    <img
      ref={observerRef}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      loading={loading}
      sizes={sizes}
      onLoad={() => setIsLoaded(true)}
      onError={() => {
        setHasError(true);
        setImageSrc(fallback);
      }}
      {...props}
    />
  );
};

// Higher-order component for wrapping images with optimization
export const withImageOptimization = (Component) => {
  return React.forwardRef((props, ref) => (
    <OptimizedImage {...props} ref={ref} />
  ));
};

export default OptimizedImage; 