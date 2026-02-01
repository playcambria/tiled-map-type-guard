import { z } from 'zod';

const ITiledMapChunk = z.object({
  data: z.number().array(),
  height: z.number(),
  width: z.number(),
  x: z.number(),
  y: z.number()
});

const ITiledMapFrame = z.object({
  duration: z.number(),
  tileid: z.number()
});

const ITiledMapGrid = z.object({
  width: z.number(),
  height: z.number(),
  orientation: z.enum(["orthogonal", "isometric"])
});

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
const jsonSchema = z.lazy(
  () => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
);
const ITiledMapStringProperty = z.object({
  name: z.string(),
  type: z.union([z.literal("string"), z.literal("color"), z.literal("file")]),
  value: z.string().optional(),
  propertytype: z.string().optional()
});
const ITiledMapIntProperty = z.object({
  name: z.string(),
  type: z.union([z.literal("int"), z.literal("object")]),
  value: z.number().int().optional(),
  propertytype: z.string().optional()
});
const ITiledMapFloatProperty = z.object({
  name: z.string(),
  type: z.literal("float"),
  value: z.number().optional(),
  propertytype: z.string().optional()
});
const ITiledMapBoolProperty = z.object({
  name: z.string(),
  type: z.literal("bool"),
  value: z.boolean().optional(),
  propertytype: z.string().optional()
});
const ITiledMapClassProperty = z.object({
  name: z.string(),
  type: z.literal("class"),
  value: jsonSchema.optional(),
  propertytype: z.string().optional()
});
const ITiledMapProperty = z.union([
  ITiledMapStringProperty,
  ITiledMapIntProperty,
  ITiledMapFloatProperty,
  ITiledMapBoolProperty,
  ITiledMapClassProperty
]);

const ITiledMapImageLayer = z.object({
  image: z.string(),
  name: z.string(),
  opacity: z.number(),
  type: z.literal("imagelayer"),
  visible: z.boolean(),
  height: z.number().optional(),
  id: z.number().optional(),
  offsetx: z.number().optional(),
  offsety: z.number().optional(),
  parallaxx: z.number().optional(),
  parallaxy: z.number().optional(),
  properties: ITiledMapProperty.array().optional(),
  repeatx: z.boolean().optional(),
  repeaty: z.boolean().optional(),
  startx: z.number().optional(),
  starty: z.number().optional(),
  tintcolor: z.string().optional(),
  class: z.string().optional(),
  width: z.number().optional(),
  x: z.number().optional(),
  y: z.number().optional()
});

const ITiledMapPoint = z.object({
  x: z.number(),
  y: z.number()
});

const ITiledMapText = z.object({
  text: z.string(),
  bold: z.boolean().optional(),
  color: z.string().optional(),
  fontfamily: z.string().optional(),
  halign: z.enum(["center", "right", "justify", "left"]).optional(),
  italic: z.boolean().optional(),
  kerning: z.boolean().optional(),
  pixelsize: z.number().optional(),
  strikeout: z.boolean().optional(),
  underline: z.boolean().optional(),
  valign: z.enum(["center", "bottom", "top"]).optional(),
  wrap: z.boolean().optional()
});

const ITiledMapObject = z.object({
  id: z.number(),
  name: z.string(),
  visible: z.boolean(),
  x: z.number(),
  y: z.number(),
  ellipse: z.boolean().optional(),
  gid: z.number().optional(),
  height: z.number().optional(),
  point: z.boolean().optional(),
  polygon: ITiledMapPoint.array().optional(),
  polyline: ITiledMapPoint.array().optional(),
  properties: ITiledMapProperty.array().optional(),
  rotation: z.number().optional(),
  template: z.string().optional(),
  text: ITiledMapText.optional(),
  type: z.string().optional(),
  class: z.string().optional(),
  width: z.number().optional()
});

