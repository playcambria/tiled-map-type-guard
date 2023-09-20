import { ITiledMapProperty } from './ITiledMapProperty';
import { ITiledMapLayer } from './ITiledMapLayer';
import { ITiledMapTileset } from './ITiledMapTileset';
import { z } from 'zod';
import { ITiledMapInfiniteTileLayer, ITiledMapRestrictedTileLayer } from './ITiledMapTileLayer';
import { ITiledMapObjectLayer } from './ITiledMapObjectLayer';

export const ITiledMap = z.object({
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
});

export const ITiledInfiniteMap = ITiledMap.extend({
  layers: z.union([ITiledMapInfiniteTileLayer, ITiledMapObjectLayer]).array(),
  infinite: z.literal(true),
});

export const ITiledRestrictedMap = ITiledMap.extend({
  layers: z.union([ITiledMapRestrictedTileLayer, ITiledMapObjectLayer]).array(),
  infinite: z.literal(false),
});

export type ITiledMap = z.infer<typeof ITiledMap>;
export type ITiledInfiniteMap = z.infer<typeof ITiledInfiniteMap>;
export type ITiledRestrictedMap = z.infer<typeof ITiledRestrictedMap>;
