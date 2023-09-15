"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapTileLayer = exports.ITiledMapRestrictedTileLayer = exports.ITiledMapInfiniteTileLayer = void 0;
const zod_1 = require("zod");
const ITiledMapProperty_1 = require("./ITiledMapProperty");
const ITiledMapChunk_1 = require("./ITiledMapChunk");
exports.ITiledMapInfiniteTileLayer = zod_1.z.object({
    chunks: ITiledMapChunk_1.ITiledMapChunk.array(),
    id: zod_1.z.number(),
    type: zod_1.z.literal('tilelayer'),
    name: zod_1.z.string(),
    startx: zod_1.z.number(),
    starty: zod_1.z.number(),
    x: zod_1.z.number().optional(),
    y: zod_1.z.number().optional(),
    width: zod_1.z.number(),
    height: zod_1.z.number(),
    opacity: zod_1.z.number(),
    visible: zod_1.z.boolean(),
});
exports.ITiledMapRestrictedTileLayer = zod_1.z.object({
    data: zod_1.z.number().array(),
    height: zod_1.z.number(),
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    opacity: zod_1.z.number(),
    type: zod_1.z.literal('tilelayer'),
    visible: zod_1.z.boolean(),
    width: zod_1.z.number(),
    compression: zod_1.z.string().optional(),
    encoding: zod_1.z.enum(['csv', 'base64']).optional(),
    parallaxx: zod_1.z.number().optional(),
    parallaxy: zod_1.z.number().optional(),
    properties: ITiledMapProperty_1.ITiledMapProperty.array().optional(),
    tintcolor: zod_1.z.string().optional(),
    class: zod_1.z.string().optional(),
    x: zod_1.z.number().optional(),
    y: zod_1.z.number().optional(),
});
exports.ITiledMapTileLayer = zod_1.z.union([
    exports.ITiledMapInfiniteTileLayer,
    exports.ITiledMapRestrictedTileLayer,
]);
//# sourceMappingURL=ITiledMapTileLayer.js.map