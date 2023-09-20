"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInfiniteMap = exports.isInfiniteLayer = exports.isTileLayer = exports.isObjectLayer = exports.isFloorLayer = void 0;
function isFloorLayer(layer) {
    return isObjectLayer(layer) && layer.name === 'floorLayer';
}
exports.isFloorLayer = isFloorLayer;
function isObjectLayer(layer) {
    return layer.type === 'objectgroup';
}
exports.isObjectLayer = isObjectLayer;
function isTileLayer(layer) {
    return layer.type === 'tilelayer';
}
exports.isTileLayer = isTileLayer;
function isInfiniteLayer(layer) {
    const isInfinite = layer.type === 'tilelayer' &&
        layer.hasOwnProperty('chunks') &&
        layer.hasOwnProperty('startx') &&
        layer.hasOwnProperty('starty');
    return !!isInfinite;
}
exports.isInfiniteLayer = isInfiniteLayer;
function isInfiniteMap(map) {
    return !!map.infinite;
}
exports.isInfiniteMap = isInfiniteMap;
//# sourceMappingURL=TypeGuards.js.map