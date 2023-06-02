import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Gameflow {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolGameflowV1ActivePatcherLock() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameflowV1ActivePatcherLock", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameflowV1Availability() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameflowV1Availability", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameflowV1BasicTutorial() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameflowV1BasicTutorial", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameflowV1BattleTraining() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameflowV1BattleTraining", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameflowV1EarlyExitNotificationsEog() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameflowV1EarlyExitNotificationsEog", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameflowV1EarlyExitNotificationsMissions() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameflowV1EarlyExitNotificationsMissions", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameflowV1ExtraGameClientArgs() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameflowV1ExtraGameClientArgs", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameflowV1GameflowMetadataPlayerStatus() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameflowV1GameflowMetadataPlayerStatus", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolGameflowV1GameflowMetadataPlayerStatus(canInviteOthersAtEog?: boolean) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolGameflowV1GameflowMetadataPlayerStatus"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (canInviteOthersAtEog) {
            d["canInviteOthersAtEog"] = canInviteOthersAtEog;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolGameflowV1GameflowMetadataRegistrationStatus() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameflowV1GameflowMetadataRegistrationStatus", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolGameflowV1GameflowMetadataRegistrationStatus(complete?: boolean, errorCodes?: Array<string>) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolGameflowV1GameflowMetadataRegistrationStatus"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (complete) {
            d["complete"] = complete;
        };
        

        if (errorCodes) {
            d["errorCodes"] = errorCodes;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolGameflowV1GameflowPhase() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameflowV1GameflowPhase", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameflowV1Session() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameflowV1Session", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolGameflowV1SessionDodge(dodgeIds?: Array<number>) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolGameflowV1SessionDodge"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (dodgeIds) {
            d["dodgeIds"] = dodgeIds;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolGameflowV1SessionGameConfiguration(allowablePremadeSizes?: Array<number>, areFreeChampionsAllowed?: boolean, assetMutator?: string, championsRequiredToPlay?: number, description?: string, detailedDescription?: string, gameMode?: string, id?: number, isRanked?: boolean, isTeamBuilderManaged?: boolean, isTeamOnly?: boolean, lastToggledOffTime?: number, lastToggledOnTime?: number, mapId?: number, maxLevel?: number, maxSummonerLevelForFirstWinOfTheDay?: number, maximumParticipantListSize?: number, minLevel?: number, minimumParticipantListSize?: number, name?: string, numPlayersPerTeam?: number, removalFromGameAllowed?: boolean, removalFromGameDelayMinutes?: number, shortName?: string, showPositionSelector?: boolean, spectatorEnabled?: boolean, type?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolGameflowV1SessionGameConfiguration"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (allowablePremadeSizes) {
            d["allowablePremadeSizes"] = allowablePremadeSizes;
        };
        

        if (areFreeChampionsAllowed) {
            d["areFreeChampionsAllowed"] = areFreeChampionsAllowed;
        };
        

        if (assetMutator) {
            d["assetMutator"] = assetMutator;
        };
        

        if (championsRequiredToPlay) {
            d["championsRequiredToPlay"] = championsRequiredToPlay;
        };
        

        if (description) {
            d["description"] = description;
        };
        

        if (detailedDescription) {
            d["detailedDescription"] = detailedDescription;
        };
        

        if (gameMode) {
            d["gameMode"] = gameMode;
        };
        

        if (id) {
            d["id"] = id;
        };
        

        if (isRanked) {
            d["isRanked"] = isRanked;
        };
        

        if (isTeamBuilderManaged) {
            d["isTeamBuilderManaged"] = isTeamBuilderManaged;
        };
        

        if (isTeamOnly) {
            d["isTeamOnly"] = isTeamOnly;
        };
        

        if (lastToggledOffTime) {
            d["lastToggledOffTime"] = lastToggledOffTime;
        };
        

        if (lastToggledOnTime) {
            d["lastToggledOnTime"] = lastToggledOnTime;
        };
        

        if (mapId) {
            d["mapId"] = mapId;
        };
        

        if (maxLevel) {
            d["maxLevel"] = maxLevel;
        };
        

        if (maxSummonerLevelForFirstWinOfTheDay) {
            d["maxSummonerLevelForFirstWinOfTheDay"] = maxSummonerLevelForFirstWinOfTheDay;
        };
        

        if (maximumParticipantListSize) {
            d["maximumParticipantListSize"] = maximumParticipantListSize;
        };
        

        if (minLevel) {
            d["minLevel"] = minLevel;
        };
        

        if (minimumParticipantListSize) {
            d["minimumParticipantListSize"] = minimumParticipantListSize;
        };
        

        if (name) {
            d["name"] = name;
        };
        

        if (numPlayersPerTeam) {
            d["numPlayersPerTeam"] = numPlayersPerTeam;
        };
        

        if (removalFromGameAllowed) {
            d["removalFromGameAllowed"] = removalFromGameAllowed;
        };
        

        if (removalFromGameDelayMinutes) {
            d["removalFromGameDelayMinutes"] = removalFromGameDelayMinutes;
        };
        

        if (shortName) {
            d["shortName"] = shortName;
        };
        

        if (showPositionSelector) {
            d["showPositionSelector"] = showPositionSelector;
        };
        

        if (spectatorEnabled) {
            d["spectatorEnabled"] = spectatorEnabled;
        };
        

        if (type) {
            d["type"] = type;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolGameflowV1SessionPerPositionSummonerSpellsDisallowed() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameflowV1SessionPerPositionSummonerSpellsDisallowed", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameflowV1SessionPerPositionSummonerSpellsDisallowedAsString() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameflowV1SessionPerPositionSummonerSpellsDisallowedAsString", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameflowV1SessionPerPositionSummonerSpellsRequired() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameflowV1SessionPerPositionSummonerSpellsRequired", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameflowV1SessionPerPositionSummonerSpellsRequiredAsString() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameflowV1SessionPerPositionSummonerSpellsRequiredAsString", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameflowV1Spectate() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameflowV1Spectate", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameflowV1SpectateDelayedLaunch() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameflowV1SpectateDelayedLaunch", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGameflowV1Watch() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGameflowV1Watch", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolGameflowV2SpectateLaunch(allowObserveMode?: string, dropInSpectateGameId?: string, gameQueueType?: string, puuid?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolGameflowV2SpectateLaunch"));
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