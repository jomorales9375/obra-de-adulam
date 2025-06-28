// Advanced caching utility for Obra de Adulam

class Cache {
  constructor(maxSize = 100, defaultTTL = 300000) { // 5 minutes default TTL
    this.maxSize = maxSize;
    this.defaultTTL = defaultTTL;
    this.cache = new Map();
    this.accessOrder = [];
  }

  // Set cache entry with TTL
  set(key, value, ttl = this.defaultTTL) {
    // Remove oldest entries if cache is full
    if (this.cache.size >= this.maxSize) {
      this.evictOldest();
    }

    const expiry = Date.now() + ttl;
    this.cache.set(key, {
      value,
      expiry,
      accessCount: 0,
      lastAccessed: Date.now(),
    });

    // Update access order
    this.updateAccessOrder(key);
  }

  // Get cache entry
  get(key) {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }

    // Check if expired
    if (Date.now() > entry.expiry) {
      this.delete(key);
      return null;
    }

    // Update access statistics
    entry.accessCount++;
    entry.lastAccessed = Date.now();
    this.updateAccessOrder(key);

    return entry.value;
  }

  // Check if key exists and is not expired
  has(key) {
    const entry = this.cache.get(key);
    if (!entry) return false;
    
    if (Date.now() > entry.expiry) {
      this.delete(key);
      return false;
    }
    
    return true;
  }

  // Delete cache entry
  delete(key) {
    this.cache.delete(key);
    const index = this.accessOrder.indexOf(key);
    if (index > -1) {
      this.accessOrder.splice(index, 1);
    }
  }

  // Clear all cache
  clear() {
    this.cache.clear();
    this.accessOrder = [];
  }

  // Get cache size
  size() {
    return this.cache.size;
  }

  // Get cache statistics
  getStats() {
    const entries = Array.from(this.cache.values());
    const now = Date.now();
    
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      hitRate: this.calculateHitRate(),
      averageAccessCount: entries.reduce((sum, entry) => sum + entry.accessCount, 0) / entries.length || 0,
      expiredEntries: entries.filter(entry => now > entry.expiry).length,
      memoryUsage: this.estimateMemoryUsage(),
    };
  }

  // Calculate hit rate (requires tracking hits/misses)
  calculateHitRate() {
    if (!this.hits && !this.misses) return 0;
    return this.hits / (this.hits + this.misses);
  }

  // Estimate memory usage
  estimateMemoryUsage() {
    let totalSize = 0;
    for (const [key, entry] of this.cache) {
      totalSize += this.estimateObjectSize(key);
      totalSize += this.estimateObjectSize(entry.value);
    }
    return totalSize;
  }

  // Rough estimation of object size in bytes
  estimateObjectSize(obj) {
    const str = JSON.stringify(obj);
    return new Blob([str]).size;
  }

  // Update access order for LRU
  updateAccessOrder(key) {
    const index = this.accessOrder.indexOf(key);
    if (index > -1) {
      this.accessOrder.splice(index, 1);
    }
    this.accessOrder.push(key);
  }

  // Evict oldest entry (LRU)
  evictOldest() {
    if (this.accessOrder.length > 0) {
      const oldestKey = this.accessOrder.shift();
      this.cache.delete(oldestKey);
    }
  }

  // Clean expired entries
  cleanup() {
    const now = Date.now();
    for (const [key, entry] of this.cache) {
      if (now > entry.expiry) {
        this.delete(key);
      }
    }
  }

  // Set up periodic cleanup
  startCleanup(interval = 60000) { // 1 minute
    this.cleanupInterval = setInterval(() => {
      this.cleanup();
    }, interval);
  }

  // Stop periodic cleanup
  stopCleanup() {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
      this.cleanupInterval = null;
    }
  }
}

// API response cache
class ApiCache extends Cache {
  constructor(maxSize = 50, defaultTTL = 300000) {
    super(maxSize, defaultTTL);
    this.startCleanup();
  }

  // Cache API response with automatic key generation
  cacheApiResponse(url, params, response, ttl) {
    const key = this.generateApiKey(url, params);
    this.set(key, {
      data: response,
      timestamp: Date.now(),
      url,
      params,
    }, ttl);
  }

  // Get cached API response
  getApiResponse(url, params) {
    const key = this.generateApiKey(url, params);
    const cached = this.get(key);
    return cached ? cached.data : null;
  }

  // Generate cache key for API request
  generateApiKey(url, params) {
    const paramString = params ? JSON.stringify(params) : '';
    return `api:${url}:${paramString}`;
  }

  // Invalidate cache by URL pattern
  invalidateByPattern(pattern) {
    for (const key of this.cache.keys()) {
      if (key.includes(pattern)) {
        this.delete(key);
      }
    }
  }
}

// Image cache for optimized image loading
class ImageCache extends Cache {
  constructor(maxSize = 30, defaultTTL = 86400000) { // 24 hours for images
    super(maxSize, defaultTTL);
    this.startCleanup();
  }

  // Preload image
  async preloadImage(src) {
    if (this.has(src)) {
      return this.get(src);
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.set(src, {
          element: img,
          loaded: true,
          timestamp: Date.now(),
        });
        resolve(img);
      };
      img.onerror = reject;
      img.src = src;
    });
  }

  // Get cached image
  getImage(src) {
    const cached = this.get(src);
    return cached ? cached.element : null;
  }
}

// Create cache instances
export const apiCache = new ApiCache();
export const imageCache = new ImageCache();
export const generalCache = new Cache(100, 300000);

// Cache decorator for functions
export const withCache = (cache, keyGenerator, ttl) => {
  return (fn) => {
    return async (...args) => {
      const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args);
      
      // Try to get from cache
      const cached = cache.get(key);
      if (cached) {
        return cached;
      }

      // Execute function and cache result
      const result = await fn(...args);
      cache.set(key, result, ttl);
      
      return result;
    };
  };
};

// Cache utilities
export const cacheUtils = {
  // Debounced cache set
  debouncedSet: (cache, key, value, ttl, delay = 1000) => {
    clearTimeout(cache.debounceTimers?.[key]);
    if (!cache.debounceTimers) cache.debounceTimers = {};
    
    cache.debounceTimers[key] = setTimeout(() => {
      cache.set(key, value, ttl);
      delete cache.debounceTimers[key];
    }, delay);
  },

  // Batch cache operations
  batchSet: (cache, entries) => {
    entries.forEach(([key, value, ttl]) => {
      cache.set(key, value, ttl);
    });
  },

  // Cache warming
  warmCache: async (cache, keys, loader) => {
    const promises = keys.map(async (key) => {
      if (!cache.has(key)) {
        const value = await loader(key);
        cache.set(key, value);
      }
    });
    
    await Promise.all(promises);
  },
};

export default Cache; 