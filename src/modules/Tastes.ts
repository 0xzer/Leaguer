import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Tastes {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolTastesV1Ready() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolTastesV1Ready", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolTastesV1SkinsModel() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolTastesV1SkinsModel", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};