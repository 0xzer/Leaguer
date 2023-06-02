import { GetParameter } from "../types/lcuSchema";

export const classString = async (className: string) => {
    return `import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class ${className} {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    `;
};

export const postMethodString = async (methodName: string, params: object, contentType: string) => {
    let arrParams = [];
    let str = `    async ${methodName}(`
    for(let [key, val] of Object.entries(params)) {
        if (val["$ref"]) continue;
        let type = val.type;
        if (type === "integer") type = "number";
        if (type === "array") {
            let arrayType = val.items.type;
            if (arrayType === "integer") arrayType = "number";
            type = `Array<${arrayType ? arrayType : 'any'}>`;
        }
        if (!str.endsWith("(")) str += ", ";
        arrParams.push(key);
        str += `${key}?: ${type}`;
    };
    str += `) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("${methodName}"));
        let headers = {"content-type": "${contentType}"};
        let d = {};
        ${arrParams.map(p => `
        if (${p}) {
            d["${p}"] = ${p};
        };
        `).join("\n")}
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };\n`;
    return str;
};

export const getMethodString = async (methodName: string, params: Array<GetParameter>) => {
    let arrParams = [];
    let str = `    async ${methodName}(`
    for(let i = 0; i < params.length; i++) {
        let val = params[i];
        if (val.name.includes("-")) {
            val.name = val.name.replaceAll("-", "_");
        };
        if (val["$ref"]) continue;
        let type = val.type;
        if (type === "integer") type = "number";
        if (arrParams.find(p => p.name === val.name)) continue;
        if (!str.endsWith("(")) str += ", ";
        arrParams.push({
            name: val.name,
            in: val.in,
            required: val.required
        });
        str += `${val.name}${val.required ? "" : "?"}: ${type.replace("array", "Array<any>")}`;
    };
    str += `) {
        let hs = {${arrParams.filter(p => p.in === "header" && p.required).map(p => `"${p.name}":${p.name}`).join(",")}};
        ${arrParams.filter(p => p.in === "header" && !p.required).map(p => `
        if (${p.name}) {
            hs["${p.name}"] = ${p.name}
        };
        `).join("\n")}
        let ps = {};
        let pathParameters: Array<Parameters> = [${arrParams.filter(p => p.in === "path" && p.required).map(p => `{name:"${p.name}",value:${p.name}}`).join(",")}];
        ${arrParams.filter(p => p.in === "path" && !p.required).map(p => `
        if (${p.name}) {
            pathParameters.push({name:"${p.name}",value:${p.name}})
        };`
        ).join("\n")}
        let u = this.host + (await getPathFromOperationId("${methodName}", pathParameters));
        ${arrParams.filter(p => p.in === "query").map(p => `
        if (${p.name}) {
            ps["${p.name}"] = ${p.name};
        };
        `).join("\n")}
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };\n`;
    return str;
};