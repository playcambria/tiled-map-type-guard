import { z } from 'zod';
export declare const ITiledMapInfiniteTileLayer: z.ZodObject<{
    chunks: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    id: z.ZodNumber;
    type: z.ZodLiteral<"tilelayer">;
    name: z.ZodString;
    startx: z.ZodNumber;
    starty: z.ZodNumber;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    opacity: z.ZodNumber;
    visible: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    type: "tilelayer";
    name: string;
    height: number;
    width: number;
    chunks: {
        data: number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }[];
    id: number;
    startx: number;
    starty: number;
    opacity: number;
    visible: boolean;
    x?: number | undefined;
    y?: number | undefined;
}, {
    type: "tilelayer";
    name: string;
    height: number;
    width: number;
    chunks: {
        data: number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }[];
    id: number;
    startx: number;
    starty: number;
    opacity: number;
    visible: boolean;
    x?: number | undefined;
    y?: number | undefined;
}>;
export type ITiledMapInfiniteTileLayer = z.infer<typeof ITiledMapInfiniteTileLayer>;
export declare const ITiledMapRestrictedTileLayer: z.ZodObject<{
    data: z.ZodArray<z.ZodNumber, "many">;
    height: z.ZodNumber;
    id: z.ZodNumber;
    name: z.ZodString;
    opacity: z.ZodNumber;
    type: z.ZodLiteral<"tilelayer">;
    visible: z.ZodBoolean;
    width: z.ZodNumber;
    compression: z.ZodOptional<z.ZodString>;
    encoding: z.ZodOptional<z.ZodEnum<["csv", "base64"]>>;
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
    tintcolor: z.ZodOptional<z.ZodString>;
    class: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "tilelayer";
    data: number[];
    name: string;
    height: number;
    width: number;
    id: number;
    opacity: number;
    visible: boolean;
    compression?: string | undefined;
    encoding?: "csv" | "base64" | undefined;
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
    tintcolor?: string | undefined;
    class?: string | undefined;
    x?: number | undefined;
    y?: number | undefined;
}, {
    type: "tilelayer";
    data: number[];
    name: string;
    height: number;
    width: number;
    id: number;
    opacity: number;
    visible: boolean;
    compression?: string | undefined;
    encoding?: "csv" | "base64" | undefined;
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
    tintcolor?: string | undefined;
    class?: string | undefined;
    x?: number | undefined;
    y?: number | undefined;
}>;
export type ITiledMapRestrictedTileLayer = z.infer<typeof ITiledMapRestrictedTileLayer>;
export declare const ITiledMapTileLayer: z.ZodUnion<[z.ZodObject<{
    chunks: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    id: z.ZodNumber;
    type: z.ZodLiteral<"tilelayer">;
    name: z.ZodString;
    startx: z.ZodNumber;
    starty: z.ZodNumber;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    opacity: z.ZodNumber;
    visible: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    type: "tilelayer";
    name: string;
    height: number;
    width: number;
    chunks: {
        data: number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }[];
    id: number;
    startx: number;
    starty: number;
    opacity: number;
    visible: boolean;
    x?: number | undefined;
    y?: number | undefined;
}, {
    type: "tilelayer";
    name: string;
    height: number;
    width: number;
    chunks: {
        data: number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }[];
    id: number;
    startx: number;
    starty: number;
    opacity: number;
    visible: boolean;
    x?: number | undefined;
    y?: number | undefined;
}>, z.ZodObject<{
    data: z.ZodArray<z.ZodNumber, "many">;
    height: z.ZodNumber;
    id: z.ZodNumber;
    name: z.ZodString;
    opacity: z.ZodNumber;
    type: z.ZodLiteral<"tilelayer">;
    visible: z.ZodBoolean;
    width: z.ZodNumber;
    compression: z.ZodOptional<z.ZodString>;
    encoding: z.ZodOptional<z.ZodEnum<["csv", "base64"]>>;
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
    tintcolor: z.ZodOptional<z.ZodString>;
    class: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "tilelayer";
    data: number[];
    name: string;
    height: number;
    width: number;
    id: number;
    opacity: number;
    visible: boolean;
    compression?: string | undefined;
    encoding?: "csv" | "base64" | undefined;
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
    tintcolor?: string | undefined;
    class?: string | undefined;
    x?: number | undefined;
    y?: number | undefined;
}, {
    type: "tilelayer";
    data: number[];
    name: string;
    height: number;
    width: number;
    id: number;
    opacity: number;
    visible: boolean;
    compression?: string | undefined;
    encoding?: "csv" | "base64" | undefined;
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
    tintcolor?: string | undefined;
    class?: string | undefined;
    x?: number | undefined;
    y?: number | undefined;
}>]>;
export type ITiledMapTileLayer = z.infer<typeof ITiledMapTileLayer>;
