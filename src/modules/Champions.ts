import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Champions {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolChampionsV1InventoriesBySummonerIdChampions(summonerId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampionsV1InventoriesBySummonerIdChampions", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampionsV1InventoriesBySummonerIdChampionsMinimal(summonerId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampionsV1InventoriesBySummonerIdChampionsMinimal", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampionsV1InventoriesBySummonerIdChampionsPlayableCount(summonerId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampionsV1InventoriesBySummonerIdChampionsPlayableCount", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionId(summonerId: number, championId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId},{name:"championId",value:championId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkins(summonerId: number, championId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId},{name:"championId",value:championId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkins", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkinsByChampionSkinId(summonerId: number, championId: number, championSkinId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId},{name:"championId",value:championId},{name:"championSkinId",value:championSkinId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkinsByChampionSkinId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkinsBySkinIdChromas(summonerId: number, championId: number, skinId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId},{name:"championId",value:championId},{name:"skinId",value:skinId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkinsBySkinIdChromas", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampionsV1InventoriesBySummonerIdSkinsMinimal(summonerId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampionsV1InventoriesBySummonerIdSkinsMinimal", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChampionsV1OwnedChampionsMinimal() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChampionsV1OwnedChampionsMinimal", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};