import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Player {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolPlayerBehaviorV1Ban() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlayerBehaviorV1Ban", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPlayerBehaviorV1ChatRestriction() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlayerBehaviorV1ChatRestriction", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPlayerBehaviorV1CodeOfConductNotification() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlayerBehaviorV1CodeOfConductNotification", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPlayerBehaviorV1Config() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlayerBehaviorV1Config", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPlayerBehaviorV1RankedRestriction() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlayerBehaviorV1RankedRestriction", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPlayerBehaviorV1ReformCard() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlayerBehaviorV1ReformCard", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPlayerBehaviorV1ReporterFeedback() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlayerBehaviorV1ReporterFeedback", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPlayerBehaviorV1ReporterFeedbackById(id: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlayerBehaviorV1ReporterFeedbackById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPlayerBehaviorV2ReformCard() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlayerBehaviorV2ReformCard", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPlayerLevelUpV1LevelUp() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlayerLevelUpV1LevelUp", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPlayerLevelUpV1LevelUpNotificationsByPluginName(pluginName: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"pluginName",value:pluginName}];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlayerLevelUpV1LevelUpNotificationsByPluginName", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolPlayerLevelUpV1LevelUpNotificationsByPluginName(newSummonerLevel?: number, seenThisEvent?: boolean) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolPlayerLevelUpV1LevelUpNotificationsByPluginName"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (newSummonerLevel) {
            d["newSummonerLevel"] = newSummonerLevel;
        };
        

        if (seenThisEvent) {
            d["seenThisEvent"] = seenThisEvent;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolPlayerMessagingV1CelebrationNotification() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlayerMessagingV1CelebrationNotification", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPlayerMessagingV1Notification() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlayerMessagingV1Notification", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolPlayerPreferencesV1PlayerPreferencesEndpointOverride(Enabled?: boolean, EnforceHttps?: boolean, Retries?: number, ServiceEndpoint?: string, Version?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolPlayerPreferencesV1PlayerPreferencesEndpointOverride"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (Enabled) {
            d["Enabled"] = Enabled;
        };
        

        if (EnforceHttps) {
            d["EnforceHttps"] = EnforceHttps;
        };
        

        if (Retries) {
            d["Retries"] = Retries;
        };
        

        if (ServiceEndpoint) {
            d["ServiceEndpoint"] = ServiceEndpoint;
        };
        

        if (Version) {
            d["Version"] = Version;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolPlayerPreferencesV1PlayerPreferencesReady() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlayerPreferencesV1PlayerPreferencesReady", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPlayerPreferencesV1PreferenceByType(type: string, hash?: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"type",value:type}];
        
        let u = this.host + (await getPathFromOperationId("GetLolPlayerPreferencesV1PreferenceByType", pathParameters));
        
        if (hash) {
            ps["hash"] = hash;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolPlayerReportSenderV1EndOfGameReports(comment?: string, gameId?: number, offense?: string, reportedPuuid?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolPlayerReportSenderV1EndOfGameReports"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (comment) {
            d["comment"] = comment;
        };
        

        if (gameId) {
            d["gameId"] = gameId;
        };
        

        if (offense) {
            d["offense"] = offense;
        };
        

        if (reportedPuuid) {
            d["reportedPuuid"] = reportedPuuid;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

};