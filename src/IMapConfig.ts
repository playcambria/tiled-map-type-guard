import { z } from 'zod';
import { ITiledMapEmbeddedTileset } from './ITiledMapTileset';
import { LayerDepth, Position, Size } from './UtilityTypes';

export const MapConfigSchema = z.object({
  tilesets: z.array(ITiledMapEmbeddedTileset),
  nbChunks: Position,
  chunkSize: Size,
  mapSize: Size,
  objectTypes: z.array(z.string()),
  tileLayersDepth: z.record(z.nativeEnum(LayerDepth)),
});
export type MapConfig = z.infer<typeof MapConfigSchema>;
