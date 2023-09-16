import { z } from 'zod';
export declare enum LayerDepth {
    AbovePlayer = "abovePlayer",
    BelowPlayer = "belowPlayer"
}
export declare const Size: z.ZodObject<{
    width: z.ZodNumber;
    height: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    width: number;
    height: number;
}, {
    width: number;
    height: number;
}>;
export type Size = z.infer<typeof Size>;
export declare const Position: z.ZodObject<{
    x: z.ZodNumber;
    y: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    x: number;
    y: number;
}, {
    x: number;
    y: number;
}>;
export type Position = z.infer<typeof Position>;
