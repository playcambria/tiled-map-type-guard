import { z } from 'zod';

export enum MapSegment {
  DuelArena = "duelArena",
  Goldrush = "goldrush",
  Depths = "depths",
  Islands = "islands"
}

const mapDataSchema = z.object({
  fileName: z.string(),
  height: z.number(),
  width: z.number(),
  x: z.number(),
  y: z.number(),
});

const processedMapDataSchema = mapDataSchema.extend({
  mapSegment: z.nativeEnum(MapSegment),
  objectIdOffset: z.number(),
});

export const ITiledWorld = z.object({
  maps: z.array(mapDataSchema),
});
export type ITiledWorld = z.infer<typeof ITiledWorld>;

export const IProcessedTiledWorld = z.object({
  maps: z.array(processedMapDataSchema),
});
export type IProcessedTiledWorld = z.infer<typeof IProcessedTiledWorld>;
