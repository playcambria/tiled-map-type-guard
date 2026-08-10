import { z } from 'zod';

declare const ITiledMapChunk: z.ZodObject<{
    data: z.ZodArray<z.ZodNumber>;
    height: z.ZodNumber;
    width: z.ZodNumber;
    x: z.ZodNumber;
    y: z.ZodNumber;
}, z.core.$strip>;
type ITiledMapChunk = z.infer<typeof ITiledMapChunk>;

declare const ITiledMapFrame: z.ZodObject<{
    duration: z.ZodNumber;
    tileid: z.ZodNumber;
}, z.core.$strip>;
type ITiledMapFrame = z.infer<typeof ITiledMapFrame>;

declare const ITiledMapGrid: z.ZodObject<{
    width: z.ZodNumber;
    height: z.ZodNumber;
    orientation: z.ZodEnum<{
        orthogonal: "orthogonal";
        isometric: "isometric";
    }>;
}, z.core.$strip>;
type ITiledMapGrid = z.infer<typeof ITiledMapGrid>;

declare const literalSchema: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodNull]>;
type Literal = z.infer<typeof literalSchema>;
type Json = Literal | {
    [key: string]: Json;
} | Json[];
declare const ITiledMapProperty: z.ZodUnion<readonly [z.ZodObject<{
    name: z.ZodString;
    type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
    value: z.ZodOptional<z.ZodString>;
    propertytype: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
    value: z.ZodOptional<z.ZodNumber>;
    propertytype: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodLiteral<"float">;
    value: z.ZodOptional<z.ZodNumber>;
    propertytype: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodLiteral<"bool">;
    value: z.ZodOptional<z.ZodBoolean>;
    propertytype: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodLiteral<"class">;
    value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
    propertytype: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>;
type ITiledMapProperty = z.infer<typeof ITiledMapProperty>;

declare const ITiledMapImageLayer: z.ZodObject<{
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
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    repeatx: z.ZodOptional<z.ZodBoolean>;
    repeaty: z.ZodOptional<z.ZodBoolean>;
    startx: z.ZodOptional<z.ZodNumber>;
    starty: z.ZodOptional<z.ZodNumber>;
    tintcolor: z.ZodOptional<z.ZodString>;
    class: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<z.ZodNumber>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
type ITiledMapImageLayer = z.infer<typeof ITiledMapImageLayer>;

declare const ITiledMapObject: z.ZodObject<{
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
    }, z.core.$strip>>>;
    polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strip>>>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    rotation: z.ZodOptional<z.ZodNumber>;
    template: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodObject<{
        text: z.ZodString;
        bold: z.ZodOptional<z.ZodBoolean>;
        color: z.ZodOptional<z.ZodString>;
        fontfamily: z.ZodOptional<z.ZodString>;
        halign: z.ZodOptional<z.ZodEnum<{
            center: "center";
            right: "right";
            justify: "justify";
            left: "left";
        }>>;
        italic: z.ZodOptional<z.ZodBoolean>;
        kerning: z.ZodOptional<z.ZodBoolean>;
        pixelsize: z.ZodOptional<z.ZodNumber>;
        strikeout: z.ZodOptional<z.ZodBoolean>;
        underline: z.ZodOptional<z.ZodBoolean>;
        valign: z.ZodOptional<z.ZodEnum<{
            center: "center";
            bottom: "bottom";
            top: "top";
        }>>;
        wrap: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    type: z.ZodOptional<z.ZodString>;
    class: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
type ITiledMapObject = z.infer<typeof ITiledMapObject>;

interface TiledMapGroupLayerOptional {
    height: number;
    draworder: string;
    id: number;
    class: string;
    offsetx: number;
    offsety: number;
    parallaxx: number;
    parallaxy: number;
    properties: ITiledMapProperty[];
    startx: number;
    starty: number;
    tintcolor: string;
    width: number;
    x: number;
    y: number;
}
interface TiledMapGroupLayer extends Partial<TiledMapGroupLayerOptional> {
    opacity: number;
    name: string;
    visible: boolean;
    type: 'group';
    layers: ITiledMapLayer[];
}
declare const ITiledMapGroupLayer: z.ZodType<TiledMapGroupLayer>;
type ITiledMapGroupLayer = z.infer<typeof ITiledMapGroupLayer>;

declare const ITiledMapLayer: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodObject<{
    chunks: z.ZodArray<z.ZodObject<{
        data: z.ZodArray<z.ZodNumber>;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strip>>;
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
}, z.core.$strip>, z.ZodObject<{
    data: z.ZodArray<z.ZodNumber>;
    height: z.ZodNumber;
    id: z.ZodNumber;
    name: z.ZodString;
    opacity: z.ZodNumber;
    type: z.ZodLiteral<"tilelayer">;
    visible: z.ZodBoolean;
    width: z.ZodNumber;
    compression: z.ZodOptional<z.ZodString>;
    encoding: z.ZodOptional<z.ZodEnum<{
        csv: "csv";
        base64: "base64";
    }>>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    tintcolor: z.ZodOptional<z.ZodString>;
    class: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>]>, z.ZodObject<{
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
        }, z.core.$strip>>>;
        polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>>>;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        template: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodObject<{
            text: z.ZodString;
            bold: z.ZodOptional<z.ZodBoolean>;
            color: z.ZodOptional<z.ZodString>;
            fontfamily: z.ZodOptional<z.ZodString>;
            halign: z.ZodOptional<z.ZodEnum<{
                center: "center";
                right: "right";
                justify: "justify";
                left: "left";
            }>>;
            italic: z.ZodOptional<z.ZodBoolean>;
            kerning: z.ZodOptional<z.ZodBoolean>;
            pixelsize: z.ZodOptional<z.ZodNumber>;
            strikeout: z.ZodOptional<z.ZodBoolean>;
            underline: z.ZodOptional<z.ZodBoolean>;
            valign: z.ZodOptional<z.ZodEnum<{
                center: "center";
                bottom: "bottom";
                top: "top";
            }>>;
            wrap: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        type: z.ZodOptional<z.ZodString>;
        class: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
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
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    startx: z.ZodOptional<z.ZodNumber>;
    starty: z.ZodOptional<z.ZodNumber>;
    tintcolor: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<z.ZodNumber>;
    class: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodType<TiledMapGroupLayer, unknown, z.core.$ZodTypeInternals<TiledMapGroupLayer, unknown>>]>;
type ITiledMapLayer = z.infer<typeof ITiledMapLayer>;

declare const ITiledMapObjectLayer: z.ZodObject<{
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
        }, z.core.$strip>>>;
        polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>>>;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        template: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodObject<{
            text: z.ZodString;
            bold: z.ZodOptional<z.ZodBoolean>;
            color: z.ZodOptional<z.ZodString>;
            fontfamily: z.ZodOptional<z.ZodString>;
            halign: z.ZodOptional<z.ZodEnum<{
                center: "center";
                right: "right";
                justify: "justify";
                left: "left";
            }>>;
            italic: z.ZodOptional<z.ZodBoolean>;
            kerning: z.ZodOptional<z.ZodBoolean>;
            pixelsize: z.ZodOptional<z.ZodNumber>;
            strikeout: z.ZodOptional<z.ZodBoolean>;
            underline: z.ZodOptional<z.ZodBoolean>;
            valign: z.ZodOptional<z.ZodEnum<{
                center: "center";
                bottom: "bottom";
                top: "top";
            }>>;
            wrap: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        type: z.ZodOptional<z.ZodString>;
        class: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
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
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    startx: z.ZodOptional<z.ZodNumber>;
    starty: z.ZodOptional<z.ZodNumber>;
    tintcolor: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<z.ZodNumber>;
    class: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
type ITiledMapObjectLayer = z.infer<typeof ITiledMapObjectLayer>;

declare const ITiledMapOffset: z.ZodObject<{
    x: z.ZodNumber;
    y: z.ZodNumber;
}, z.core.$strip>;
type ITiledMapOffset = z.infer<typeof ITiledMapOffset>;

declare const ITiledMapPoint: z.ZodObject<{
    x: z.ZodNumber;
    y: z.ZodNumber;
}, z.core.$strip>;
type ITiledMapPoint = z.infer<typeof ITiledMapPoint>;

declare const ITiledMapTerrain: z.ZodObject<{
    name: z.ZodString;
    tile: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
}, z.core.$strip>;
type ITiledMapTerrain = z.infer<typeof ITiledMapTerrain>;

declare const ITiledMapText: z.ZodObject<{
    text: z.ZodString;
    bold: z.ZodOptional<z.ZodBoolean>;
    color: z.ZodOptional<z.ZodString>;
    fontfamily: z.ZodOptional<z.ZodString>;
    halign: z.ZodOptional<z.ZodEnum<{
        center: "center";
        right: "right";
        justify: "justify";
        left: "left";
    }>>;
    italic: z.ZodOptional<z.ZodBoolean>;
    kerning: z.ZodOptional<z.ZodBoolean>;
    pixelsize: z.ZodOptional<z.ZodNumber>;
    strikeout: z.ZodOptional<z.ZodBoolean>;
    underline: z.ZodOptional<z.ZodBoolean>;
    valign: z.ZodOptional<z.ZodEnum<{
        center: "center";
        bottom: "bottom";
        top: "top";
    }>>;
    wrap: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
type ITiledMapText = z.infer<typeof ITiledMapText>;

declare const ITiledMapTile: z.ZodObject<{
    id: z.ZodNumber;
    animation: z.ZodOptional<z.ZodArray<z.ZodObject<{
        duration: z.ZodNumber;
        tileid: z.ZodNumber;
    }, z.core.$strip>>>;
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
            }, z.core.$strip>>>;
            polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, z.core.$strip>>>;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
            rotation: z.ZodOptional<z.ZodNumber>;
            template: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodObject<{
                text: z.ZodString;
                bold: z.ZodOptional<z.ZodBoolean>;
                color: z.ZodOptional<z.ZodString>;
                fontfamily: z.ZodOptional<z.ZodString>;
                halign: z.ZodOptional<z.ZodEnum<{
                    center: "center";
                    right: "right";
                    justify: "justify";
                    left: "left";
                }>>;
                italic: z.ZodOptional<z.ZodBoolean>;
                kerning: z.ZodOptional<z.ZodBoolean>;
                pixelsize: z.ZodOptional<z.ZodNumber>;
                strikeout: z.ZodOptional<z.ZodBoolean>;
                underline: z.ZodOptional<z.ZodBoolean>;
                valign: z.ZodOptional<z.ZodEnum<{
                    center: "center";
                    bottom: "bottom";
                    top: "top";
                }>>;
                wrap: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            type: z.ZodOptional<z.ZodString>;
            class: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
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
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        startx: z.ZodOptional<z.ZodNumber>;
        starty: z.ZodOptional<z.ZodNumber>;
        tintcolor: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodNumber>;
        class: z.ZodOptional<z.ZodString>;
        x: z.ZodOptional<z.ZodNumber>;
        y: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    probability: z.ZodOptional<z.ZodNumber>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    class: z.ZodOptional<z.ZodString>;
    terrain: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        tile: z.ZodNumber;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
    }, z.core.$strip>>>;
    type: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
type ITiledMapTile = z.infer<typeof ITiledMapTile>;

declare const ITiledMapExternalTileset: z.ZodObject<{
    name: z.ZodString;
    image: z.ZodString;
    backgroundcolor: z.ZodOptional<z.ZodString>;
    columns: z.ZodOptional<z.ZodNumber>;
    fillmode: z.ZodOptional<z.ZodEnum<{
        stretch: "stretch";
        "preserve-aspect-fit": "preserve-aspect-fit";
    }>>;
    grid: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
        orientation: z.ZodEnum<{
            orthogonal: "orthogonal";
            isometric: "isometric";
        }>;
    }, z.core.$strip>>;
    id: z.ZodOptional<z.ZodNumber>;
    imageheight: z.ZodOptional<z.ZodNumber>;
    imagewidth: z.ZodOptional<z.ZodNumber>;
    margin: z.ZodOptional<z.ZodNumber>;
    objectalignment: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    spacing: z.ZodOptional<z.ZodNumber>;
    terrains: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        tile: z.ZodNumber;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
    }, z.core.$strip>>>;
    tilecount: z.ZodNumber;
    tiledversion: z.ZodOptional<z.ZodString>;
    tileheight: z.ZodOptional<z.ZodNumber>;
    tileoffset: z.ZodOptional<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strip>>;
    tilerendersize: z.ZodOptional<z.ZodEnum<{
        tile: "tile";
        grid: "grid";
    }>>;
    tiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        animation: z.ZodOptional<z.ZodArray<z.ZodObject<{
            duration: z.ZodNumber;
            tileid: z.ZodNumber;
        }, z.core.$strip>>>;
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
                }, z.core.$strip>>>;
                polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, z.core.$strip>>>;
                properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                    value: z.ZodOptional<z.ZodString>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodOptional<z.ZodBoolean>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"class">;
                    value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>]>>>;
                rotation: z.ZodOptional<z.ZodNumber>;
                template: z.ZodOptional<z.ZodString>;
                text: z.ZodOptional<z.ZodObject<{
                    text: z.ZodString;
                    bold: z.ZodOptional<z.ZodBoolean>;
                    color: z.ZodOptional<z.ZodString>;
                    fontfamily: z.ZodOptional<z.ZodString>;
                    halign: z.ZodOptional<z.ZodEnum<{
                        center: "center";
                        right: "right";
                        justify: "justify";
                        left: "left";
                    }>>;
                    italic: z.ZodOptional<z.ZodBoolean>;
                    kerning: z.ZodOptional<z.ZodBoolean>;
                    pixelsize: z.ZodOptional<z.ZodNumber>;
                    strikeout: z.ZodOptional<z.ZodBoolean>;
                    underline: z.ZodOptional<z.ZodBoolean>;
                    valign: z.ZodOptional<z.ZodEnum<{
                        center: "center";
                        bottom: "bottom";
                        top: "top";
                    }>>;
                    wrap: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                type: z.ZodOptional<z.ZodString>;
                class: z.ZodOptional<z.ZodString>;
                width: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
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
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
            startx: z.ZodOptional<z.ZodNumber>;
            starty: z.ZodOptional<z.ZodNumber>;
            tintcolor: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodNumber>;
            class: z.ZodOptional<z.ZodString>;
            x: z.ZodOptional<z.ZodNumber>;
            y: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        probability: z.ZodOptional<z.ZodNumber>;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        class: z.ZodOptional<z.ZodString>;
        terrain: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tile: z.ZodNumber;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>>>;
        type: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    tilewidth: z.ZodOptional<z.ZodNumber>;
    transformations: z.ZodOptional<z.ZodObject<{
        hflip: z.ZodOptional<z.ZodBoolean>;
        vflip: z.ZodOptional<z.ZodBoolean>;
        rotate: z.ZodOptional<z.ZodBoolean>;
        preferuntransformed: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    transparentcolor: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodLiteral<"tileset">>;
    class: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    wangsets: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        tile: z.ZodNumber;
        colors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            color: z.ZodString;
            tile: z.ZodNumber;
            probability: z.ZodNumber;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
            type: z.ZodOptional<z.ZodString>;
            class: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        wangtiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            tileid: z.ZodNumber;
            wangid: z.ZodArray<z.ZodNumber>;
        }, z.core.$strip>>>;
        type: z.ZodEnum<{
            corner: "corner";
            edge: "edge";
            mixed: "mixed";
        }>;
        class: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
type ITiledMapExternalTileset = z.infer<typeof ITiledMapExternalTileset>;
declare const ITiledMapEmbeddedTileset: z.ZodObject<{
    name: z.ZodString;
    image: z.ZodString;
    backgroundcolor: z.ZodOptional<z.ZodString>;
    columns: z.ZodOptional<z.ZodNumber>;
    fillmode: z.ZodOptional<z.ZodEnum<{
        stretch: "stretch";
        "preserve-aspect-fit": "preserve-aspect-fit";
    }>>;
    grid: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
        orientation: z.ZodEnum<{
            orthogonal: "orthogonal";
            isometric: "isometric";
        }>;
    }, z.core.$strip>>;
    id: z.ZodOptional<z.ZodNumber>;
    imageheight: z.ZodOptional<z.ZodNumber>;
    imagewidth: z.ZodOptional<z.ZodNumber>;
    margin: z.ZodOptional<z.ZodNumber>;
    objectalignment: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    spacing: z.ZodOptional<z.ZodNumber>;
    terrains: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        tile: z.ZodNumber;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
    }, z.core.$strip>>>;
    tilecount: z.ZodNumber;
    tiledversion: z.ZodOptional<z.ZodString>;
    tileheight: z.ZodOptional<z.ZodNumber>;
    tileoffset: z.ZodOptional<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strip>>;
    tilerendersize: z.ZodOptional<z.ZodEnum<{
        tile: "tile";
        grid: "grid";
    }>>;
    tiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        animation: z.ZodOptional<z.ZodArray<z.ZodObject<{
            duration: z.ZodNumber;
            tileid: z.ZodNumber;
        }, z.core.$strip>>>;
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
                }, z.core.$strip>>>;
                polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, z.core.$strip>>>;
                properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                    value: z.ZodOptional<z.ZodString>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodOptional<z.ZodBoolean>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"class">;
                    value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>]>>>;
                rotation: z.ZodOptional<z.ZodNumber>;
                template: z.ZodOptional<z.ZodString>;
                text: z.ZodOptional<z.ZodObject<{
                    text: z.ZodString;
                    bold: z.ZodOptional<z.ZodBoolean>;
                    color: z.ZodOptional<z.ZodString>;
                    fontfamily: z.ZodOptional<z.ZodString>;
                    halign: z.ZodOptional<z.ZodEnum<{
                        center: "center";
                        right: "right";
                        justify: "justify";
                        left: "left";
                    }>>;
                    italic: z.ZodOptional<z.ZodBoolean>;
                    kerning: z.ZodOptional<z.ZodBoolean>;
                    pixelsize: z.ZodOptional<z.ZodNumber>;
                    strikeout: z.ZodOptional<z.ZodBoolean>;
                    underline: z.ZodOptional<z.ZodBoolean>;
                    valign: z.ZodOptional<z.ZodEnum<{
                        center: "center";
                        bottom: "bottom";
                        top: "top";
                    }>>;
                    wrap: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                type: z.ZodOptional<z.ZodString>;
                class: z.ZodOptional<z.ZodString>;
                width: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
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
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
            startx: z.ZodOptional<z.ZodNumber>;
            starty: z.ZodOptional<z.ZodNumber>;
            tintcolor: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodNumber>;
            class: z.ZodOptional<z.ZodString>;
            x: z.ZodOptional<z.ZodNumber>;
            y: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        probability: z.ZodOptional<z.ZodNumber>;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        class: z.ZodOptional<z.ZodString>;
        terrain: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tile: z.ZodNumber;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>>>;
        type: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    tilewidth: z.ZodOptional<z.ZodNumber>;
    transformations: z.ZodOptional<z.ZodObject<{
        hflip: z.ZodOptional<z.ZodBoolean>;
        vflip: z.ZodOptional<z.ZodBoolean>;
        rotate: z.ZodOptional<z.ZodBoolean>;
        preferuntransformed: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    transparentcolor: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodLiteral<"tileset">>;
    class: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    wangsets: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        tile: z.ZodNumber;
        colors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            color: z.ZodString;
            tile: z.ZodNumber;
            probability: z.ZodNumber;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
            type: z.ZodOptional<z.ZodString>;
            class: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        wangtiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            tileid: z.ZodNumber;
            wangid: z.ZodArray<z.ZodNumber>;
        }, z.core.$strip>>>;
        type: z.ZodEnum<{
            corner: "corner";
            edge: "edge";
            mixed: "mixed";
        }>;
        class: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    firstgid: z.ZodNumber;
}, z.core.$strip>;
type ITiledMapEmbeddedTileset = z.infer<typeof ITiledMapEmbeddedTileset>;
declare const ITiledMapExternalTilesetReference: z.ZodObject<{
    firstgid: z.ZodNumber;
    source: z.ZodString;
}, z.core.$strip>;
type ITiledMapExternalTilesetReference = z.infer<typeof ITiledMapExternalTilesetReference>;
declare const ITiledMapTileset: z.ZodUnion<readonly [z.ZodObject<{
    name: z.ZodString;
    image: z.ZodString;
    backgroundcolor: z.ZodOptional<z.ZodString>;
    columns: z.ZodOptional<z.ZodNumber>;
    fillmode: z.ZodOptional<z.ZodEnum<{
        stretch: "stretch";
        "preserve-aspect-fit": "preserve-aspect-fit";
    }>>;
    grid: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
        orientation: z.ZodEnum<{
            orthogonal: "orthogonal";
            isometric: "isometric";
        }>;
    }, z.core.$strip>>;
    id: z.ZodOptional<z.ZodNumber>;
    imageheight: z.ZodOptional<z.ZodNumber>;
    imagewidth: z.ZodOptional<z.ZodNumber>;
    margin: z.ZodOptional<z.ZodNumber>;
    objectalignment: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    spacing: z.ZodOptional<z.ZodNumber>;
    terrains: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        tile: z.ZodNumber;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
    }, z.core.$strip>>>;
    tilecount: z.ZodNumber;
    tiledversion: z.ZodOptional<z.ZodString>;
    tileheight: z.ZodOptional<z.ZodNumber>;
    tileoffset: z.ZodOptional<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strip>>;
    tilerendersize: z.ZodOptional<z.ZodEnum<{
        tile: "tile";
        grid: "grid";
    }>>;
    tiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        animation: z.ZodOptional<z.ZodArray<z.ZodObject<{
            duration: z.ZodNumber;
            tileid: z.ZodNumber;
        }, z.core.$strip>>>;
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
                }, z.core.$strip>>>;
                polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, z.core.$strip>>>;
                properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                    value: z.ZodOptional<z.ZodString>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodOptional<z.ZodBoolean>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"class">;
                    value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>]>>>;
                rotation: z.ZodOptional<z.ZodNumber>;
                template: z.ZodOptional<z.ZodString>;
                text: z.ZodOptional<z.ZodObject<{
                    text: z.ZodString;
                    bold: z.ZodOptional<z.ZodBoolean>;
                    color: z.ZodOptional<z.ZodString>;
                    fontfamily: z.ZodOptional<z.ZodString>;
                    halign: z.ZodOptional<z.ZodEnum<{
                        center: "center";
                        right: "right";
                        justify: "justify";
                        left: "left";
                    }>>;
                    italic: z.ZodOptional<z.ZodBoolean>;
                    kerning: z.ZodOptional<z.ZodBoolean>;
                    pixelsize: z.ZodOptional<z.ZodNumber>;
                    strikeout: z.ZodOptional<z.ZodBoolean>;
                    underline: z.ZodOptional<z.ZodBoolean>;
                    valign: z.ZodOptional<z.ZodEnum<{
                        center: "center";
                        bottom: "bottom";
                        top: "top";
                    }>>;
                    wrap: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                type: z.ZodOptional<z.ZodString>;
                class: z.ZodOptional<z.ZodString>;
                width: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
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
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
            startx: z.ZodOptional<z.ZodNumber>;
            starty: z.ZodOptional<z.ZodNumber>;
            tintcolor: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodNumber>;
            class: z.ZodOptional<z.ZodString>;
            x: z.ZodOptional<z.ZodNumber>;
            y: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        probability: z.ZodOptional<z.ZodNumber>;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        class: z.ZodOptional<z.ZodString>;
        terrain: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tile: z.ZodNumber;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>>>;
        type: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    tilewidth: z.ZodOptional<z.ZodNumber>;
    transformations: z.ZodOptional<z.ZodObject<{
        hflip: z.ZodOptional<z.ZodBoolean>;
        vflip: z.ZodOptional<z.ZodBoolean>;
        rotate: z.ZodOptional<z.ZodBoolean>;
        preferuntransformed: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    transparentcolor: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodLiteral<"tileset">>;
    class: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    wangsets: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        tile: z.ZodNumber;
        colors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            color: z.ZodString;
            tile: z.ZodNumber;
            probability: z.ZodNumber;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
            type: z.ZodOptional<z.ZodString>;
            class: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        wangtiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            tileid: z.ZodNumber;
            wangid: z.ZodArray<z.ZodNumber>;
        }, z.core.$strip>>>;
        type: z.ZodEnum<{
            corner: "corner";
            edge: "edge";
            mixed: "mixed";
        }>;
        class: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    firstgid: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    firstgid: z.ZodNumber;
    source: z.ZodString;
}, z.core.$strip>]>;
type ITiledMapTileset = z.infer<typeof ITiledMapTileset>;