const ITiledMapInfiniteTileLayer = z.object({
  chunks: ITiledMapChunk.array(),
  id: z.number(),
  type: z.literal("tilelayer"),
  name: z.string(),
  startx: z.number(),
  starty: z.number(),
  x: z.number().optional(),
  y: z.number().optional(),
  width: z.number(),
  height: z.number(),
  opacity: z.number(),
  visible: z.boolean()
  // compression: z.string().optional(),
  // encoding: z.enum(['csv', 'base64']).optional(),
  // offsetx: z.number().optional(),
  // offsety: z.number().optional(),
  // parallaxx: z.number().optional(),
  // parallaxy: z.number().optional(),
  // properties: ITiledMapProperty.array().optional(),
  // startx: z.number().optional(),
  // starty: z.number().optional(),
  // tintcolor: z.string().optional(),
  // class: z.string().optional(),
});
const ITiledMapRestrictedTileLayer = z.object({
  data: z.number().array(),
  height: z.number(),
  id: z.number(),
  name: z.string(),
  opacity: z.number(),
  type: z.literal("tilelayer"),
  visible: z.boolean(),
  width: z.number(),
  compression: z.string().optional(),
  encoding: z.enum(["csv", "base64"]).optional(),
  parallaxx: z.number().optional(),
  parallaxy: z.number().optional(),
  properties: ITiledMapProperty.array().optional(),
  tintcolor: z.string().optional(),
  class: z.string().optional(),
  x: z.number().optional(),
  y: z.number().optional()
});
const ITiledMapTileLayer = z.union([
  ITiledMapInfiniteTileLayer,
  ITiledMapRestrictedTileLayer
]);

const ITiledMapObjectLayer = z.object({
  name: z.string(),
  objects: ITiledMapObject.array(),
  opacity: z.number(),
  type: z.literal("objectgroup"),
  visible: z.boolean(),
  draworder: z.string().optional(),
  height: z.number().optional(),
  id: z.number().optional(),
  offsetx: z.number().optional(),
  offsety: z.number().optional(),
  parallaxx: z.number().optional(),
  parallaxy: z.number().optional(),
  properties: ITiledMapProperty.array().optional(),
  startx: z.number().optional(),
  starty: z.number().optional(),
  tintcolor: z.string().optional(),
  width: z.number().optional(),
  class: z.string().optional(),
  x: z.number().optional(),
  y: z.number().optional()
});

const ITiledMapGroupLayer = z.lazy(
  () => z.object({
    name: z.string(),
    opacity: z.number(),
    type: z.literal("group"),
    layers: ITiledMapLayer.array(),
    visible: z.boolean(),
    height: z.number().optional(),
    draworder: z.string().optional(),
    id: z.number().optional(),
    class: z.string().optional(),
    offsetx: z.number().optional(),
    offsety: z.number().optional(),
    parallaxx: z.number().optional(),
    parallaxy: z.number().optional(),
    properties: ITiledMapProperty.array().optional(),
    startx: z.number().optional(),
    starty: z.number().optional(),
    tintcolor: z.string().optional(),
    width: z.number().optional(),
    x: z.number().optional(),
    y: z.number().optional()
  })
);

const ITiledMapLayer = z.union([
  ITiledMapTileLayer,
  ITiledMapObjectLayer,
  ITiledMapGroupLayer
  // ITiledMapImageLayer,
]);

const ITiledMapOffset = z.object({
  x: z.number(),
  y: z.number()
});

const ITiledMapTerrain = z.object({
  name: z.string(),
  tile: z.number(),
  properties: ITiledMapProperty.array().optional()
});

const ITiledMapTile = z.object({
  id: z.number(),
  animation: ITiledMapFrame.array().optional(),
  image: z.string().optional(),
  imageheight: z.number().optional(),
  imagewidth: z.number().optional(),
  x: z.number().optional(),
  y: z.number().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
  objectgroup: ITiledMapObjectLayer.optional(),
  probability: z.number().optional(),
  properties: ITiledMapProperty.array().optional(),
  class: z.string().optional(),
  terrain: ITiledMapTerrain.array().optional(),
  type: z.string().optional()
});

