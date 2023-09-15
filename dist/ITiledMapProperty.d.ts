import { z } from 'zod';
declare const literalSchema: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodNull]>;
type Literal = z.infer<typeof literalSchema>;
export type Json = Literal | {
    [key: string]: Json;
} | Json[];
export declare const ITiledMapProperty: z.ZodUnion<[z.ZodObject<{
    name: z.ZodString;
    type: z.ZodUnion<[z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
    value: z.ZodOptional<z.ZodString>;
    propertytype: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "string" | "color" | "file";
    name: string;
    value?: string | undefined;
    propertytype?: string | undefined;
}, {
    type: "string" | "color" | "file";
    name: string;
    value?: string | undefined;
    propertytype?: string | undefined;
}>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodUnion<[z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
    value: z.ZodOptional<z.ZodNumber>;
    propertytype: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "object" | "int";
    name: string;
    value?: number | undefined;
    propertytype?: string | undefined;
}, {
    type: "object" | "int";
    name: string;
    value?: number | undefined;
    propertytype?: string | undefined;
}>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodLiteral<"float">;
    value: z.ZodOptional<z.ZodNumber>;
    propertytype: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "float";
    name: string;
    value?: number | undefined;
    propertytype?: string | undefined;
}, {
    type: "float";
    name: string;
    value?: number | undefined;
    propertytype?: string | undefined;
}>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodLiteral<"bool">;
    value: z.ZodOptional<z.ZodBoolean>;
    propertytype: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "bool";
    name: string;
    value?: boolean | undefined;
    propertytype?: string | undefined;
}, {
    type: "bool";
    name: string;
    value?: boolean | undefined;
    propertytype?: string | undefined;
}>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodLiteral<"class">;
    value: z.ZodOptional<z.ZodType<Json, z.ZodTypeDef, Json>>;
    propertytype: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "class";
    name: string;
    value?: Json | undefined;
    propertytype?: string | undefined;
}, {
    type: "class";
    name: string;
    value?: Json | undefined;
    propertytype?: string | undefined;
}>]>;
export type ITiledMapProperty = z.infer<typeof ITiledMapProperty>;
export {};