declare const ITiledMapTilesetReference: z.ZodObject<{
    firstgid: z.ZodNumber;
    source: z.ZodString;
}, z.core.$strict>;
type ITiledMapTilesetReference = z.infer<typeof ITiledMapTilesetReference>;

declare const ITiledMapTransformations: z.ZodObject<{
    hflip: z.ZodOptional<z.ZodBoolean>;
    vflip: z.ZodOptional<z.ZodBoolean>;
    rotate: z.ZodOptional<z.ZodBoolean>;
    preferuntransformed: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
type ITiledMapTransformations = z.infer<typeof ITiledMapTransformations>;

declare const ITiledMapWangColor: z.ZodObject<{
    name: z.ZodString;
    color: z.ZodString;
    tile: z.ZodNumber;
    probability: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    type: z.ZodOptional<z.ZodString>;
    class: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
type ITiledMapWangColor = z.infer<typeof ITiledMapWangColor>;

declare const ITiledMapWangSet: z.ZodObject<{
    name: z.ZodString;
    tile: z.ZodNumber;
    colors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        color: z.ZodString;
        tile: z.ZodNumber;
        probability: z.ZodNumber;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        type: z.ZodOptional<z.ZodString>;
        class: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    wangtiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tileid: z.ZodNumber;
        wangid: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>>;
    type: z.ZodEnum<{
        corner: "corner";
        edge: "edge";
        mixed: "mixed";
    }>;
    class: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
type ITiledMapWangSet = z.infer<typeof ITiledMapWangSet>;

declare const ITiledMapWangTile: z.ZodObject<{
    tileid: z.ZodNumber;
    wangid: z.ZodArray<z.ZodNumber>;
}, z.core.$strip>;
type ITiledMapWangTile = z.infer<typeof ITiledMapWangTile>;

declare const ITiledMapInfiniteTileLayer: z.ZodObject<{
    chunks: z.ZodArray<z.ZodObject<{
        data: z.ZodArray<z.ZodNumber>;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strip>>;
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
}, z.core.$strip>;
type ITiledMapInfiniteTileLayer = z.infer<typeof ITiledMapInfiniteTileLayer>;
declare const ITiledMapRestrictedTileLayer: z.ZodObject<{
    data: z.ZodArray<z.ZodNumber>;
    height: z.ZodNumber;
    id: z.ZodNumber;
    name: z.ZodString;
    opacity: z.ZodNumber;
    type: z.ZodLiteral<"tilelayer">;
    visible: z.ZodBoolean;
    width: z.ZodNumber;
    compression: z.ZodOptional<z.ZodString>;
    encoding: z.ZodOptional<z.ZodEnum<{
        csv: "csv";
        base64: "base64";
    }>>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    tintcolor: z.ZodOptional<z.ZodString>;
    class: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
type ITiledMapRestrictedTileLayer = z.infer<typeof ITiledMapRestrictedTileLayer>;
declare const ITiledMapTileLayer: z.ZodUnion<readonly [z.ZodObject<{
    chunks: z.ZodArray<z.ZodObject<{
        data: z.ZodArray<z.ZodNumber>;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strip>>;
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
}, z.core.$strip>, z.ZodObject<{
    data: z.ZodArray<z.ZodNumber>;
    height: z.ZodNumber;
    id: z.ZodNumber;
    name: z.ZodString;
    opacity: z.ZodNumber;
    type: z.ZodLiteral<"tilelayer">;
    visible: z.ZodBoolean;
    width: z.ZodNumber;
    compression: z.ZodOptional<z.ZodString>;
    encoding: z.ZodOptional<z.ZodEnum<{
        csv: "csv";
        base64: "base64";
    }>>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    tintcolor: z.ZodOptional<z.ZodString>;
    class: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>]>;
type ITiledMapTileLayer = z.infer<typeof ITiledMapTileLayer>;

declare const ITiledMap: z.ZodObject<{
    layers: z.ZodArray<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodObject<{
        chunks: z.ZodArray<z.ZodObject<{
            data: z.ZodArray<z.ZodNumber>;
            height: z.ZodNumber;
            width: z.ZodNumber;
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>>;
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
    }, z.core.$strip>, z.ZodObject<{
        data: z.ZodArray<z.ZodNumber>;
        height: z.ZodNumber;
        id: z.ZodNumber;
        name: z.ZodString;
        opacity: z.ZodNumber;
        type: z.ZodLiteral<"tilelayer">;
        visible: z.ZodBoolean;
        width: z.ZodNumber;
        compression: z.ZodOptional<z.ZodString>;
        encoding: z.ZodOptional<z.ZodEnum<{
            csv: "csv";
            base64: "base64";
        }>>;
        parallaxx: z.ZodOptional<z.ZodNumber>;
        parallaxy: z.ZodOptional<z.ZodNumber>;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        tintcolor: z.ZodOptional<z.ZodString>;
        class: z.ZodOptional<z.ZodString>;
        x: z.ZodOptional<z.ZodNumber>;
        y: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>]>, z.ZodObject<{
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
            }, z.core.$strip>>>;
            polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, z.core.$strip>>>;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
            rotation: z.ZodOptional<z.ZodNumber>;
            template: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodObject<{
                text: z.ZodString;
                bold: z.ZodOptional<z.ZodBoolean>;
                color: z.ZodOptional<z.ZodString>;
                fontfamily: z.ZodOptional<z.ZodString>;
                halign: z.ZodOptional<z.ZodEnum<{
                    center: "center";
                    right: "right";
                    justify: "justify";
                    left: "left";
                }>>;
                italic: z.ZodOptional<z.ZodBoolean>;
                kerning: z.ZodOptional<z.ZodBoolean>;
                pixelsize: z.ZodOptional<z.ZodNumber>;
                strikeout: z.ZodOptional<z.ZodBoolean>;
                underline: z.ZodOptional<z.ZodBoolean>;
                valign: z.ZodOptional<z.ZodEnum<{
                    center: "center";
                    bottom: "bottom";
                    top: "top";
                }>>;
                wrap: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            type: z.ZodOptional<z.ZodString>;
            class: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
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
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        startx: z.ZodOptional<z.ZodNumber>;
        starty: z.ZodOptional<z.ZodNumber>;
        tintcolor: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodNumber>;
        class: z.ZodOptional<z.ZodString>;
        x: z.ZodOptional<z.ZodNumber>;
        y: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodType<TiledMapGroupLayer, unknown, z.core.$ZodTypeInternals<TiledMapGroupLayer, unknown>>]>>;
    tiledversion: z.ZodString;
    tilesets: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        image: z.ZodString;
        backgroundcolor: z.ZodOptional<z.ZodString>;
        columns: z.ZodOptional<z.ZodNumber>;
        fillmode: z.ZodOptional<z.ZodEnum<{
            stretch: "stretch";
            "preserve-aspect-fit": "preserve-aspect-fit";
        }>>;
        grid: z.ZodOptional<z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            orientation: z.ZodEnum<{
                orthogonal: "orthogonal";
                isometric: "isometric";
            }>;
        }, z.core.$strip>>;
        id: z.ZodOptional<z.ZodNumber>;
        imageheight: z.ZodOptional<z.ZodNumber>;
        imagewidth: z.ZodOptional<z.ZodNumber>;
        margin: z.ZodOptional<z.ZodNumber>;
        objectalignment: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        spacing: z.ZodOptional<z.ZodNumber>;
        terrains: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tile: z.ZodNumber;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>>>;
        tilecount: z.ZodNumber;
        tiledversion: z.ZodOptional<z.ZodString>;
        tileheight: z.ZodOptional<z.ZodNumber>;
        tileoffset: z.ZodOptional<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>>;
        tilerendersize: z.ZodOptional<z.ZodEnum<{
            tile: "tile";
            grid: "grid";
        }>>;
        tiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            animation: z.ZodOptional<z.ZodArray<z.ZodObject<{
                duration: z.ZodNumber;
                tileid: z.ZodNumber;
            }, z.core.$strip>>>;
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
                    }, z.core.$strip>>>;
                    polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        x: z.ZodNumber;
                        y: z.ZodNumber;
                    }, z.core.$strip>>>;
                    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                        value: z.ZodOptional<z.ZodString>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                        value: z.ZodOptional<z.ZodNumber>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"float">;
                        value: z.ZodOptional<z.ZodNumber>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"bool">;
                        value: z.ZodOptional<z.ZodBoolean>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"class">;
                        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>]>>>;
                    rotation: z.ZodOptional<z.ZodNumber>;
                    template: z.ZodOptional<z.ZodString>;
                    text: z.ZodOptional<z.ZodObject<{
                        text: z.ZodString;
                        bold: z.ZodOptional<z.ZodBoolean>;
                        color: z.ZodOptional<z.ZodString>;
                        fontfamily: z.ZodOptional<z.ZodString>;
                        halign: z.ZodOptional<z.ZodEnum<{
                            center: "center";
                            right: "right";
                            justify: "justify";
                            left: "left";
                        }>>;
                        italic: z.ZodOptional<z.ZodBoolean>;
                        kerning: z.ZodOptional<z.ZodBoolean>;
                        pixelsize: z.ZodOptional<z.ZodNumber>;
                        strikeout: z.ZodOptional<z.ZodBoolean>;
                        underline: z.ZodOptional<z.ZodBoolean>;
                        valign: z.ZodOptional<z.ZodEnum<{
                            center: "center";
                            bottom: "bottom";
                            top: "top";
                        }>>;
                        wrap: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    type: z.ZodOptional<z.ZodString>;
                    class: z.ZodOptional<z.ZodString>;
                    width: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
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
                properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                    value: z.ZodOptional<z.ZodString>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodOptional<z.ZodBoolean>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"class">;
                    value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>]>>>;
                startx: z.ZodOptional<z.ZodNumber>;
                starty: z.ZodOptional<z.ZodNumber>;
                tintcolor: z.ZodOptional<z.ZodString>;
                width: z.ZodOptional<z.ZodNumber>;
                class: z.ZodOptional<z.ZodString>;
                x: z.ZodOptional<z.ZodNumber>;
                y: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            probability: z.ZodOptional<z.ZodNumber>;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
            class: z.ZodOptional<z.ZodString>;
            terrain: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                tile: z.ZodNumber;
                properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                    value: z.ZodOptional<z.ZodString>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodOptional<z.ZodBoolean>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"class">;
                    value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>>>;
            type: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        tilewidth: z.ZodOptional<z.ZodNumber>;
        transformations: z.ZodOptional<z.ZodObject<{
            hflip: z.ZodOptional<z.ZodBoolean>;
            vflip: z.ZodOptional<z.ZodBoolean>;
            rotate: z.ZodOptional<z.ZodBoolean>;
            preferuntransformed: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        transparentcolor: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodLiteral<"tileset">>;
        class: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        wangsets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tile: z.ZodNumber;
            colors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                color: z.ZodString;
                tile: z.ZodNumber;
                probability: z.ZodNumber;
                properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                    value: z.ZodOptional<z.ZodString>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodOptional<z.ZodBoolean>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"class">;
                    value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>]>>>;
                type: z.ZodOptional<z.ZodString>;
                class: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
            wangtiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                tileid: z.ZodNumber;
                wangid: z.ZodArray<z.ZodNumber>;
            }, z.core.$strip>>>;
            type: z.ZodEnum<{
                corner: "corner";
                edge: "edge";
                mixed: "mixed";
            }>;
            class: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        firstgid: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        firstgid: z.ZodNumber;
        source: z.ZodString;
    }, z.core.$strip>]>>;
    type: z.ZodLiteral<"map">;
    backgroundcolor: z.ZodOptional<z.ZodString>;
    compressionlevel: z.ZodOptional<z.ZodNumber>;
    hexsidelength: z.ZodOptional<z.ZodNumber>;
    infinite: z.ZodOptional<z.ZodBoolean>;
    nextlayerid: z.ZodNumber;
    nextobjectid: z.ZodNumber;
    orientation: z.ZodOptional<z.ZodEnum<{
        orthogonal: "orthogonal";
        isometric: "isometric";
        staggered: "staggered";
        hexagonal: "hexagonal";
    }>>;
    parallaxoriginx: z.ZodOptional<z.ZodNumber>;
    parallaxoriginy: z.ZodOptional<z.ZodNumber>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    renderorder: z.ZodOptional<z.ZodEnum<{
        "right-down": "right-down";
        "right-up": "right-up";
        "left-down": "left-down";
        "left-up": "left-up";
    }>>;
    staggeraxis: z.ZodOptional<z.ZodEnum<{
        x: "x";
        y: "y";
    }>>;
    staggerindex: z.ZodOptional<z.ZodEnum<{
        odd: "odd";
        even: "even";
    }>>;
    tileheight: z.ZodOptional<z.ZodNumber>;
    tilewidth: z.ZodOptional<z.ZodNumber>;
    class: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    width: z.ZodNumber;
    height: z.ZodNumber;
}, z.core.$strip>;
type ITiledMap = z.infer<typeof ITiledMap>;
declare const ITiledInfiniteMap: z.ZodObject<{
    tiledversion: z.ZodString;
    tilesets: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        image: z.ZodString;
        backgroundcolor: z.ZodOptional<z.ZodString>;
        columns: z.ZodOptional<z.ZodNumber>;
        fillmode: z.ZodOptional<z.ZodEnum<{
            stretch: "stretch";
            "preserve-aspect-fit": "preserve-aspect-fit";
        }>>;
        grid: z.ZodOptional<z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            orientation: z.ZodEnum<{
                orthogonal: "orthogonal";
                isometric: "isometric";
            }>;
        }, z.core.$strip>>;
        id: z.ZodOptional<z.ZodNumber>;
        imageheight: z.ZodOptional<z.ZodNumber>;
        imagewidth: z.ZodOptional<z.ZodNumber>;
        margin: z.ZodOptional<z.ZodNumber>;
        objectalignment: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        spacing: z.ZodOptional<z.ZodNumber>;
        terrains: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tile: z.ZodNumber;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>>>;
        tilecount: z.ZodNumber;
        tiledversion: z.ZodOptional<z.ZodString>;
        tileheight: z.ZodOptional<z.ZodNumber>;
        tileoffset: z.ZodOptional<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>>;
        tilerendersize: z.ZodOptional<z.ZodEnum<{
            tile: "tile";
            grid: "grid";
        }>>;
        tiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            animation: z.ZodOptional<z.ZodArray<z.ZodObject<{
                duration: z.ZodNumber;
                tileid: z.ZodNumber;
            }, z.core.$strip>>>;
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
                    }, z.core.$strip>>>;
                    polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        x: z.ZodNumber;
                        y: z.ZodNumber;
                    }, z.core.$strip>>>;
                    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                        value: z.ZodOptional<z.ZodString>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                        value: z.ZodOptional<z.ZodNumber>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"float">;
                        value: z.ZodOptional<z.ZodNumber>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"bool">;
                        value: z.ZodOptional<z.ZodBoolean>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"class">;
                        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>]>>>;
                    rotation: z.ZodOptional<z.ZodNumber>;
                    template: z.ZodOptional<z.ZodString>;
                    text: z.ZodOptional<z.ZodObject<{
                        text: z.ZodString;
                        bold: z.ZodOptional<z.ZodBoolean>;
                        color: z.ZodOptional<z.ZodString>;
                        fontfamily: z.ZodOptional<z.ZodString>;
                        halign: z.ZodOptional<z.ZodEnum<{
                            center: "center";
                            right: "right";
                            justify: "justify";
                            left: "left";
                        }>>;
                        italic: z.ZodOptional<z.ZodBoolean>;
                        kerning: z.ZodOptional<z.ZodBoolean>;
                        pixelsize: z.ZodOptional<z.ZodNumber>;
                        strikeout: z.ZodOptional<z.ZodBoolean>;
                        underline: z.ZodOptional<z.ZodBoolean>;
                        valign: z.ZodOptional<z.ZodEnum<{
                            center: "center";
                            bottom: "bottom";
                            top: "top";
                        }>>;
                        wrap: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    type: z.ZodOptional<z.ZodString>;
                    class: z.ZodOptional<z.ZodString>;
                    width: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
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
                properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                    value: z.ZodOptional<z.ZodString>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodOptional<z.ZodBoolean>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"class">;
                    value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>]>>>;
                startx: z.ZodOptional<z.ZodNumber>;
                starty: z.ZodOptional<z.ZodNumber>;
                tintcolor: z.ZodOptional<z.ZodString>;
                width: z.ZodOptional<z.ZodNumber>;
                class: z.ZodOptional<z.ZodString>;
                x: z.ZodOptional<z.ZodNumber>;
                y: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            probability: z.ZodOptional<z.ZodNumber>;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
            class: z.ZodOptional<z.ZodString>;
            terrain: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                tile: z.ZodNumber;
                properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                    value: z.ZodOptional<z.ZodString>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodOptional<z.ZodBoolean>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"class">;
                    value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>>>;
            type: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        tilewidth: z.ZodOptional<z.ZodNumber>;
        transformations: z.ZodOptional<z.ZodObject<{
            hflip: z.ZodOptional<z.ZodBoolean>;
            vflip: z.ZodOptional<z.ZodBoolean>;
            rotate: z.ZodOptional<z.ZodBoolean>;
            preferuntransformed: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        transparentcolor: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodLiteral<"tileset">>;
        class: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        wangsets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tile: z.ZodNumber;
            colors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                color: z.ZodString;
                tile: z.ZodNumber;
                probability: z.ZodNumber;
                properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                    value: z.ZodOptional<z.ZodString>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodOptional<z.ZodBoolean>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"class">;
                    value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>]>>>;
                type: z.ZodOptional<z.ZodString>;
                class: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
            wangtiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                tileid: z.ZodNumber;
                wangid: z.ZodArray<z.ZodNumber>;
            }, z.core.$strip>>>;
            type: z.ZodEnum<{
                corner: "corner";
                edge: "edge";
                mixed: "mixed";
            }>;
            class: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        firstgid: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        firstgid: z.ZodNumber;
        source: z.ZodString;
    }, z.core.$strip>]>>;
    type: z.ZodLiteral<"map">;
    backgroundcolor: z.ZodOptional<z.ZodString>;
    compressionlevel: z.ZodOptional<z.ZodNumber>;
    hexsidelength: z.ZodOptional<z.ZodNumber>;
    nextlayerid: z.ZodNumber;
    nextobjectid: z.ZodNumber;
    orientation: z.ZodOptional<z.ZodEnum<{
        orthogonal: "orthogonal";
        isometric: "isometric";
        staggered: "staggered";
        hexagonal: "hexagonal";
    }>>;
    parallaxoriginx: z.ZodOptional<z.ZodNumber>;
    parallaxoriginy: z.ZodOptional<z.ZodNumber>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    renderorder: z.ZodOptional<z.ZodEnum<{
        "right-down": "right-down";
        "right-up": "right-up";
        "left-down": "left-down";
        "left-up": "left-up";
    }>>;
    staggeraxis: z.ZodOptional<z.ZodEnum<{
        x: "x";
        y: "y";
    }>>;
    staggerindex: z.ZodOptional<z.ZodEnum<{
        odd: "odd";
        even: "even";
    }>>;
    tileheight: z.ZodOptional<z.ZodNumber>;
    tilewidth: z.ZodOptional<z.ZodNumber>;
    class: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    layers: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        chunks: z.ZodArray<z.ZodObject<{
            data: z.ZodArray<z.ZodNumber>;
            height: z.ZodNumber;
            width: z.ZodNumber;
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>>;
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
    }, z.core.$strip>, z.ZodObject<{
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
            }, z.core.$strip>>>;
            polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, z.core.$strip>>>;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
            rotation: z.ZodOptional<z.ZodNumber>;
            template: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodObject<{
                text: z.ZodString;
                bold: z.ZodOptional<z.ZodBoolean>;
                color: z.ZodOptional<z.ZodString>;
                fontfamily: z.ZodOptional<z.ZodString>;
                halign: z.ZodOptional<z.ZodEnum<{
                    center: "center";
                    right: "right";
                    justify: "justify";
                    left: "left";
                }>>;
                italic: z.ZodOptional<z.ZodBoolean>;
                kerning: z.ZodOptional<z.ZodBoolean>;
                pixelsize: z.ZodOptional<z.ZodNumber>;
                strikeout: z.ZodOptional<z.ZodBoolean>;
                underline: z.ZodOptional<z.ZodBoolean>;
                valign: z.ZodOptional<z.ZodEnum<{
                    center: "center";
                    bottom: "bottom";
                    top: "top";
                }>>;
                wrap: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            type: z.ZodOptional<z.ZodString>;
            class: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
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
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        startx: z.ZodOptional<z.ZodNumber>;
        starty: z.ZodOptional<z.ZodNumber>;
        tintcolor: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodNumber>;
        class: z.ZodOptional<z.ZodString>;
        x: z.ZodOptional<z.ZodNumber>;
        y: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>]>>;
    infinite: z.ZodLiteral<true>;
}, z.core.$strip>;
type ITiledInfiniteMap = z.infer<typeof ITiledInfiniteMap>;
declare const ITiledRestrictedMap: z.ZodObject<{
    tiledversion: z.ZodString;
    tilesets: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        image: z.ZodString;
        backgroundcolor: z.ZodOptional<z.ZodString>;
        columns: z.ZodOptional<z.ZodNumber>;
        fillmode: z.ZodOptional<z.ZodEnum<{
            stretch: "stretch";
            "preserve-aspect-fit": "preserve-aspect-fit";
        }>>;
        grid: z.ZodOptional<z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            orientation: z.ZodEnum<{
                orthogonal: "orthogonal";
                isometric: "isometric";
            }>;
        }, z.core.$strip>>;
        id: z.ZodOptional<z.ZodNumber>;
        imageheight: z.ZodOptional<z.ZodNumber>;
        imagewidth: z.ZodOptional<z.ZodNumber>;
        margin: z.ZodOptional<z.ZodNumber>;
        objectalignment: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        spacing: z.ZodOptional<z.ZodNumber>;
        terrains: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tile: z.ZodNumber;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>>>;
        tilecount: z.ZodNumber;
        tiledversion: z.ZodOptional<z.ZodString>;
        tileheight: z.ZodOptional<z.ZodNumber>;
        tileoffset: z.ZodOptional<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>>;
        tilerendersize: z.ZodOptional<z.ZodEnum<{
            tile: "tile";
            grid: "grid";
        }>>;
        tiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            animation: z.ZodOptional<z.ZodArray<z.ZodObject<{
                duration: z.ZodNumber;
                tileid: z.ZodNumber;
            }, z.core.$strip>>>;
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
                    }, z.core.$strip>>>;
                    polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        x: z.ZodNumber;
                        y: z.ZodNumber;
                    }, z.core.$strip>>>;
                    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                        value: z.ZodOptional<z.ZodString>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                        value: z.ZodOptional<z.ZodNumber>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"float">;
                        value: z.ZodOptional<z.ZodNumber>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"bool">;
                        value: z.ZodOptional<z.ZodBoolean>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"class">;
                        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>]>>>;
                    rotation: z.ZodOptional<z.ZodNumber>;
                    template: z.ZodOptional<z.ZodString>;
                    text: z.ZodOptional<z.ZodObject<{
                        text: z.ZodString;
                        bold: z.ZodOptional<z.ZodBoolean>;
                        color: z.ZodOptional<z.ZodString>;
                        fontfamily: z.ZodOptional<z.ZodString>;
                        halign: z.ZodOptional<z.ZodEnum<{
                            center: "center";
                            right: "right";
                            justify: "justify";
                            left: "left";
                        }>>;
                        italic: z.ZodOptional<z.ZodBoolean>;
                        kerning: z.ZodOptional<z.ZodBoolean>;
                        pixelsize: z.ZodOptional<z.ZodNumber>;
                        strikeout: z.ZodOptional<z.ZodBoolean>;
                        underline: z.ZodOptional<z.ZodBoolean>;
                        valign: z.ZodOptional<z.ZodEnum<{
                            center: "center";
                            bottom: "bottom";
                            top: "top";
                        }>>;
                        wrap: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    type: z.ZodOptional<z.ZodString>;
                    class: z.ZodOptional<z.ZodString>;
                    width: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
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
                properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                    value: z.ZodOptional<z.ZodString>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodOptional<z.ZodBoolean>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"class">;
                    value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>]>>>;
                startx: z.ZodOptional<z.ZodNumber>;
                starty: z.ZodOptional<z.ZodNumber>;
                tintcolor: z.ZodOptional<z.ZodString>;
                width: z.ZodOptional<z.ZodNumber>;
                class: z.ZodOptional<z.ZodString>;
                x: z.ZodOptional<z.ZodNumber>;
                y: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            probability: z.ZodOptional<z.ZodNumber>;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
            class: z.ZodOptional<z.ZodString>;
            terrain: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                tile: z.ZodNumber;
                properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                    value: z.ZodOptional<z.ZodString>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodOptional<z.ZodBoolean>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"class">;
                    value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>>>;
            type: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        tilewidth: z.ZodOptional<z.ZodNumber>;
        transformations: z.ZodOptional<z.ZodObject<{
            hflip: z.ZodOptional<z.ZodBoolean>;
            vflip: z.ZodOptional<z.ZodBoolean>;
            rotate: z.ZodOptional<z.ZodBoolean>;
            preferuntransformed: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        transparentcolor: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodLiteral<"tileset">>;
        class: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        wangsets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tile: z.ZodNumber;
            colors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                color: z.ZodString;
                tile: z.ZodNumber;
                probability: z.ZodNumber;
                properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                    value: z.ZodOptional<z.ZodString>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodOptional<z.ZodBoolean>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"class">;
                    value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>]>>>;
                type: z.ZodOptional<z.ZodString>;
                class: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
            wangtiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                tileid: z.ZodNumber;
                wangid: z.ZodArray<z.ZodNumber>;
            }, z.core.$strip>>>;
            type: z.ZodEnum<{
                corner: "corner";
                edge: "edge";
                mixed: "mixed";
            }>;
            class: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        firstgid: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        firstgid: z.ZodNumber;
        source: z.ZodString;
    }, z.core.$strip>]>>;
    type: z.ZodLiteral<"map">;
    backgroundcolor: z.ZodOptional<z.ZodString>;
    compressionlevel: z.ZodOptional<z.ZodNumber>;
    hexsidelength: z.ZodOptional<z.ZodNumber>;
    nextlayerid: z.ZodNumber;
    nextobjectid: z.ZodNumber;
    orientation: z.ZodOptional<z.ZodEnum<{
        orthogonal: "orthogonal";
        isometric: "isometric";
        staggered: "staggered";
        hexagonal: "hexagonal";
    }>>;
    parallaxoriginx: z.ZodOptional<z.ZodNumber>;
    parallaxoriginy: z.ZodOptional<z.ZodNumber>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    renderorder: z.ZodOptional<z.ZodEnum<{
        "right-down": "right-down";
        "right-up": "right-up";
        "left-down": "left-down";
        "left-up": "left-up";
    }>>;
    staggeraxis: z.ZodOptional<z.ZodEnum<{
        x: "x";
        y: "y";
    }>>;
    staggerindex: z.ZodOptional<z.ZodEnum<{
        odd: "odd";
        even: "even";
    }>>;
    tileheight: z.ZodOptional<z.ZodNumber>;
    tilewidth: z.ZodOptional<z.ZodNumber>;
    class: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    layers: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        data: z.ZodArray<z.ZodNumber>;
        height: z.ZodNumber;
        id: z.ZodNumber;
        name: z.ZodString;
        opacity: z.ZodNumber;
        type: z.ZodLiteral<"tilelayer">;
        visible: z.ZodBoolean;
        width: z.ZodNumber;
        compression: z.ZodOptional<z.ZodString>;
        encoding: z.ZodOptional<z.ZodEnum<{
            csv: "csv";
            base64: "base64";
        }>>;
        parallaxx: z.ZodOptional<z.ZodNumber>;
        parallaxy: z.ZodOptional<z.ZodNumber>;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        tintcolor: z.ZodOptional<z.ZodString>;
        class: z.ZodOptional<z.ZodString>;
        x: z.ZodOptional<z.ZodNumber>;
        y: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
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
            }, z.core.$strip>>>;
            polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, z.core.$strip>>>;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
            rotation: z.ZodOptional<z.ZodNumber>;
            template: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodObject<{
                text: z.ZodString;
                bold: z.ZodOptional<z.ZodBoolean>;
                color: z.ZodOptional<z.ZodString>;
                fontfamily: z.ZodOptional<z.ZodString>;
                halign: z.ZodOptional<z.ZodEnum<{
                    center: "center";
                    right: "right";
                    justify: "justify";
                    left: "left";
                }>>;
                italic: z.ZodOptional<z.ZodBoolean>;
                kerning: z.ZodOptional<z.ZodBoolean>;
                pixelsize: z.ZodOptional<z.ZodNumber>;
                strikeout: z.ZodOptional<z.ZodBoolean>;
                underline: z.ZodOptional<z.ZodBoolean>;
                valign: z.ZodOptional<z.ZodEnum<{
                    center: "center";
                    bottom: "bottom";
                    top: "top";
                }>>;
                wrap: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            type: z.ZodOptional<z.ZodString>;
            class: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
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
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        startx: z.ZodOptional<z.ZodNumber>;
        starty: z.ZodOptional<z.ZodNumber>;
        tintcolor: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodNumber>;
        class: z.ZodOptional<z.ZodString>;
        x: z.ZodOptional<z.ZodNumber>;
        y: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>]>>;
    infinite: z.ZodLiteral<false>;
}, z.core.$strip>;
type ITiledRestrictedMap = z.infer<typeof ITiledRestrictedMap>;

