import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Suggested {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async PostLolSuggestedPlayersV1ReportedPlayer(reportedSummonerId?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolSuggestedPlayersV1ReportedPlayer"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (reportedSummonerId) {
            d["reportedSummonerId"] = reportedSummonerId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolSuggestedPlayersV1SuggestedPlayers() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSuggestedPlayersV1SuggestedPlayers", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolSuggestedPlayersV1VictoriousComrade(summonerId?: number, summonerName?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolSuggestedPlayersV1VictoriousComrade"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (summonerId) {
            d["summonerId"] = summonerId;
        };
        

        if (summonerName) {
            d["summonerName"] = summonerName;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

};