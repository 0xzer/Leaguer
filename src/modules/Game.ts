import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Game {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolGameClientChatV1Buddies() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameClientChatV1Buddies", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameClientChatV1IgnoredSummoners() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameClientChatV1IgnoredSummoners", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameClientChatV1MutedSummoners() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameClientChatV1MutedSummoners", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameQueuesV1Custom() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameQueuesV1Custom", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameQueuesV1CustomNonDefault() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameQueuesV1CustomNonDefault", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameQueuesV1GameTypeConfigByGameTypeConfigId(gameTypeConfigId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"gameTypeConfigId",value:gameTypeConfigId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameQueuesV1GameTypeConfigByGameTypeConfigId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameQueuesV1GameTypeConfigByGameTypeConfigIdMapByMapId(gameTypeConfigId: number, mapId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"gameTypeConfigId",value:gameTypeConfigId},{name:"mapId",value:mapId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameQueuesV1GameTypeConfigByGameTypeConfigIdMapByMapId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameQueuesV1Queues() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameQueuesV1Queues", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameQueuesV1QueuesTypeByQueueType(queueType: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"queueType",value:queueType}];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameQueuesV1QueuesTypeByQueueType", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameQueuesV1QueuesById(id: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameQueuesV1QueuesById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameSettingsV1Didreset() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameSettingsV1Didreset", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameSettingsV1GameSettings() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameSettingsV1GameSettings", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameSettingsV1GameSettingsSchema() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameSettingsV1GameSettingsSchema", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameSettingsV1InputSettings() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameSettingsV1InputSettings", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameSettingsV1InputSettingsSchema() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameSettingsV1InputSettingsSchema", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameSettingsV1Ready() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameSettingsV1Ready", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};