declare enum LayerDepth {
    AbovePlayer = "abovePlayer",
    BelowPlayer = "belowPlayer"
}
declare const Size: z.ZodObject<{
    width: z.ZodNumber;
    height: z.ZodNumber;
}, z.core.$strip>;
type Size = z.infer<typeof Size>;
declare const Position: z.ZodObject<{
    x: z.ZodNumber;
    y: z.ZodNumber;
}, z.core.$strip>;
type Position = z.infer<typeof Position>;

declare const MapConfigSchema: z.ZodObject<{
    mapSize: z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strip>;
    mapChunkSize: z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strip>;
    minimapChunkSize: z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strip>;
    minimapRatio: z.ZodNumber;
    worldmapRatio: z.ZodNumber;
    travelPlannerMapRatio: z.ZodNumber;
    objectTypes: z.ZodArray<z.ZodString>;
    tilesets: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        image: z.ZodString;
        backgroundcolor: z.ZodOptional<z.ZodString>;
        columns: z.ZodOptional<z.ZodNumber>;
        fillmode: z.ZodOptional<z.ZodEnum<{
            stretch: "stretch";
            "preserve-aspect-fit": "preserve-aspect-fit";
        }>>;
        grid: z.ZodOptional<z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            orientation: z.ZodEnum<{
                orthogonal: "orthogonal";
                isometric: "isometric";
            }>;
        }, z.core.$strip>>;
        id: z.ZodOptional<z.ZodNumber>;
        imageheight: z.ZodOptional<z.ZodNumber>;
        imagewidth: z.ZodOptional<z.ZodNumber>;
        margin: z.ZodOptional<z.ZodNumber>;
        objectalignment: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        spacing: z.ZodOptional<z.ZodNumber>;
        terrains: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tile: z.ZodNumber;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>>>;
        tilecount: z.ZodNumber;
        tiledversion: z.ZodOptional<z.ZodString>;
        tileheight: z.ZodOptional<z.ZodNumber>;
        tileoffset: z.ZodOptional<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>>;
        tilerendersize: z.ZodOptional<z.ZodEnum<{
            tile: "tile";
            grid: "grid";
        }>>;
        tiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            animation: z.ZodOptional<z.ZodArray<z.ZodObject<{
                duration: z.ZodNumber;
                tileid: z.ZodNumber;
            }, z.core.$strip>>>;
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
                    }, z.core.$strip>>>;
                    polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        x: z.ZodNumber;
                        y: z.ZodNumber;
                    }, z.core.$strip>>>;
                    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                        value: z.ZodOptional<z.ZodString>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                        value: z.ZodOptional<z.ZodNumber>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"float">;
                        value: z.ZodOptional<z.ZodNumber>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"bool">;
                        value: z.ZodOptional<z.ZodBoolean>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"class">;
                        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                        propertytype: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>]>>>;
                    rotation: z.ZodOptional<z.ZodNumber>;
                    template: z.ZodOptional<z.ZodString>;
                    text: z.ZodOptional<z.ZodObject<{
                        text: z.ZodString;
                        bold: z.ZodOptional<z.ZodBoolean>;
                        color: z.ZodOptional<z.ZodString>;
                        fontfamily: z.ZodOptional<z.ZodString>;
                        halign: z.ZodOptional<z.ZodEnum<{
                            center: "center";
                            right: "right";
                            justify: "justify";
                            left: "left";
                        }>>;
                        italic: z.ZodOptional<z.ZodBoolean>;
                        kerning: z.ZodOptional<z.ZodBoolean>;
                        pixelsize: z.ZodOptional<z.ZodNumber>;
                        strikeout: z.ZodOptional<z.ZodBoolean>;
                        underline: z.ZodOptional<z.ZodBoolean>;
                        valign: z.ZodOptional<z.ZodEnum<{
                            center: "center";
                            bottom: "bottom";
                            top: "top";
                        }>>;
                        wrap: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    type: z.ZodOptional<z.ZodString>;
                    class: z.ZodOptional<z.ZodString>;
                    width: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
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
                properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                    value: z.ZodOptional<z.ZodString>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodOptional<z.ZodBoolean>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"class">;
                    value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>]>>>;
                startx: z.ZodOptional<z.ZodNumber>;
                starty: z.ZodOptional<z.ZodNumber>;
                tintcolor: z.ZodOptional<z.ZodString>;
                width: z.ZodOptional<z.ZodNumber>;
                class: z.ZodOptional<z.ZodString>;
                x: z.ZodOptional<z.ZodNumber>;
                y: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            probability: z.ZodOptional<z.ZodNumber>;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
            class: z.ZodOptional<z.ZodString>;
            terrain: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                tile: z.ZodNumber;
                properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                    value: z.ZodOptional<z.ZodString>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodOptional<z.ZodBoolean>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"class">;
                    value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>>>;
            type: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        tilewidth: z.ZodOptional<z.ZodNumber>;
        transformations: z.ZodOptional<z.ZodObject<{
            hflip: z.ZodOptional<z.ZodBoolean>;
            vflip: z.ZodOptional<z.ZodBoolean>;
            rotate: z.ZodOptional<z.ZodBoolean>;
            preferuntransformed: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        transparentcolor: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodLiteral<"tileset">>;
        class: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        wangsets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tile: z.ZodNumber;
            colors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                color: z.ZodString;
                tile: z.ZodNumber;
                probability: z.ZodNumber;
                properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                    value: z.ZodOptional<z.ZodString>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodOptional<z.ZodNumber>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodOptional<z.ZodBoolean>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"class">;
                    value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                    propertytype: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>]>>>;
                type: z.ZodOptional<z.ZodString>;
                class: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
                value: z.ZodOptional<z.ZodString>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>>;
            wangtiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                tileid: z.ZodNumber;
                wangid: z.ZodArray<z.ZodNumber>;
            }, z.core.$strip>>>;
            type: z.ZodEnum<{
                corner: "corner";
                edge: "edge";
                mixed: "mixed";
            }>;
            class: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        firstgid: z.ZodNumber;
    }, z.core.$strip>>;
    tileLayersDepth: z.ZodRecord<z.ZodString, z.ZodEnum<typeof LayerDepth>>;
}, z.core.$strip>;
type MapConfig = z.infer<typeof MapConfigSchema>;

