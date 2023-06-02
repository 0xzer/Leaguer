import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Collections {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolCollectionsV1InventoriesChestEligibility() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolCollectionsV1InventoriesChestEligibility", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCollectionsV1InventoriesLocalPlayerChampionMasteryScore() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolCollectionsV1InventoriesLocalPlayerChampionMasteryScore", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCollectionsV1InventoriesScouting() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolCollectionsV1InventoriesScouting", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCollectionsV1InventoriesBySummonerIdBackdrop(summonerId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCollectionsV1InventoriesBySummonerIdBackdrop", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCollectionsV1InventoriesBySummonerIdChampionMastery(summonerId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCollectionsV1InventoriesBySummonerIdChampionMastery", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCollectionsV1InventoriesBySummonerIdChampionMasteryTop(summonerId: number, limit: number, sortRule?: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCollectionsV1InventoriesBySummonerIdChampionMasteryTop", pathParameters));
        
        if (limit) {
            ps["limit"] = limit;
        };
        

        if (sortRule) {
            ps["sortRule"] = sortRule;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCollectionsV1InventoriesBySummonerIdSpells(summonerId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCollectionsV1InventoriesBySummonerIdSpells", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCollectionsV1InventoriesBySummonerIdWardSkins(summonerId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCollectionsV1InventoriesBySummonerIdWardSkins", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCollectionsV1InventoriesBySummonerIdWardSkinsByWardSkinId(summonerId: number, wardSkinId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId},{name:"wardSkinId",value:wardSkinId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCollectionsV1InventoriesBySummonerIdWardSkinsByWardSkinId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};