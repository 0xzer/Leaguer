import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Career {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolCareerStatsV1ChampionAveragesSeasonBySeasonByChampionIdByPositionByTierByQueue(season: number, championId: number, position: string, tier: string, queue: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"season",value:season},{name:"championId",value:championId},{name:"position",value:position},{name:"tier",value:tier},{name:"queue",value:queue}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCareerStatsV1ChampionAveragesSeasonBySeasonByChampionIdByPositionByTierByQueue", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCareerStatsV1ChampionAveragesByChampionIdByPositionByTierByQueue(championId: number, position: string, tier: string, queue: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"championId",value:championId},{name:"position",value:position},{name:"tier",value:tier},{name:"queue",value:queue}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCareerStatsV1ChampionAveragesByChampionIdByPositionByTierByQueue", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCareerStatsV1ChampionExpertsSeasonBySeasonByChampionIdByPosition(season: number, championId: number, position: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"season",value:season},{name:"championId",value:championId},{name:"position",value:position}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCareerStatsV1ChampionExpertsSeasonBySeasonByChampionIdByPosition", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCareerStatsV1ChampionExpertsByChampionIdByPosition(championId: number, position: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"championId",value:championId},{name:"position",value:position}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCareerStatsV1ChampionExpertsByChampionIdByPosition", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCareerStatsV1PositionAveragesSeasonBySeasonByPositionByTierByQueue(season: number, position: string, tier: string, queue: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"season",value:season},{name:"position",value:position},{name:"tier",value:tier},{name:"queue",value:queue}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCareerStatsV1PositionAveragesSeasonBySeasonByPositionByTierByQueue", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCareerStatsV1PositionAveragesByPositionByTierByQueue(position: string, tier: string, queue: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"position",value:position},{name:"tier",value:tier},{name:"queue",value:queue}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCareerStatsV1PositionAveragesByPositionByTierByQueue", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCareerStatsV1PositionExpertsSeasonBySeasonByPosition(season: number, position: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"season",value:season},{name:"position",value:position}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCareerStatsV1PositionExpertsSeasonBySeasonByPosition", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCareerStatsV1PositionExpertsByPosition(position: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"position",value:position}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCareerStatsV1PositionExpertsByPosition", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCareerStatsV1SummonerGamesByPuuid(puuid: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"puuid",value:puuid}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCareerStatsV1SummonerGamesByPuuid", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCareerStatsV1SummonerGamesByPuuidSeasonBySeason(puuid: string, season: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"puuid",value:puuid},{name:"season",value:season}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCareerStatsV1SummonerGamesByPuuidSeasonBySeason", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCareerStatsV1SummonerStatsByPuuidBySeasonByQueueByPosition(puuid: string, season: number, queue: string, position: string, championId?: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"puuid",value:puuid},{name:"season",value:season},{name:"queue",value:queue},{name:"position",value:position}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCareerStatsV1SummonerStatsByPuuidBySeasonByQueueByPosition", pathParameters));
        
        if (championId) {
            ps["championId"] = championId;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};