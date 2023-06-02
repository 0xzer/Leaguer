import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Service {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolServiceStatusV1LcuStatus() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolServiceStatusV1LcuStatus", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolServiceStatusV1TickerMessages() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolServiceStatusV1TickerMessages", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};