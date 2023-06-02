import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Publishing {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolPublishingContentV1Ready() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPublishingContentV1Ready", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPublishingContentV1TftHubCards() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPublishingContentV1TftHubCards", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};