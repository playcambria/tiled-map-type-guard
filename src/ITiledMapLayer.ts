import { z } from 'zod';
import { ITiledMapTileLayer } from './ITiledMapTileLayer';
// import { ITiledMapGroupLayer } from './ITiledMapGroupLayer';
import { ITiledMapObjectLayer } from './ITiledMapObjectLayer';
// import { ITiledMapImageLayer } from './ITiledMapImageLayer';

export const ITiledMapLayer = z.union([
  ITiledMapTileLayer,
  ITiledMapObjectLayer,
  // ITiledMapGroupLayer,
  // ITiledMapImageLayer,
]);

export type ITiledMapLayer = z.infer<typeof ITiledMapLayer>;
