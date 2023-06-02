import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Banners {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolBannersV1CurrentSummonerFlags() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolBannersV1CurrentSummonerFlags", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolBannersV1CurrentSummonerFlagsEquipped() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolBannersV1CurrentSummonerFlagsEquipped", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolBannersV1CurrentSummonerFramesEquipped() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolBannersV1CurrentSummonerFramesEquipped", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolBannersV1PlayersByPuuidFlagsEquipped(puuid: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"puuid",value:puuid}];
        
        let u = this.host + (await getPathFromOperationId("GetLolBannersV1PlayersByPuuidFlagsEquipped", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};