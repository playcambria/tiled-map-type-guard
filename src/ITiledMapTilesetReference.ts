import { z } from 'zod';

export const ITiledMapTilesetReference = z.strictObject({
  firstgid: z.number(),
  source: z.string(),
});

export type ITiledMapTilesetReference = z.infer<typeof ITiledMapTilesetReference>;
