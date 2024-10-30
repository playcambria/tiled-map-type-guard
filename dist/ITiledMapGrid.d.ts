import { z } from 'zod';
export declare const ITiledMapGrid: z.ZodObject<{
    width: z.ZodNumber;
    height: z.ZodNumber;
    orientation: z.ZodEnum<["orthogonal", "isometric"]>;
}, "strip", z.ZodTypeAny, {
    width: number;
    height: number;
    orientation: "orthogonal" | "isometric";
}, {
    width: number;
    height: number;
    orientation: "orthogonal" | "isometric";
}>;
export type ITiledMapGrid = z.infer<typeof ITiledMapGrid>;
