# Video Optimization Guide

## Implemented Optimizations

### 1. Static Image Fallback
- High-quality static image (`/Enseñanza.jpg`) loads immediately
- Video fades in smoothly after loading
- Ensures instant visual feedback for users

### 2. Connection Speed Detection
- Uses `navigator.connection` API to detect connection quality
- Slow connections (2G/slow-2G): Shows only static image
- Medium connections (3G): Loads optimized video
- Fast connections (4G/WiFi): Loads full quality video

### 3. Mobile Device Detection
- Automatically detects mobile devices
- Disables video on mobile to save bandwidth
- Shows animated CSS gradient instead

### 4. Optimized Video Loading
- Uses `preload="metadata"` for faster initial load
- Progressive loading with opacity transitions
- Error handling and fallbacks

### 5. Performance Monitoring
- Tracks video load times
- Monitors connection speed
- Logs performance metrics

## Video File Optimization

### Current Files
- `church-background-optimized.mp4` (703KB) - Currently in use
- `church-background-compressed.mp4` (1.1MB) - Backup option
- `church-background.mp4` (3.2MB) - Original file

### Recommended WebM Conversion

To create a WebM version for better compression:

```bash
# Install FFmpeg first
brew install ffmpeg

# Convert to WebM with VP9 codec
ffmpeg -i public/videos/church-background-optimized.mp4 \
  -c:v libvpx-vp9 \
  -crf 30 \
  -b:v 0 \
  -c:a libopus \
  -b:a 64k \
  public/videos/church-background-optimized.webm
```

### Manual Conversion Options
1. **Online Converters**: Use services like CloudConvert or Convertio
2. **Desktop Software**: Use HandBrake or VLC
3. **Browser-based**: Use tools like FFmpeg.wasm

## Performance Metrics

### Target Load Times
- Static image: < 100ms
- Video metadata: < 500ms
- Full video: < 2s on fast connections

### Connection Thresholds
- Slow (2G): < 50 Kbps
- Medium (3G): 50-1500 Kbps
- Fast (4G+): > 1500 Kbps

## Browser Support

### Connection API Support
- Chrome: 61+
- Firefox: 55+
- Safari: 11+
- Edge: 79+

### Video Format Support
- MP4 (H.264): Universal support
- WebM (VP9): Modern browsers
- Fallback: MP4 for older browsers

## Monitoring and Analytics

The system logs performance data including:
- Video load times
- Connection speed
- Device type
- Error rates

Check browser console for detailed performance logs.

## Future Improvements

1. **Multiple Quality Levels**: Create 240p, 480p, 720p versions
2. **Adaptive Streaming**: Implement HLS or DASH
3. **CDN Integration**: Use Cloudflare or similar for global delivery
4. **Preloading**: Preload video on fast connections
5. **Analytics**: Send performance data to analytics service 