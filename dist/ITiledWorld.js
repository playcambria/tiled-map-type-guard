"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledWorld = void 0;
const zod_1 = require("zod");
const mapDataSchema = zod_1.z.object({
    fileName: zod_1.z.string(),
    height: zod_1.z.number(),
    width: zod_1.z.number(),
    x: zod_1.z.number(),
    y: zod_1.z.number(),
});
exports.ITiledWorld = zod_1.z.object({
    maps: zod_1.z.array(mapDataSchema),
});
//# sourceMappingURL=ITiledWorld.js.map