import { z } from 'zod';
import { ITiledMapProperty } from './ITiledMapProperty';
import { ITiledMapChunk } from './ITiledMapChunk';

export const ITiledMapInfiniteTileLayer = z
  .object({
    chunks: ITiledMapChunk.array(),
    id: z.number(),
    type: z.literal('tilelayer'),
    name: z.string(),

    startx: z.number(),
    starty: z.number(),
    x: z.number().optional(),
    y: z.number().optional(),
    width: z.number(),
    height: z.number(),

    opacity: z.number(),
    visible: z.boolean(),

    // compression: z.string().optional(),
    // encoding: z.enum(['csv', 'base64']).optional(),
    // offsetx: z.number().optional(),
    // offsety: z.number().optional(),
    // parallaxx: z.number().optional(),
    // parallaxy: z.number().optional(),
    // properties: ITiledMapProperty.array().optional(),
    // startx: z.number().optional(),
    // starty: z.number().optional(),
    // tintcolor: z.string().optional(),
    // class: z.string().optional(),
  })
  .passthrough();

export type ITiledMapInfiniteTileLayer = z.infer<typeof ITiledMapInfiniteTileLayer>;

export const ITiledMapRestrictedTileLayer = z
  .object({
    data: z.number().array(),
    height: z.number(),
    id: z.number(),
    name: z.string(),
    opacity: z.number(),
    type: z.literal('tilelayer'),
    visible: z.boolean(),
    width: z.number(),

    compression: z.string().optional(),
    encoding: z.enum(['csv', 'base64']).optional(),
    parallaxx: z.number().optional(),
    parallaxy: z.number().optional(),
    properties: ITiledMapProperty.array().optional(),
    tintcolor: z.string().optional(),
    class: z.string().optional(),
    x: z.number().optional(),
    y: z.number().optional(),
  })
  .passthrough();

export type ITiledMapRestrictedTileLayer = z.infer<typeof ITiledMapRestrictedTileLayer>;

export const ITiledMapTileLayer = z.union([
  ITiledMapInfiniteTileLayer,
  ITiledMapRestrictedTileLayer,
]);

export type ITiledMapTileLayer = z.infer<typeof ITiledMapTileLayer>;
