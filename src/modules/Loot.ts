import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Loot {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolLootV1CurrencyConfiguration() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1CurrencyConfiguration", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1Enabled() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1Enabled", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1LootGrants() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1LootGrants", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1LootItems() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1LootItems", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1LootOddsByRecipeName(recipeName: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"recipeName",value:recipeName}];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1LootOddsByRecipeName", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1Milestones(minimizeResponse: boolean, includeInactive?: boolean) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1Milestones", pathParameters));
        
        if (minimizeResponse) {
            ps["minimizeResponse"] = minimizeResponse;
        };
        

        if (includeInactive) {
            ps["includeInactive"] = includeInactive;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1MilestonesCounters() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1MilestonesCounters", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1MilestonesItems() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1MilestonesItems", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1MilestonesByLootMilestonesId(lootMilestonesId: string, includeInactive?: boolean) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"lootMilestonesId",value:lootMilestonesId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1MilestonesByLootMilestonesId", pathParameters));
        
        if (includeInactive) {
            ps["includeInactive"] = includeInactive;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1MilestonesByLootMilestonesIdClaimProgress(lootMilestonesId: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"lootMilestonesId",value:lootMilestonesId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1MilestonesByLootMilestonesIdClaimProgress", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1MilestonesByLootMilestonesIdCounter(lootMilestonesId: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"lootMilestonesId",value:lootMilestonesId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1MilestonesByLootMilestonesIdCounter", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1NewPlayerCheckDone() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1NewPlayerCheckDone", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1PlayerDisplayCategories() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1PlayerDisplayCategories", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1PlayerLoot() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1PlayerLoot", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1PlayerLootMap() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1PlayerLootMap", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1PlayerLootNotifications() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1PlayerLootNotifications", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1PlayerLootByLootId(lootId: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"lootId",value:lootId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1PlayerLootByLootId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1PlayerLootByLootIdContextMenu(lootId: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"lootId",value:lootId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1PlayerLootByLootIdContextMenu", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1Ready() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1Ready", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1RecipesConfiguration() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1RecipesConfiguration", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV1RecipesInitialItemByLootId(lootId: string, includeInactive?: boolean) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"lootId",value:lootId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV1RecipesInitialItemByLootId", pathParameters));
        
        if (includeInactive) {
            ps["includeInactive"] = includeInactive;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLootV2PlayerLootMap() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLootV2PlayerLootMap", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};