import { z } from 'zod';
import { ITiledMapTileset } from './ITiledMapTileset';
import { LayerDepth, Position, Size } from './UtilityTypes';

export const MapConfigSchema = z.object({
  tilesets: z.array(ITiledMapTileset),
  nbChunks: Position,
  chunkSize: Size,
  mapSize: Size,
  objectTypes: z.array(z.string()),
  tileLayersDepth: z.record(z.nativeEnum(LayerDepth)),
});
export type MapConfig = z.infer<typeof MapConfigSchema>;
