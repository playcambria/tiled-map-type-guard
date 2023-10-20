"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledRestrictedMap = exports.ITiledInfiniteMap = exports.ITiledMap = void 0;
const ITiledMapProperty_1 = require("./ITiledMapProperty");
const ITiledMapLayer_1 = require("./ITiledMapLayer");
const zod_1 = require("zod");
const ITiledMapTileLayer_1 = require("./ITiledMapTileLayer");
const ITiledMapObjectLayer_1 = require("./ITiledMapObjectLayer");
const ITiledMapTileset_1 = require("./ITiledMapTileset");
exports.ITiledMap = zod_1.z.object({
    layers: ITiledMapLayer_1.ITiledMapLayer.array(),
    tiledversion: zod_1.z.string(),
    tilesets: ITiledMapTileset_1.ITiledMapTileset.array(),
    type: zod_1.z.literal('map'),
    backgroundcolor: zod_1.z.string().optional(),
    compressionlevel: zod_1.z.number().optional(),
    hexsidelength: zod_1.z.number().optional(),
    infinite: zod_1.z.boolean().optional(),
    nextlayerid: zod_1.z.number(),
    nextobjectid: zod_1.z.number(),
    orientation: zod_1.z.enum(['orthogonal', 'isometric', 'staggered', 'hexagonal']).optional(),
    parallaxoriginx: zod_1.z.number().optional(),
    parallaxoriginy: zod_1.z.number().optional(),
    properties: ITiledMapProperty_1.ITiledMapProperty.array().optional(),
    renderorder: zod_1.z.enum(['right-down', 'right-up', 'left-down', 'left-up']).optional(),
    staggeraxis: zod_1.z.enum(['x', 'y']).optional(),
    staggerindex: zod_1.z.enum(['odd', 'even']).optional(),
    tileheight: zod_1.z.number().optional(),
    tilewidth: zod_1.z.number().optional(),
    class: zod_1.z.string().optional(),
    version: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]).optional(),
    width: zod_1.z.number(),
    height: zod_1.z.number(),
});
exports.ITiledInfiniteMap = exports.ITiledMap.extend({
    layers: zod_1.z.union([ITiledMapTileLayer_1.ITiledMapInfiniteTileLayer, ITiledMapObjectLayer_1.ITiledMapObjectLayer]).array(),
    infinite: zod_1.z.literal(true),
});
exports.ITiledRestrictedMap = exports.ITiledMap.extend({
    layers: zod_1.z.union([ITiledMapTileLayer_1.ITiledMapRestrictedTileLayer, ITiledMapObjectLayer_1.ITiledMapObjectLayer]).array(),
    infinite: zod_1.z.literal(false),
});
//# sourceMappingURL=ITiledMap.js.map