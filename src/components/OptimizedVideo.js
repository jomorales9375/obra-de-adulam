import React, { useRef, useEffect, useState } from 'react';

const OptimizedVideo = ({ 
  src, 
  fallbackSrc, 
  poster, 
  className = "", 
  onLoad, 
  onError,
  startTime = 0,
  ...props 
}) => {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      console.log('Mobile detection:', mobile, navigator.userAgent);
      setIsMobile(mobile);
      return mobile;
    };

    const mobile = checkMobile();

    console.log('Video loading decision:', { mobile, shouldLoadVideo: !mobile });

    // Load video if not mobile
    if (!mobile) {
      console.log('Setting shouldLoad to true');
      const timer = setTimeout(() => {
        setShouldLoad(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      console.log('Video loading blocked: mobile device');
    }
  }, []);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      console.log('Attempting to load video:', src);
      const video = videoRef.current;
      
      // Add a timeout to detect if video fails to load
      const loadTimeout = setTimeout(() => {
        if (!isLoaded) {
          console.log('Video load timeout - checking video state');
          console.log('Video readyState:', video.readyState);
          console.log('Video networkState:', video.networkState);
          console.log('Video error:', video.error);
          
          // If video is ready but not marked as loaded, force it
          if (video.readyState >= 2) {
            console.log('Forcing video to visible state');
            setIsLoaded(true);
          }
        }
      }, 3000);

      const handleLoadedData = () => {
        console.log('Video loaded successfully');
        clearTimeout(loadTimeout);
        setIsLoaded(true);
        if (onLoad) onLoad(video);
      };

      const handleError = (error) => {
        console.log('Video error:', error);
        console.log('Video error details:', video.error);
        clearTimeout(loadTimeout);
        if (onError) onError(error);
      };

      const handleLoadStart = () => {
        console.log('Video load started');
      };

      const handleCanPlay = () => {
        console.log('Video can play');
        setIsLoaded(true);
      };

      const handleCanPlayThrough = () => {
        console.log('Video can play through');
        setIsLoaded(true);
      };

      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('canplaythrough', handleCanPlayThrough);
      video.addEventListener('error', handleError);

      // Set start time if specified
      if (startTime > 0) {
        video.currentTime = startTime;
      }

      // Try to play the video
      video.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });

      return () => {
        clearTimeout(loadTimeout);
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('canplaythrough', handleCanPlayThrough);
        video.removeEventListener('error', handleError);
      };
    }
  }, [shouldLoad, startTime, onLoad, onError, src, isLoaded]);

  // Don't render video on mobile only
  if (isMobile) {
    console.log('Not rendering video: mobile device');
    return null;
  }

  console.log('Rendering video element');
  return (
    <video
      ref={videoRef}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      {...props}
    >
      {src && <source src={src} type="video/mp4" />}
      {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
    </video>
  );
};

export default OptimizedVideo; 