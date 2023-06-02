import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Chat {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolChatV1BlockedPlayers() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1BlockedPlayers", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolChatV1BlockedPlayers(gameName?: string, gameTag?: string, icon?: number, id?: string, name?: string, pid?: string, puuid?: string, summonerId?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolChatV1BlockedPlayers"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (gameName) {
            d["gameName"] = gameName;
        };
        

        if (gameTag) {
            d["gameTag"] = gameTag;
        };
        

        if (icon) {
            d["icon"] = icon;
        };
        

        if (id) {
            d["id"] = id;
        };
        

        if (name) {
            d["name"] = name;
        };
        

        if (pid) {
            d["pid"] = pid;
        };
        

        if (puuid) {
            d["puuid"] = puuid;
        };
        

        if (summonerId) {
            d["summonerId"] = summonerId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolChatV1BlockedPlayersById(id: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1BlockedPlayersById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChatV1Config() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1Config", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChatV1Conversations() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1Conversations", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolChatV1Conversations(gameName?: string, gameTag?: string, id?: string, inviterId?: string, isMuted?: boolean, name?: string, password?: string, pid?: string, targetRegion?: string, type?: string, unreadMessageCount?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolChatV1Conversations"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (gameName) {
            d["gameName"] = gameName;
        };
        

        if (gameTag) {
            d["gameTag"] = gameTag;
        };
        

        if (id) {
            d["id"] = id;
        };
        

        if (inviterId) {
            d["inviterId"] = inviterId;
        };
        

        if (isMuted) {
            d["isMuted"] = isMuted;
        };
        

        if (name) {
            d["name"] = name;
        };
        

        if (password) {
            d["password"] = password;
        };
        

        if (pid) {
            d["pid"] = pid;
        };
        

        if (targetRegion) {
            d["targetRegion"] = targetRegion;
        };
        

        if (type) {
            d["type"] = type;
        };
        

        if (unreadMessageCount) {
            d["unreadMessageCount"] = unreadMessageCount;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolChatV1ConversationsActive() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1ConversationsActive", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChatV1ConversationsNotify() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1ConversationsNotify", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChatV1ConversationsById(id: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1ConversationsById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChatV1ConversationsByIdMessages(id: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1ConversationsByIdMessages", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolChatV1ConversationsByIdMessages(body?: string, fromId?: string, fromPid?: string, fromSummonerId?: number, id?: string, isHistorical?: boolean, timestamp?: string, type?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolChatV1ConversationsByIdMessages"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (body) {
            d["body"] = body;
        };
        

        if (fromId) {
            d["fromId"] = fromId;
        };
        

        if (fromPid) {
            d["fromPid"] = fromPid;
        };
        

        if (fromSummonerId) {
            d["fromSummonerId"] = fromSummonerId;
        };
        

        if (id) {
            d["id"] = id;
        };
        

        if (isHistorical) {
            d["isHistorical"] = isHistorical;
        };
        

        if (timestamp) {
            d["timestamp"] = timestamp;
        };
        

        if (type) {
            d["type"] = type;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolChatV1ConversationsByIdParticipants(id: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1ConversationsByIdParticipants", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolChatV1ConversationsByIdParticipants(availability?: string, gameName?: string, gameTag?: string, icon?: number, id?: string, lastSeenOnlineTimestamp?: string, lol?: object, name?: string, patchline?: string, pid?: string, platformId?: string, product?: string, productName?: string, puuid?: string, statusMessage?: string, summary?: string, summonerId?: number, time?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolChatV1ConversationsByIdParticipants"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (availability) {
            d["availability"] = availability;
        };
        

        if (gameName) {
            d["gameName"] = gameName;
        };
        

        if (gameTag) {
            d["gameTag"] = gameTag;
        };
        

        if (icon) {
            d["icon"] = icon;
        };
        

        if (id) {
            d["id"] = id;
        };
        

        if (lastSeenOnlineTimestamp) {
            d["lastSeenOnlineTimestamp"] = lastSeenOnlineTimestamp;
        };
        

        if (lol) {
            d["lol"] = lol;
        };
        

        if (name) {
            d["name"] = name;
        };
        

        if (patchline) {
            d["patchline"] = patchline;
        };
        

        if (pid) {
            d["pid"] = pid;
        };
        

        if (platformId) {
            d["platformId"] = platformId;
        };
        

        if (product) {
            d["product"] = product;
        };
        

        if (productName) {
            d["productName"] = productName;
        };
        

        if (puuid) {
            d["puuid"] = puuid;
        };
        

        if (statusMessage) {
            d["statusMessage"] = statusMessage;
        };
        

        if (summary) {
            d["summary"] = summary;
        };
        

        if (summonerId) {
            d["summonerId"] = summonerId;
        };
        

        if (time) {
            d["time"] = time;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolChatV1ConversationsByIdParticipantsByPid(id: string, pid: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id},{name:"pid",value:pid}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1ConversationsByIdParticipantsByPid", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChatV1Errors() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1Errors", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChatV1FriendCounts() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1FriendCounts", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChatV1FriendExistsBySummonerId(summonerId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1FriendExistsBySummonerId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChatV1FriendGroups() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1FriendGroups", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolChatV1FriendGroups(collapsed?: boolean, id?: number, isLocalized?: boolean, isMetaGroup?: boolean, name?: string, priority?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolChatV1FriendGroups"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (collapsed) {
            d["collapsed"] = collapsed;
        };
        

        if (id) {
            d["id"] = id;
        };
        

        if (isLocalized) {
            d["isLocalized"] = isLocalized;
        };
        

        if (isMetaGroup) {
            d["isMetaGroup"] = isMetaGroup;
        };
        

        if (name) {
            d["name"] = name;
        };
        

        if (priority) {
            d["priority"] = priority;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolChatV1FriendGroupsById(id: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1FriendGroupsById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChatV1FriendGroupsByIdFriends(id: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1FriendGroupsByIdFriends", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChatV1FriendRequests() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1FriendRequests", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolChatV1FriendRequests(gameName?: string, gameTag?: string, icon?: number, id?: string, name?: string, note?: string, pid?: string, puuid?: string, summonerId?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolChatV1FriendRequests"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (gameName) {
            d["gameName"] = gameName;
        };
        

        if (gameTag) {
            d["gameTag"] = gameTag;
        };
        

        if (icon) {
            d["icon"] = icon;
        };
        

        if (id) {
            d["id"] = id;
        };
        

        if (name) {
            d["name"] = name;
        };
        

        if (note) {
            d["note"] = note;
        };
        

        if (pid) {
            d["pid"] = pid;
        };
        

        if (puuid) {
            d["puuid"] = puuid;
        };
        

        if (summonerId) {
            d["summonerId"] = summonerId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolChatV1Friends() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1Friends", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChatV1FriendsById(id: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1FriendsById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChatV1Me() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1Me", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChatV1Resources() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1Resources", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChatV1Session() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1Session", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolChatV1SessionPlain(gasToken?: object, password?: string, username?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolChatV1SessionPlain"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (gasToken) {
            d["gasToken"] = gasToken;
        };
        

        if (password) {
            d["password"] = password;
        };
        

        if (username) {
            d["username"] = username;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolChatV1SessionRso(expiry?: number, scopes?: Array<string>, token?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolChatV1SessionRso"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (expiry) {
            d["expiry"] = expiry;
        };
        

        if (scopes) {
            d["scopes"] = scopes;
        };
        

        if (token) {
            d["token"] = token;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolChatV1Settings() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1Settings", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolChatV1SettingsByKey(key: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"key",value:key}];
        
        let u = this.host + (await getPathFromOperationId("GetLolChatV1SettingsByKey", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetVoiceChatV1AudioProperties() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetVoiceChatV1AudioProperties", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetVoiceChatV1CallStatsAggregate() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetVoiceChatV1CallStatsAggregate", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetVoiceChatV1CallStatsById(id: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetVoiceChatV1CallStatsById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetVoiceChatV1CodecSettings() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetVoiceChatV1CodecSettings", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetVoiceChatV1Config() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetVoiceChatV1Config", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetVoiceChatV1Errors() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetVoiceChatV1Errors", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetVoiceChatV1PushToTalk() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetVoiceChatV1PushToTalk", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetVoiceChatV2DevicesCapture() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetVoiceChatV2DevicesCapture", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetVoiceChatV2DevicesCapturePermission() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetVoiceChatV2DevicesCapturePermission", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetVoiceChatV2DevicesRender() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetVoiceChatV2DevicesRender", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetVoiceChatV2Sessions() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetVoiceChatV2Sessions", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetVoiceChatV2SessionsById(id: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetVoiceChatV2SessionsById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetVoiceChatV2SessionsBySessionIdParticipantsByParticipantId(sessionId: string, participantId: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"sessionId",value:sessionId},{name:"participantId",value:participantId}];
        
        let u = this.host + (await getPathFromOperationId("GetVoiceChatV2SessionsBySessionIdParticipantsByParticipantId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetVoiceChatV2Settings() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetVoiceChatV2Settings", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetVoiceChatV2State() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetVoiceChatV2State", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};