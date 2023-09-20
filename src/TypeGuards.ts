import { ITiledInfiniteMap, ITiledMap } from './ITiledMap';
import { ITiledMapLayer } from './ITiledMapLayer';
import { ITiledMapObjectLayer } from './ITiledMapObjectLayer';
import { ITiledMapInfiniteTileLayer, ITiledMapTileLayer } from './ITiledMapTileLayer';

export function isFloorLayer(layer: ITiledMapLayer): layer is ITiledMapObjectLayer {
  return isObjectLayer(layer) && layer.name === 'floorLayer';
}

export function isObjectLayer(layer: ITiledMapLayer): layer is ITiledMapObjectLayer {
  return layer.type === 'objectgroup';
}

export function isTileLayer(layer: ITiledMapLayer): layer is ITiledMapTileLayer {
  return layer.type === 'tilelayer';
}

export function isInfiniteLayer(layer: ITiledMapTileLayer): layer is ITiledMapInfiniteTileLayer {
  const isInfinite =
    layer.type === 'tilelayer' &&
    layer.hasOwnProperty('chunks') &&
    layer.hasOwnProperty('startx') &&
    layer.hasOwnProperty('starty');
  return !!isInfinite;
}

export function isInfiniteMap(map: ITiledMap): map is ITiledInfiniteMap {
  return !!map.infinite;
}
