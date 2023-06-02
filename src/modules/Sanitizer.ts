import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Sanitizer {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async PostSanitizerV1ContainsSanitized(aggressiveScan?: boolean, level?: number, text?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostSanitizerV1ContainsSanitized"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (aggressiveScan) {
            d["aggressiveScan"] = aggressiveScan;
        };
        

        if (level) {
            d["level"] = level;
        };
        

        if (text) {
            d["text"] = text;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostSanitizerV1Sanitize(aggressiveScan?: boolean, level?: number, text?: string, texts?: Array<string>) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostSanitizerV1Sanitize"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (aggressiveScan) {
            d["aggressiveScan"] = aggressiveScan;
        };
        

        if (level) {
            d["level"] = level;
        };
        

        if (text) {
            d["text"] = text;
        };
        

        if (texts) {
            d["texts"] = texts;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetSanitizerV1Status() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetSanitizerV1Status", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};