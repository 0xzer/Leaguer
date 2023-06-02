import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Challenges {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolChallengesV1AvailableQueueIds() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChallengesV1AvailableQueueIds", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChallengesV1ChallengesByProductLocalPlayer(product: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"product",value:product}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChallengesV1ChallengesByProductLocalPlayer", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChallengesV1LevelPoints() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChallengesV1LevelPoints", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChallengesV1MyUpdatedChallengesByGameId(gameId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"gameId",value:gameId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChallengesV1MyUpdatedChallengesByGameId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChallengesV1SuggestedChallengesByProductLocalPlayer(product: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"product",value:product}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChallengesV1SuggestedChallengesByProductLocalPlayer", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChallengesV1SummaryPlayerDataByProductLocalPlayer(product: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"product",value:product}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChallengesV1SummaryPlayerDataByProductLocalPlayer", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChallengesV1SummaryPlayerDataByProductPlayerByPuuid(product: string, puuid: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"product",value:product},{name:"puuid",value:puuid}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChallengesV1SummaryPlayerDataByProductPlayerByPuuid", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChallengesV1SummaryPlayersDataByProductPlayers(product: string, puuids: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"product",value:product}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChallengesV1SummaryPlayersDataByProductPlayers", pathParameters));
        
        if (puuids) {
            ps["puuids"] = puuids;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChallengesV1TitlesLocalPlayer() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChallengesV1TitlesLocalPlayer", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolChallengesV1UpdatePlayerPreferencesByProduct(bannerAccent?: string, challengeIds?: Array<number>, title?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolChallengesV1UpdatePlayerPreferencesByProduct"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (bannerAccent) {
            d["bannerAccent"] = bannerAccent;
        };
        

        if (challengeIds) {
            d["challengeIds"] = challengeIds;
        };
        

        if (title) {
            d["title"] = title;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolChallengesV1UpdatedChallengeByGameIdByPuuid(gameId: number, puuid: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"gameId",value:gameId},{name:"puuid",value:puuid}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChallengesV1UpdatedChallengeByGameIdByPuuid", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};