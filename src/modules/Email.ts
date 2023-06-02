import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Email {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolEmailVerificationV1Email() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolEmailVerificationV1Email", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};