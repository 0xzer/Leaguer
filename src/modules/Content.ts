import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Content {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolContentTargetingV1Filters() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolContentTargetingV1Filters", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolContentTargetingV1Locale() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolContentTargetingV1Locale", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolContentTargetingV1ProtectedFilters() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolContentTargetingV1ProtectedFilters", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};