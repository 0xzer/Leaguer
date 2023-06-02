import fetch from 'node-fetch';
import https from 'https';
import { URLSearchParams } from 'url';
import { writeFileSync, readFileSync, existsSync, readdirSync } from 'fs';
import { join, resolve } from 'path';

import { classString, getMethodString, postMethodString } from './templates';
import * as Schema from '../types/lcuSchema';
//import gameEvents from '../clients/gameEvents2.json';


const VERSION_REGEX = /V1|V2|V3|V4|V5|V6|V7|V8/g

//let dir = readdirSync(join(__dirname, "..", "/modules"));

/*
for(let m of dir) {
    let moduleName = m.split(".ts")[0];
    //console.log(`import { ${moduleName} } from '../modules/${m}';`);
    console.log(`this.${moduleName.toLowerCase()} = new ${moduleName}(this.data.url);`);
    //console.log(`${moduleName.toLowerCase()}: ${moduleName}`);
};
process.exit()
*/

let stringCache = {};

class LCUSchema {
    host: string
    agent: https.Agent
    schemas: any
    constructor(host: string) {
        this.host = host
        this.agent = new https.Agent({
            rejectUnauthorized: false,
        })
        this.schemas = {}
    }
    /*
    async generateGameEventTypesJSON() {
        let evs = gameEvents.events.Events;
        let events = {};
        for(let event of evs) {
            if (events[event.EventName]) continue;
            events[event.EventName] = event;
        };
        //writeFileSync(join(__dirname, "..", "/clients/gameEvents.json"), JSON.stringify(events));
    }
    */
    async moduleFileExists(tag) {
        let path = join(__dirname, "..", `/modules/${tag}.ts`);
        let exists = existsSync(path);
        return exists;
    }

    async createCodeFromMethodData(methodData: Schema.Path, path: string, components: Schema.Components) {
        if (methodData.post) {
            let data = methodData["post"];
            let tags = data.tags;
            let tag = await this.getTag(tags);
            if (!stringCache[tag]) {
                let classStr = await classString(tag);
                stringCache[tag] = classStr;
            }
            let operationId = data.operationId;
            let parameters = data.parameters;
            let body = data.requestBody;
            let contentType;
            if (body) {
                let contentData = Object.keys(body.content)[0];
                contentType = contentData;
                let contentSchema = body.content[contentData].schema;
                if (contentSchema) {
                    if (contentSchema["$ref"]) {
                        let refSchema = contentSchema["$ref"];
                        let refName = refSchema.split("#/components/schemas/")[1];
                        let comps = components.schemas;
                        let ref = comps[refName];
                        let payloadType = ref.type;
                        let properties = ref.properties;
                        if (payloadType === "object") {
                            let methodString = await postMethodString(operationId, properties, contentType);
                            stringCache[tag] += "\n"+methodString;
                        };
                    };
                };
            };
        } else if (methodData.get) {
            let data = methodData["get"];
            let tags = data.tags;
            let tag = await this.getTag(tags);
            if (!stringCache[tag]) {
                let classStr = await classString(tag);
                stringCache[tag] = classStr;
            }
            let operationId = data.operationId;
            let parameters = data.parameters;
            let methodString = await getMethodString(operationId, parameters);
            stringCache[tag] += "\n"+methodString;
        } else if (methodData.head) {

        } else if (methodData.put) {

        } else if (methodData.delete) {

        };
        
    };

    async getTag(tags: Array<string>) {
        let tag: string;
        let tagsLength = tags.length;
        if (tagsLength > 1) {
            let splitUp = tags[1].split(" ")[1];
            if (splitUp) {
                if (!splitUp.includes('-')) {
                    splitUp = tags[1].split(" ")[1];
                } else {
                    splitUp = splitUp.split("-")[1];
                };
            } else {
                splitUp = "External";
            };
            tag = (await this.firstUpperCase(splitUp));
        } else {
            if (tagsLength <= 0) {
                tag = "External";
            } else {
                tag = (await this.firstUpperCase(tags[0]));
            }
        };
        return tag;
    };

    async firstUpperCase(str: string) {
        let chars = str.split("");
        chars[0] = chars[0].toUpperCase();
        return chars.join("");
    }

    async createMethods() {
        let schema: Schema.Schema = await this.getLCUSchema();
        let paths = schema.paths;
        for(let [path, methods] of Object.entries(paths)) {
            for(let [method,methodData] of Object.entries(methods)) {
                let obj = {};
                obj[method] = methodData;
                await this.createCodeFromMethodData(obj, path, schema.components);
            };
        };

        for(let [key, value] of Object.entries(stringCache)) {
            let finishedClass = `${value}\n};`;
            writeFileSync(join(__dirname, "..", `/modules/${key}.ts`), finishedClass);
        };
    };

    async getLCUSchema(): Promise<Schema.Schema> {
        const request = await fetch("https://www.mingweisamuel.com/lcu-schema/lcu/openapi.json");
        const res: Schema.Schema = await request.json();
        return res;
    };

    async generateLCUEventSchema() {
        const currentSchema: any = await this.getLoadedEventSchema();
        const request = await fetch("https://www.mingweisamuel.com/lcu-schema/lcu/openapi.json")
        const res = await request.json()
        const paths: object = res.paths;
        for(let [key, value] of Object.entries(paths)) {
            let path = key;
            let methods: object = value;
            for(let [method, methodData] of Object.entries(methods)) {
                let splitPath = path.split("/").slice(1);
                let firstPath = splitPath.length > 1 ? `/${splitPath[0]}/${splitPath[1]}` : `/${splitPath[0]}`;
                if (!(firstPath in currentSchema)) {
                    currentSchema[firstPath] = {};
                };
                if (!(path in currentSchema[firstPath])) {
                    let operationId = methodData.operationId.replace("Post", "").replace("Get", "").replace("Delete", "").replace("Head", "").replace("Put", "");
                    currentSchema[firstPath][path] = operationId;
                };
            };
        };
        await this.writeEventReplacements(currentSchema);
    };

    async writeEventReplacements(data: object) {
        writeFileSync(join(__dirname, "..", "/data/EventSchemas.json"), JSON.stringify(data));
        return true;
    };

    async getLoadedEventSchema(): Promise<object> {
        const schema = JSON.parse(readFileSync(join(__dirname, "..", "/data/EventSchemas.json"), "utf-8"));
        return schema;
    };
};

// generate files
/*
let generator = new LCUSchema("https://riot:pass-OTQ@127.0.0.1:port");
generator.generateLCUEventSchema();
generator.createMethods();
*/