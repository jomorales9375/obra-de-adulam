# Cache Management System

## Overview
The church website now includes an advanced cache management system to prevent stale content issues and improve user experience.

## Features

### Automatic Cache Busting
- **Version-based caching**: Each cache has a version number (e.g., `v1.3.0`)
- **Automatic cleanup**: Old cache versions are automatically deleted when new versions are deployed
- **Separate caches**: Different types of content (images, videos, API, static files) have separate caches

### Manual Cache Management
- **Keyboard shortcut**: Press `Ctrl+Shift+C` to open the cache manager
- **Clear all caches**: One-click button to clear all cached content
- **Check for updates**: Manually check for service worker updates
- **Automatic reload**: Page automatically reloads after cache clearing

## How It Works

### For Developers
1. **Update cache version**: When deploying major updates, increment `CACHE_VERSION` in `src/service-worker.js`
2. **Automatic cleanup**: Old caches are automatically removed on service worker activation
3. **Version tracking**: Each cache type includes the version number in its name

### For Users
1. **Normal browsing**: Caching works automatically for better performance
2. **Stale content issues**: Use `Ctrl+Shift+C` to open cache manager
3. **Clear cache**: Click "Limpiar Caché" to clear all cached content
4. **Check updates**: Click "Buscar Actualizaciones" to check for new versions

## Cache Types

- **Images**: Cached for 30 days with CacheFirst strategy
- **Videos**: Cached for 7 days with NetworkFirst strategy
- **API calls**: Cached for 5 minutes with StaleWhileRevalidate strategy
- **Static files**: Cached for 1 year with CacheFirst strategy
- **Offline requests**: Stored for background sync

## Benefits

1. **Faster loading**: Cached content loads instantly
2. **Offline support**: Site works without internet connection
3. **Reduced server load**: Fewer requests to the server
4. **Better user experience**: Smooth, fast navigation
5. **Easy troubleshooting**: Users can clear cache when needed

## Troubleshooting

### If users report stale content:
1. Ask them to press `Ctrl+Shift+C`
2. Click "Limpiar Caché"
3. Wait for page to reload automatically

### If new features don't appear:
1. Check if cache version was incremented
2. Deploy with new version number
3. Users will automatically get new version

## Future Improvements

- Add cache size monitoring
- Implement smart cache invalidation
- Add cache analytics
- Create admin panel for cache management 