import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Trophies {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolTrophiesV1CurrentSummonerTrophiesProfile() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolTrophiesV1CurrentSummonerTrophiesProfile", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolTrophiesV1PlayersByPuuidTrophiesProfile(puuid: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"puuid",value:puuid}];
        
        let u = this.host + (await getPathFromOperationId("GetLolTrophiesV1PlayersByPuuidTrophiesProfile", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};