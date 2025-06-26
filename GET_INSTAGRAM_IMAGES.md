# How to Get Your Actual Instagram Post Images

## Quick Method (Recommended)

### Step 1: Get Image URLs from Instagram Web
1. Go to [instagram.com](https://instagram.com) and log in
2. Navigate to your Instagram posts
3. For each post you want to display:
   - Right-click on the post image
   - Select "Copy image address" or "Copy image URL"
   - The URL will look like: `https://scontent.cdninstagram.com/v/t51.2885-15/...`

### Step 2: Update the Code
1. Open `src/config/instagram.js`
2. Find the `FALLBACK_POSTS` array
3. Replace the placeholder URLs with your actual Instagram image URLs:

```javascript
export const FALLBACK_POSTS = [
  {
    id: '1',
    // Replace this with your actual Instagram post image URL
    media_url: 'https://scontent.cdninstagram.com/v/t51.2885-15/ACTUAL_IMAGE_URL_HERE.jpg',
    permalink: 'https://www.instagram.com/reel/DLNyH7sSDVs/',
    caption: 'Your actual post caption here',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    media_type: 'IMAGE'
  },
  // ... repeat for other posts
];
```

### Step 3: Test
1. Save the file
2. Refresh your website
3. You should now see your actual Instagram post images!

## Alternative Method: Using Screenshots

If you can't get the direct URLs:

1. **Take screenshots** of your Instagram posts
2. **Save them** to your computer
3. **Upload them** to your website's `public/instagram/` folder
4. **Update the URLs** to use local paths:

```javascript
media_url: '/instagram/post1.jpg'
```

## Example with Real URLs

Here's what your updated code should look like:

```javascript
export const FALLBACK_POSTS = [
  {
    id: '1',
    media_url: 'https://scontent.cdninstagram.com/v/t51.2885-15/1234567890_1234567890_1234567890_n.jpg',
    permalink: 'https://www.instagram.com/reel/DLNyH7sSDVs/',
    caption: 'Momentos especiales de nuestra comunidad y ministerio. ¡Bendiciones para todos!',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    media_type: 'IMAGE'
  },
  {
    id: '2',
    media_url: 'https://scontent.cdninstagram.com/v/t51.2885-15/0987654321_0987654321_0987654321_n.jpg',
    permalink: 'https://www.instagram.com/reel/DKObnVNNRHm/',
    caption: 'Compartiendo la palabra de Dios y construyendo comunidad juntos.',
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    media_type: 'IMAGE'
  },
  {
    id: '3',
    media_url: 'https://scontent.cdninstagram.com/v/t51.2885-15/1122334455_1122334455_1122334455_n.jpg',
    permalink: 'https://www.instagram.com/obradeadulam/',
    caption: 'Más contenido de nuestra comunidad.',
    timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    media_type: 'IMAGE'
  }
];
```

## Troubleshooting

- **Images not loading**: Make sure the URLs are complete and accessible
- **Wrong images**: Double-check that you copied the correct image URL
- **Broken links**: Instagram URLs can expire, you may need to refresh them periodically

## Next Steps

Once you've added your real Instagram images, you can:
1. Set up the Instagram API for automatic updates
2. Add more posts to the array
3. Customize the captions and timestamps 