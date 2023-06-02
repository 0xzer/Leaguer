import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Honor {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolHonorV2V1Ballot() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolHonorV2V1Ballot", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolHonorV2V1Config() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolHonorV2V1Config", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolHonorV2V1HonorPlayer(gameId?: number, honorCategory?: string, summonerId?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolHonorV2V1HonorPlayer"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (gameId) {
            d["gameId"] = gameId;
        };
        

        if (honorCategory) {
            d["honorCategory"] = honorCategory;
        };
        

        if (summonerId) {
            d["summonerId"] = summonerId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolHonorV2V1LateRecognition() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolHonorV2V1LateRecognition", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolHonorV2V1LatestEligibleGame() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolHonorV2V1LatestEligibleGame", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolHonorV2V1LevelChange() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolHonorV2V1LevelChange", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolHonorV2V1MutualHonor() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolHonorV2V1MutualHonor", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolHonorV2V1Profile() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolHonorV2V1Profile", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolHonorV2V1Recognition() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolHonorV2V1Recognition", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolHonorV2V1RewardGranted() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolHonorV2V1RewardGranted", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolHonorV2V1TeamChoices() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolHonorV2V1TeamChoices", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolHonorV2V1VoteCompletion() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolHonorV2V1VoteCompletion", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};