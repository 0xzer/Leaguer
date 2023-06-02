import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Tracing {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async PostTracingV1TraceEvent(dest?: string, details?: string, name?: string, src?: string, tags?: string, when?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostTracingV1TraceEvent"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (dest) {
            d["dest"] = dest;
        };
        

        if (details) {
            d["details"] = details;
        };
        

        if (name) {
            d["name"] = name;
        };
        

        if (src) {
            d["src"] = src;
        };
        

        if (tags) {
            d["tags"] = tags;
        };
        

        if (when) {
            d["when"] = when;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostTracingV1TraceModule(moduleId?: number, name?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostTracingV1TraceModule"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (moduleId) {
            d["moduleId"] = moduleId;
        };
        

        if (name) {
            d["name"] = name;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostTracingV1TracePhaseBegin(name?: string, when?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostTracingV1TracePhaseBegin"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (name) {
            d["name"] = name;
        };
        

        if (when) {
            d["when"] = when;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostTracingV1TracePhaseEnd(name?: string, when?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostTracingV1TracePhaseEnd"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (name) {
            d["name"] = name;
        };
        

        if (when) {
            d["when"] = when;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

};