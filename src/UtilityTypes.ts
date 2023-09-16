import { z } from 'zod';

export enum LayerDepth {
  AbovePlayer = 'abovePlayer',
  BelowPlayer = 'belowPlayer',
}

export const Size = z.object({
  width: z.number(),
  height: z.number(),
});
export type Size = z.infer<typeof Size>;

export const Position = z.object({
  x: z.number(),
  y: z.number(),
});
export type Position = z.infer<typeof Position>;
