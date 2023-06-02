import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Kickout {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolKickoutV1Notification() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolKickoutV1Notification", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};