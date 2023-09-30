"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areSameTilesets = void 0;
function areSameTilesets(tileset1, tileset2) {
    const primitivePropsToCompare = [
        'name',
        'image',
        'backgroundcolor',
        'columns',
        'fillmode',
    ];
    for (const prop of primitivePropsToCompare) {
        if (tileset1[prop] !== tileset2[prop]) {
            return false;
        }
    }
    const complexPropsToCompare = [
        'grid',
        'properties',
        'terrains',
        'tileoffset',
        'tiles',
        'transformations',
        'wangsets',
    ];
    for (const prop of complexPropsToCompare) {
        if (JSON.stringify(tileset1[prop]) !== JSON.stringify(tileset2[prop])) {
            return false;
        }
    }
    return true;
}
exports.areSameTilesets = areSameTilesets;
//# sourceMappingURL=TilesetComparator.js.map