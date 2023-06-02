import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Riot {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolRmsV1ChampionMasteryLeaveupUpdate() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolRmsV1ChampionMasteryLeaveupUpdate", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};