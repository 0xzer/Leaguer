import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Spectator {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolSpectatorV1Spectate() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSpectatorV1Spectate", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolSpectatorV1SpectateLaunch(allowObserveMode?: string, dropInSpectateGameId?: string, gameQueueType?: string, puuid?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolSpectatorV1SpectateLaunch"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (allowObserveMode) {
            d["allowObserveMode"] = allowObserveMode;
        };
        

        if (dropInSpectateGameId) {
            d["dropInSpectateGameId"] = dropInSpectateGameId;
        };
        

        if (gameQueueType) {
            d["gameQueueType"] = gameQueueType;
        };
        

        if (puuid) {
            d["puuid"] = puuid;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

};