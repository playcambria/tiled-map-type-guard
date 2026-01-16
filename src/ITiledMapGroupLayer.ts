import { z } from 'zod';
import { ITiledMapProperty } from './ITiledMapProperty';
import { ITiledMapLayer } from './ITiledMapLayer';
// import { ITiledMapInfiniteLayer, ITiledMapRestrictedLayer } from './ITiledLayer.types';

interface TiledMapGroupLayerOptional {
  height: number;
  draworder: string;
  id: number;
  class: string;
  offsetx: number;
  offsety: number;
  parallaxx: number;
  parallaxy: number;
  properties: ITiledMapProperty[];
  startx: number;
  starty: number;
  tintcolor: string;
  width: number;
  x: number;
  y: number;
}

export interface TiledMapGroupLayer extends Partial<TiledMapGroupLayerOptional> {
  opacity: number;
  name: string;
  visible: boolean;
  type: 'group';
  layers: ITiledMapLayer[];
}

// need lazy evaluation to allow for recursive types for ITiledMapLayer
export const ITiledMapGroupLayer: z.ZodType<TiledMapGroupLayer> = z.lazy(() =>
  z.object({
    name: z.string(),
    opacity: z.number(),
    type: z.literal('group'),
    layers: ITiledMapLayer.array(),
    visible: z.boolean(),

    height: z.number().optional(),
    draworder: z.string().optional(),
    id: z.number().optional(),
    class: z.string().optional(),
    offsetx: z.number().optional(),
    offsety: z.number().optional(),
    parallaxx: z.number().optional(),
    parallaxy: z.number().optional(),
    properties: ITiledMapProperty.array().optional(),
    startx: z.number().optional(),
    starty: z.number().optional(),
    tintcolor: z.string().optional(),
    width: z.number().optional(),
    x: z.number().optional(),
    y: z.number().optional(),
  }),
);
export type ITiledMapGroupLayer = z.infer<typeof ITiledMapGroupLayer>;

// So as not to repeat the code, lazy types cannot be extended
// const ITiledMapGroupLayerObject = z.object({
//     name: z.string(),
//     opacity: z.number(),
//     type: z.literal('group'),
//     layers: ITiledMapLayer.array(),
//     visible: z.boolean(),

//     height: z.number().optional(),
//     draworder: z.string().optional(),
//     id: z.number().optional(),
//     class: z.string().optional(),
//     offsetx: z.number().optional(),
//     offsety: z.number().optional(),
//     parallaxx: z.number().optional(),
//     parallaxy: z.number().optional(),
//     properties: ITiledMapProperty.array().optional(),
//     startx: z.number().optional(),
//     starty: z.number().optional(),
//     tintcolor: z.string().optional(),
//     width: z.number().optional(),
//     x: z.number().optional(),
//     y: z.number().optional(),
//   })
// );

// export const ITiledMapInfiniteGroupLayer = ITiledMapGroupLayerObject.extend({
//   layers: ITiledMapInfiniteLayer.array(),
// });
// export type ITiledMapInfiniteGroupLayer = z.infer<typeof ITiledMapInfiniteGroupLayer>;

// export const ITiledMapRestrictedGroupLayer = ITiledMapGroupLayerObject.extend({
//   layers: ITiledMapRestrictedLayer.array(),
// });
// export type ITiledMapRestrictedGroupLayer = z.infer<typeof ITiledMapRestrictedGroupLayer>;
