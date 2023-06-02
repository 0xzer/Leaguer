import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Esport {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolEsportStreamNotificationsV1LiveStreams() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolEsportStreamNotificationsV1LiveStreams", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolEsportStreamNotificationsV1StreamUrl() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolEsportStreamNotificationsV1StreamUrl", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};