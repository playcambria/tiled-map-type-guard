"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapRestrictedLayer = exports.ITiledMapInfiniteLayer = void 0;
const zod_1 = require("zod");
const ITiledMapObjectLayer_1 = require("./ITiledMapObjectLayer");
const ITiledMapTileLayer_1 = require("./ITiledMapTileLayer");
exports.ITiledMapInfiniteLayer = zod_1.z.union([ITiledMapTileLayer_1.ITiledMapInfiniteTileLayer, ITiledMapObjectLayer_1.ITiledMapObjectLayer]);
exports.ITiledMapRestrictedLayer = zod_1.z.union([ITiledMapTileLayer_1.ITiledMapRestrictedTileLayer, ITiledMapObjectLayer_1.ITiledMapObjectLayer]);
//# sourceMappingURL=ITiledLayer.types.js.map