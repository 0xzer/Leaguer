import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Champ {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolChampSelectLegacyV1BannableChampionIds() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectLegacyV1BannableChampionIds", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectLegacyV1CurrentChampion() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectLegacyV1CurrentChampion", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectLegacyV1DisabledChampionIds() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectLegacyV1DisabledChampionIds", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectLegacyV1ImplementationActive() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectLegacyV1ImplementationActive", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectLegacyV1PickableChampionIds() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectLegacyV1PickableChampionIds", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectLegacyV1PickableSkinIds() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectLegacyV1PickableSkinIds", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectLegacyV1Session() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectLegacyV1Session", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectLegacyV1SessionTimer() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectLegacyV1SessionTimer", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectLegacyV1SessionTrades() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectLegacyV1SessionTrades", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectLegacyV1SessionTradesById(id: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectLegacyV1SessionTradesById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectLegacyV1TeamBoost() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectLegacyV1TeamBoost", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1AllGridChampions() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1AllGridChampions", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1BannableChampionIds() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1BannableChampionIds", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1CurrentChampion() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1CurrentChampion", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1DisabledChampionIds() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1DisabledChampionIds", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1GridChampionsByChampionId(championId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"championId",value:championId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1GridChampionsByChampionId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1MutedPlayers() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1MutedPlayers", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1OngoingTrade() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1OngoingTrade", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1PickableChampionIds() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1PickableChampionIds", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1PickableSkinIds() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1PickableSkinIds", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1PinDropNotification() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1PinDropNotification", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1Session() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1Session", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1SessionTimer() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1SessionTimer", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1SessionTrades() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1SessionTrades", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1SessionTradesById(id: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1SessionTradesById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1SfxNotifications() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1SfxNotifications", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1SkinCarouselSkins() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1SkinCarouselSkins", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1SkinSelectorInfo() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1SkinSelectorInfo", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1SummonersBySlotId(slotId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"slotId",value:slotId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1SummonersBySlotId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampSelectV1TeamBoost() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampSelectV1TeamBoost", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolChampSelectV1TogglePlayerMuted(puuid?: string, summonerId?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolChampSelectV1TogglePlayerMuted"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (puuid) {
            d["puuid"] = puuid;
        };
        

        if (summonerId) {
            d["summonerId"] = summonerId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

};