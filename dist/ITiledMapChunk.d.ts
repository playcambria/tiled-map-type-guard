import { z } from 'zod';
export declare const ITiledMapChunk: z.ZodObject<{
    data: z.ZodArray<z.ZodNumber, "many">;
    height: z.ZodNumber;
    width: z.ZodNumber;
    x: z.ZodNumber;
    y: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    data: number[];
    height: number;
    width: number;
    x: number;
    y: number;
}, {
    data: number[];
    height: number;
    width: number;
    x: number;
    y: number;
}>;
export type ITiledMapChunk = z.infer<typeof ITiledMapChunk>;
