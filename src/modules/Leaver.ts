import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Leaver {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolLeaverBusterV1Notifications() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLeaverBusterV1Notifications", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLeaverBusterV1NotificationsById(id: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolLeaverBusterV1NotificationsById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};