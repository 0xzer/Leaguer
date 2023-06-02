import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Purchase {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolPurchaseWidgetV1Configuration() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPurchaseWidgetV1Configuration", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPurchaseWidgetV1OrderNotifications() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPurchaseWidgetV1OrderNotifications", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPurchaseWidgetV1PurchasableItem(inventoryType: string, itemId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPurchaseWidgetV1PurchasableItem", pathParameters));
        
        if (inventoryType) {
            ps["inventoryType"] = inventoryType;
        };
        

        if (itemId) {
            ps["itemId"] = itemId;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolPurchaseWidgetV2PurchaseItems(items?: Array<any>) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolPurchaseWidgetV2PurchaseItems"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (items) {
            d["items"] = items;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolPurchaseWidgetV3BaseSkinLineDataByOfferId(offerId: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"offerId",value:offerId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolPurchaseWidgetV3BaseSkinLineDataByOfferId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPurchaseWidgetV3PurchaseOfferOrderStatuses() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPurchaseWidgetV3PurchaseOfferOrderStatuses", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolPurchaseWidgetV3PurchaseOffer(currencyType?: string, offerId?: string, price?: number, quantity?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolPurchaseWidgetV3PurchaseOffer"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (currencyType) {
            d["currencyType"] = currencyType;
        };
        

        if (offerId) {
            d["offerId"] = offerId;
        };
        

        if (price) {
            d["price"] = price;
        };
        

        if (quantity) {
            d["quantity"] = quantity;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolPurchaseWidgetV3ValidateOffer(offerId?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolPurchaseWidgetV3ValidateOffer"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (offerId) {
            d["offerId"] = offerId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

};