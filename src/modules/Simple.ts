import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Simple {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolSimpleDialogMessagesV1Messages() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolSimpleDialogMessagesV1Messages", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolSimpleDialogMessagesV1Messages(msgBody?: Array<string>, msgType?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolSimpleDialogMessagesV1Messages"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (msgBody) {
            d["msgBody"] = msgBody;
        };
        

        if (msgType) {
            d["msgType"] = msgType;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

};