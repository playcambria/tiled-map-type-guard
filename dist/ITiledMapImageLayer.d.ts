import { z } from 'zod';
export declare const ITiledMapImageLayer: z.ZodObject<{
    image: z.ZodString;
    name: z.ZodString;
    opacity: z.ZodNumber;
    type: z.ZodLiteral<"imagelayer">;
    visible: z.ZodBoolean;
    height: z.ZodOptional<z.ZodNumber>;
    id: z.ZodOptional<z.ZodNumber>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
        value: z.ZodOptional<z.ZodType<import("./ITiledMapProperty").Json, z.ZodTypeDef, import("./ITiledMapProperty").Json>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "class";
        name: string;
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
    }, {
        type: "class";
        name: string;
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
    }>]>, "many">>;
    repeatx: z.ZodOptional<z.ZodBoolean>;
    repeaty: z.ZodOptional<z.ZodBoolean>;
    startx: z.ZodOptional<z.ZodNumber>;
    starty: z.ZodOptional<z.ZodNumber>;
    tintcolor: z.ZodOptional<z.ZodString>;
    class: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<z.ZodNumber>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "imagelayer";
    name: string;
    opacity: number;
    visible: boolean;
    image: string;
    height?: number | undefined;
    id?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    properties?: ({
        type: "string" | "color" | "file";
        name: string;
        value?: string | undefined;
        propertytype?: string | undefined;
    } | {
        type: "object" | "int";
        name: string;
        value?: number | undefined;
        propertytype?: string | undefined;
    } | {
        type: "float";
        name: string;
        value?: number | undefined;
        propertytype?: string | undefined;
    } | {
        type: "bool";
        name: string;
        value?: boolean | undefined;
        propertytype?: string | undefined;
    } | {
        type: "class";
        name: string;
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
    })[] | undefined;
    repeatx?: boolean | undefined;
    repeaty?: boolean | undefined;
    startx?: number | undefined;
    starty?: number | undefined;
    tintcolor?: string | undefined;
    class?: string | undefined;
    width?: number | undefined;
    x?: number | undefined;
    y?: number | undefined;
}, {
    type: "imagelayer";
    name: string;
    opacity: number;
    visible: boolean;
    image: string;
    height?: number | undefined;
    id?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    properties?: ({
        type: "string" | "color" | "file";
        name: string;
        value?: string | undefined;
        propertytype?: string | undefined;
    } | {
        type: "object" | "int";
        name: string;
        value?: number | undefined;
        propertytype?: string | undefined;
    } | {
        type: "float";
        name: string;
        value?: number | undefined;
        propertytype?: string | undefined;
    } | {
        type: "bool";
        name: string;
        value?: boolean | undefined;
        propertytype?: string | undefined;
    } | {
        type: "class";
        name: string;
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
    })[] | undefined;
    repeatx?: boolean | undefined;
    repeaty?: boolean | undefined;
    startx?: number | undefined;
    starty?: number | undefined;
    tintcolor?: string | undefined;
    class?: string | undefined;
    width?: number | undefined;
    x?: number | undefined;
    y?: number | undefined;
}>;
export type ITiledMapImageLayer = z.infer<typeof ITiledMapImageLayer>;
