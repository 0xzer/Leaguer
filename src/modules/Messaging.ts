import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Messaging {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async PostRiotMessagingServiceV1Entitlements(accessToken?: string, entitlements?: Array<string>, issuer?: string, subject?: string, token?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostRiotMessagingServiceV1Entitlements"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (accessToken) {
            d["accessToken"] = accessToken;
        };
        

        if (entitlements) {
            d["entitlements"] = entitlements;
        };
        

        if (issuer) {
            d["issuer"] = issuer;
        };
        

        if (subject) {
            d["subject"] = subject;
        };
        

        if (token) {
            d["token"] = token;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetRiotMessagingServiceV1MessageByA(a: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"a",value:a}];
        
        let u = this.host + (await getPathFromOperationId("GetRiotMessagingServiceV1MessageByA", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetRiotMessagingServiceV1MessageByAByB(a: string, b: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"a",value:a},{name:"b",value:b}];
        
        let u = this.host + (await getPathFromOperationId("GetRiotMessagingServiceV1MessageByAByB", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetRiotMessagingServiceV1MessageByAByBByC(a: string, b: string, c: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"a",value:a},{name:"b",value:b},{name:"c",value:c}];
        
        let u = this.host + (await getPathFromOperationId("GetRiotMessagingServiceV1MessageByAByBByC", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetRiotMessagingServiceV1MessageByAByBByCByD(a: string, b: string, c: string, d: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"a",value:a},{name:"b",value:b},{name:"c",value:c},{name:"d",value:d}];
        
        let u = this.host + (await getPathFromOperationId("GetRiotMessagingServiceV1MessageByAByBByCByD", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetRiotMessagingServiceV1MessageByAByBByCByDByE(a: string, b: string, c: string, d: string, e: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"a",value:a},{name:"b",value:b},{name:"c",value:c},{name:"d",value:d},{name:"e",value:e}];
        
        let u = this.host + (await getPathFromOperationId("GetRiotMessagingServiceV1MessageByAByBByCByDByE", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetRiotMessagingServiceV1MessageByAByBByCByDByEByF(a: string, b: string, c: string, d: string, e: string, f: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"a",value:a},{name:"b",value:b},{name:"c",value:c},{name:"d",value:d},{name:"e",value:e},{name:"f",value:f}];
        
        let u = this.host + (await getPathFromOperationId("GetRiotMessagingServiceV1MessageByAByBByCByDByEByF", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetRiotMessagingServiceV1Session() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetRiotMessagingServiceV1Session", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetRiotMessagingServiceV1State() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetRiotMessagingServiceV1State", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};