import { z } from 'zod';
export declare const ITiledMapWangSet: z.ZodObject<{
    name: z.ZodString;
    tile: z.ZodNumber;
    colors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        color: z.ZodString;
        tile: z.ZodNumber;
        probability: z.ZodNumber;
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
        type: z.ZodOptional<z.ZodString>;
        class: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        color: string;
        tile: number;
        probability: number;
        type?: string | undefined;
        class?: string | undefined;
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
    }, {
        name: string;
        color: string;
        tile: number;
        probability: number;
        type?: string | undefined;
        class?: string | undefined;
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
    }>, "many">>;
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
    wangtiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tileid: z.ZodNumber;
        wangid: z.ZodArray<z.ZodNumber, "many">;
    }, "strip", z.ZodTypeAny, {
        tileid: number;
        wangid: number[];
    }, {
        tileid: number;
        wangid: number[];
    }>, "many">>;
    type: z.ZodEnum<["corner", "edge", "mixed"]>;
    class: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "corner" | "edge" | "mixed";
    name: string;
    tile: number;
    class?: string | undefined;
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
    colors?: {
        name: string;
        color: string;
        tile: number;
        probability: number;
        type?: string | undefined;
        class?: string | undefined;
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
    }[] | undefined;
    wangtiles?: {
        tileid: number;
        wangid: number[];
    }[] | undefined;
}, {
    type: "corner" | "edge" | "mixed";
    name: string;
    tile: number;
    class?: string | undefined;
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
    colors?: {
        name: string;
        color: string;
        tile: number;
        probability: number;
        type?: string | undefined;
        class?: string | undefined;
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
    }[] | undefined;
    wangtiles?: {
        tileid: number;
        wangid: number[];
    }[] | undefined;
}>;
export type ITiledMapWangSet = z.infer<typeof ITiledMapWangSet>;
