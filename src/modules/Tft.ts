import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Tft {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolTftV1TftHubFooterColors() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolTftV1TftHubFooterColors", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolTftV1TftStorePromos() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolTftV1TftStorePromos", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};