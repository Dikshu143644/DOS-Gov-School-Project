import Redis from 'ioredis';

const globalForRedis = global as unknown as { redis: Redis };

export const redis =
  globalForRedis.redis ||
  new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

if (process.env.NODE_ENV !== 'production') globalForRedis.redis = redis;

/**
 * Rate limiting utility using sliding window
 */
export async function checkRateLimit(key: string, limit: number, windowMs: number): Promise<boolean> {
  const now = Date.now();
  const windowStart = now - windowMs;
  
  // Clean up old entries
  await redis.zremrangebyscore(key, 0, windowStart);
  
  // Count current entries
  const currentCount = await redis.zcard(key);
  
  if (currentCount >= limit) {
    return false; // Rate limit exceeded
  }
  
  // Add new entry
  await redis.zadd(key, now, `${now}-${Math.random()}`);
  await redis.pexpire(key, windowMs);
  
  return true;
}
