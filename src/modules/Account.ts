import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Account {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async PostLolAccountVerificationV1Authenticate(password?: string, username?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolAccountVerificationV1Authenticate"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (password) {
            d["password"] = password;
        };
        

        if (username) {
            d["username"] = username;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolAccountVerificationV1Device() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolAccountVerificationV1Device", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolAccountVerificationV1IsVerified() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolAccountVerificationV1IsVerified", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolAccountVerificationV1SendToken(device?: string, locale?: string, mediator?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolAccountVerificationV1SendToken"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (device) {
            d["device"] = device;
        };
        

        if (locale) {
            d["locale"] = locale;
        };
        

        if (mediator) {
            d["mediator"] = mediator;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolAccountVerificationV1Verify(mediator?: string, token?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolAccountVerificationV1Verify"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (mediator) {
            d["mediator"] = mediator;
        };
        

        if (token) {
            d["token"] = token;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

};