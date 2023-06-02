import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Rewards {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolRewardsV1Grants(status?: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRewardsV1Grants", pathParameters));
        
        if (status) {
            ps["status"] = status;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolRewardsV1GrantsByGrantIdSelect(rewardGroupId?: string, selections?: Array<string>) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolRewardsV1GrantsByGrantIdSelect"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (rewardGroupId) {
            d["rewardGroupId"] = rewardGroupId;
        };
        

        if (selections) {
            d["selections"] = selections;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolRewardsV1Groups(types?: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRewardsV1Groups", pathParameters));
        
        if (types) {
            ps["types"] = types;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};