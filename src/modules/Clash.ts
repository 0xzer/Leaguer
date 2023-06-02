import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Clash {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolClashV1AllTournaments() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1AllTournaments", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1BracketByBracketId(bracketId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"bracketId",value:bracketId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1BracketByBracketId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1CheckinAllowed() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1CheckinAllowed", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1CurrentTournamentIds() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1CurrentTournamentIds", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1DisabledConfig() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1DisabledConfig", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1Enabled() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1Enabled", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1EogPlayerUpdate() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1EogPlayerUpdate", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1EventByUuid(uuid: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"uuid",value:uuid}];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1EventByUuid", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1GameEnd() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1GameEnd", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1Historyandwinners() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1Historyandwinners", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1Iconconfig() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1Iconconfig", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1InvitedRosterIds() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1InvitedRosterIds", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolClashV1LftPlayer(lft?: boolean, primaryPos?: string, secondaryPos?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolClashV1LftPlayer"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (lft) {
            d["lft"] = lft;
        };
        

        if (primaryPos) {
            d["primaryPos"] = primaryPos;
        };
        

        if (secondaryPos) {
            d["secondaryPos"] = secondaryPos;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolClashV1LftPlayerFind(count?: number, invitationId?: string, memberId?: number, page?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolClashV1LftPlayerFind"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (count) {
            d["count"] = count;
        };
        

        if (invitationId) {
            d["invitationId"] = invitationId;
        };
        

        if (memberId) {
            d["memberId"] = memberId;
        };
        

        if (page) {
            d["page"] = page;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolClashV1LftTeam(captainId?: number, invitationId?: string, openTeam?: boolean) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolClashV1LftTeam"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (captainId) {
            d["captainId"] = captainId;
        };
        

        if (invitationId) {
            d["invitationId"] = invitationId;
        };
        

        if (openTeam) {
            d["openTeam"] = openTeam;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolClashV1LftTeamFind(count?: number, page?: number, tournamentId?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolClashV1LftTeamFind"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (count) {
            d["count"] = count;
        };
        

        if (page) {
            d["page"] = page;
        };
        

        if (tournamentId) {
            d["tournamentId"] = tournamentId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolClashV1LftTeamRequests() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1LftTeamRequests", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1Notifications() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1Notifications", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1Ping() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1Ping", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1Player() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1Player", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1PlayerChatRosters() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1PlayerChatRosters", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1PlayerHistory() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1PlayerHistory", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1PlaymodeRestricted() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1PlaymodeRestricted", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1Ready() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1Ready", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1Rewards() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1Rewards", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1RosterByRosterId(rosterId: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"rosterId",value:rosterId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1RosterByRosterId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolClashV1RosterByRosterIdChangeAllDetails(iconColorId?: number, iconId?: number, name?: string, shortName?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolClashV1RosterByRosterIdChangeAllDetails"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (iconColorId) {
            d["iconColorId"] = iconColorId;
        };
        

        if (iconId) {
            d["iconId"] = iconId;
        };
        

        if (name) {
            d["name"] = name;
        };
        

        if (shortName) {
            d["shortName"] = shortName;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolClashV1RosterByRosterIdChangeIcon(iconColorId?: number, iconId?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolClashV1RosterByRosterIdChangeIcon"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (iconColorId) {
            d["iconColorId"] = iconColorId;
        };
        

        if (iconId) {
            d["iconId"] = iconId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolClashV1RosterByRosterIdChangeName(name?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolClashV1RosterByRosterIdChangeName"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (name) {
            d["name"] = name;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolClashV1RosterByRosterIdChangeShortName(name?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolClashV1RosterByRosterIdChangeShortName"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (name) {
            d["name"] = name;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolClashV1RosterByRosterIdKick(summonerId?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolClashV1RosterByRosterIdKick"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (summonerId) {
            d["summonerId"] = summonerId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolClashV1RosterByRosterIdSetPosition() {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolClashV1RosterByRosterIdSetPosition"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolClashV1RosterByRosterIdSetTicket(ticketAmount?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolClashV1RosterByRosterIdSetTicket"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (ticketAmount) {
            d["ticketAmount"] = ticketAmount;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolClashV1RosterByRosterIdStats(rosterId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"rosterId",value:rosterId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1RosterByRosterIdStats", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolClashV1RosterByRosterIdSubstituteInvite(replacedSummonerId?: number, substituteSummonerId?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolClashV1RosterByRosterIdSubstituteInvite"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (replacedSummonerId) {
            d["replacedSummonerId"] = replacedSummonerId;
        };
        

        if (substituteSummonerId) {
            d["substituteSummonerId"] = substituteSummonerId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolClashV1RosterByRosterIdTicketOfferBySummonerIdOffer(ticketAmount?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolClashV1RosterByRosterIdTicketOfferBySummonerIdOffer"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (ticketAmount) {
            d["ticketAmount"] = ticketAmount;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolClashV1ScoutingChampions(summonerIds: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1ScoutingChampions", pathParameters));
        
        if (summonerIds) {
            ps["summonerIds"] = summonerIds;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1ScoutingMatchhistory(summonerIds: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1ScoutingMatchhistory", pathParameters));
        
        if (summonerIds) {
            ps["summonerIds"] = summonerIds;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1SeasonRewardsBySeasonId(seasonId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"seasonId",value:seasonId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1SeasonRewardsBySeasonId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1SimpleStateFlags() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1SimpleStateFlags", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1ThirdpartyTeamData() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1ThirdpartyTeamData", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1Time() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1Time", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1TournamentStateInfo() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1TournamentStateInfo", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1TournamentSummary() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1TournamentSummary", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1TournamentCancelled() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1TournamentCancelled", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1TournamentGetAllPlayerTiers() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1TournamentGetAllPlayerTiers", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1TournamentByTournamentId(tournamentId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"tournamentId",value:tournamentId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1TournamentByTournamentId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolClashV1TournamentByTournamentIdCreateRoster(iconColorId?: number, iconId?: number, name?: string, shortName?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolClashV1TournamentByTournamentIdCreateRoster"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (iconColorId) {
            d["iconColorId"] = iconColorId;
        };
        

        if (iconId) {
            d["iconId"] = iconId;
        };
        

        if (name) {
            d["name"] = name;
        };
        

        if (shortName) {
            d["shortName"] = shortName;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolClashV1TournamentByTournamentIdGetPlayerTiers(tournamentId: number, summonerIds: Array<any>) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"tournamentId",value:tournamentId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1TournamentByTournamentIdGetPlayerTiers", pathParameters));
        
        if (summonerIds) {
            ps["summonerIds"] = summonerIds;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1TournamentByTournamentIdPlayer(tournamentId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"tournamentId",value:tournamentId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1TournamentByTournamentIdPlayer", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1TournamentByTournamentIdPlayerHonorRestricted(tournamentId?: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        if (tournamentId) {
            pathParameters.push({name:"tournamentId",value:tournamentId})
        };
        let u = this.host + (await getPathFromOperationId("GetLolClashV1TournamentByTournamentIdPlayerHonorRestricted", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1TournamentByTournamentIdStateInfo(tournamentId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"tournamentId",value:tournamentId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1TournamentByTournamentIdStateInfo", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1TournamentByTournamentIdWinners(tournamentId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"tournamentId",value:tournamentId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1TournamentByTournamentIdWinners", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1Visible() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1Visible", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV1VoiceEnabled() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV1VoiceEnabled", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolClashV2PlaymodeRestricted() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolClashV2PlaymodeRestricted", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};