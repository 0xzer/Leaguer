import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Payments {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async PostPaymentsV1PmcStartUrl(game?: string, gifteeAccountId?: string, gifteeMessage?: string, isPrepaid?: boolean, localeId?: string, rsoToken?: string, summonerLevel?: number, usePmcSessions?: boolean) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostPaymentsV1PmcStartUrl"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (game) {
            d["game"] = game;
        };
        

        if (gifteeAccountId) {
            d["gifteeAccountId"] = gifteeAccountId;
        };
        

        if (gifteeMessage) {
            d["gifteeMessage"] = gifteeMessage;
        };
        

        if (isPrepaid) {
            d["isPrepaid"] = isPrepaid;
        };
        

        if (localeId) {
            d["localeId"] = localeId;
        };
        

        if (rsoToken) {
            d["rsoToken"] = rsoToken;
        };
        

        if (summonerLevel) {
            d["summonerLevel"] = summonerLevel;
        };
        

        if (usePmcSessions) {
            d["usePmcSessions"] = usePmcSessions;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

};