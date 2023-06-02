import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Patcher {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetPatcherV1Notifications() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetPatcherV1Notifications", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetPatcherV1P2pStatus() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetPatcherV1P2pStatus", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetPatcherV1Products() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetPatcherV1Products", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetPatcherV1ProductsByProductIdPaths(product_id: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"product_id",value:product_id}];
        
        let u = this.host + (await getPathFromOperationId("GetPatcherV1ProductsByProductIdPaths", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetPatcherV1ProductsByProductIdState(product_id: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"product_id",value:product_id}];
        
        let u = this.host + (await getPathFromOperationId("GetPatcherV1ProductsByProductIdState", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetPatcherV1ProductsByProductIdTags(product_id: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"product_id",value:product_id}];
        
        let u = this.host + (await getPathFromOperationId("GetPatcherV1ProductsByProductIdTags", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetPatcherV1Status() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetPatcherV1Status", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};