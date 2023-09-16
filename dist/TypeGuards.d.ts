import { ITiledMapLayer } from "./ITiledMapLayer";
import { ITiledMapObjectLayer } from "./ITiledMapObjectLayer";
import { ITiledMapInfiniteTileLayer, ITiledMapTileLayer } from "./ITiledMapTileLayer";
export declare function isFloorLayer(layer: ITiledMapLayer): layer is ITiledMapObjectLayer;
export declare function isObjectLayer(layer: ITiledMapLayer): layer is ITiledMapObjectLayer;
export declare function isTileLayer(layer: ITiledMapLayer): layer is ITiledMapTileLayer;
export declare function isInfiniteLayer(layer: ITiledMapTileLayer): layer is ITiledMapInfiniteTileLayer;
