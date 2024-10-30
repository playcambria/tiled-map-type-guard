"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFloorLayer = isFloorLayer;
exports.isObjectLayer = isObjectLayer;
exports.isGroupLayer = isGroupLayer;
exports.isTileLayer = isTileLayer;
exports.isInfiniteTileLayer = isInfiniteTileLayer;
exports.isInfiniteMap = isInfiniteMap;
exports.isExternalTilesetReference = isExternalTilesetReference;
exports.isEmbeddedTileset = isEmbeddedTileset;
function isFloorLayer(layer) {
    return isObjectLayer(layer) && layer.name.includes('floorLayer');
}
function isObjectLayer(layer) {
    return layer.type === 'objectgroup';
}
function isGroupLayer(layer) {
    return layer.type === 'group';
}
function isTileLayer(layer) {
    return layer.type === 'tilelayer';
}
function isInfiniteTileLayer(layer) {
    const isInfinite = isTileLayer(layer) &&
        layer.hasOwnProperty('chunks') &&
        layer.hasOwnProperty('startx') &&
        layer.hasOwnProperty('starty');
    return !!isInfinite;
}
function isInfiniteMap(map) {
    return !!map.infinite;
}
function isExternalTilesetReference(tileset) {
    return tileset.hasOwnProperty('source');
}
function isEmbeddedTileset(tileset) {
    return !isExternalTilesetReference(tileset);
}
//# sourceMappingURL=TypeGuards.js.map