import { z } from 'zod';
import { ITiledMapEmbeddedTileset } from './ITiledMapTileset';
import { LayerDepth, Size } from './UtilityTypes';

export const MapConfigSchema = z.object({
  mapSize: Size,
  mapChunkSize: Size,
  minimapChunkSize: Size,
  minimapRatio: z.number(),
  worldmapRatio: z.number(),
  travelPlannerMapRatio: z.number(),
  objectTypes: z.array(z.string()),
  tilesets: z.array(ITiledMapEmbeddedTileset),
  tileLayersDepth: z.record(z.nativeEnum(LayerDepth)),
});
export type MapConfig = z.infer<typeof MapConfigSchema>;
