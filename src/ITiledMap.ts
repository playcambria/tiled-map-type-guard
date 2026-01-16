import { ITiledMapProperty } from './ITiledMapProperty';
import { ITiledMapLayer } from './ITiledMapLayer';
import { z } from 'zod';
import { ITiledMapInfiniteTileLayer, ITiledMapRestrictedTileLayer } from './ITiledMapTileLayer';
import { ITiledMapObjectLayer } from './ITiledMapObjectLayer';
import { ITiledMapTileset } from './ITiledMapTileset';

// Import types for explicit interface definitions
import type { ITiledMapLayer as ITiledMapLayerType } from './ITiledMapLayer';
import type { ITiledMapProperty as ITiledMapPropertyType } from './ITiledMapProperty';
import type { ITiledMapTileset as ITiledMapTilesetType } from './ITiledMapTileset';
import type { ITiledMapInfiniteTileLayer as ITiledMapInfiniteTileLayerType } from './ITiledMapTileLayer';
import type { ITiledMapRestrictedTileLayer as ITiledMapRestrictedTileLayerType } from './ITiledMapTileLayer';
import type { ITiledMapObjectLayer as ITiledMapObjectLayerType } from './ITiledMapObjectLayer';

// Define explicit interfaces to avoid TS7056 error
// (deeply nested passthrough types are too complex for TypeScript to serialize)
export interface ITiledMap {
  layers: ITiledMapLayerType[];
  tiledversion: string;
  tilesets: ITiledMapTilesetType[];
  type: 'map';
  backgroundcolor?: string;
  compressionlevel?: number;
  hexsidelength?: number;
  infinite?: boolean;
  nextlayerid: number;
  nextobjectid: number;
  orientation?: 'orthogonal' | 'isometric' | 'staggered' | 'hexagonal';
  parallaxoriginx?: number;
  parallaxoriginy?: number;
  properties?: ITiledMapPropertyType[];
  renderorder?: 'right-down' | 'right-up' | 'left-down' | 'left-up';
  staggeraxis?: 'x' | 'y';
  staggerindex?: 'odd' | 'even';
  tileheight?: number;
  tilewidth?: number;
  class?: string;
  version?: string | number;
  width: number;
  height: number;
  // Allow additional properties (passthrough behavior)
  [key: string]: unknown;
}

export interface ITiledInfiniteMap extends Omit<ITiledMap, 'layers' | 'infinite'> {
  layers: (ITiledMapInfiniteTileLayerType | ITiledMapObjectLayerType)[];
  infinite: true;
}

export interface ITiledRestrictedMap extends Omit<ITiledMap, 'layers' | 'infinite'> {
  layers: (ITiledMapRestrictedTileLayerType | ITiledMapObjectLayerType)[];
  infinite: false;
}

// Define schemas with explicit type annotations
export const ITiledMap: z.ZodType<ITiledMap> = z
  .object({
    layers: ITiledMapLayer.array(),
    tiledversion: z.string(),
    tilesets: ITiledMapTileset.array(),
    type: z.literal('map'),
    backgroundcolor: z.string().optional(),
    compressionlevel: z.number().optional(),
    hexsidelength: z.number().optional(),
    infinite: z.boolean().optional(),
    nextlayerid: z.number(),
    nextobjectid: z.number(),
    orientation: z.enum(['orthogonal', 'isometric', 'staggered', 'hexagonal']).optional(),
    parallaxoriginx: z.number().optional(),
    parallaxoriginy: z.number().optional(),
    properties: ITiledMapProperty.array().optional(),
    renderorder: z.enum(['right-down', 'right-up', 'left-down', 'left-up']).optional(),
    staggeraxis: z.enum(['x', 'y']).optional(),
    staggerindex: z.enum(['odd', 'even']).optional(),
    tileheight: z.number().optional(),
    tilewidth: z.number().optional(),
    class: z.string().optional(),
    version: z.union([z.string(), z.number()]).optional(),
    width: z.number(),
    height: z.number(),
  })
  .passthrough();

// Define extended schemas separately to avoid extend() on typed schema
export const ITiledInfiniteMap: z.ZodType<ITiledInfiniteMap> = z
  .object({
    layers: z.union([ITiledMapInfiniteTileLayer, ITiledMapObjectLayer]).array(),
    tiledversion: z.string(),
    tilesets: ITiledMapTileset.array(),
    type: z.literal('map'),
    backgroundcolor: z.string().optional(),
    compressionlevel: z.number().optional(),
    hexsidelength: z.number().optional(),
    infinite: z.literal(true),
    nextlayerid: z.number(),
    nextobjectid: z.number(),
    orientation: z.enum(['orthogonal', 'isometric', 'staggered', 'hexagonal']).optional(),
    parallaxoriginx: z.number().optional(),
    parallaxoriginy: z.number().optional(),
    properties: ITiledMapProperty.array().optional(),
    renderorder: z.enum(['right-down', 'right-up', 'left-down', 'left-up']).optional(),
    staggeraxis: z.enum(['x', 'y']).optional(),
    staggerindex: z.enum(['odd', 'even']).optional(),
    tileheight: z.number().optional(),
    tilewidth: z.number().optional(),
    class: z.string().optional(),
    version: z.union([z.string(), z.number()]).optional(),
    width: z.number(),
    height: z.number(),
  })
  .passthrough();

export const ITiledRestrictedMap: z.ZodType<ITiledRestrictedMap> = z
  .object({
    layers: z.union([ITiledMapRestrictedTileLayer, ITiledMapObjectLayer]).array(),
    tiledversion: z.string(),
    tilesets: ITiledMapTileset.array(),
    type: z.literal('map'),
    backgroundcolor: z.string().optional(),
    compressionlevel: z.number().optional(),
    hexsidelength: z.number().optional(),
    infinite: z.literal(false),
    nextlayerid: z.number(),
    nextobjectid: z.number(),
    orientation: z.enum(['orthogonal', 'isometric', 'staggered', 'hexagonal']).optional(),
    parallaxoriginx: z.number().optional(),
    parallaxoriginy: z.number().optional(),
    properties: ITiledMapProperty.array().optional(),
    renderorder: z.enum(['right-down', 'right-up', 'left-down', 'left-up']).optional(),
    staggeraxis: z.enum(['x', 'y']).optional(),
    staggerindex: z.enum(['odd', 'even']).optional(),
    tileheight: z.number().optional(),
    tilewidth: z.number().optional(),
    class: z.string().optional(),
    version: z.union([z.string(), z.number()]).optional(),
    width: z.number(),
    height: z.number(),
  })
  .passthrough();
