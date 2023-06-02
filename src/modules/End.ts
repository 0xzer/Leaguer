import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class End {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolEndOfGameV1ChampionMasteryUpdates() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolEndOfGameV1ChampionMasteryUpdates", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolEndOfGameV1EogStatsBlock() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolEndOfGameV1EogStatsBlock", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolEndOfGameV1GameclientEogStatsBlock() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolEndOfGameV1GameclientEogStatsBlock", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolEndOfGameV1GameclientEogStatsBlock(gameId?: number, gameMode?: string, isRanked?: boolean, queueId?: number, queueType?: string, statsBlock?: object) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolEndOfGameV1GameclientEogStatsBlock"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (gameId) {
            d["gameId"] = gameId;
        };
        

        if (gameMode) {
            d["gameMode"] = gameMode;
        };
        

        if (isRanked) {
            d["isRanked"] = isRanked;
        };
        

        if (queueId) {
            d["queueId"] = queueId;
        };
        

        if (queueType) {
            d["queueType"] = queueType;
        };
        

        if (statsBlock) {
            d["statsBlock"] = statsBlock;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolEndOfGameV1ReportedPlayers() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolEndOfGameV1ReportedPlayers", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolEndOfGameV1TftEogStats() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolEndOfGameV1TftEogStats", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolEndOfGameV2PlayerComplaints(comment?: string, gameId?: number, offenses?: string, reportedSummonerId?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolEndOfGameV2PlayerComplaints"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (comment) {
            d["comment"] = comment;
        };
        

        if (gameId) {
            d["gameId"] = gameId;
        };
        

        if (offenses) {
            d["offenses"] = offenses;
        };
        

        if (reportedSummonerId) {
            d["reportedSummonerId"] = reportedSummonerId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

};