"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmbeddedTileset = exports.isExternalTilesetReference = exports.isInfiniteMap = exports.isInfiniteTileLayer = exports.isTileLayer = exports.isGroupLayer = exports.isObjectLayer = exports.isFloorLayer = void 0;
function isFloorLayer(layer) {
    return isObjectLayer(layer) && layer.name.includes('floorLayer');
}
exports.isFloorLayer = isFloorLayer;
function isObjectLayer(layer) {
    return layer.type === 'objectgroup';
}
exports.isObjectLayer = isObjectLayer;
function isGroupLayer(layer) {
    return layer.type === 'group';
}
exports.isGroupLayer = isGroupLayer;
function isTileLayer(layer) {
    return layer.type === 'tilelayer';
}
exports.isTileLayer = isTileLayer;
function isInfiniteTileLayer(layer) {
    const isInfinite = isTileLayer(layer) &&
        layer.hasOwnProperty('chunks') &&
        layer.hasOwnProperty('startx') &&
        layer.hasOwnProperty('starty');
    return !!isInfinite;
}
exports.isInfiniteTileLayer = isInfiniteTileLayer;
function isInfiniteMap(map) {
    return !!map.infinite;
}
exports.isInfiniteMap = isInfiniteMap;
function isExternalTilesetReference(tileset) {
    return tileset.hasOwnProperty('source');
}
exports.isExternalTilesetReference = isExternalTilesetReference;
function isEmbeddedTileset(tileset) {
    return !isExternalTilesetReference(tileset);
}
exports.isEmbeddedTileset = isEmbeddedTileset;
//# sourceMappingURL=TypeGuards.js.map