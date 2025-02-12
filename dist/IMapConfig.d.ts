import { z } from 'zod';
import { LayerDepth } from './UtilityTypes';
export declare const MapConfigSchema: z.ZodObject<{
    tilesets: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        image: z.ZodString;
        backgroundcolor: z.ZodOptional<z.ZodString>;
        columns: z.ZodOptional<z.ZodNumber>;
        fillmode: z.ZodOptional<z.ZodEnum<["stretch", "preserve-aspect-fit"]>>;
        grid: z.ZodOptional<z.ZodObject<{
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
        }, "strip", z.ZodTypeAny, {
            name: string;
            tile: number;
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
            tile: number;
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
                        color?: string | undefined;
                        bold?: boolean | undefined;
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
                        color?: string | undefined;
                        bold?: boolean | undefined;
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
                    x: number;
                    y: number;
                    id: number;
                    visible: boolean;
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
                    width?: number | undefined;
                    height?: number | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        bold?: boolean | undefined;
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
                    ellipse?: boolean | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    rotation?: number | undefined;
                    template?: string | undefined;
                }, {
                    name: string;
                    x: number;
                    y: number;
                    id: number;
                    visible: boolean;
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
                    width?: number | undefined;
                    height?: number | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        bold?: boolean | undefined;
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
                    ellipse?: boolean | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    rotation?: number | undefined;
                    template?: string | undefined;
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
                startx: z.ZodOptional<z.ZodNumber>;
                starty: z.ZodOptional<z.ZodNumber>;
                tintcolor: z.ZodOptional<z.ZodString>;
                width: z.ZodOptional<z.ZodNumber>;
                class: z.ZodOptional<z.ZodString>;
                x: z.ZodOptional<z.ZodNumber>;
                y: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                type: "objectgroup";
                name: string;
                visible: boolean;
                objects: {
                    name: string;
                    x: number;
                    y: number;
                    id: number;
                    visible: boolean;
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
                    width?: number | undefined;
                    height?: number | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        bold?: boolean | undefined;
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
                    ellipse?: boolean | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    rotation?: number | undefined;
                    template?: string | undefined;
                }[];
                opacity: number;
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
                width?: number | undefined;
                height?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                draworder?: string | undefined;
                offsetx?: number | undefined;
                offsety?: number | undefined;
                parallaxx?: number | undefined;
                parallaxy?: number | undefined;
                startx?: number | undefined;
                starty?: number | undefined;
                tintcolor?: string | undefined;
            }, {
                type: "objectgroup";
                name: string;
                visible: boolean;
                objects: {
                    name: string;
                    x: number;
                    y: number;
                    id: number;
                    visible: boolean;
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
                    width?: number | undefined;
                    height?: number | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        bold?: boolean | undefined;
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
                    ellipse?: boolean | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    rotation?: number | undefined;
                    template?: string | undefined;
                }[];
                opacity: number;
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
                width?: number | undefined;
                height?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                draworder?: string | undefined;
                offsetx?: number | undefined;
                offsety?: number | undefined;
                parallaxx?: number | undefined;
                parallaxy?: number | undefined;
                startx?: number | undefined;
                starty?: number | undefined;
                tintcolor?: string | undefined;
            }>>;
            probability: z.ZodOptional<z.ZodNumber>;
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
            }, "strip", z.ZodTypeAny, {
                name: string;
                tile: number;
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
                tile: number;
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
            type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: number;
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
            width?: number | undefined;
            height?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            objectgroup?: {
                type: "objectgroup";
                name: string;
                visible: boolean;
                objects: {
                    name: string;
                    x: number;
                    y: number;
                    id: number;
                    visible: boolean;
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
                    width?: number | undefined;
                    height?: number | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        bold?: boolean | undefined;
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
                    ellipse?: boolean | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    rotation?: number | undefined;
                    template?: string | undefined;
                }[];
                opacity: number;
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
                width?: number | undefined;
                height?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                draworder?: string | undefined;
                offsetx?: number | undefined;
                offsety?: number | undefined;
                parallaxx?: number | undefined;
                parallaxy?: number | undefined;
                startx?: number | undefined;
                starty?: number | undefined;
                tintcolor?: string | undefined;
            } | undefined;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            probability?: number | undefined;
            terrain?: {
                name: string;
                tile: number;
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
        }, {
            id: number;
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
            width?: number | undefined;
            height?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            objectgroup?: {
                type: "objectgroup";
                name: string;
                visible: boolean;
                objects: {
                    name: string;
                    x: number;
                    y: number;
                    id: number;
                    visible: boolean;
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
                    width?: number | undefined;
                    height?: number | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        bold?: boolean | undefined;
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
                    ellipse?: boolean | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    rotation?: number | undefined;
                    template?: string | undefined;
                }[];
                opacity: number;
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
                width?: number | undefined;
                height?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                draworder?: string | undefined;
                offsetx?: number | undefined;
                offsety?: number | undefined;
                parallaxx?: number | undefined;
                parallaxy?: number | undefined;
                startx?: number | undefined;
                starty?: number | undefined;
                tintcolor?: string | undefined;
            } | undefined;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            probability?: number | undefined;
            terrain?: {
                name: string;
                tile: number;
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
        }>, "many">>;
    }, {
        firstgid: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        name: string;
        image: string;
        tilecount: number;
        firstgid: number;
        type?: "tileset" | undefined;
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
        id?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        backgroundcolor?: string | undefined;
        columns?: number | undefined;
        fillmode?: "stretch" | "preserve-aspect-fit" | undefined;
        grid?: {
            width: number;
            height: number;
            orientation: "orthogonal" | "isometric";
        } | undefined;
        margin?: number | undefined;
        objectalignment?: string | undefined;
        spacing?: number | undefined;
        terrains?: {
            name: string;
            tile: number;
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
        tiledversion?: string | undefined;
        tileheight?: number | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tilerendersize?: "tile" | "grid" | undefined;
        tiles?: {
            id: number;
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
            width?: number | undefined;
            height?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            objectgroup?: {
                type: "objectgroup";
                name: string;
                visible: boolean;
                objects: {
                    name: string;
                    x: number;
                    y: number;
                    id: number;
                    visible: boolean;
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
                    width?: number | undefined;
                    height?: number | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        bold?: boolean | undefined;
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
                    ellipse?: boolean | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    rotation?: number | undefined;
                    template?: string | undefined;
                }[];
                opacity: number;
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
                width?: number | undefined;
                height?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                draworder?: string | undefined;
                offsetx?: number | undefined;
                offsety?: number | undefined;
                parallaxx?: number | undefined;
                parallaxy?: number | undefined;
                startx?: number | undefined;
                starty?: number | undefined;
                tintcolor?: string | undefined;
            } | undefined;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            probability?: number | undefined;
            terrain?: {
                name: string;
                tile: number;
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
        }[] | undefined;
        tilewidth?: number | undefined;
        transformations?: {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        } | undefined;
        transparentcolor?: string | undefined;
        version?: string | number | undefined;
        wangsets?: {
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
        }[] | undefined;
    }, {
        name: string;
        image: string;
        tilecount: number;
        firstgid: number;
        type?: "tileset" | undefined;
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
        id?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        backgroundcolor?: string | undefined;
        columns?: number | undefined;
        fillmode?: "stretch" | "preserve-aspect-fit" | undefined;
        grid?: {
            width: number;
            height: number;
            orientation: "orthogonal" | "isometric";
        } | undefined;
        margin?: number | undefined;
        objectalignment?: string | undefined;
        spacing?: number | undefined;
        terrains?: {
            name: string;
            tile: number;
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
        tiledversion?: string | undefined;
        tileheight?: number | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tilerendersize?: "tile" | "grid" | undefined;
        tiles?: {
            id: number;
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
            width?: number | undefined;
            height?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            objectgroup?: {
                type: "objectgroup";
                name: string;
                visible: boolean;
                objects: {
                    name: string;
                    x: number;
                    y: number;
                    id: number;
                    visible: boolean;
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
                    width?: number | undefined;
                    height?: number | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        bold?: boolean | undefined;
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
                    ellipse?: boolean | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    rotation?: number | undefined;
                    template?: string | undefined;
                }[];
                opacity: number;
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
                width?: number | undefined;
                height?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                draworder?: string | undefined;
                offsetx?: number | undefined;
                offsety?: number | undefined;
                parallaxx?: number | undefined;
                parallaxy?: number | undefined;
                startx?: number | undefined;
                starty?: number | undefined;
                tintcolor?: string | undefined;
            } | undefined;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            probability?: number | undefined;
            terrain?: {
                name: string;
                tile: number;
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
        }[] | undefined;
        tilewidth?: number | undefined;
        transformations?: {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        } | undefined;
        transparentcolor?: string | undefined;
        version?: string | number | undefined;
        wangsets?: {
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
        }[] | undefined;
    }>, "many">;
    nbChunks: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    chunkSize: z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>;
    mapSize: z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>;
    objectTypes: z.ZodArray<z.ZodString, "many">;
    tileLayersDepth: z.ZodRecord<z.ZodString, z.ZodNativeEnum<typeof LayerDepth>>;
}, "strip", z.ZodTypeAny, {
    tilesets: {
        name: string;
        image: string;
        tilecount: number;
        firstgid: number;
        type?: "tileset" | undefined;
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
        id?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        backgroundcolor?: string | undefined;
        columns?: number | undefined;
        fillmode?: "stretch" | "preserve-aspect-fit" | undefined;
        grid?: {
            width: number;
            height: number;
            orientation: "orthogonal" | "isometric";
        } | undefined;
        margin?: number | undefined;
        objectalignment?: string | undefined;
        spacing?: number | undefined;
        terrains?: {
            name: string;
            tile: number;
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
        tiledversion?: string | undefined;
        tileheight?: number | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tilerendersize?: "tile" | "grid" | undefined;
        tiles?: {
            id: number;
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
            width?: number | undefined;
            height?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            objectgroup?: {
                type: "objectgroup";
                name: string;
                visible: boolean;
                objects: {
                    name: string;
                    x: number;
                    y: number;
                    id: number;
                    visible: boolean;
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
                    width?: number | undefined;
                    height?: number | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        bold?: boolean | undefined;
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
                    ellipse?: boolean | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    rotation?: number | undefined;
                    template?: string | undefined;
                }[];
                opacity: number;
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
                width?: number | undefined;
                height?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                draworder?: string | undefined;
                offsetx?: number | undefined;
                offsety?: number | undefined;
                parallaxx?: number | undefined;
                parallaxy?: number | undefined;
                startx?: number | undefined;
                starty?: number | undefined;
                tintcolor?: string | undefined;
            } | undefined;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            probability?: number | undefined;
            terrain?: {
                name: string;
                tile: number;
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
        }[] | undefined;
        tilewidth?: number | undefined;
        transformations?: {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        } | undefined;
        transparentcolor?: string | undefined;
        version?: string | number | undefined;
        wangsets?: {
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
        }[] | undefined;
    }[];
    nbChunks: {
        x: number;
        y: number;
    };
    chunkSize: {
        width: number;
        height: number;
    };
    mapSize: {
        width: number;
        height: number;
    };
    objectTypes: string[];
    tileLayersDepth: Record<string, LayerDepth>;
}, {
    tilesets: {
        name: string;
        image: string;
        tilecount: number;
        firstgid: number;
        type?: "tileset" | undefined;
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
        id?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        backgroundcolor?: string | undefined;
        columns?: number | undefined;
        fillmode?: "stretch" | "preserve-aspect-fit" | undefined;
        grid?: {
            width: number;
            height: number;
            orientation: "orthogonal" | "isometric";
        } | undefined;
        margin?: number | undefined;
        objectalignment?: string | undefined;
        spacing?: number | undefined;
        terrains?: {
            name: string;
            tile: number;
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
        tiledversion?: string | undefined;
        tileheight?: number | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tilerendersize?: "tile" | "grid" | undefined;
        tiles?: {
            id: number;
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
            width?: number | undefined;
            height?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            objectgroup?: {
                type: "objectgroup";
                name: string;
                visible: boolean;
                objects: {
                    name: string;
                    x: number;
                    y: number;
                    id: number;
                    visible: boolean;
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
                    width?: number | undefined;
                    height?: number | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        bold?: boolean | undefined;
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
                    ellipse?: boolean | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    rotation?: number | undefined;
                    template?: string | undefined;
                }[];
                opacity: number;
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
                width?: number | undefined;
                height?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                draworder?: string | undefined;
                offsetx?: number | undefined;
                offsety?: number | undefined;
                parallaxx?: number | undefined;
                parallaxy?: number | undefined;
                startx?: number | undefined;
                starty?: number | undefined;
                tintcolor?: string | undefined;
            } | undefined;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            image?: string | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
            probability?: number | undefined;
            terrain?: {
                name: string;
                tile: number;
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
        }[] | undefined;
        tilewidth?: number | undefined;
        transformations?: {
            hflip?: boolean | undefined;
            vflip?: boolean | undefined;
            rotate?: boolean | undefined;
            preferuntransformed?: boolean | undefined;
        } | undefined;
        transparentcolor?: string | undefined;
        version?: string | number | undefined;
        wangsets?: {
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
        }[] | undefined;
    }[];
    nbChunks: {
        x: number;
        y: number;
    };
    chunkSize: {
        width: number;
        height: number;
    };
    mapSize: {
        width: number;
        height: number;
    };
    objectTypes: string[];
    tileLayersDepth: Record<string, LayerDepth>;
}>;
export type MapConfig = z.infer<typeof MapConfigSchema>;
