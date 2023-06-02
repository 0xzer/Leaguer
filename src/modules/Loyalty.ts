import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Loyalty {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolLoyaltyV1InventoryRequestNotification() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLoyaltyV1InventoryRequestNotification", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLoyaltyV1StatusNotification() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLoyaltyV1StatusNotification", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolLoyaltyV1UpdateTftInventory(championIds?: Array<number>, freeRewardedChampionsCount?: number, freeRewardedSkinsCount?: number, ipBoost?: number, loyaltyTFTCompanionCount?: number, loyaltyTFTMapSkinCount?: number, skinIds?: Array<number>, xpBoost?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolLoyaltyV1UpdateTftInventory"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (championIds) {
            d["championIds"] = championIds;
        };
        

        if (freeRewardedChampionsCount) {
            d["freeRewardedChampionsCount"] = freeRewardedChampionsCount;
        };
        

        if (freeRewardedSkinsCount) {
            d["freeRewardedSkinsCount"] = freeRewardedSkinsCount;
        };
        

        if (ipBoost) {
            d["ipBoost"] = ipBoost;
        };
        

        if (loyaltyTFTCompanionCount) {
            d["loyaltyTFTCompanionCount"] = loyaltyTFTCompanionCount;
        };
        

        if (loyaltyTFTMapSkinCount) {
            d["loyaltyTFTMapSkinCount"] = loyaltyTFTMapSkinCount;
        };
        

        if (skinIds) {
            d["skinIds"] = skinIds;
        };
        

        if (xpBoost) {
            d["xpBoost"] = xpBoost;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

};