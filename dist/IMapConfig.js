"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapConfigSchema = void 0;
const zod_1 = require("zod");
const ITiledMapTileset_1 = require("./ITiledMapTileset");
const UtilityTypes_1 = require("./UtilityTypes");
exports.MapConfigSchema = zod_1.z.object({
    tilesets: zod_1.z.array(ITiledMapTileset_1.ITiledMapTileset),
    nbChunks: UtilityTypes_1.Position,
    chunkSize: UtilityTypes_1.Size,
    mapSize: UtilityTypes_1.Size,
    objectTypes: zod_1.z.array(zod_1.z.string()),
    tileLayersDepth: zod_1.z.record(zod_1.z.nativeEnum(UtilityTypes_1.LayerDepth)),
});
//# sourceMappingURL=IMapConfig.js.map