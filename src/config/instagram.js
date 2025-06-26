// Instagram Basic Display API Configuration
export const INSTAGRAM_CONFIG = {
  // You'll need to get these from Instagram Developer Console
  CLIENT_ID: process.env.REACT_APP_INSTAGRAM_CLIENT_ID || '',
  CLIENT_SECRET: process.env.REACT_APP_INSTAGRAM_CLIENT_SECRET || '',
  REDIRECT_URI: process.env.REACT_APP_INSTAGRAM_REDIRECT_URI || 'http://localhost:3000/instagram-callback',
  
  // API endpoints
  AUTH_URL: 'https://api.instagram.com/oauth/authorize',
  TOKEN_URL: 'https://api.instagram.com/oauth/access_token',
  API_BASE: 'https://graph.instagram.com/v12.0',
  
  // Scopes needed for basic display
  SCOPES: ['user_profile', 'user_media'],
};

// Instagram API helper functions
export const instagramAPI = {
  // Get authorization URL
  getAuthUrl: () => {
    const params = new URLSearchParams({
      client_id: INSTAGRAM_CONFIG.CLIENT_ID,
      redirect_uri: INSTAGRAM_CONFIG.REDIRECT_URI,
      scope: INSTAGRAM_CONFIG.SCOPES.join(','),
      response_type: 'code',
    });
    return `${INSTAGRAM_CONFIG.AUTH_URL}?${params}`;
  },

  // Exchange code for access token
  getAccessToken: async (code) => {
    const response = await fetch(INSTAGRAM_CONFIG.TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: INSTAGRAM_CONFIG.CLIENT_ID,
        client_secret: INSTAGRAM_CONFIG.CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: INSTAGRAM_CONFIG.REDIRECT_URI,
        code: code,
      }),
    });
    return response.json();
  },

  // Get user media
  getUserMedia: async (accessToken, limit = 6) => {
    const response = await fetch(
      `${INSTAGRAM_CONFIG.API_BASE}/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}&limit=${limit}`
    );
    return response.json();
  },

  // Get user profile
  getUserProfile: async (accessToken) => {
    const response = await fetch(
      `${INSTAGRAM_CONFIG.API_BASE}/me?fields=id,username,account_type&access_token=${accessToken}`
    );
    return response.json();
  },
};

// Manual Instagram post data - Replace these with your actual Instagram post URLs
// To get the image URL from an Instagram post:
// 1. Right-click on the post image in Instagram
// 2. Select "Copy image address" or "Copy image URL"
// 3. Replace the URLs below with your actual post image URLs
export const FALLBACK_POSTS = [
  {
    id: '1',
    // Replace this URL with the actual image URL from your Instagram post
    media_url: 'https://scontent.cdninstagram.com/v/t51.2885-15/your_actual_image_url_here.jpg',
    permalink: 'https://www.instagram.com/reel/DLNyH7sSDVs/',
    caption: 'Momentos especiales de nuestra comunidad y ministerio. ¡Bendiciones para todos!',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    media_type: 'IMAGE'
  },
  {
    id: '2',
    // Replace this URL with the actual image URL from your Instagram post
    media_url: 'https://scontent.cdninstagram.com/v/t51.2885-15/your_actual_image_url_here.jpg',
    permalink: 'https://www.instagram.com/reel/DKObnVNNRHm/',
    caption: 'Compartiendo la palabra de Dios y construyendo comunidad juntos.',
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    media_type: 'IMAGE'
  },
  {
    id: '3',
    // Replace this URL with the actual image URL from your Instagram post
    media_url: 'https://scontent.cdninstagram.com/v/t51.2885-15/your_actual_image_url_here.jpg',
    permalink: 'https://www.instagram.com/obradeadulam/',
    caption: 'Más contenido de nuestra comunidad.',
    timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    media_type: 'IMAGE'
  }
];

// Instructions for getting Instagram post image URLs:
/*
HOW TO GET INSTAGRAM POST IMAGE URLS:

Method 1: From Instagram Web
1. Go to your Instagram post on instagram.com
2. Right-click on the post image
3. Select "Copy image address" or "Copy image URL"
4. The URL will look like: https://scontent.cdninstagram.com/v/t51.2885-15/...

Method 2: From Instagram Mobile (Screenshot)
1. Take a screenshot of your Instagram post
2. Save it to your computer
3. Upload it to your website's public folder
4. Use a local path like: '/instagram/post1.jpg'

Method 3: Using Browser Developer Tools
1. Open your Instagram post in a web browser
2. Right-click and select "Inspect Element"
3. Find the img tag with your post image
4. Copy the src attribute value

REPLACE THE URLs ABOVE WITH YOUR ACTUAL INSTAGRAM POST IMAGE URLS
*/ 