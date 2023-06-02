export interface Schema {
    components?: Components;
    info?:       Info;
    openapi?:    string;
    paths?:      { [key: string]: Path };
}

export interface Components {
    schemas?: { [key: string]: SchemaValue };
}

export interface SchemaValue {
    properties?:  { [key: string]: Property };
    type?:        Type;
    enum?:        string[];
    description?: string;
}

export interface Property {
    additionalProperties?: PropertyAdditionalProperties;
    type?:                 Type;
    $ref?:                 string;
    description?:          string;
    items?:                SchemaClass;
    format?:               Format;
}

export type PropertyAdditionalProperties = boolean | SchemaClass;

export interface SchemaClass {
    additionalProperties?: boolean;
    type?:                 Type;
    $ref?:                 string;
    format?:               Format;
    items?:                ItemsItems;
}

export type Format = "int32" | "int64" | "double" | "float";

export interface ItemsItems {
    type?:   Type;
    format?: Format;
}

export type Type = "object" | "string" | "integer" | "boolean" | "number" | "array";

export interface Info {
    title?:   string;
    version?: string;
}

export interface Path {
    post?:   Post;
    get?:    Get;
    delete?: Delete;
    put?:    Delete;
    patch?:  Patch;
    head?:   Head;
}

export interface Delete {
    operationId?: string;
    parameters?:  DeleteParameter[];
    responses?:   { [key: string]: DeleteResponse };
    summary?:     string;
    tags?:        string[];
    requestBody?: DeleteRequestBody;
}

export interface DeleteParameter {
    description?: string;
    format?:      Format;
    in?:          In;
    name?:        string;
    required?:    boolean;
    type?:        Type;
}

export type In = "path" | "query" | "header";

export interface DeleteRequestBody {
    content?: PurpleContent;
}

export interface PurpleContent {
    "application/json"?: PurpleApplicationJSON;
}

export interface PurpleApplicationJSON {
    schema?: SchemaClass;
}

export interface DeleteResponse {
    content?:     PurpleContent;
    description?: Description;
}

export type Description = "Successful response" | "No content";

export interface Get {
    operationId?: string;
    parameters?:  GetParameter[];
    responses?:   { [key: string]: GetResponse };
    tags?:        string[];
    summary?:     string;
    requestBody?: GetRequestBody;
}

export interface GetParameter {
    enum?:                 string[];
    in?:                   In;
    name?:                 string;
    required?:             boolean;
    type?:                 Type;
    description?:          string;
    format?:               Format;
    items?:                SchemaClass;
    additionalProperties?: ParameterAdditionalProperties;
}

export interface ParameterAdditionalProperties {
    type?: Type;
}

export interface GetRequestBody {
    content?: FluffyContent;
}

export interface FluffyContent {
    "application/json"?: FluffyApplicationJSON;
}

export interface FluffyApplicationJSON {
    schema?: PurpleSchema;
}

export interface PurpleSchema {
    items?: ItemsItems;
    type?:  Type;
}

export interface GetResponse {
    content?:     TentacledContent;
    description?: Description;
}

export interface TentacledContent {
    "application/json"?: TentacledApplicationJSON;
}

export interface TentacledApplicationJSON {
    schema?: Property;
}

export interface Head {
    operationId?: string;
    parameters?:  DeleteParameter[];
    responses?:   Responses;
    summary?:     string;
    tags?:        string[];
}

export interface Responses {
    "200"?: The200;
}

export interface The200 {
    content?:     The200_Content;
    description?: Description;
}

export interface The200_Content {
    "application/json"?: StickyApplicationJSON;
}

export interface StickyApplicationJSON {
    schema?: AdditionalPropertiesClass;
}

export interface AdditionalPropertiesClass {
    additionalProperties?: boolean;
    type?:                 Type;
}

export interface Patch {
    operationId?: string;
    parameters?:  DeleteParameter[];
    requestBody?: DeleteRequestBody;
    responses?:   { [key: string]: DeleteResponse };
    tags?:        string[];
}

export interface Post {
    operationId?: string;
    parameters?:  GetParameter[];
    responses?:   { [key: string]: PostResponse };
    summary?:     string;
    tags?:        string[];
    description?: string;
    requestBody?: PostRequestBody;
}

export interface PostRequestBody {
    content?: StickyContent;
}

export interface StickyContent {
    "application/json"?:                  IndigoApplicationJSON;
    "application/x-www-form-urlencoded"?: ApplicationXWWWFormUrlencoded;
}

export interface IndigoApplicationJSON {
    schema?: FluffySchema;
}

export interface FluffySchema {
    items?:                SchemaClass;
    type?:                 Type;
    additionalProperties?: PurpleAdditionalProperties;
    $ref?:                 string;
    format?:               Format;
}

export type PurpleAdditionalProperties = boolean | AdditionalPropertiesClass;

export interface ApplicationXWWWFormUrlencoded {
}

export interface PostResponse {
    content?:     IndigoContent;
    description?: Description;
}

export interface IndigoContent {
    "application/json"?: IndecentApplicationJSON;
}

export interface IndecentApplicationJSON {
    schema?: TentacledSchema;
}

export interface TentacledSchema {
    additionalProperties?: FluffyAdditionalProperties;
    type?:                 Type;
    items?:                SchemaClass;
    $ref?:                 string;
    format?:               Format;
}

export type FluffyAdditionalProperties = boolean | AdditionalPropertiesAdditionalProperties;

export interface AdditionalPropertiesAdditionalProperties {
    $ref?: string;
}