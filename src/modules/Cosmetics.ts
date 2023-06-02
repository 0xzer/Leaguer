import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Cosmetics {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolCosmeticsV1InventoriesBySetNameCompanions(setName: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"setName",value:setName}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCosmeticsV1InventoriesBySetNameCompanions", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCosmeticsV1InventoriesBySetNameDamageSkins(setName: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"setName",value:setName}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCosmeticsV1InventoriesBySetNameDamageSkins", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolCosmeticsV1InventoriesBySetNameMapSkins(setName: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"setName",value:setName}];
        
        let u = this.host + (await getPathFromOperationId("GetLolCosmeticsV1InventoriesBySetNameMapSkins", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};