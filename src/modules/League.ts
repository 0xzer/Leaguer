import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class League {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolLeagueSessionV1LeagueSessionToken() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLeagueSessionV1LeagueSessionToken", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};