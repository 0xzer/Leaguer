import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Summoner {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolSummonerV1CheckNameAvailabilityNewSummonersByName(name: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"name",value:name}];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV1CheckNameAvailabilityNewSummonersByName", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSummonerV1CheckNameAvailabilityByName(name: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"name",value:name}];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV1CheckNameAvailabilityByName", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSummonerV1CurrentSummoner() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV1CurrentSummoner", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSummonerV1CurrentSummonerAccountAndSummonerIds() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV1CurrentSummonerAccountAndSummonerIds", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSummonerV1CurrentSummonerAutofill() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV1CurrentSummonerAutofill", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSummonerV1CurrentSummonerJwt() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV1CurrentSummonerJwt", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSummonerV1CurrentSummonerProfilePrivacy() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV1CurrentSummonerProfilePrivacy", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSummonerV1CurrentSummonerRerollPoints() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV1CurrentSummonerRerollPoints", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSummonerV1CurrentSummonerSummonerProfile() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV1CurrentSummonerSummonerProfile", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolSummonerV1CurrentSummonerSummonerProfile(inventory?: string, key?: string, value?: object) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolSummonerV1CurrentSummonerSummonerProfile"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (inventory) {
            d["inventory"] = inventory;
        };
        

        if (key) {
            d["key"] = key;
        };
        

        if (value) {
            d["value"] = value;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolSummonerV1ProfilePrivacyEnabled() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV1ProfilePrivacyEnabled", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSummonerV1Status() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV1Status", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSummonerV1SummonerProfile(puuid: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV1SummonerProfile", pathParameters));
        
        if (puuid) {
            ps["puuid"] = puuid;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSummonerV1SummonerRequestsReady() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV1SummonerRequestsReady", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSummonerV1Summoners(name: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV1Summoners", pathParameters));
        
        if (name) {
            ps["name"] = name;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolSummonerV1Summoners(name?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolSummonerV1Summoners"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (name) {
            d["name"] = name;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolSummonerV1SummonersByPuuidCachedByPuuid(puuid: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"puuid",value:puuid}];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV1SummonersByPuuidCachedByPuuid", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSummonerV1SummonersById(id: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV1SummonersById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSummonerV2SummonerIcons(ids: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV2SummonerIcons", pathParameters));
        
        if (ids) {
            ps["ids"] = ids;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSummonerV2SummonerNames(ids: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV2SummonerNames", pathParameters));
        
        if (ids) {
            ps["ids"] = ids;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSummonerV2Summoners(ids?: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV2Summoners", pathParameters));
        
        if (ids) {
            ps["ids"] = ids;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSummonerV2SummonersPuuidByPuuid(puuid: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"puuid",value:puuid}];
        
        let u = this.host + (await getPathFromOperationId("GetLolSummonerV2SummonersPuuidByPuuid", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};