import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Client {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolClientConfigV3ClientConfigByName(name: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"name",value:name}];
        
        let u = this.host + (await getPathFromOperationId("GetLolClientConfigV3ClientConfigByName", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};