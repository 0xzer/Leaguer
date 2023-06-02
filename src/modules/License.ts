import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class License {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolLicenseAgreementV1Agreements() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLicenseAgreementV1Agreements", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLicenseAgreementV1AllAgreements() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLicenseAgreementV1AllAgreements", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolLicenseAgreementV1ServeLocation() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolLicenseAgreementV1ServeLocation", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};