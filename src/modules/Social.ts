import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Social {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolSocialLeaderboardV1LeaderboardNextUpdateTime(queueType: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSocialLeaderboardV1LeaderboardNextUpdateTime", pathParameters));
        
        if (queueType) {
            ps["queueType"] = queueType;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolSocialLeaderboardV1SocialLeaderboardData(queueType: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSocialLeaderboardV1SocialLeaderboardData", pathParameters));
        
        if (queueType) {
            ps["queueType"] = queueType;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};