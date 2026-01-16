import { z } from 'zod';
import { ITiledMapEmbeddedTileset } from './ITiledMapTileset';
import { LayerDepth, Position, Size } from './UtilityTypes';
import type { ITiledMapEmbeddedTileset as ITiledMapEmbeddedTilesetType } from './ITiledMapTileset';
import type { Position as PositionType, Size as SizeType } from './UtilityTypes';

// Define explicit interface to avoid TS7056 error
export interface MapConfig {
  tilesets: ITiledMapEmbeddedTilesetType[];
  nbChunks: PositionType;
  chunkSize: SizeType;
  mapSize: SizeType;
  objectTypes: string[];
  tileLayersDepth: Record<string, LayerDepth>;
  // Allow additional properties (passthrough behavior)
  [key: string]: unknown;
}

export const MapConfigSchema: z.ZodType<MapConfig> = z
  .object({
    tilesets: z.array(ITiledMapEmbeddedTileset),
    nbChunks: Position,
    chunkSize: Size,
    mapSize: Size,
    objectTypes: z.array(z.string()),
    tileLayersDepth: z.record(z.nativeEnum(LayerDepth)),
  })
  .passthrough();
