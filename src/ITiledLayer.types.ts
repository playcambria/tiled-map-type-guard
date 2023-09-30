import { z } from 'zod';
import { ITiledMapObjectLayer } from './ITiledMapObjectLayer';
import { ITiledMapInfiniteTileLayer, ITiledMapRestrictedTileLayer } from './ITiledMapTileLayer';

export const ITiledMapInfiniteLayer = z.union([ITiledMapInfiniteTileLayer, ITiledMapObjectLayer]);
export const ITiledMapRestrictedLayer = z.union([ITiledMapRestrictedTileLayer, ITiledMapObjectLayer]);
