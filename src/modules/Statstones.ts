import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Statstones {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolStatstonesV1EogNotifications() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolStatstonesV1EogNotifications", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStatstonesV1FeaturedChampionStatstonesByChampionItemId(championItemId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"championItemId",value:championItemId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolStatstonesV1FeaturedChampionStatstonesByChampionItemId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolStatstonesV1FeaturedChampionStatstonesByChampionItemIdByStatstoneId(existingFeatured?: Array<any>, index?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolStatstonesV1FeaturedChampionStatstonesByChampionItemIdByStatstoneId"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (existingFeatured) {
            d["existingFeatured"] = existingFeatured;
        };
        

        if (index) {
            d["index"] = index;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolStatstonesV1ProfileSummaryByPuuid(puuid: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"puuid",value:puuid}];
        
        let u = this.host + (await getPathFromOperationId("GetLolStatstonesV1ProfileSummaryByPuuid", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStatstonesV1StatstoneByContentIdOwned(contentId: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"contentId",value:contentId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolStatstonesV1StatstoneByContentIdOwned", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStatstonesV1StatstonesEnabledQueueIds() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolStatstonesV1StatstonesEnabledQueueIds", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStatstonesV1VignetteNotifications() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolStatstonesV1VignetteNotifications", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStatstonesV2PlayerStatstonesSelfByChampionItemId(championItemId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"championItemId",value:championItemId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolStatstonesV2PlayerStatstonesSelfByChampionItemId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStatstonesV2PlayerSummarySelf() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolStatstonesV2PlayerSummarySelf", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};