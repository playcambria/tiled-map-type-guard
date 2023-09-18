import { z } from 'zod';
export declare const ITiledMapObjectLayer: z.ZodObject<{
    name: z.ZodString;
    objects: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        visible: z.ZodBoolean;
        x: z.ZodNumber;
        y: z.ZodNumber;
        ellipse: z.ZodOptional<z.ZodBoolean>;
        gid: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
        point: z.ZodOptional<z.ZodBoolean>;
        polygon: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>, "many">>;
        polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>, "many">>;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<[z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "string" | "color" | "file";
            value?: string | undefined;
            propertytype?: string | undefined;
        }, {
            name: string;
            type: "string" | "color" | "file";
            value?: string | undefined;
            propertytype?: string | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<[z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "object" | "int";
            value?: number | undefined;
            propertytype?: string | undefined;
        }, {
            name: string;
            type: "object" | "int";
            value?: number | undefined;
            propertytype?: string | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "float";
            value?: number | undefined;
            propertytype?: string | undefined;
        }, {
            name: string;
            type: "float";
            value?: number | undefined;
            propertytype?: string | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "bool";
            value?: boolean | undefined;
            propertytype?: string | undefined;
        }, {
            name: string;
            type: "bool";
            value?: boolean | undefined;
            propertytype?: string | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<import("./ITiledMapProperty").Json, z.ZodTypeDef, import("./ITiledMapProperty").Json>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "class";
            value?: import("./ITiledMapProperty").Json | undefined;
            propertytype?: string | undefined;
        }, {
            name: string;
            type: "class";
            value?: import("./ITiledMapProperty").Json | undefined;
            propertytype?: string | undefined;
        }>]>, "many">>;
        rotation: z.ZodOptional<z.ZodNumber>;
        template: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodObject<{
            text: z.ZodString;
            bold: z.ZodOptional<z.ZodBoolean>;
            color: z.ZodOptional<z.ZodString>;
            fontfamily: z.ZodOptional<z.ZodString>;
            halign: z.ZodOptional<z.ZodEnum<["center", "right", "justify", "left"]>>;
            italic: z.ZodOptional<z.ZodBoolean>;
            kerning: z.ZodOptional<z.ZodBoolean>;
            pixelsize: z.ZodOptional<z.ZodNumber>;
            strikeout: z.ZodOptional<z.ZodBoolean>;
            underline: z.ZodOptional<z.ZodBoolean>;
            valign: z.ZodOptional<z.ZodEnum<["center", "bottom", "top"]>>;
            wrap: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            bold?: boolean | undefined;
            color?: string | undefined;
            fontfamily?: string | undefined;
            halign?: "center" | "right" | "justify" | "left" | undefined;
            italic?: boolean | undefined;
            kerning?: boolean | undefined;
            pixelsize?: number | undefined;
            strikeout?: boolean | undefined;
            underline?: boolean | undefined;
            valign?: "center" | "bottom" | "top" | undefined;
            wrap?: boolean | undefined;
        }, {
            text: string;
            bold?: boolean | undefined;
            color?: string | undefined;
            fontfamily?: string | undefined;
            halign?: "center" | "right" | "justify" | "left" | undefined;
            italic?: boolean | undefined;
            kerning?: boolean | undefined;
            pixelsize?: number | undefined;
            strikeout?: boolean | undefined;
            underline?: boolean | undefined;
            valign?: "center" | "bottom" | "top" | undefined;
            wrap?: boolean | undefined;
        }>>;
        type: z.ZodOptional<z.ZodString>;
        class: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: number;
        visible: boolean;
        x: number;
        y: number;
        ellipse?: boolean | undefined;
        gid?: number | undefined;
        height?: number | undefined;
        point?: boolean | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        properties?: ({
            name: string;
            type: "string" | "color" | "file";
            value?: string | undefined;
            propertytype?: string | undefined;
        } | {
            name: string;
            type: "object" | "int";
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            name: string;
            type: "float";
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            name: string;
            type: "bool";
            value?: boolean | undefined;
            propertytype?: string | undefined;
        } | {
            name: string;
            type: "class";
            value?: import("./ITiledMapProperty").Json | undefined;
            propertytype?: string | undefined;
        })[] | undefined;
        rotation?: number | undefined;
        template?: string | undefined;
        text?: {
            text: string;
            bold?: boolean | undefined;
            color?: string | undefined;
            fontfamily?: string | undefined;
            halign?: "center" | "right" | "justify" | "left" | undefined;
            italic?: boolean | undefined;
            kerning?: boolean | undefined;
            pixelsize?: number | undefined;
            strikeout?: boolean | undefined;
            underline?: boolean | undefined;
            valign?: "center" | "bottom" | "top" | undefined;
            wrap?: boolean | undefined;
        } | undefined;
        type?: string | undefined;
        class?: string | undefined;
        width?: number | undefined;
    }, {
        name: string;
        id: number;
        visible: boolean;
        x: number;
        y: number;
        ellipse?: boolean | undefined;
        gid?: number | undefined;
        height?: number | undefined;
        point?: boolean | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        properties?: ({
            name: string;
            type: "string" | "color" | "file";
            value?: string | undefined;
            propertytype?: string | undefined;
        } | {
            name: string;
            type: "object" | "int";
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            name: string;
            type: "float";
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            name: string;
            type: "bool";
            value?: boolean | undefined;
            propertytype?: string | undefined;
        } | {
            name: string;
            type: "class";
            value?: import("./ITiledMapProperty").Json | undefined;
            propertytype?: string | undefined;
        })[] | undefined;
        rotation?: number | undefined;
        template?: string | undefined;
        text?: {
            text: string;
            bold?: boolean | undefined;
            color?: string | undefined;
            fontfamily?: string | undefined;
            halign?: "center" | "right" | "justify" | "left" | undefined;
            italic?: boolean | undefined;
            kerning?: boolean | undefined;
            pixelsize?: number | undefined;
            strikeout?: boolean | undefined;
            underline?: boolean | undefined;
            valign?: "center" | "bottom" | "top" | undefined;
            wrap?: boolean | undefined;
        } | undefined;
        type?: string | undefined;
        class?: string | undefined;
        width?: number | undefined;
    }>, "many">;
    opacity: z.ZodNumber;
    type: z.ZodLiteral<"objectgroup">;
    visible: z.ZodBoolean;
    draworder: z.ZodOptional<z.ZodString>;
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
        name: string;
        type: "string" | "color" | "file";
        value?: string | undefined;
        propertytype?: string | undefined;
    }, {
        name: string;
        type: "string" | "color" | "file";
        value?: string | undefined;
        propertytype?: string | undefined;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<[z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object" | "int";
        value?: number | undefined;
        propertytype?: string | undefined;
    }, {
        name: string;
        type: "object" | "int";
        value?: number | undefined;
        propertytype?: string | undefined;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value?: number | undefined;
        propertytype?: string | undefined;
    }, {
        name: string;
        type: "float";
        value?: number | undefined;
        propertytype?: string | undefined;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value?: boolean | undefined;
        propertytype?: string | undefined;
    }, {
        name: string;
        type: "bool";
        value?: boolean | undefined;
        propertytype?: string | undefined;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<import("./ITiledMapProperty").Json, z.ZodTypeDef, import("./ITiledMapProperty").Json>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "class";
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
    }, {
        name: string;
        type: "class";
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
    }>]>, "many">>;
    startx: z.ZodOptional<z.ZodNumber>;
    starty: z.ZodOptional<z.ZodNumber>;
    tintcolor: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<z.ZodNumber>;
    class: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    name: string;
    visible: boolean;
    type: "objectgroup";
    objects: {
        name: string;
        id: number;
        visible: boolean;
        x: number;
        y: number;
        ellipse?: boolean | undefined;
        gid?: number | undefined;
        height?: number | undefined;
        point?: boolean | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        properties?: ({
            name: string;
            type: "string" | "color" | "file";
            value?: string | undefined;
            propertytype?: string | undefined;
        } | {
            name: string;
            type: "object" | "int";
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            name: string;
            type: "float";
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            name: string;
            type: "bool";
            value?: boolean | undefined;
            propertytype?: string | undefined;
        } | {
            name: string;
            type: "class";
            value?: import("./ITiledMapProperty").Json | undefined;
            propertytype?: string | undefined;
        })[] | undefined;
        rotation?: number | undefined;
        template?: string | undefined;
        text?: {
            text: string;
            bold?: boolean | undefined;
            color?: string | undefined;
            fontfamily?: string | undefined;
            halign?: "center" | "right" | "justify" | "left" | undefined;
            italic?: boolean | undefined;
            kerning?: boolean | undefined;
            pixelsize?: number | undefined;
            strikeout?: boolean | undefined;
            underline?: boolean | undefined;
            valign?: "center" | "bottom" | "top" | undefined;
            wrap?: boolean | undefined;
        } | undefined;
        type?: string | undefined;
        class?: string | undefined;
        width?: number | undefined;
    }[];
    opacity: number;
    draworder?: string | undefined;
    height?: number | undefined;
    id?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    properties?: ({
        name: string;
        type: "string" | "color" | "file";
        value?: string | undefined;
        propertytype?: string | undefined;
    } | {
        name: string;
        type: "object" | "int";
        value?: number | undefined;
        propertytype?: string | undefined;
    } | {
        name: string;
        type: "float";
        value?: number | undefined;
        propertytype?: string | undefined;
    } | {
        name: string;
        type: "bool";
        value?: boolean | undefined;
        propertytype?: string | undefined;
    } | {
        name: string;
        type: "class";
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
    })[] | undefined;
    startx?: number | undefined;
    starty?: number | undefined;
    tintcolor?: string | undefined;
    width?: number | undefined;
    class?: string | undefined;
    x?: number | undefined;
    y?: number | undefined;
}, {
    name: string;
    visible: boolean;
    type: "objectgroup";
    objects: {
        name: string;
        id: number;
        visible: boolean;
        x: number;
        y: number;
        ellipse?: boolean | undefined;
        gid?: number | undefined;
        height?: number | undefined;
        point?: boolean | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        properties?: ({
            name: string;
            type: "string" | "color" | "file";
            value?: string | undefined;
            propertytype?: string | undefined;
        } | {
            name: string;
            type: "object" | "int";
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            name: string;
            type: "float";
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            name: string;
            type: "bool";
            value?: boolean | undefined;
            propertytype?: string | undefined;
        } | {
            name: string;
            type: "class";
            value?: import("./ITiledMapProperty").Json | undefined;
            propertytype?: string | undefined;
        })[] | undefined;
        rotation?: number | undefined;
        template?: string | undefined;
        text?: {
            text: string;
            bold?: boolean | undefined;
            color?: string | undefined;
            fontfamily?: string | undefined;
            halign?: "center" | "right" | "justify" | "left" | undefined;
            italic?: boolean | undefined;
            kerning?: boolean | undefined;
            pixelsize?: number | undefined;
            strikeout?: boolean | undefined;
            underline?: boolean | undefined;
            valign?: "center" | "bottom" | "top" | undefined;
            wrap?: boolean | undefined;
        } | undefined;
        type?: string | undefined;
        class?: string | undefined;
        width?: number | undefined;
    }[];
    opacity: number;
    draworder?: string | undefined;
    height?: number | undefined;
    id?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    properties?: ({
        name: string;
        type: "string" | "color" | "file";
        value?: string | undefined;
        propertytype?: string | undefined;
    } | {
        name: string;
        type: "object" | "int";
        value?: number | undefined;
        propertytype?: string | undefined;
    } | {
        name: string;
        type: "float";
        value?: number | undefined;
        propertytype?: string | undefined;
    } | {
        name: string;
        type: "bool";
        value?: boolean | undefined;
        propertytype?: string | undefined;
    } | {
        name: string;
        type: "class";
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
    })[] | undefined;
    startx?: number | undefined;
    starty?: number | undefined;
    tintcolor?: string | undefined;
    width?: number | undefined;
    class?: string | undefined;
    x?: number | undefined;
    y?: number | undefined;
}>;
export type ITiledMapObjectLayer = z.infer<typeof ITiledMapObjectLayer>;
