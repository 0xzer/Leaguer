import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Settings {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolSettingsV1AccountDidreset() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSettingsV1AccountDidreset", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSettingsV1AccountByCategory(category: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"category",value:category}];
        
        let u = this.host + (await getPathFromOperationId("GetLolSettingsV1AccountByCategory", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSettingsV1LocalByCategory(category: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"category",value:category}];
        
        let u = this.host + (await getPathFromOperationId("GetLolSettingsV1LocalByCategory", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSettingsV2AccountByPpTypeByCategory(ppType: string, category: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"ppType",value:ppType},{name:"category",value:category}];
        
        let u = this.host + (await getPathFromOperationId("GetLolSettingsV2AccountByPpTypeByCategory", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSettingsV2DidresetByPpType(ppType: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"ppType",value:ppType}];
        
        let u = this.host + (await getPathFromOperationId("GetLolSettingsV2DidresetByPpType", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSettingsV2LocalByCategory(category: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"category",value:category}];
        
        let u = this.host + (await getPathFromOperationId("GetLolSettingsV2LocalByCategory", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSettingsV2Ready() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSettingsV2Ready", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};