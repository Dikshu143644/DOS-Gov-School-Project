import { Global, Module } from "@nestjs/common";
import Redis from "ioredis";

export const REDIS = "REDIS";

@Global()
@Module({
  providers: [
    {
      provide: REDIS,
      useFactory: () => {
        const url = process.env.REDIS_URL ?? "redis://localhost:6379";
        return new Redis(url, { maxRetriesPerRequest: 3 });
      },
    },
  ],
  exports: [REDIS],
})
export class RedisModule {}
