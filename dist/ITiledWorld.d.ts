import { z } from 'zod';
export declare const ITiledWorld: z.ZodObject<{
    maps: z.ZodArray<z.ZodObject<{
        fileName: z.ZodString;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
        x: number;
        y: number;
        fileName: string;
    }, {
        width: number;
        height: number;
        x: number;
        y: number;
        fileName: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    maps: {
        width: number;
        height: number;
        x: number;
        y: number;
        fileName: string;
    }[];
}, {
    maps: {
        width: number;
        height: number;
        x: number;
        y: number;
        fileName: string;
    }[];
}>;
export type ITiledWorld = z.infer<typeof ITiledWorld>;
