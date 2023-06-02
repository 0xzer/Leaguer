import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Platform {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolPlatformConfigV1InitialConfigurationComplete() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlatformConfigV1InitialConfigurationComplete", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPlatformConfigV1Namespaces() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlatformConfigV1Namespaces", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPlatformConfigV1NamespacesByNs(ns: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"ns",value:ns}];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlatformConfigV1NamespacesByNs", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPlatformConfigV1NamespacesByNsByKey(ns: string, key: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"ns",value:ns},{name:"key",value:key}];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlatformConfigV1NamespacesByNsByKey", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};