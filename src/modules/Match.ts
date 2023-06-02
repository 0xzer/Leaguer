import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Match {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async PostLolMatchHistoryV1AcsEndpointOverride(url?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolMatchHistoryV1AcsEndpointOverride"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (url) {
            d["url"] = url;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolMatchHistoryV1Delta() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolMatchHistoryV1Delta", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolMatchHistoryV1GameTimelinesByGameId(gameId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"gameId",value:gameId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolMatchHistoryV1GameTimelinesByGameId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolMatchHistoryV1GamesByGameId(gameId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"gameId",value:gameId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolMatchHistoryV1GamesByGameId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolMatchHistoryV1ProductsLolCurrentSummonerMatches(begIndex?: number, endIndex?: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolMatchHistoryV1ProductsLolCurrentSummonerMatches", pathParameters));
        
        if (begIndex) {
            ps["begIndex"] = begIndex;
        };
        

        if (endIndex) {
            ps["endIndex"] = endIndex;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolMatchHistoryV1ProductsLolByPuuidMatches(puuid: string, begIndex?: number, endIndex?: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"puuid",value:puuid}];
        
        let u = this.host + (await getPathFromOperationId("GetLolMatchHistoryV1ProductsLolByPuuidMatches", pathParameters));
        
        if (begIndex) {
            ps["begIndex"] = begIndex;
        };
        

        if (endIndex) {
            ps["endIndex"] = endIndex;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolMatchHistoryV1ProductsTftByPuuidMatches(puuid: string, begin?: number, count?: number, tag?: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"puuid",value:puuid}];
        
        let u = this.host + (await getPathFromOperationId("GetLolMatchHistoryV1ProductsTftByPuuidMatches", pathParameters));
        
        if (begin) {
            ps["begin"] = begin;
        };
        

        if (count) {
            ps["count"] = count;
        };
        

        if (tag) {
            ps["tag"] = tag;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolMatchHistoryV1RecentlyPlayedSummoners() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolMatchHistoryV1RecentlyPlayedSummoners", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolMatchHistoryV1WebUrl() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolMatchHistoryV1WebUrl", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolMatchHistoryV3MatchlistAccountByAccountId(accountId: number, begIndex?: number, endIndex?: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"accountId",value:accountId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolMatchHistoryV3MatchlistAccountByAccountId", pathParameters));
        
        if (begIndex) {
            ps["begIndex"] = begIndex;
        };
        

        if (endIndex) {
            ps["endIndex"] = endIndex;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};