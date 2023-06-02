import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Geoinfo {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolGeoinfoV1Getlocation(ip_address: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGeoinfoV1Getlocation", pathParameters));
        
        if (ip_address) {
            ps["ip_address"] = ip_address;
        };
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolGeoinfoV1Whereami() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolGeoinfoV1Whereami", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};