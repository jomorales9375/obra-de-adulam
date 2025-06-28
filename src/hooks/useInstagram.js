import { useState, useEffect, useCallback } from 'react';
import { instagramAPI, FALLBACK_POSTS } from '../config/instagram';
import { apiCache } from '../utils/cache';
import { measureFunction } from '../utils/performance';

export const useInstagram = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);

  // Get access token from localStorage or environment
  const getAccessToken = useCallback(() => {
    return localStorage.getItem('instagram_access_token') || 
           process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN;
  }, []);

  // Fetch Instagram posts with caching and performance monitoring
  const fetchPosts = useCallback(async () => {
    const measureFetchPosts = measureFunction('fetchInstagramPosts', async () => {
      try {
        setLoading(true);
        setError(null);

        const accessToken = getAccessToken();
        
        if (!accessToken) {
          // No access token, use fallback data
          console.log('No Instagram access token found, using fallback data');
          setPosts(FALLBACK_POSTS);
          setLoading(false);
          return;
        }

        // Check cache first
        const cacheKey = `instagram_posts_${accessToken}`;
        const cachedData = apiCache.get(cacheKey);
        
        if (cachedData) {
          console.log('Using cached Instagram data');
          setPosts(cachedData.posts);
          setProfile(cachedData.profile);
          setLoading(false);
          return;
        }

        // Fetch fresh data
        const [profileData, mediaData] = await Promise.all([
          instagramAPI.getUserProfile(accessToken),
          instagramAPI.getUserMedia(accessToken, 6)
        ]);

        setProfile(profileData);
        
        if (mediaData.data) {
          setPosts(mediaData.data);
          
          // Cache the response for 30 minutes
          apiCache.cacheApiResponse(cacheKey, null, {
            posts: mediaData.data,
            profile: profileData
          }, 30 * 60 * 1000);
        } else {
          throw new Error('No media data received');
        }

      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError(err.message);
        // Fallback to static data on error
        setPosts(FALLBACK_POSTS);
      } finally {
        setLoading(false);
      }
    });

    await measureFetchPosts();
  }, [getAccessToken]);

  // Refresh posts with cache invalidation
  const refreshPosts = useCallback(async () => {
    const accessToken = getAccessToken();
    if (accessToken) {
      // Invalidate cache
      const cacheKey = `instagram_posts_${accessToken}`;
      apiCache.delete(cacheKey);
    }
    await fetchPosts();
  }, [fetchPosts, getAccessToken]);

  // Initialize on mount
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Auto-refresh every 30 minutes with cache consideration
  useEffect(() => {
    const interval = setInterval(() => {
      // Only refresh if cache is stale or doesn't exist
      const accessToken = getAccessToken();
      if (accessToken) {
        const cacheKey = `instagram_posts_${accessToken}`;
        const cachedData = apiCache.get(cacheKey);
        
        if (!cachedData) {
          fetchPosts();
        }
      }
    }, 30 * 60 * 1000); // 30 minutes

    return () => clearInterval(interval);
  }, [fetchPosts, getAccessToken]);

  return {
    posts,
    profile,
    loading,
    error,
    refreshPosts,
  };
};

// Helper function to format timestamp
export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
  
  if (diffInHours < 1) {
    return 'Hace menos de 1 hora';
  } else if (diffInHours < 24) {
    return `Hace ${diffInHours} hora${diffInHours > 1 ? 's' : ''}`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);
    return `Hace ${diffInDays} día${diffInDays > 1 ? 's' : ''}`;
  }
};

// Helper function to truncate caption
export const truncateCaption = (caption, maxLength = 100) => {
  if (!caption) return '';
  if (caption.length <= maxLength) return caption;
  return caption.substring(0, maxLength) + '...';
}; 