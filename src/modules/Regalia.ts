import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Regalia {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolRegaliaV2Config() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRegaliaV2Config", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRegaliaV2CurrentSummonerRegalia() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRegaliaV2CurrentSummonerRegalia", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRegaliaV2SummonersBySummonerIdQueuesByQueuePositionsByPositionRegalia(summonerId: number, queue: string, position: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId},{name:"queue",value:queue},{name:"position",value:position}];
        
        let u = this.host + (await getPathFromOperationId("GetLolRegaliaV2SummonersBySummonerIdQueuesByQueuePositionsByPositionRegalia", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRegaliaV2SummonersBySummonerIdQueuesByQueueRegalia(summonerId: number, queue: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId},{name:"queue",value:queue}];
        
        let u = this.host + (await getPathFromOperationId("GetLolRegaliaV2SummonersBySummonerIdQueuesByQueueRegalia", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRegaliaV2SummonersBySummonerIdRegalia(summonerId: number, hovercard: boolean) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolRegaliaV2SummonersBySummonerIdRegalia", pathParameters));
        
        if (hovercard) {
            ps["hovercard"] = hovercard;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolRegaliaV2SummonersBySummonerIdRegaliaAsync(summonerId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolRegaliaV2SummonersBySummonerIdRegaliaAsync", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};