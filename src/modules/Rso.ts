import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Rso {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolRsoAuthConfigurationV3ReadyState() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRsoAuthConfigurationV3ReadyState", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRsoAuthV1AuthHintsHint() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRsoAuthV1AuthHintsHint", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRsoAuthV1Authorization() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRsoAuthV1Authorization", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRsoAuthV1AuthorizationAccessToken() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRsoAuthV1AuthorizationAccessToken", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRsoAuthV1AuthorizationError() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRsoAuthV1AuthorizationError", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolRsoAuthV1AuthorizationGas(password?: string, platformId?: string, username?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolRsoAuthV1AuthorizationGas"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (password) {
            d["password"] = password;
        };
        

        if (platformId) {
            d["platformId"] = platformId;
        };
        

        if (username) {
            d["username"] = username;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolRsoAuthV1AuthorizationIdToken() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRsoAuthV1AuthorizationIdToken", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRsoAuthV1AuthorizationUserinfo() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRsoAuthV1AuthorizationUserinfo", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRsoAuthV1StatusByPlatformId(platformId: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"platformId",value:platformId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolRsoAuthV1StatusByPlatformId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolRsoAuthV2Config(clientId?: string, url?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolRsoAuthV2Config"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (clientId) {
            d["clientId"] = clientId;
        };
        

        if (url) {
            d["url"] = url;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

};