const ITiledMapTransformations = z.object({
  hflip: z.boolean().optional(),
  vflip: z.boolean().optional(),
  rotate: z.boolean().optional(),
  preferuntransformed: z.boolean().optional()
});

const ITiledMapWangColor = z.object({
  name: z.string(),
  color: z.string(),
  tile: z.number(),
  probability: z.number(),
  properties: ITiledMapProperty.array().optional(),
  type: z.string().optional(),
  class: z.string().optional()
});

const ITiledMapWangTile = z.object({
  tileid: z.number(),
  wangid: z.number().array()
});

const ITiledMapWangSet = z.object({
  name: z.string(),
  tile: z.number(),
  colors: ITiledMapWangColor.array().optional(),
  properties: ITiledMapProperty.array().optional(),
  wangtiles: ITiledMapWangTile.array().optional(),
  type: z.enum(["corner", "edge", "mixed"]),
  class: z.string().optional()
});

const ITiledMapExternalTileset = z.object({
  name: z.string(),
  image: z.string(),
  backgroundcolor: z.string().optional(),
  columns: z.number().optional(),
  fillmode: z.enum(["stretch", "preserve-aspect-fit"]).optional(),
  grid: ITiledMapGrid.optional(),
  id: z.number().optional(),
  imageheight: z.number().optional(),
  imagewidth: z.number().optional(),
  margin: z.number().optional(),
  objectalignment: z.string().optional(),
  properties: ITiledMapProperty.array().optional(),
  //source: z.undefined(),
  spacing: z.number().optional(),
  terrains: ITiledMapTerrain.array().optional(),
  tilecount: z.number(),
  tiledversion: z.string().optional(),
  tileheight: z.number().optional(),
  tileoffset: ITiledMapOffset.optional(),
  tilerendersize: z.enum(["tile", "grid"]).optional(),
  tiles: ITiledMapTile.array().optional(),
  tilewidth: z.number().optional(),
  transformations: ITiledMapTransformations.optional(),
  transparentcolor: z.string().optional(),
  type: z.literal("tileset").optional(),
  class: z.string().optional(),
  version: z.union([z.string(), z.number()]).optional(),
  wangsets: ITiledMapWangSet.array().optional()
});
const ITiledMapEmbeddedTileset = ITiledMapExternalTileset.extend({
  firstgid: z.number()
});
const ITiledMapExternalTilesetReference = z.object({
  firstgid: z.number(),
  source: z.string()
});
const ITiledMapTileset = z.union([
  ITiledMapEmbeddedTileset,
  ITiledMapExternalTilesetReference
]);

const ITiledMapTilesetReference = z.object({
  firstgid: z.number(),
  source: z.string()
}).strict();

const ITiledMap = z.object({
  layers: ITiledMapLayer.array(),
  tiledversion: z.string(),
  tilesets: ITiledMapTileset.array(),
  type: z.literal("map"),
  backgroundcolor: z.string().optional(),
  compressionlevel: z.number().optional(),
  hexsidelength: z.number().optional(),
  infinite: z.boolean().optional(),
  nextlayerid: z.number(),
  nextobjectid: z.number(),
  orientation: z.enum(["orthogonal", "isometric", "staggered", "hexagonal"]).optional(),
  parallaxoriginx: z.number().optional(),
  parallaxoriginy: z.number().optional(),
  properties: ITiledMapProperty.array().optional(),
  renderorder: z.enum(["right-down", "right-up", "left-down", "left-up"]).optional(),
  staggeraxis: z.enum(["x", "y"]).optional(),
  staggerindex: z.enum(["odd", "even"]).optional(),
  tileheight: z.number().optional(),
  tilewidth: z.number().optional(),
  class: z.string().optional(),
  version: z.union([z.string(), z.number()]).optional(),
  width: z.number(),
  height: z.number()
});
const ITiledInfiniteMap = ITiledMap.extend({
  layers: z.union([ITiledMapInfiniteTileLayer, ITiledMapObjectLayer]).array(),
  infinite: z.literal(true)
});
const ITiledRestrictedMap = ITiledMap.extend({
  layers: z.union([ITiledMapRestrictedTileLayer, ITiledMapObjectLayer]).array(),
  infinite: z.literal(false)
});

