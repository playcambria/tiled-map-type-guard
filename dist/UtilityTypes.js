"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Position = exports.Size = exports.LayerDepth = void 0;
const zod_1 = require("zod");
var LayerDepth;
(function (LayerDepth) {
    LayerDepth["AbovePlayer"] = "abovePlayer";
    LayerDepth["BelowPlayer"] = "belowPlayer";
})(LayerDepth = exports.LayerDepth || (exports.LayerDepth = {}));
exports.Size = zod_1.z.object({
    width: zod_1.z.number(),
    height: zod_1.z.number(),
});
exports.Position = zod_1.z.object({
    x: zod_1.z.number(),
    y: zod_1.z.number(),
});
//# sourceMappingURL=UtilityTypes.js.map