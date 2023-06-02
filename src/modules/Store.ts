import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Store {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolStoreV1Catalog(inventoryType?: Array<any>, itemId?: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolStoreV1Catalog", pathParameters));
        
        if (inventoryType) {
            ps["inventoryType"] = inventoryType;
        };
        

        if (itemId) {
            ps["itemId"] = itemId;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStoreV1CatalogSales() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolStoreV1CatalogSales", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStoreV1CatalogByInventoryType(inventoryType: string, itemIds: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"inventoryType",value:inventoryType}];
        
        let u = this.host + (await getPathFromOperationId("GetLolStoreV1CatalogByInventoryType", pathParameters));
        
        if (itemIds) {
            ps["itemIds"] = itemIds;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStoreV1CatalogByInstanceIds(instanceIds: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolStoreV1CatalogByInstanceIds", pathParameters));
        
        if (instanceIds) {
            ps["instanceIds"] = instanceIds;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStoreV1GetStoreUrl() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolStoreV1GetStoreUrl", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStoreV1Giftablefriends() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolStoreV1Giftablefriends", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStoreV1ItemKeysFromInstanceIds(instanceIds: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolStoreV1ItemKeysFromInstanceIds", pathParameters));
        
        if (instanceIds) {
            ps["instanceIds"] = instanceIds;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStoreV1ItemKeysFromOfferIds(offerIds: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolStoreV1ItemKeysFromOfferIds", pathParameters));
        
        if (offerIds) {
            ps["offerIds"] = offerIds;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStoreV1LastPage() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolStoreV1LastPage", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStoreV1Offers(inventoryTypeUUIDs?: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolStoreV1Offers", pathParameters));
        
        if (inventoryTypeUUIDs) {
            ps["inventoryTypeUUIDs"] = inventoryTypeUUIDs;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStoreV1OrderNotifications() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolStoreV1OrderNotifications", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStoreV1OrderNotificationsById(id: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolStoreV1OrderNotificationsById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStoreV1PaymentDetails(action: string, giftRecipientAccountId?: number, giftMessage?: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolStoreV1PaymentDetails", pathParameters));
        
        if (action) {
            ps["action"] = action;
        };
        

        if (giftRecipientAccountId) {
            ps["giftRecipientAccountId"] = giftRecipientAccountId;
        };
        

        if (giftMessage) {
            ps["giftMessage"] = giftMessage;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStoreV1SkinsBySkinId(skinId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"skinId",value:skinId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolStoreV1SkinsBySkinId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolStoreV1SkinsBySkinIdPurchase(cost?: number, currency?: string, discount?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolStoreV1SkinsBySkinIdPurchase"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (cost) {
            d["cost"] = cost;
        };
        

        if (currency) {
            d["currency"] = currency;
        };
        

        if (discount) {
            d["discount"] = discount;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolStoreV1Status() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolStoreV1Status", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStoreV1StoreReady() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolStoreV1StoreReady", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStoreV1Wallet() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolStoreV1Wallet", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolStoreV1ByPageType(pageType: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"pageType",value:pageType}];
        
        let u = this.host + (await getPathFromOperationId("GetLolStoreV1ByPageType", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};