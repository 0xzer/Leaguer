import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Worlds {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolTokenUpsellV1All() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolTokenUpsellV1All", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};