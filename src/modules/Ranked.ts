import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Ranked {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolRankedV1ApexLeaguesByQueueTypeByTier(queueType: string, tier: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"queueType",value:queueType},{name:"tier",value:tier}];
        
        let u = this.host + (await getPathFromOperationId("GetLolRankedV1ApexLeaguesByQueueTypeByTier", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRankedV1ChallengerLaddersEnabled() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRankedV1ChallengerLaddersEnabled", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRankedV1CurrentLpChangeNotification() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRankedV1CurrentLpChangeNotification", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRankedV1CurrentRankedStats() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRankedV1CurrentRankedStats", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRankedV1EosNotifications() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRankedV1EosNotifications", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRankedV1EosRewards() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRankedV1EosRewards", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRankedV1LeagueLaddersByPuuid(puuid: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"puuid",value:puuid}];
        
        let u = this.host + (await getPathFromOperationId("GetLolRankedV1LeagueLaddersByPuuid", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRankedV1Notifications() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRankedV1Notifications", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRankedV1RankedStats(puuids: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRankedV1RankedStats", pathParameters));
        
        if (puuids) {
            ps["puuids"] = puuids;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRankedV1RankedStatsByPuuid(puuid: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"puuid",value:puuid}];
        
        let u = this.host + (await getPathFromOperationId("GetLolRankedV1RankedStatsByPuuid", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRankedV1RatedLadderByQueueType(queueType: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"queueType",value:queueType}];
        
        let u = this.host + (await getPathFromOperationId("GetLolRankedV1RatedLadderByQueueType", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRankedV1SignedRankedStats() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRankedV1SignedRankedStats", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRankedV1SocialLeaderboardRankedQueueStatsForPuuids(queueType: string, puuids: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRankedV1SocialLeaderboardRankedQueueStatsForPuuids", pathParameters));
        
        if (queueType) {
            ps["queueType"] = queueType;
        };
        

        if (puuids) {
            ps["puuids"] = puuids;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRankedV1SplitsConfig() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRankedV1SplitsConfig", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRankedV1TopRatedLaddersEnabled() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRankedV1TopRatedLaddersEnabled", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRankedV2Tiers(summonerIds: Array<any>, queueTypes: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRankedV2Tiers", pathParameters));
        
        if (summonerIds) {
            ps["summonerIds"] = summonerIds;
        };
        

        if (queueTypes) {
            ps["queueTypes"] = queueTypes;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};