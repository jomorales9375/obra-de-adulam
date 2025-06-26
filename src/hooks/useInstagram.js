import { useState, useEffect, useCallback } from 'react';
import { instagramAPI, FALLBACK_POSTS } from '../config/instagram';

export const useInstagram = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);

  // Get access token from localStorage or environment
  const getAccessToken = () => {
    return localStorage.getItem('instagram_access_token') || 
           process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN;
  };

  // Fetch Instagram posts
  const fetchPosts = useCallback(async () => {
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

      // Fetch user profile
      const profileData = await instagramAPI.getUserProfile(accessToken);
      setProfile(profileData);

      // Fetch user media
      const mediaData = await instagramAPI.getUserMedia(accessToken, 6);
      
      if (mediaData.data) {
        setPosts(mediaData.data);
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
  }, []);

  // Refresh posts
  const refreshPosts = useCallback(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Initialize on mount
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Auto-refresh every 30 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      fetchPosts();
    }, 30 * 60 * 1000); // 30 minutes

    return () => clearInterval(interval);
  }, [fetchPosts]);

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