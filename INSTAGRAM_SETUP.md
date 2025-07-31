# Instagram Basic Display API Setup Guide

This guide will help you set up the Instagram Basic Display API to fetch real Instagram posts for your church website.

## Step 1: Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "Create App"
3. Select "Consumer" as the app type
4. Fill in your app details:
   - App Name: "Obra de Adulam Website"
   - Contact Email: Your email
   - Business Account: Skip for now

## Step 2: Add Instagram Basic Display

1. In your Facebook App dashboard, click "Add Product"
2. Find "Instagram Basic Display" and click "Set Up"
3. Follow the setup wizard

## Step 3: Configure Instagram Basic Display

1. **Basic Settings:**
   - App Domains: Add your website domain (e.g., `obradeadulam.org`)
   - Privacy Policy URL: Your privacy policy URL
   - Terms of Service URL: Your terms of service URL
   - Deauthorize Callback URL: `https://yourdomain.com/instagram-deauthorize`
   - Data Deletion Request URL: `https://yourdomain.com/instagram-data-deletion`

2. **Instagram App ID:**
   - Copy your Instagram App ID (you'll need this later)

## Step 4: Create Environment Variables

Create a `.env` file in your project root with:

```env
REACT_APP_INSTAGRAM_CLIENT_ID=your_instagram_client_id_here
REACT_APP_INSTAGRAM_CLIENT_SECRET=your_instagram_client_secret_here
REACT_APP_INSTAGRAM_REDIRECT_URI=https://obradeadulam.org/instagram-callback
```

## Step 5: Get Access Token

### Option A: Manual Token Generation (Recommended for Production)

1. Go to your Instagram App in Facebook Developers
2. Navigate to "Instagram Basic Display" > "Basic Display"
3. Click "Generate Token"
4. Follow the authorization flow
5. Copy the long-lived access token
6. Add it to your `.env` file:
   ```env
   REACT_APP_INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token_here
   ```

### Option B: User Authorization Flow (For Development)

1. The app will automatically redirect users to Instagram for authorization
2. Users will need to authorize your app to access their Instagram data
3. The access token will be stored in localStorage

## Step 6: Test the Integration

1. Start your development server: `npm start`
2. Check the browser console for any errors
3. The Instagram section should load with real posts or fallback data

## Troubleshooting

### Common Issues:

1. **"No Instagram access token found"**
   - Make sure you've added the access token to your `.env` file
   - Restart your development server after adding environment variables

2. **"Error fetching Instagram posts"**
   - Check that your access token is valid and not expired
   - Verify your Instagram account is a Business or Creator account
   - Ensure your app is approved by Facebook

3. **Posts not showing**
   - Make sure your Instagram account has public posts
   - Check that the posts are recent (API only returns recent posts)

### Fallback Behavior:

If the API fails or isn't configured, the website will automatically show fallback images and content. This ensures your website always looks good even if Instagram is down.

## Security Notes

- Never commit your `.env` file to version control
- Keep your client secret secure
- Access tokens expire - you may need to regenerate them periodically
- Consider implementing token refresh logic for production

## Production Deployment

For production deployment:

1. Update the redirect URI to your production domain
2. Add your production domain to the app settings
3. Use a long-lived access token
4. Consider implementing server-side token management

## Support

If you need help with the Instagram API setup, refer to:
- [Instagram Basic Display Documentation](https://developers.facebook.com/docs/instagram-basic-display-api/)
- [Facebook Developers Support](https://developers.facebook.com/support/) 