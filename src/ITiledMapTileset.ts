import { z } from 'zod';
import { ITiledMapProperty } from './ITiledMapProperty';
import { ITiledMapTerrain } from './ITiledMapTerrain';
import { ITiledMapGrid } from './ITiledMapGrid';
import { ITiledMapOffset } from './ITiledMapOffset';
import { ITiledMapTile } from './ITiledMapTile';
import { ITiledMapTransformations } from './ITiledMapTransformations';
import { ITiledMapWangSet } from './ITiledMapWangSet';

export const ITiledMapExternalTileset = z.object({
  name: z.string(),
  image: z.string(),

  backgroundcolor: z.string().optional(),
  columns: z.number().optional(),
  fillmode: z.enum(['stretch', 'preserve-aspect-fit']).optional(),
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
  tilerendersize: z.enum(['tile', 'grid']).optional(),
  tiles: ITiledMapTile.array().optional(),
  tilewidth: z.number().optional(),
  transformations: ITiledMapTransformations.optional(),
  transparentcolor: z.string().optional(),
  type: z.literal('tileset').optional(),
  class: z.string().optional(),
  version: z.union([z.string(), z.number()]).optional(),
  wangsets: ITiledMapWangSet.array().optional(),
});

export type ITiledMapExternalTileset = z.infer<typeof ITiledMapExternalTileset>;

export const ITiledMapEmbeddedTileset = ITiledMapExternalTileset.extend({
  firstgid: z.number(),
});

export type ITiledMapEmbeddedTileset = z.infer<typeof ITiledMapEmbeddedTileset>;

export const ITiledMapExternalTilesetReference = z.object({
  firstgid: z.number(),
  source: z.string(),
});

export type ITiledMapExternalTilesetReference = z.infer<typeof ITiledMapExternalTilesetReference>;

export const ITiledMapTileset = z.union([
  ITiledMapEmbeddedTileset,
  ITiledMapExternalTilesetReference,
]);

export type ITiledMapTileset = z.infer<typeof ITiledMapTileset>;
