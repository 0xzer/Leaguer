import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Catalog {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolCatalogV1ItemDetails(inventoryType: string, itemId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolCatalogV1ItemDetails", pathParameters));
        
        if (inventoryType) {
            ps["inventoryType"] = inventoryType;
        };
        

        if (itemId) {
            ps["itemId"] = itemId;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCatalogV1Items(inventoryType: string, itemIds: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolCatalogV1Items", pathParameters));
        
        if (inventoryType) {
            ps["inventoryType"] = inventoryType;
        };
        

        if (itemIds) {
            ps["itemIds"] = itemIds;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCatalogV1ItemsByInventoryType(inventoryType: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"inventoryType",value:inventoryType}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCatalogV1ItemsByInventoryType", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};