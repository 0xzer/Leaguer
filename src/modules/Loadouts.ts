import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Loadouts {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolLoadoutsV1LoadoutsReady() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLoadoutsV1LoadoutsReady", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolLoadoutsV4Loadouts(itemId?: number, loadout?: object, name?: string, refreshTime?: string, scope?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolLoadoutsV4Loadouts"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (itemId) {
            d["itemId"] = itemId;
        };
        

        if (loadout) {
            d["loadout"] = loadout;
        };
        

        if (name) {
            d["name"] = name;
        };
        

        if (refreshTime) {
            d["refreshTime"] = refreshTime;
        };
        

        if (scope) {
            d["scope"] = scope;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolLoadoutsV4LoadoutsScopeAccount() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLoadoutsV4LoadoutsScopeAccount", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLoadoutsV4LoadoutsScopeByScopeByScopeItemId(scope: string, scopeItemId?: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"scope",value:scope}];
        
        if (scopeItemId) {
            pathParameters.push({name:"scopeItemId",value:scopeItemId})
        };
        let u = this.host + (await getPathFromOperationId("GetLolLoadoutsV4LoadoutsScopeByScopeByScopeItemId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLoadoutsV4LoadoutsByLoadoutId(loadoutId: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"loadoutId",value:loadoutId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolLoadoutsV4LoadoutsByLoadoutId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};