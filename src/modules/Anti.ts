import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Anti {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetAntiAddictionV1PoliciesByPolicyTypeAntiAddictionState(policyType: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"policyType",value:policyType}];
        
        let u = this.host + (await getPathFromOperationId("GetAntiAddictionV1PoliciesByPolicyTypeAntiAddictionState", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolAntiAddictionV1AntiAddictionToken() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolAntiAddictionV1AntiAddictionToken", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};