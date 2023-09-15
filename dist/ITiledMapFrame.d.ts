import { z } from 'zod';
export declare const ITiledMapFrame: z.ZodObject<{
    duration: z.ZodNumber;
    tileid: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    duration: number;
    tileid: number;
}, {
    duration: number;
    tileid: number;
}>;
export type ITiledMapFrame = z.infer<typeof ITiledMapFrame>;
