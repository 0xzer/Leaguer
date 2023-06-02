import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Hovercard {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolHovercardV1FriendInfoBySummonerBySummonerId(summonerId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolHovercardV1FriendInfoBySummonerBySummonerId", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolHovercardV1FriendInfoByPuuid(puuid: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"puuid",value:puuid}];
        
        let u = this.host + (await getPathFromOperationId("GetLolHovercardV1FriendInfoByPuuid", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};