declare enum MapSegment {
    DuelArena = "duelArena",
    Goldrush = "goldrush",
    Depths = "depths",
    Islands = "islands"
}
declare const ITiledWorld: z.ZodObject<{
    maps: z.ZodArray<z.ZodObject<{
        fileName: z.ZodString;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
type ITiledWorld = z.infer<typeof ITiledWorld>;
declare const IProcessedTiledWorld: z.ZodObject<{
    maps: z.ZodArray<z.ZodObject<{
        fileName: z.ZodString;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
        mapSegment: z.ZodEnum<typeof MapSegment>;
        objectIdOffset: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
type IProcessedTiledWorld = z.infer<typeof IProcessedTiledWorld>;

declare function isFloorLayer(layer: ITiledMapLayer): layer is ITiledMapObjectLayer;
declare function isObjectLayer(layer: ITiledMapLayer): layer is ITiledMapObjectLayer;
declare function isGroupLayer(layer: ITiledMapLayer): layer is ITiledMapGroupLayer;
declare function isTileLayer(layer: ITiledMapLayer): layer is ITiledMapTileLayer;
declare function isInfiniteTileLayer(layer: ITiledMapTileLayer): layer is ITiledMapInfiniteTileLayer;
declare function isInfiniteMap(map: ITiledMap): map is ITiledInfiniteMap;
declare function isExternalTilesetReference(tileset: ITiledMapTileset): tileset is ITiledMapExternalTilesetReference;
declare function isEmbeddedTileset(tileset: ITiledMapTileset): tileset is ITiledMapEmbeddedTileset;

declare const ITiledMapInfiniteLayer: z.ZodUnion<readonly [z.ZodObject<{
    chunks: z.ZodArray<z.ZodObject<{
        data: z.ZodArray<z.ZodNumber>;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strip>>;
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
}, z.core.$strip>, z.ZodObject<{
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
        }, z.core.$strip>>>;
        polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>>>;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        template: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodObject<{
            text: z.ZodString;
            bold: z.ZodOptional<z.ZodBoolean>;
            color: z.ZodOptional<z.ZodString>;
            fontfamily: z.ZodOptional<z.ZodString>;
            halign: z.ZodOptional<z.ZodEnum<{
                center: "center";
                right: "right";
                justify: "justify";
                left: "left";
            }>>;
            italic: z.ZodOptional<z.ZodBoolean>;
            kerning: z.ZodOptional<z.ZodBoolean>;
            pixelsize: z.ZodOptional<z.ZodNumber>;
            strikeout: z.ZodOptional<z.ZodBoolean>;
            underline: z.ZodOptional<z.ZodBoolean>;
            valign: z.ZodOptional<z.ZodEnum<{
                center: "center";
                bottom: "bottom";
                top: "top";
            }>>;
            wrap: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        type: z.ZodOptional<z.ZodString>;
        class: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
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
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    startx: z.ZodOptional<z.ZodNumber>;
    starty: z.ZodOptional<z.ZodNumber>;
    tintcolor: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<z.ZodNumber>;
    class: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>]>;
declare const ITiledMapRestrictedLayer: z.ZodUnion<readonly [z.ZodObject<{
    data: z.ZodArray<z.ZodNumber>;
    height: z.ZodNumber;
    id: z.ZodNumber;
    name: z.ZodString;
    opacity: z.ZodNumber;
    type: z.ZodLiteral<"tilelayer">;
    visible: z.ZodBoolean;
    width: z.ZodNumber;
    compression: z.ZodOptional<z.ZodString>;
    encoding: z.ZodOptional<z.ZodEnum<{
        csv: "csv";
        base64: "base64";
    }>>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    tintcolor: z.ZodOptional<z.ZodString>;
    class: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
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
        }, z.core.$strip>>>;
        polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>>>;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        template: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodObject<{
            text: z.ZodString;
            bold: z.ZodOptional<z.ZodBoolean>;
            color: z.ZodOptional<z.ZodString>;
            fontfamily: z.ZodOptional<z.ZodString>;
            halign: z.ZodOptional<z.ZodEnum<{
                center: "center";
                right: "right";
                justify: "justify";
                left: "left";
            }>>;
            italic: z.ZodOptional<z.ZodBoolean>;
            kerning: z.ZodOptional<z.ZodBoolean>;
            pixelsize: z.ZodOptional<z.ZodNumber>;
            strikeout: z.ZodOptional<z.ZodBoolean>;
            underline: z.ZodOptional<z.ZodBoolean>;
            valign: z.ZodOptional<z.ZodEnum<{
                center: "center";
                bottom: "bottom";
                top: "top";
            }>>;
            wrap: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        type: z.ZodOptional<z.ZodString>;
        class: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
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
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<Json, unknown, z.core.$ZodTypeInternals<Json, unknown>>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>;
    startx: z.ZodOptional<z.ZodNumber>;
    starty: z.ZodOptional<z.ZodNumber>;
    tintcolor: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<z.ZodNumber>;
    class: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>]>;

export { IProcessedTiledWorld, ITiledInfiniteMap, ITiledMap, ITiledMapChunk, ITiledMapEmbeddedTileset, ITiledMapExternalTileset, ITiledMapExternalTilesetReference, ITiledMapFrame, ITiledMapGrid, ITiledMapGroupLayer, ITiledMapImageLayer, ITiledMapInfiniteLayer, ITiledMapInfiniteTileLayer, ITiledMapLayer, ITiledMapObject, ITiledMapObjectLayer, ITiledMapOffset, ITiledMapPoint, ITiledMapProperty, ITiledMapRestrictedLayer, ITiledMapRestrictedTileLayer, ITiledMapTerrain, ITiledMapText, ITiledMapTile, ITiledMapTileLayer, ITiledMapTileset, ITiledMapTilesetReference, ITiledMapTransformations, ITiledMapWangColor, ITiledMapWangSet, ITiledMapWangTile, ITiledRestrictedMap, ITiledWorld, LayerDepth, MapConfigSchema, MapSegment, Position, Size, isEmbeddedTileset, isExternalTilesetReference, isFloorLayer, isGroupLayer, isInfiniteMap, isInfiniteTileLayer, isObjectLayer, isTileLayer };
export type { Json, MapConfig };
