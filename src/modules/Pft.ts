import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Pft {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async PostLolPftV2Events(action?: string, data?: Array<object>, playerSurveyId?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolPftV2Events"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (action) {
            d["action"] = action;
        };
        

        if (data) {
            d["data"] = data;
        };
        

        if (playerSurveyId) {
            d["playerSurveyId"] = playerSurveyId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolPftV2Survey() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPftV2Survey", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolPftV2Survey(caption?: string, data?: object, display?: string, id?: number, title?: string, type?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolPftV2Survey"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (caption) {
            d["caption"] = caption;
        };
        

        if (data) {
            d["data"] = data;
        };
        

        if (display) {
            d["display"] = display;
        };
        

        if (id) {
            d["id"] = id;
        };
        

        if (title) {
            d["title"] = title;
        };
        

        if (type) {
            d["type"] = type;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

};