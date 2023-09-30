import { z } from 'zod';
export declare const ITiledMap: z.ZodObject<{
    layers: z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodObject<{
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
        name: string;
        type: "tilelayer";
        height: number;
        id: number;
        startx: number;
        starty: number;
        width: number;
        opacity: number;
        visible: boolean;
        chunks: {
            data: number[];
            height: number;
            width: number;
            x: number;
            y: number;
        }[];
        x?: number | undefined;
        y?: number | undefined;
    }, {
        name: string;
        type: "tilelayer";
        height: number;
        id: number;
        startx: number;
        starty: number;
        width: number;
        opacity: number;
        visible: boolean;
        chunks: {
            data: number[];
            height: number;
            width: number;
            x: number;
            y: number;
        }[];
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
        tintcolor: z.ZodOptional<z.ZodString>;
        class: z.ZodOptional<z.ZodString>;
        x: z.ZodOptional<z.ZodNumber>;
        y: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "tilelayer";
        data: number[];
        height: number;
        id: number;
        width: number;
        opacity: number;
        visible: boolean;
        compression?: string | undefined;
        encoding?: "csv" | "base64" | undefined;
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
        tintcolor?: string | undefined;
        class?: string | undefined;
        x?: number | undefined;
        y?: number | undefined;
    }, {
        name: string;
        type: "tilelayer";
        data: number[];
        height: number;
        id: number;
        width: number;
        opacity: number;
        visible: boolean;
        compression?: string | undefined;
        encoding?: "csv" | "base64" | undefined;
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
        tintcolor?: string | undefined;
        class?: string | undefined;
        x?: number | undefined;
        y?: number | undefined;
    }>]>, z.ZodObject<{
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
            x: number;
            y: number;
            visible: boolean;
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
            x: number;
            y: number;
            visible: boolean;
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
        type: "objectgroup";
        opacity: number;
        visible: boolean;
        objects: {
            name: string;
            id: number;
            x: number;
            y: number;
            visible: boolean;
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
        type: "objectgroup";
        opacity: number;
        visible: boolean;
        objects: {
            name: string;
            id: number;
            x: number;
            y: number;
            visible: boolean;
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
    }>, z.ZodType<import("./ITiledMapGroupLayer").TiledMapGroupLayer, z.ZodTypeDef, import("./ITiledMapGroupLayer").TiledMapGroupLayer>]>, "many">;
    tiledversion: z.ZodString;
    tilesets: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        image: z.ZodString;
        backgroundcolor: z.ZodOptional<z.ZodString>;
        columns: z.ZodOptional<z.ZodNumber>;
        fillmode: z.ZodOptional<z.ZodEnum<["stretch", "preserve-aspect-fit"]>>;
        firstgid: z.ZodNumber;
        grid: z.ZodOptional<z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            orientation: z.ZodEnum<["orthogonal", "isometric"]>;
        }, "strip", z.ZodTypeAny, {
            height: number;
            width: number;
            orientation: "orthogonal" | "isometric";
        }, {
            height: number;
            width: number;
            orientation: "orthogonal" | "isometric";
        }>>;
        id: z.ZodOptional<z.ZodNumber>;
        imageheight: z.ZodOptional<z.ZodNumber>;
        imagewidth: z.ZodOptional<z.ZodNumber>;
        margin: z.ZodOptional<z.ZodNumber>;
        objectalignment: z.ZodOptional<z.ZodString>;
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
        spacing: z.ZodOptional<z.ZodNumber>;
        terrains: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tile: z.ZodNumber;
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
        }, "strip", z.ZodTypeAny, {
            name: string;
            tile: number;
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
        }, {
            name: string;
            tile: number;
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
        }>, "many">>;
        tilecount: z.ZodNumber;
        tiledversion: z.ZodOptional<z.ZodString>;
        tileheight: z.ZodOptional<z.ZodNumber>;
        tileoffset: z.ZodOptional<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>>;
        tilerendersize: z.ZodOptional<z.ZodEnum<["tile", "grid"]>>;
        tiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            animation: z.ZodOptional<z.ZodArray<z.ZodObject<{
                duration: z.ZodNumber;
                tileid: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                duration: number;
                tileid: number;
            }, {
                duration: number;
                tileid: number;
            }>, "many">>;
            image: z.ZodOptional<z.ZodString>;
            imageheight: z.ZodOptional<z.ZodNumber>;
            imagewidth: z.ZodOptional<z.ZodNumber>;
            x: z.ZodOptional<z.ZodNumber>;
            y: z.ZodOptional<z.ZodNumber>;
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            objectgroup: z.ZodOptional<z.ZodObject<{
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
                    x: number;
                    y: number;
                    visible: boolean;
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
                    x: number;
                    y: number;
                    visible: boolean;
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
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            }>>;
            probability: z.ZodOptional<z.ZodNumber>;
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
            class: z.ZodOptional<z.ZodString>;
            terrain: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                tile: z.ZodNumber;
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
            }, "strip", z.ZodTypeAny, {
                name: string;
                tile: number;
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
            }, {
                name: string;
                tile: number;
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
            }>, "many">>;
            type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: number;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            } | undefined;
            probability?: number | undefined;
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
            class?: string | undefined;
            terrain?: {
                name: string;
                tile: number;
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
            }[] | undefined;
            type?: string | undefined;
        }, {
            id: number;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            } | undefined;
            probability?: number | undefined;
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
            class?: string | undefined;
            terrain?: {
                name: string;
                tile: number;
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
            }[] | undefined;
            type?: string | undefined;
        }>, "many">>;
        tilewidth: z.ZodOptional<z.ZodNumber>;
        transformations: z.ZodOptional<z.ZodObject<{
            hflip: z.ZodOptional<z.ZodBoolean>;
            vflip: z.ZodOptional<z.ZodBoolean>;
            rotate: z.ZodOptional<z.ZodBoolean>;
            preferuntransformed: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        }, {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        }>>;
        transparentcolor: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodLiteral<"tileset">>;
        class: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        wangsets: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                type: z.ZodOptional<z.ZodString>;
                class: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
            }, {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            name: string;
            type: "corner" | "edge" | "mixed";
            tile: number;
            colors?: {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            wangtiles?: {
                tileid: number;
                wangid: number[];
            }[] | undefined;
            class?: string | undefined;
        }, {
            name: string;
            type: "corner" | "edge" | "mixed";
            tile: number;
            colors?: {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            wangtiles?: {
                tileid: number;
                wangid: number[];
            }[] | undefined;
            class?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        image: string;
        firstgid: number;
        tilecount: number;
        backgroundcolor?: string | undefined;
        columns?: number | undefined;
        fillmode?: "stretch" | "preserve-aspect-fit" | undefined;
        grid?: {
            height: number;
            width: number;
            orientation: "orthogonal" | "isometric";
        } | undefined;
        id?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        margin?: number | undefined;
        objectalignment?: string | undefined;
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
        spacing?: number | undefined;
        terrains?: {
            name: string;
            tile: number;
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
        }[] | undefined;
        tiledversion?: string | undefined;
        tileheight?: number | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tilerendersize?: "grid" | "tile" | undefined;
        tiles?: {
            id: number;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            } | undefined;
            probability?: number | undefined;
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
            class?: string | undefined;
            terrain?: {
                name: string;
                tile: number;
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
            }[] | undefined;
            type?: string | undefined;
        }[] | undefined;
        tilewidth?: number | undefined;
        transformations?: {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        } | undefined;
        transparentcolor?: string | undefined;
        type?: "tileset" | undefined;
        class?: string | undefined;
        version?: string | number | undefined;
        wangsets?: {
            name: string;
            type: "corner" | "edge" | "mixed";
            tile: number;
            colors?: {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            wangtiles?: {
                tileid: number;
                wangid: number[];
            }[] | undefined;
            class?: string | undefined;
        }[] | undefined;
    }, {
        name: string;
        image: string;
        firstgid: number;
        tilecount: number;
        backgroundcolor?: string | undefined;
        columns?: number | undefined;
        fillmode?: "stretch" | "preserve-aspect-fit" | undefined;
        grid?: {
            height: number;
            width: number;
            orientation: "orthogonal" | "isometric";
        } | undefined;
        id?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        margin?: number | undefined;
        objectalignment?: string | undefined;
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
        spacing?: number | undefined;
        terrains?: {
            name: string;
            tile: number;
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
        }[] | undefined;
        tiledversion?: string | undefined;
        tileheight?: number | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tilerendersize?: "grid" | "tile" | undefined;
        tiles?: {
            id: number;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            } | undefined;
            probability?: number | undefined;
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
            class?: string | undefined;
            terrain?: {
                name: string;
                tile: number;
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
            }[] | undefined;
            type?: string | undefined;
        }[] | undefined;
        tilewidth?: number | undefined;
        transformations?: {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        } | undefined;
        transparentcolor?: string | undefined;
        type?: "tileset" | undefined;
        class?: string | undefined;
        version?: string | number | undefined;
        wangsets?: {
            name: string;
            type: "corner" | "edge" | "mixed";
            tile: number;
            colors?: {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            wangtiles?: {
                tileid: number;
                wangid: number[];
            }[] | undefined;
            class?: string | undefined;
        }[] | undefined;
    }>, "many">;
    type: z.ZodLiteral<"map">;
    backgroundcolor: z.ZodOptional<z.ZodString>;
    compressionlevel: z.ZodOptional<z.ZodNumber>;
    hexsidelength: z.ZodOptional<z.ZodNumber>;
    infinite: z.ZodOptional<z.ZodBoolean>;
    nextlayerid: z.ZodNumber;
    nextobjectid: z.ZodNumber;
    orientation: z.ZodOptional<z.ZodEnum<["orthogonal", "isometric", "staggered", "hexagonal"]>>;
    parallaxoriginx: z.ZodOptional<z.ZodNumber>;
    parallaxoriginy: z.ZodOptional<z.ZodNumber>;
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
    renderorder: z.ZodOptional<z.ZodEnum<["right-down", "right-up", "left-down", "left-up"]>>;
    staggeraxis: z.ZodOptional<z.ZodEnum<["x", "y"]>>;
    staggerindex: z.ZodOptional<z.ZodEnum<["odd", "even"]>>;
    tileheight: z.ZodOptional<z.ZodNumber>;
    tilewidth: z.ZodOptional<z.ZodNumber>;
    class: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    width: z.ZodNumber;
    height: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "map";
    height: number;
    width: number;
    layers: (import("./ITiledMapGroupLayer").TiledMapGroupLayer | {
        name: string;
        type: "tilelayer";
        height: number;
        id: number;
        startx: number;
        starty: number;
        width: number;
        opacity: number;
        visible: boolean;
        chunks: {
            data: number[];
            height: number;
            width: number;
            x: number;
            y: number;
        }[];
        x?: number | undefined;
        y?: number | undefined;
    } | {
        name: string;
        type: "tilelayer";
        data: number[];
        height: number;
        id: number;
        width: number;
        opacity: number;
        visible: boolean;
        compression?: string | undefined;
        encoding?: "csv" | "base64" | undefined;
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
        tintcolor?: string | undefined;
        class?: string | undefined;
        x?: number | undefined;
        y?: number | undefined;
    } | {
        name: string;
        type: "objectgroup";
        opacity: number;
        visible: boolean;
        objects: {
            name: string;
            id: number;
            x: number;
            y: number;
            visible: boolean;
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
    })[];
    tiledversion: string;
    tilesets: {
        name: string;
        image: string;
        firstgid: number;
        tilecount: number;
        backgroundcolor?: string | undefined;
        columns?: number | undefined;
        fillmode?: "stretch" | "preserve-aspect-fit" | undefined;
        grid?: {
            height: number;
            width: number;
            orientation: "orthogonal" | "isometric";
        } | undefined;
        id?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        margin?: number | undefined;
        objectalignment?: string | undefined;
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
        spacing?: number | undefined;
        terrains?: {
            name: string;
            tile: number;
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
        }[] | undefined;
        tiledversion?: string | undefined;
        tileheight?: number | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tilerendersize?: "grid" | "tile" | undefined;
        tiles?: {
            id: number;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            } | undefined;
            probability?: number | undefined;
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
            class?: string | undefined;
            terrain?: {
                name: string;
                tile: number;
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
            }[] | undefined;
            type?: string | undefined;
        }[] | undefined;
        tilewidth?: number | undefined;
        transformations?: {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        } | undefined;
        transparentcolor?: string | undefined;
        type?: "tileset" | undefined;
        class?: string | undefined;
        version?: string | number | undefined;
        wangsets?: {
            name: string;
            type: "corner" | "edge" | "mixed";
            tile: number;
            colors?: {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            wangtiles?: {
                tileid: number;
                wangid: number[];
            }[] | undefined;
            class?: string | undefined;
        }[] | undefined;
    }[];
    nextlayerid: number;
    nextobjectid: number;
    backgroundcolor?: string | undefined;
    compressionlevel?: number | undefined;
    hexsidelength?: number | undefined;
    infinite?: boolean | undefined;
    orientation?: "orthogonal" | "isometric" | "staggered" | "hexagonal" | undefined;
    parallaxoriginx?: number | undefined;
    parallaxoriginy?: number | undefined;
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
    renderorder?: "right-down" | "right-up" | "left-down" | "left-up" | undefined;
    staggeraxis?: "x" | "y" | undefined;
    staggerindex?: "odd" | "even" | undefined;
    tileheight?: number | undefined;
    tilewidth?: number | undefined;
    class?: string | undefined;
    version?: string | number | undefined;
}, {
    type: "map";
    height: number;
    width: number;
    layers: (import("./ITiledMapGroupLayer").TiledMapGroupLayer | {
        name: string;
        type: "tilelayer";
        height: number;
        id: number;
        startx: number;
        starty: number;
        width: number;
        opacity: number;
        visible: boolean;
        chunks: {
            data: number[];
            height: number;
            width: number;
            x: number;
            y: number;
        }[];
        x?: number | undefined;
        y?: number | undefined;
    } | {
        name: string;
        type: "tilelayer";
        data: number[];
        height: number;
        id: number;
        width: number;
        opacity: number;
        visible: boolean;
        compression?: string | undefined;
        encoding?: "csv" | "base64" | undefined;
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
        tintcolor?: string | undefined;
        class?: string | undefined;
        x?: number | undefined;
        y?: number | undefined;
    } | {
        name: string;
        type: "objectgroup";
        opacity: number;
        visible: boolean;
        objects: {
            name: string;
            id: number;
            x: number;
            y: number;
            visible: boolean;
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
    })[];
    tiledversion: string;
    tilesets: {
        name: string;
        image: string;
        firstgid: number;
        tilecount: number;
        backgroundcolor?: string | undefined;
        columns?: number | undefined;
        fillmode?: "stretch" | "preserve-aspect-fit" | undefined;
        grid?: {
            height: number;
            width: number;
            orientation: "orthogonal" | "isometric";
        } | undefined;
        id?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        margin?: number | undefined;
        objectalignment?: string | undefined;
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
        spacing?: number | undefined;
        terrains?: {
            name: string;
            tile: number;
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
        }[] | undefined;
        tiledversion?: string | undefined;
        tileheight?: number | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tilerendersize?: "grid" | "tile" | undefined;
        tiles?: {
            id: number;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            } | undefined;
            probability?: number | undefined;
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
            class?: string | undefined;
            terrain?: {
                name: string;
                tile: number;
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
            }[] | undefined;
            type?: string | undefined;
        }[] | undefined;
        tilewidth?: number | undefined;
        transformations?: {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        } | undefined;
        transparentcolor?: string | undefined;
        type?: "tileset" | undefined;
        class?: string | undefined;
        version?: string | number | undefined;
        wangsets?: {
            name: string;
            type: "corner" | "edge" | "mixed";
            tile: number;
            colors?: {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            wangtiles?: {
                tileid: number;
                wangid: number[];
            }[] | undefined;
            class?: string | undefined;
        }[] | undefined;
    }[];
    nextlayerid: number;
    nextobjectid: number;
    backgroundcolor?: string | undefined;
    compressionlevel?: number | undefined;
    hexsidelength?: number | undefined;
    infinite?: boolean | undefined;
    orientation?: "orthogonal" | "isometric" | "staggered" | "hexagonal" | undefined;
    parallaxoriginx?: number | undefined;
    parallaxoriginy?: number | undefined;
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
    renderorder?: "right-down" | "right-up" | "left-down" | "left-up" | undefined;
    staggeraxis?: "x" | "y" | undefined;
    staggerindex?: "odd" | "even" | undefined;
    tileheight?: number | undefined;
    tilewidth?: number | undefined;
    class?: string | undefined;
    version?: string | number | undefined;
}>;
export declare const ITiledInfiniteMap: z.ZodObject<{
    type: z.ZodLiteral<"map">;
    class: z.ZodOptional<z.ZodString>;
    height: z.ZodNumber;
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
    width: z.ZodNumber;
    tiledversion: z.ZodString;
    backgroundcolor: z.ZodOptional<z.ZodString>;
    orientation: z.ZodOptional<z.ZodEnum<["orthogonal", "isometric", "staggered", "hexagonal"]>>;
    tileheight: z.ZodOptional<z.ZodNumber>;
    tilewidth: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    tilesets: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        image: z.ZodString;
        backgroundcolor: z.ZodOptional<z.ZodString>;
        columns: z.ZodOptional<z.ZodNumber>;
        fillmode: z.ZodOptional<z.ZodEnum<["stretch", "preserve-aspect-fit"]>>;
        firstgid: z.ZodNumber;
        grid: z.ZodOptional<z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            orientation: z.ZodEnum<["orthogonal", "isometric"]>;
        }, "strip", z.ZodTypeAny, {
            height: number;
            width: number;
            orientation: "orthogonal" | "isometric";
        }, {
            height: number;
            width: number;
            orientation: "orthogonal" | "isometric";
        }>>;
        id: z.ZodOptional<z.ZodNumber>;
        imageheight: z.ZodOptional<z.ZodNumber>;
        imagewidth: z.ZodOptional<z.ZodNumber>;
        margin: z.ZodOptional<z.ZodNumber>;
        objectalignment: z.ZodOptional<z.ZodString>;
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
        spacing: z.ZodOptional<z.ZodNumber>;
        terrains: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tile: z.ZodNumber;
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
        }, "strip", z.ZodTypeAny, {
            name: string;
            tile: number;
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
        }, {
            name: string;
            tile: number;
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
        }>, "many">>;
        tilecount: z.ZodNumber;
        tiledversion: z.ZodOptional<z.ZodString>;
        tileheight: z.ZodOptional<z.ZodNumber>;
        tileoffset: z.ZodOptional<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>>;
        tilerendersize: z.ZodOptional<z.ZodEnum<["tile", "grid"]>>;
        tiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            animation: z.ZodOptional<z.ZodArray<z.ZodObject<{
                duration: z.ZodNumber;
                tileid: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                duration: number;
                tileid: number;
            }, {
                duration: number;
                tileid: number;
            }>, "many">>;
            image: z.ZodOptional<z.ZodString>;
            imageheight: z.ZodOptional<z.ZodNumber>;
            imagewidth: z.ZodOptional<z.ZodNumber>;
            x: z.ZodOptional<z.ZodNumber>;
            y: z.ZodOptional<z.ZodNumber>;
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            objectgroup: z.ZodOptional<z.ZodObject<{
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
                    x: number;
                    y: number;
                    visible: boolean;
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
                    x: number;
                    y: number;
                    visible: boolean;
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
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            }>>;
            probability: z.ZodOptional<z.ZodNumber>;
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
            class: z.ZodOptional<z.ZodString>;
            terrain: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                tile: z.ZodNumber;
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
            }, "strip", z.ZodTypeAny, {
                name: string;
                tile: number;
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
            }, {
                name: string;
                tile: number;
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
            }>, "many">>;
            type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: number;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            } | undefined;
            probability?: number | undefined;
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
            class?: string | undefined;
            terrain?: {
                name: string;
                tile: number;
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
            }[] | undefined;
            type?: string | undefined;
        }, {
            id: number;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            } | undefined;
            probability?: number | undefined;
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
            class?: string | undefined;
            terrain?: {
                name: string;
                tile: number;
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
            }[] | undefined;
            type?: string | undefined;
        }>, "many">>;
        tilewidth: z.ZodOptional<z.ZodNumber>;
        transformations: z.ZodOptional<z.ZodObject<{
            hflip: z.ZodOptional<z.ZodBoolean>;
            vflip: z.ZodOptional<z.ZodBoolean>;
            rotate: z.ZodOptional<z.ZodBoolean>;
            preferuntransformed: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        }, {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        }>>;
        transparentcolor: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodLiteral<"tileset">>;
        class: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        wangsets: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                type: z.ZodOptional<z.ZodString>;
                class: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
            }, {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            name: string;
            type: "corner" | "edge" | "mixed";
            tile: number;
            colors?: {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            wangtiles?: {
                tileid: number;
                wangid: number[];
            }[] | undefined;
            class?: string | undefined;
        }, {
            name: string;
            type: "corner" | "edge" | "mixed";
            tile: number;
            colors?: {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            wangtiles?: {
                tileid: number;
                wangid: number[];
            }[] | undefined;
            class?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        image: string;
        firstgid: number;
        tilecount: number;
        backgroundcolor?: string | undefined;
        columns?: number | undefined;
        fillmode?: "stretch" | "preserve-aspect-fit" | undefined;
        grid?: {
            height: number;
            width: number;
            orientation: "orthogonal" | "isometric";
        } | undefined;
        id?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        margin?: number | undefined;
        objectalignment?: string | undefined;
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
        spacing?: number | undefined;
        terrains?: {
            name: string;
            tile: number;
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
        }[] | undefined;
        tiledversion?: string | undefined;
        tileheight?: number | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tilerendersize?: "grid" | "tile" | undefined;
        tiles?: {
            id: number;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            } | undefined;
            probability?: number | undefined;
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
            class?: string | undefined;
            terrain?: {
                name: string;
                tile: number;
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
            }[] | undefined;
            type?: string | undefined;
        }[] | undefined;
        tilewidth?: number | undefined;
        transformations?: {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        } | undefined;
        transparentcolor?: string | undefined;
        type?: "tileset" | undefined;
        class?: string | undefined;
        version?: string | number | undefined;
        wangsets?: {
            name: string;
            type: "corner" | "edge" | "mixed";
            tile: number;
            colors?: {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            wangtiles?: {
                tileid: number;
                wangid: number[];
            }[] | undefined;
            class?: string | undefined;
        }[] | undefined;
    }, {
        name: string;
        image: string;
        firstgid: number;
        tilecount: number;
        backgroundcolor?: string | undefined;
        columns?: number | undefined;
        fillmode?: "stretch" | "preserve-aspect-fit" | undefined;
        grid?: {
            height: number;
            width: number;
            orientation: "orthogonal" | "isometric";
        } | undefined;
        id?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        margin?: number | undefined;
        objectalignment?: string | undefined;
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
        spacing?: number | undefined;
        terrains?: {
            name: string;
            tile: number;
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
        }[] | undefined;
        tiledversion?: string | undefined;
        tileheight?: number | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tilerendersize?: "grid" | "tile" | undefined;
        tiles?: {
            id: number;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            } | undefined;
            probability?: number | undefined;
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
            class?: string | undefined;
            terrain?: {
                name: string;
                tile: number;
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
            }[] | undefined;
            type?: string | undefined;
        }[] | undefined;
        tilewidth?: number | undefined;
        transformations?: {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        } | undefined;
        transparentcolor?: string | undefined;
        type?: "tileset" | undefined;
        class?: string | undefined;
        version?: string | number | undefined;
        wangsets?: {
            name: string;
            type: "corner" | "edge" | "mixed";
            tile: number;
            colors?: {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            wangtiles?: {
                tileid: number;
                wangid: number[];
            }[] | undefined;
            class?: string | undefined;
        }[] | undefined;
    }>, "many">;
    compressionlevel: z.ZodOptional<z.ZodNumber>;
    hexsidelength: z.ZodOptional<z.ZodNumber>;
    nextlayerid: z.ZodNumber;
    nextobjectid: z.ZodNumber;
    parallaxoriginx: z.ZodOptional<z.ZodNumber>;
    parallaxoriginy: z.ZodOptional<z.ZodNumber>;
    renderorder: z.ZodOptional<z.ZodEnum<["right-down", "right-up", "left-down", "left-up"]>>;
    staggeraxis: z.ZodOptional<z.ZodEnum<["x", "y"]>>;
    staggerindex: z.ZodOptional<z.ZodEnum<["odd", "even"]>>;
    layers: z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
        name: string;
        type: "tilelayer";
        height: number;
        id: number;
        startx: number;
        starty: number;
        width: number;
        opacity: number;
        visible: boolean;
        chunks: {
            data: number[];
            height: number;
            width: number;
            x: number;
            y: number;
        }[];
        x?: number | undefined;
        y?: number | undefined;
    }, {
        name: string;
        type: "tilelayer";
        height: number;
        id: number;
        startx: number;
        starty: number;
        width: number;
        opacity: number;
        visible: boolean;
        chunks: {
            data: number[];
            height: number;
            width: number;
            x: number;
            y: number;
        }[];
        x?: number | undefined;
        y?: number | undefined;
    }>, z.ZodObject<{
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
            x: number;
            y: number;
            visible: boolean;
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
            x: number;
            y: number;
            visible: boolean;
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
        type: "objectgroup";
        opacity: number;
        visible: boolean;
        objects: {
            name: string;
            id: number;
            x: number;
            y: number;
            visible: boolean;
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
        type: "objectgroup";
        opacity: number;
        visible: boolean;
        objects: {
            name: string;
            id: number;
            x: number;
            y: number;
            visible: boolean;
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
    }>]>, "many">;
    infinite: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    type: "map";
    height: number;
    width: number;
    layers: ({
        name: string;
        type: "tilelayer";
        height: number;
        id: number;
        startx: number;
        starty: number;
        width: number;
        opacity: number;
        visible: boolean;
        chunks: {
            data: number[];
            height: number;
            width: number;
            x: number;
            y: number;
        }[];
        x?: number | undefined;
        y?: number | undefined;
    } | {
        name: string;
        type: "objectgroup";
        opacity: number;
        visible: boolean;
        objects: {
            name: string;
            id: number;
            x: number;
            y: number;
            visible: boolean;
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
    })[];
    tiledversion: string;
    tilesets: {
        name: string;
        image: string;
        firstgid: number;
        tilecount: number;
        backgroundcolor?: string | undefined;
        columns?: number | undefined;
        fillmode?: "stretch" | "preserve-aspect-fit" | undefined;
        grid?: {
            height: number;
            width: number;
            orientation: "orthogonal" | "isometric";
        } | undefined;
        id?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        margin?: number | undefined;
        objectalignment?: string | undefined;
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
        spacing?: number | undefined;
        terrains?: {
            name: string;
            tile: number;
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
        }[] | undefined;
        tiledversion?: string | undefined;
        tileheight?: number | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tilerendersize?: "grid" | "tile" | undefined;
        tiles?: {
            id: number;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            } | undefined;
            probability?: number | undefined;
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
            class?: string | undefined;
            terrain?: {
                name: string;
                tile: number;
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
            }[] | undefined;
            type?: string | undefined;
        }[] | undefined;
        tilewidth?: number | undefined;
        transformations?: {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        } | undefined;
        transparentcolor?: string | undefined;
        type?: "tileset" | undefined;
        class?: string | undefined;
        version?: string | number | undefined;
        wangsets?: {
            name: string;
            type: "corner" | "edge" | "mixed";
            tile: number;
            colors?: {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            wangtiles?: {
                tileid: number;
                wangid: number[];
            }[] | undefined;
            class?: string | undefined;
        }[] | undefined;
    }[];
    infinite: true;
    nextlayerid: number;
    nextobjectid: number;
    class?: string | undefined;
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
    backgroundcolor?: string | undefined;
    orientation?: "orthogonal" | "isometric" | "staggered" | "hexagonal" | undefined;
    tileheight?: number | undefined;
    tilewidth?: number | undefined;
    version?: string | number | undefined;
    compressionlevel?: number | undefined;
    hexsidelength?: number | undefined;
    parallaxoriginx?: number | undefined;
    parallaxoriginy?: number | undefined;
    renderorder?: "right-down" | "right-up" | "left-down" | "left-up" | undefined;
    staggeraxis?: "x" | "y" | undefined;
    staggerindex?: "odd" | "even" | undefined;
}, {
    type: "map";
    height: number;
    width: number;
    layers: ({
        name: string;
        type: "tilelayer";
        height: number;
        id: number;
        startx: number;
        starty: number;
        width: number;
        opacity: number;
        visible: boolean;
        chunks: {
            data: number[];
            height: number;
            width: number;
            x: number;
            y: number;
        }[];
        x?: number | undefined;
        y?: number | undefined;
    } | {
        name: string;
        type: "objectgroup";
        opacity: number;
        visible: boolean;
        objects: {
            name: string;
            id: number;
            x: number;
            y: number;
            visible: boolean;
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
    })[];
    tiledversion: string;
    tilesets: {
        name: string;
        image: string;
        firstgid: number;
        tilecount: number;
        backgroundcolor?: string | undefined;
        columns?: number | undefined;
        fillmode?: "stretch" | "preserve-aspect-fit" | undefined;
        grid?: {
            height: number;
            width: number;
            orientation: "orthogonal" | "isometric";
        } | undefined;
        id?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        margin?: number | undefined;
        objectalignment?: string | undefined;
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
        spacing?: number | undefined;
        terrains?: {
            name: string;
            tile: number;
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
        }[] | undefined;
        tiledversion?: string | undefined;
        tileheight?: number | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tilerendersize?: "grid" | "tile" | undefined;
        tiles?: {
            id: number;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            } | undefined;
            probability?: number | undefined;
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
            class?: string | undefined;
            terrain?: {
                name: string;
                tile: number;
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
            }[] | undefined;
            type?: string | undefined;
        }[] | undefined;
        tilewidth?: number | undefined;
        transformations?: {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        } | undefined;
        transparentcolor?: string | undefined;
        type?: "tileset" | undefined;
        class?: string | undefined;
        version?: string | number | undefined;
        wangsets?: {
            name: string;
            type: "corner" | "edge" | "mixed";
            tile: number;
            colors?: {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            wangtiles?: {
                tileid: number;
                wangid: number[];
            }[] | undefined;
            class?: string | undefined;
        }[] | undefined;
    }[];
    infinite: true;
    nextlayerid: number;
    nextobjectid: number;
    class?: string | undefined;
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
    backgroundcolor?: string | undefined;
    orientation?: "orthogonal" | "isometric" | "staggered" | "hexagonal" | undefined;
    tileheight?: number | undefined;
    tilewidth?: number | undefined;
    version?: string | number | undefined;
    compressionlevel?: number | undefined;
    hexsidelength?: number | undefined;
    parallaxoriginx?: number | undefined;
    parallaxoriginy?: number | undefined;
    renderorder?: "right-down" | "right-up" | "left-down" | "left-up" | undefined;
    staggeraxis?: "x" | "y" | undefined;
    staggerindex?: "odd" | "even" | undefined;
}>;
export declare const ITiledRestrictedMap: z.ZodObject<{
    type: z.ZodLiteral<"map">;
    class: z.ZodOptional<z.ZodString>;
    height: z.ZodNumber;
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
    width: z.ZodNumber;
    tiledversion: z.ZodString;
    backgroundcolor: z.ZodOptional<z.ZodString>;
    orientation: z.ZodOptional<z.ZodEnum<["orthogonal", "isometric", "staggered", "hexagonal"]>>;
    tileheight: z.ZodOptional<z.ZodNumber>;
    tilewidth: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    tilesets: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        image: z.ZodString;
        backgroundcolor: z.ZodOptional<z.ZodString>;
        columns: z.ZodOptional<z.ZodNumber>;
        fillmode: z.ZodOptional<z.ZodEnum<["stretch", "preserve-aspect-fit"]>>;
        firstgid: z.ZodNumber;
        grid: z.ZodOptional<z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            orientation: z.ZodEnum<["orthogonal", "isometric"]>;
        }, "strip", z.ZodTypeAny, {
            height: number;
            width: number;
            orientation: "orthogonal" | "isometric";
        }, {
            height: number;
            width: number;
            orientation: "orthogonal" | "isometric";
        }>>;
        id: z.ZodOptional<z.ZodNumber>;
        imageheight: z.ZodOptional<z.ZodNumber>;
        imagewidth: z.ZodOptional<z.ZodNumber>;
        margin: z.ZodOptional<z.ZodNumber>;
        objectalignment: z.ZodOptional<z.ZodString>;
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
        spacing: z.ZodOptional<z.ZodNumber>;
        terrains: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tile: z.ZodNumber;
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
        }, "strip", z.ZodTypeAny, {
            name: string;
            tile: number;
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
        }, {
            name: string;
            tile: number;
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
        }>, "many">>;
        tilecount: z.ZodNumber;
        tiledversion: z.ZodOptional<z.ZodString>;
        tileheight: z.ZodOptional<z.ZodNumber>;
        tileoffset: z.ZodOptional<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>>;
        tilerendersize: z.ZodOptional<z.ZodEnum<["tile", "grid"]>>;
        tiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            animation: z.ZodOptional<z.ZodArray<z.ZodObject<{
                duration: z.ZodNumber;
                tileid: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                duration: number;
                tileid: number;
            }, {
                duration: number;
                tileid: number;
            }>, "many">>;
            image: z.ZodOptional<z.ZodString>;
            imageheight: z.ZodOptional<z.ZodNumber>;
            imagewidth: z.ZodOptional<z.ZodNumber>;
            x: z.ZodOptional<z.ZodNumber>;
            y: z.ZodOptional<z.ZodNumber>;
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            objectgroup: z.ZodOptional<z.ZodObject<{
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
                    x: number;
                    y: number;
                    visible: boolean;
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
                    x: number;
                    y: number;
                    visible: boolean;
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
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            }>>;
            probability: z.ZodOptional<z.ZodNumber>;
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
            class: z.ZodOptional<z.ZodString>;
            terrain: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                tile: z.ZodNumber;
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
            }, "strip", z.ZodTypeAny, {
                name: string;
                tile: number;
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
            }, {
                name: string;
                tile: number;
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
            }>, "many">>;
            type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: number;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            } | undefined;
            probability?: number | undefined;
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
            class?: string | undefined;
            terrain?: {
                name: string;
                tile: number;
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
            }[] | undefined;
            type?: string | undefined;
        }, {
            id: number;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            } | undefined;
            probability?: number | undefined;
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
            class?: string | undefined;
            terrain?: {
                name: string;
                tile: number;
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
            }[] | undefined;
            type?: string | undefined;
        }>, "many">>;
        tilewidth: z.ZodOptional<z.ZodNumber>;
        transformations: z.ZodOptional<z.ZodObject<{
            hflip: z.ZodOptional<z.ZodBoolean>;
            vflip: z.ZodOptional<z.ZodBoolean>;
            rotate: z.ZodOptional<z.ZodBoolean>;
            preferuntransformed: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        }, {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        }>>;
        transparentcolor: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodLiteral<"tileset">>;
        class: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        wangsets: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                type: z.ZodOptional<z.ZodString>;
                class: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
            }, {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            name: string;
            type: "corner" | "edge" | "mixed";
            tile: number;
            colors?: {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            wangtiles?: {
                tileid: number;
                wangid: number[];
            }[] | undefined;
            class?: string | undefined;
        }, {
            name: string;
            type: "corner" | "edge" | "mixed";
            tile: number;
            colors?: {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            wangtiles?: {
                tileid: number;
                wangid: number[];
            }[] | undefined;
            class?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        image: string;
        firstgid: number;
        tilecount: number;
        backgroundcolor?: string | undefined;
        columns?: number | undefined;
        fillmode?: "stretch" | "preserve-aspect-fit" | undefined;
        grid?: {
            height: number;
            width: number;
            orientation: "orthogonal" | "isometric";
        } | undefined;
        id?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        margin?: number | undefined;
        objectalignment?: string | undefined;
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
        spacing?: number | undefined;
        terrains?: {
            name: string;
            tile: number;
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
        }[] | undefined;
        tiledversion?: string | undefined;
        tileheight?: number | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tilerendersize?: "grid" | "tile" | undefined;
        tiles?: {
            id: number;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            } | undefined;
            probability?: number | undefined;
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
            class?: string | undefined;
            terrain?: {
                name: string;
                tile: number;
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
            }[] | undefined;
            type?: string | undefined;
        }[] | undefined;
        tilewidth?: number | undefined;
        transformations?: {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        } | undefined;
        transparentcolor?: string | undefined;
        type?: "tileset" | undefined;
        class?: string | undefined;
        version?: string | number | undefined;
        wangsets?: {
            name: string;
            type: "corner" | "edge" | "mixed";
            tile: number;
            colors?: {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            wangtiles?: {
                tileid: number;
                wangid: number[];
            }[] | undefined;
            class?: string | undefined;
        }[] | undefined;
    }, {
        name: string;
        image: string;
        firstgid: number;
        tilecount: number;
        backgroundcolor?: string | undefined;
        columns?: number | undefined;
        fillmode?: "stretch" | "preserve-aspect-fit" | undefined;
        grid?: {
            height: number;
            width: number;
            orientation: "orthogonal" | "isometric";
        } | undefined;
        id?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        margin?: number | undefined;
        objectalignment?: string | undefined;
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
        spacing?: number | undefined;
        terrains?: {
            name: string;
            tile: number;
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
        }[] | undefined;
        tiledversion?: string | undefined;
        tileheight?: number | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tilerendersize?: "grid" | "tile" | undefined;
        tiles?: {
            id: number;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            } | undefined;
            probability?: number | undefined;
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
            class?: string | undefined;
            terrain?: {
                name: string;
                tile: number;
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
            }[] | undefined;
            type?: string | undefined;
        }[] | undefined;
        tilewidth?: number | undefined;
        transformations?: {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        } | undefined;
        transparentcolor?: string | undefined;
        type?: "tileset" | undefined;
        class?: string | undefined;
        version?: string | number | undefined;
        wangsets?: {
            name: string;
            type: "corner" | "edge" | "mixed";
            tile: number;
            colors?: {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            wangtiles?: {
                tileid: number;
                wangid: number[];
            }[] | undefined;
            class?: string | undefined;
        }[] | undefined;
    }>, "many">;
    compressionlevel: z.ZodOptional<z.ZodNumber>;
    hexsidelength: z.ZodOptional<z.ZodNumber>;
    nextlayerid: z.ZodNumber;
    nextobjectid: z.ZodNumber;
    parallaxoriginx: z.ZodOptional<z.ZodNumber>;
    parallaxoriginy: z.ZodOptional<z.ZodNumber>;
    renderorder: z.ZodOptional<z.ZodEnum<["right-down", "right-up", "left-down", "left-up"]>>;
    staggeraxis: z.ZodOptional<z.ZodEnum<["x", "y"]>>;
    staggerindex: z.ZodOptional<z.ZodEnum<["odd", "even"]>>;
    layers: z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
        tintcolor: z.ZodOptional<z.ZodString>;
        class: z.ZodOptional<z.ZodString>;
        x: z.ZodOptional<z.ZodNumber>;
        y: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "tilelayer";
        data: number[];
        height: number;
        id: number;
        width: number;
        opacity: number;
        visible: boolean;
        compression?: string | undefined;
        encoding?: "csv" | "base64" | undefined;
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
        tintcolor?: string | undefined;
        class?: string | undefined;
        x?: number | undefined;
        y?: number | undefined;
    }, {
        name: string;
        type: "tilelayer";
        data: number[];
        height: number;
        id: number;
        width: number;
        opacity: number;
        visible: boolean;
        compression?: string | undefined;
        encoding?: "csv" | "base64" | undefined;
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
        tintcolor?: string | undefined;
        class?: string | undefined;
        x?: number | undefined;
        y?: number | undefined;
    }>, z.ZodObject<{
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
            x: number;
            y: number;
            visible: boolean;
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
            x: number;
            y: number;
            visible: boolean;
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
        type: "objectgroup";
        opacity: number;
        visible: boolean;
        objects: {
            name: string;
            id: number;
            x: number;
            y: number;
            visible: boolean;
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
        type: "objectgroup";
        opacity: number;
        visible: boolean;
        objects: {
            name: string;
            id: number;
            x: number;
            y: number;
            visible: boolean;
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
    }>]>, "many">;
    infinite: z.ZodLiteral<false>;
}, "strip", z.ZodTypeAny, {
    type: "map";
    height: number;
    width: number;
    layers: ({
        name: string;
        type: "tilelayer";
        data: number[];
        height: number;
        id: number;
        width: number;
        opacity: number;
        visible: boolean;
        compression?: string | undefined;
        encoding?: "csv" | "base64" | undefined;
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
        tintcolor?: string | undefined;
        class?: string | undefined;
        x?: number | undefined;
        y?: number | undefined;
    } | {
        name: string;
        type: "objectgroup";
        opacity: number;
        visible: boolean;
        objects: {
            name: string;
            id: number;
            x: number;
            y: number;
            visible: boolean;
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
    })[];
    tiledversion: string;
    tilesets: {
        name: string;
        image: string;
        firstgid: number;
        tilecount: number;
        backgroundcolor?: string | undefined;
        columns?: number | undefined;
        fillmode?: "stretch" | "preserve-aspect-fit" | undefined;
        grid?: {
            height: number;
            width: number;
            orientation: "orthogonal" | "isometric";
        } | undefined;
        id?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        margin?: number | undefined;
        objectalignment?: string | undefined;
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
        spacing?: number | undefined;
        terrains?: {
            name: string;
            tile: number;
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
        }[] | undefined;
        tiledversion?: string | undefined;
        tileheight?: number | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tilerendersize?: "grid" | "tile" | undefined;
        tiles?: {
            id: number;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            } | undefined;
            probability?: number | undefined;
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
            class?: string | undefined;
            terrain?: {
                name: string;
                tile: number;
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
            }[] | undefined;
            type?: string | undefined;
        }[] | undefined;
        tilewidth?: number | undefined;
        transformations?: {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        } | undefined;
        transparentcolor?: string | undefined;
        type?: "tileset" | undefined;
        class?: string | undefined;
        version?: string | number | undefined;
        wangsets?: {
            name: string;
            type: "corner" | "edge" | "mixed";
            tile: number;
            colors?: {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            wangtiles?: {
                tileid: number;
                wangid: number[];
            }[] | undefined;
            class?: string | undefined;
        }[] | undefined;
    }[];
    infinite: false;
    nextlayerid: number;
    nextobjectid: number;
    class?: string | undefined;
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
    backgroundcolor?: string | undefined;
    orientation?: "orthogonal" | "isometric" | "staggered" | "hexagonal" | undefined;
    tileheight?: number | undefined;
    tilewidth?: number | undefined;
    version?: string | number | undefined;
    compressionlevel?: number | undefined;
    hexsidelength?: number | undefined;
    parallaxoriginx?: number | undefined;
    parallaxoriginy?: number | undefined;
    renderorder?: "right-down" | "right-up" | "left-down" | "left-up" | undefined;
    staggeraxis?: "x" | "y" | undefined;
    staggerindex?: "odd" | "even" | undefined;
}, {
    type: "map";
    height: number;
    width: number;
    layers: ({
        name: string;
        type: "tilelayer";
        data: number[];
        height: number;
        id: number;
        width: number;
        opacity: number;
        visible: boolean;
        compression?: string | undefined;
        encoding?: "csv" | "base64" | undefined;
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
        tintcolor?: string | undefined;
        class?: string | undefined;
        x?: number | undefined;
        y?: number | undefined;
    } | {
        name: string;
        type: "objectgroup";
        opacity: number;
        visible: boolean;
        objects: {
            name: string;
            id: number;
            x: number;
            y: number;
            visible: boolean;
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
    })[];
    tiledversion: string;
    tilesets: {
        name: string;
        image: string;
        firstgid: number;
        tilecount: number;
        backgroundcolor?: string | undefined;
        columns?: number | undefined;
        fillmode?: "stretch" | "preserve-aspect-fit" | undefined;
        grid?: {
            height: number;
            width: number;
            orientation: "orthogonal" | "isometric";
        } | undefined;
        id?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        margin?: number | undefined;
        objectalignment?: string | undefined;
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
        spacing?: number | undefined;
        terrains?: {
            name: string;
            tile: number;
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
        }[] | undefined;
        tiledversion?: string | undefined;
        tileheight?: number | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tilerendersize?: "grid" | "tile" | undefined;
        tiles?: {
            id: number;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                opacity: number;
                visible: boolean;
                objects: {
                    name: string;
                    id: number;
                    x: number;
                    y: number;
                    visible: boolean;
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
            } | undefined;
            probability?: number | undefined;
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
            class?: string | undefined;
            terrain?: {
                name: string;
                tile: number;
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
            }[] | undefined;
            type?: string | undefined;
        }[] | undefined;
        tilewidth?: number | undefined;
        transformations?: {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        } | undefined;
        transparentcolor?: string | undefined;
        type?: "tileset" | undefined;
        class?: string | undefined;
        version?: string | number | undefined;
        wangsets?: {
            name: string;
            type: "corner" | "edge" | "mixed";
            tile: number;
            colors?: {
                name: string;
                color: string;
                tile: number;
                probability: number;
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
                type?: string | undefined;
                class?: string | undefined;
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
            wangtiles?: {
                tileid: number;
                wangid: number[];
            }[] | undefined;
            class?: string | undefined;
        }[] | undefined;
    }[];
    infinite: false;
    nextlayerid: number;
    nextobjectid: number;
    class?: string | undefined;
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
    backgroundcolor?: string | undefined;
    orientation?: "orthogonal" | "isometric" | "staggered" | "hexagonal" | undefined;
    tileheight?: number | undefined;
    tilewidth?: number | undefined;
    version?: string | number | undefined;
    compressionlevel?: number | undefined;
    hexsidelength?: number | undefined;
    parallaxoriginx?: number | undefined;
    parallaxoriginy?: number | undefined;
    renderorder?: "right-down" | "right-up" | "left-down" | "left-up" | undefined;
    staggeraxis?: "x" | "y" | undefined;
    staggerindex?: "odd" | "even" | undefined;
}>;
export type ITiledMap = z.infer<typeof ITiledMap>;
export type ITiledInfiniteMap = z.infer<typeof ITiledInfiniteMap>;
export type ITiledRestrictedMap = z.infer<typeof ITiledRestrictedMap>;
