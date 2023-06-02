import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Login {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolLoginV1AccountState() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLoginV1AccountState", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLoginV1LoginConnectionState() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLoginV1LoginConnectionState", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLoginV1LoginDataPacket() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLoginV1LoginDataPacket", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLoginV1LoginInGameCreds() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLoginV1LoginInGameCreds", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLoginV1LoginPlatformCredentials() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLoginV1LoginPlatformCredentials", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLoginV1LoginQueueState() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLoginV1LoginQueueState", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLoginV1Session() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLoginV1Session", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolLoginV1Session(password?: string, username?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolLoginV1Session"));
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

    async PostLolLoginV1SummonerSession(displayName?: string, isNewPlayer?: boolean, summonerId?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolLoginV1SummonerSession"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (displayName) {
            d["displayName"] = displayName;
        };
        

        if (isNewPlayer) {
            d["isNewPlayer"] = isNewPlayer;
        };
        

        if (summonerId) {
            d["summonerId"] = summonerId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolLoginV1Wallet() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLoginV1Wallet", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLoginV2LeagueSessionInitToken() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLoginV2LeagueSessionInitToken", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};