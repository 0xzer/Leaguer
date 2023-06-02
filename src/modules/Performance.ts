import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Performance {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetPerformanceV1Report() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetPerformanceV1Report", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};