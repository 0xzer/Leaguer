import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Inventory {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolInventoryV1ChampSelectInventory() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolInventoryV1ChampSelectInventory", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolInventoryV1InitialConfigurationComplete() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolInventoryV1InitialConfigurationComplete", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolInventoryV1Inventory(inventoryTypes: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolInventoryV1Inventory", pathParameters));
        
        if (inventoryTypes) {
            ps["inventoryTypes"] = inventoryTypes;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolInventoryV1InventoryEmotes() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolInventoryV1InventoryEmotes", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolInventoryV1NotificationsByInventoryType(inventoryType: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"inventoryType",value:inventoryType}];
        
        let u = this.host + (await getPathFromOperationId("GetLolInventoryV1NotificationsByInventoryType", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolInventoryV1PlayersByPuuidInventory(puuid: string, inventoryTypes: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"puuid",value:puuid}];
        
        let u = this.host + (await getPathFromOperationId("GetLolInventoryV1PlayersByPuuidInventory", pathParameters));
        
        if (inventoryTypes) {
            ps["inventoryTypes"] = inventoryTypes;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolInventoryV1SignedInventory(inventoryTypes: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolInventoryV1SignedInventory", pathParameters));
        
        if (inventoryTypes) {
            ps["inventoryTypes"] = inventoryTypes;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolInventoryV1SignedInventorySimple(inventoryTypes: Array<any>, queryParams?: object) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolInventoryV1SignedInventorySimple", pathParameters));
        
        if (inventoryTypes) {
            ps["inventoryTypes"] = inventoryTypes;
        };
        

        if (queryParams) {
            ps["queryParams"] = queryParams;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolInventoryV1SignedInventoryTournamentlogos() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolInventoryV1SignedInventoryTournamentlogos", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolInventoryV1SignedInventoryCache() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolInventoryV1SignedInventoryCache", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolInventoryV1SignedWallet(currencyTypes: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolInventoryV1SignedWallet", pathParameters));
        
        if (currencyTypes) {
            ps["currencyTypes"] = currencyTypes;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolInventoryV1SignedWalletByCurrencyType(currencyType: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"currencyType",value:currencyType}];
        
        let u = this.host + (await getPathFromOperationId("GetLolInventoryV1SignedWalletByCurrencyType", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolInventoryV1Wallet(currencyTypes: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolInventoryV1Wallet", pathParameters));
        
        if (currencyTypes) {
            ps["currencyTypes"] = currencyTypes;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolInventoryV1WalletByCurrencyType(currencyType: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"currencyType",value:currencyType}];
        
        let u = this.host + (await getPathFromOperationId("GetLolInventoryV1WalletByCurrencyType", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolInventoryV2InventoryByInventoryType(inventoryType: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"inventoryType",value:inventoryType}];
        
        let u = this.host + (await getPathFromOperationId("GetLolInventoryV2InventoryByInventoryType", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};