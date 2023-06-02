import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Pre {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolPreEndOfGameV1CurrentSequenceEvent() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPreEndOfGameV1CurrentSequenceEvent", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};