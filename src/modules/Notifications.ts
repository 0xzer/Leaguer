import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Notifications {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetPlayerNotificationsV1Config() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetPlayerNotificationsV1Config", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetPlayerNotificationsV1Notifications() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetPlayerNotificationsV1Notifications", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostPlayerNotificationsV1Notifications(backgroundUrl?: string, created?: string, critical?: boolean, data?: object, detailKey?: string, dismissible?: boolean, expires?: string, iconUrl?: string, id?: number, source?: string, state?: string, titleKey?: string, type?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostPlayerNotificationsV1Notifications"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (backgroundUrl) {
            d["backgroundUrl"] = backgroundUrl;
        };
        

        if (created) {
            d["created"] = created;
        };
        

        if (critical) {
            d["critical"] = critical;
        };
        

        if (data) {
            d["data"] = data;
        };
        

        if (detailKey) {
            d["detailKey"] = detailKey;
        };
        

        if (dismissible) {
            d["dismissible"] = dismissible;
        };
        

        if (expires) {
            d["expires"] = expires;
        };
        

        if (iconUrl) {
            d["iconUrl"] = iconUrl;
        };
        

        if (id) {
            d["id"] = id;
        };
        

        if (source) {
            d["source"] = source;
        };
        

        if (state) {
            d["state"] = state;
        };
        

        if (titleKey) {
            d["titleKey"] = titleKey;
        };
        

        if (type) {
            d["type"] = type;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetPlayerNotificationsV1NotificationsById(id: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetPlayerNotificationsV1NotificationsById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};