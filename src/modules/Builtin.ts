import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Builtin {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async HttpAsyncResult(asyncToken: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"asyncToken",value:asyncToken}];
        
        let u = this.host + (await getPathFromOperationId("HttpAsyncResult", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async HttpAsyncStatus(asyncToken: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"asyncToken",value:asyncToken}];
        
        let u = this.host + (await getPathFromOperationId("HttpAsyncStatus", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async HttpApiDocsV1() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("HttpApiDocsV1", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async HttpApiDeclarationV1(api: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"api",value:api}];
        
        let u = this.host + (await getPathFromOperationId("HttpApiDeclarationV1", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async HttpApiDocsV2() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("HttpApiDocsV2", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async HttpApiDocsV3() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("HttpApiDocsV3", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};