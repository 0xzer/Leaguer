import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Replays {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolReplaysV1Configuration() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolReplaysV1Configuration", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolReplaysV1MetadataByGameId(gameId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"gameId",value:gameId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolReplaysV1MetadataByGameId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolReplaysV1RoflsPath() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolReplaysV1RoflsPath", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolReplaysV1RoflsPathDefault() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolReplaysV1RoflsPathDefault", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolReplaysV1RoflsByGameIdDownload(componentType?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolReplaysV1RoflsByGameIdDownload"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (componentType) {
            d["componentType"] = componentType;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolReplaysV1RoflsByGameIdDownloadGraceful(componentType?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolReplaysV1RoflsByGameIdDownloadGraceful"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (componentType) {
            d["componentType"] = componentType;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolReplaysV1RoflsByGameIdWatch(componentType?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolReplaysV1RoflsByGameIdWatch"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (componentType) {
            d["componentType"] = componentType;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolReplaysV2MetadataByGameIdCreate(gameEnd?: number, gameType?: string, gameVersion?: string, queueId?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolReplaysV2MetadataByGameIdCreate"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (gameEnd) {
            d["gameEnd"] = gameEnd;
        };
        

        if (gameType) {
            d["gameType"] = gameType;
        };
        

        if (gameVersion) {
            d["gameVersion"] = gameVersion;
        };
        

        if (queueId) {
            d["queueId"] = queueId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

};