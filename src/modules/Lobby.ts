import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Lobby {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolLobbyTeamBuilderChampSelectV1BannableChampionIds() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyTeamBuilderChampSelectV1BannableChampionIds", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyTeamBuilderChampSelectV1CurrentChampion() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyTeamBuilderChampSelectV1CurrentChampion", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyTeamBuilderChampSelectV1DisabledChampionIds() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyTeamBuilderChampSelectV1DisabledChampionIds", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyTeamBuilderChampSelectV1HasAutoAssignedSmite() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyTeamBuilderChampSelectV1HasAutoAssignedSmite", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyTeamBuilderChampSelectV1ImplementationActive() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyTeamBuilderChampSelectV1ImplementationActive", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyTeamBuilderChampSelectV1MatchToken() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyTeamBuilderChampSelectV1MatchToken", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyTeamBuilderChampSelectV1PickableChampionIds() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyTeamBuilderChampSelectV1PickableChampionIds", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyTeamBuilderChampSelectV1PickableSkinIds() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyTeamBuilderChampSelectV1PickableSkinIds", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyTeamBuilderChampSelectV1Preferences() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyTeamBuilderChampSelectV1Preferences", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyTeamBuilderChampSelectV1SendingLoadoutsGcosEnabled() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyTeamBuilderChampSelectV1SendingLoadoutsGcosEnabled", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyTeamBuilderChampSelectV1Session() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyTeamBuilderChampSelectV1Session", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyTeamBuilderChampSelectV1SessionTimer() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyTeamBuilderChampSelectV1SessionTimer", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyTeamBuilderChampSelectV1SessionTrades() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyTeamBuilderChampSelectV1SessionTrades", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyTeamBuilderChampSelectV1SessionTradesById(id: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyTeamBuilderChampSelectV1SessionTradesById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyTeamBuilderChampSelectV1TeamBoost() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyTeamBuilderChampSelectV1TeamBoost", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyTeamBuilderV1Matchmaking() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyTeamBuilderV1Matchmaking", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyV1AutofillDisplayed() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV1AutofillDisplayed", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyV1CustomGames() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV1CustomGames", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyV1CustomGamesById(id: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV1CustomGamesById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolLobbyV1CustomGamesByIdJoin(asSpectator?: boolean, password?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolLobbyV1CustomGamesByIdJoin"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (asSpectator) {
            d["asSpectator"] = asSpectator;
        };
        

        if (password) {
            d["password"] = password;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolLobbyV1LobbyAvailability() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV1LobbyAvailability", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyV1LobbyCountdown() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV1LobbyCountdown", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolLobbyV1LobbyCustomBots(championId?: number, teamId?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolLobbyV1LobbyCustomBots"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (championId) {
            d["championId"] = championId;
        };
        

        if (teamId) {
            d["teamId"] = teamId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolLobbyV1LobbyCustomBotsBySummonerInternalName(championId?: number, teamId?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolLobbyV1LobbyCustomBotsBySummonerInternalName"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (championId) {
            d["championId"] = championId;
        };
        

        if (teamId) {
            d["teamId"] = teamId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolLobbyV1LobbyInvitations() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV1LobbyInvitations", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolLobbyV1LobbyInvitations(errorType?: string, fromSummonerId?: number, fromSummonerName?: string, id?: string, invitationMetaData?: object, timestamp?: string, toSummonerId?: number, toSummonerName?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolLobbyV1LobbyInvitations"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (errorType) {
            d["errorType"] = errorType;
        };
        

        if (fromSummonerId) {
            d["fromSummonerId"] = fromSummonerId;
        };
        

        if (fromSummonerName) {
            d["fromSummonerName"] = fromSummonerName;
        };
        

        if (id) {
            d["id"] = id;
        };
        

        if (invitationMetaData) {
            d["invitationMetaData"] = invitationMetaData;
        };
        

        if (timestamp) {
            d["timestamp"] = timestamp;
        };
        

        if (toSummonerId) {
            d["toSummonerId"] = toSummonerId;
        };
        

        if (toSummonerName) {
            d["toSummonerName"] = toSummonerName;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolLobbyV1LobbyInvitationsById(id: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV1LobbyInvitationsById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyV1PartiesGamemode() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV1PartiesGamemode", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyV1PartiesPlayer() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV1PartiesPlayer", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyV1PartyRewards() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV1PartyRewards", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyV2CommsMembers() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV2CommsMembers", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyV2CommsToken() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV2CommsToken", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyV2EligibilityGameSelectEligibilityHash() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV2EligibilityGameSelectEligibilityHash", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyV2EligibilityInitialConfigurationComplete() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV2EligibilityInitialConfigurationComplete", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyV2Lobby() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV2Lobby", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolLobbyV2Lobby(gameCustomization?: object, isCustom?: boolean, queueId?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolLobbyV2Lobby"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (gameCustomization) {
            d["gameCustomization"] = gameCustomization;
        };
        

        if (isCustom) {
            d["isCustom"] = isCustom;
        };
        

        if (queueId) {
            d["queueId"] = queueId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolLobbyV2LobbyCustomAvailableBots() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV2LobbyCustomAvailableBots", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyV2LobbyCustomBotsEnabled() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV2LobbyCustomBotsEnabled", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyV2LobbyInvitations() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV2LobbyInvitations", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyV2LobbyMatchmakingSearchState() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV2LobbyMatchmakingSearchState", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyV2LobbyMembers() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV2LobbyMembers", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolLobbyV2MatchmakingQuickSearch(gameCustomization?: object, isCustom?: boolean, queueId?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolLobbyV2MatchmakingQuickSearch"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (gameCustomization) {
            d["gameCustomization"] = gameCustomization;
        };
        

        if (isCustom) {
            d["isCustom"] = isCustom;
        };
        

        if (queueId) {
            d["queueId"] = queueId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolLobbyV2Notifications() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV2Notifications", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolLobbyV2Notifications(notificationId?: string, notificationReason?: string, summonerIds?: Array<number>, timestamp?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolLobbyV2Notifications"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (notificationId) {
            d["notificationId"] = notificationId;
        };
        

        if (notificationReason) {
            d["notificationReason"] = notificationReason;
        };
        

        if (summonerIds) {
            d["summonerIds"] = summonerIds;
        };
        

        if (timestamp) {
            d["timestamp"] = timestamp;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolLobbyV2PartyActive() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV2PartyActive", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyV2PartyEogStatus() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV2PartyEogStatus", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolLobbyV2PartyByPartyIdJoin(lobbyPassword?: string, team?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolLobbyV2PartyByPartyIdJoin"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (lobbyPassword) {
            d["lobbyPassword"] = lobbyPassword;
        };
        

        if (team) {
            d["team"] = team;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolLobbyV2ReceivedInvitations() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV2ReceivedInvitations", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLobbyV2RegistrationStatus() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLobbyV2RegistrationStatus", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};