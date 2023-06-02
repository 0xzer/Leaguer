import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Config {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetClientConfigV1Config(type: string, app?: string, version?: string, patchline?: string, region?: string, namespace?: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetClientConfigV1Config", pathParameters));
        
        if (type) {
            ps["type"] = type;
        };
        

        if (app) {
            ps["app"] = app;
        };
        

        if (version) {
            ps["version"] = version;
        };
        

        if (patchline) {
            ps["patchline"] = patchline;
        };
        

        if (region) {
            ps["region"] = region;
        };
        

        if (namespace) {
            ps["namespace"] = namespace;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetClientConfigV1ConfigByName(name: string, type: string, app?: string, version?: string, patchline?: string, region?: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"name",value:name}];
        
        let u = this.host + (await getPathFromOperationId("GetClientConfigV1ConfigByName", pathParameters));
        
        if (type) {
            ps["type"] = type;
        };
        

        if (app) {
            ps["app"] = app;
        };
        

        if (version) {
            ps["version"] = version;
        };
        

        if (patchline) {
            ps["patchline"] = patchline;
        };
        

        if (region) {
            ps["region"] = region;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetClientConfigV1StatusByType(type: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"type",value:type}];
        
        let u = this.host + (await getPathFromOperationId("GetClientConfigV1StatusByType", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetClientConfigV2ConfigByName(name: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"name",value:name}];
        
        let u = this.host + (await getPathFromOperationId("GetClientConfigV2ConfigByName", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetClientConfigV2NamespaceByNamespace(namespace: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"namespace",value:namespace}];
        
        let u = this.host + (await getPathFromOperationId("GetClientConfigV2NamespaceByNamespace", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetClientConfigV2NamespaceByNamespacePlayer(namespace: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"namespace",value:namespace}];
        
        let u = this.host + (await getPathFromOperationId("GetClientConfigV2NamespaceByNamespacePlayer", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetClientConfigV2NamespaceByNamespacePublic(namespace: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"namespace",value:namespace}];
        
        let u = this.host + (await getPathFromOperationId("GetClientConfigV2NamespaceByNamespacePublic", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};