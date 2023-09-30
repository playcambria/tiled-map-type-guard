import { ITiledMapTileset } from './ITiledMapTileset';

// Comparator function for ITiledMapTileset
export function areSameTilesets(tileset1: ITiledMapTileset, tileset2: ITiledMapTileset): boolean {
  const primitivePropsToCompare = [
    'name',
    'image',
    'backgroundcolor',
    'columns',
    'fillmode',
    // don't compare 'firstgid' as we want it to return true even if tilesets are in different map files
  ];

  // Directly compare primitive types
  for (const prop of primitivePropsToCompare) {
    if (tileset1[prop] !== tileset2[prop]) {
      return false;
    }
  }

  // Compare more complex types using deep JSON comparison
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
