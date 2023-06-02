import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Shutdown {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolShutdownV1Notification() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolShutdownV1Notification", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};