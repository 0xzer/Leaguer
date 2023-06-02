import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Matchmaking {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolMatchmakingV1ReadyCheck() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolMatchmakingV1ReadyCheck", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolMatchmakingV1Search() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolMatchmakingV1Search", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolMatchmakingV1SearchErrors() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolMatchmakingV1SearchErrors", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolMatchmakingV1SearchErrorsById(id: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolMatchmakingV1SearchErrorsById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};