import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Active {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolActiveBoostsV1ActiveBoosts() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolActiveBoostsV1ActiveBoosts", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};