var LayerDepth = /* @__PURE__ */ ((LayerDepth2) => {
  LayerDepth2["AbovePlayer"] = "abovePlayer";
  LayerDepth2["BelowPlayer"] = "belowPlayer";
  return LayerDepth2;
})(LayerDepth || {});
const Size = z.object({
  width: z.number(),
  height: z.number()
});
const Position = z.object({
  x: z.number(),
  y: z.number()
});

const MapConfigSchema = z.object({
  mapSize: Size,
  mapChunkSize: Size,
  minimapChunkSize: Size,
  minimapRatio: z.number(),
  worldmapRatio: z.number(),
  travelPlannerMapRatio: z.number(),
  objectTypes: z.array(z.string()),
  tilesets: z.array(ITiledMapEmbeddedTileset),
  tileLayersDepth: z.record(z.nativeEnum(LayerDepth))
});

const mapDataSchema = z.object({
  fileName: z.string(),
  height: z.number(),
  width: z.number(),
  x: z.number(),
  y: z.number()
});
const ITiledWorld = z.object({
  maps: z.array(mapDataSchema)
  // onlyShowAdjacentMaps: z.boolean(),
  // type: z.literal("world"),
});

function isFloorLayer(layer) {
  return isObjectLayer(layer) && layer.name.includes("floorLayer");
}
function isObjectLayer(layer) {
  return layer.type === "objectgroup";
}
function isGroupLayer(layer) {
  return layer.type === "group";
}
function isTileLayer(layer) {
  return layer.type === "tilelayer";
}
function isInfiniteTileLayer(layer) {
  const isInfinite = isTileLayer(layer) && layer.hasOwnProperty("chunks") && layer.hasOwnProperty("startx") && layer.hasOwnProperty("starty");
  return !!isInfinite;
}
function isInfiniteMap(map) {
  return !!map.infinite;
}
function isExternalTilesetReference(tileset) {
  return tileset.hasOwnProperty("source");
}
function isEmbeddedTileset(tileset) {
  return !isExternalTilesetReference(tileset);
}

const ITiledMapInfiniteLayer = z.union([ITiledMapInfiniteTileLayer, ITiledMapObjectLayer]);
const ITiledMapRestrictedLayer = z.union([
  ITiledMapRestrictedTileLayer,
  ITiledMapObjectLayer
]);

export { ITiledInfiniteMap, ITiledMap, ITiledMapChunk, ITiledMapEmbeddedTileset, ITiledMapExternalTileset, ITiledMapExternalTilesetReference, ITiledMapFrame, ITiledMapGrid, ITiledMapGroupLayer, ITiledMapImageLayer, ITiledMapInfiniteLayer, ITiledMapInfiniteTileLayer, ITiledMapLayer, ITiledMapObject, ITiledMapObjectLayer, ITiledMapOffset, ITiledMapPoint, ITiledMapProperty, ITiledMapRestrictedLayer, ITiledMapRestrictedTileLayer, ITiledMapTerrain, ITiledMapText, ITiledMapTile, ITiledMapTileLayer, ITiledMapTileset, ITiledMapTilesetReference, ITiledMapTransformations, ITiledMapWangColor, ITiledMapWangSet, ITiledMapWangTile, ITiledRestrictedMap, ITiledWorld, LayerDepth, MapConfigSchema, Position, Size, isEmbeddedTileset, isExternalTilesetReference, isFloorLayer, isGroupLayer, isInfiniteMap, isInfiniteTileLayer, isObjectLayer, isTileLayer };
