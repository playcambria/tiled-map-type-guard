import { z } from 'zod';

const mapDataSchema = z
  .object({
    fileName: z.string(),
    height: z.number(),
    width: z.number(),
    x: z.number(),
    y: z.number(),
  })
  .passthrough();

export const ITiledWorld = z
  .object({
    maps: z.array(mapDataSchema),
    // onlyShowAdjacentMaps: z.boolean(),
    // type: z.literal("world"),
  })
  .passthrough();
export type ITiledWorld = z.infer<typeof ITiledWorld>;
