import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Entitlements {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetEntitlementsV1Token() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetEntitlementsV1Token", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};