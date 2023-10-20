import { ITiledInfiniteMap, ITiledMap } from './ITiledMap';
import { ITiledMapGroupLayer } from './ITiledMapGroupLayer';
import { ITiledMapLayer } from './ITiledMapLayer';
import { ITiledMapObjectLayer } from './ITiledMapObjectLayer';
import { ITiledMapInfiniteTileLayer, ITiledMapTileLayer } from './ITiledMapTileLayer';
import {
  ITiledMapTileset,
  ITiledMapEmbeddedTileset,
  ITiledMapExternalTilesetReference,
} from './ITiledMapTileset';

export function isFloorLayer(layer: ITiledMapLayer): layer is ITiledMapObjectLayer {
  return isObjectLayer(layer) && layer.name.includes('floorLayer');
}

export function isObjectLayer(layer: ITiledMapLayer): layer is ITiledMapObjectLayer {
  return layer.type === 'objectgroup';
}

export function isGroupLayer(layer: ITiledMapLayer): layer is ITiledMapGroupLayer {
  return layer.type === 'group';
}

export function isTileLayer(layer: ITiledMapLayer): layer is ITiledMapTileLayer {
  return layer.type === 'tilelayer';
}

export function isInfiniteTileLayer(
  layer: ITiledMapTileLayer,
): layer is ITiledMapInfiniteTileLayer {
  const isInfinite =
    isTileLayer(layer) &&
    layer.hasOwnProperty('chunks') &&
    layer.hasOwnProperty('startx') &&
    layer.hasOwnProperty('starty');
  return !!isInfinite;
}

export function isInfiniteMap(map: ITiledMap): map is ITiledInfiniteMap {
  return !!map.infinite;
}

export function isExternalTilesetReference(
  tileset: ITiledMapTileset,
): tileset is ITiledMapExternalTilesetReference {
  return tileset.hasOwnProperty('source');
}

export function isEmbeddedTileset(tileset: ITiledMapTileset): tileset is ITiledMapEmbeddedTileset {
  return !isExternalTilesetReference(tileset);
}
