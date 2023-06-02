import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Manager {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetPluginManagerV1ExternalPluginsAvailability() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetPluginManagerV1ExternalPluginsAvailability", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetPluginManagerV1Status() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetPluginManagerV1Status", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetPluginManagerV2Descriptions() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetPluginManagerV2Descriptions", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetPluginManagerV2DescriptionsByPlugin(plugin: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"plugin",value:plugin}];
        
        let u = this.host + (await getPathFromOperationId("GetPluginManagerV2DescriptionsByPlugin", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetPluginManagerV2Plugins() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetPluginManagerV2Plugins", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetPluginManagerV2PluginsByPlugin(plugin: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"plugin",value:plugin}];
        
        let u = this.host + (await getPathFromOperationId("GetPluginManagerV2PluginsByPlugin", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetPluginManagerV3PluginsManifest() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetPluginManagerV3PluginsManifest", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetByPluginAssetsByPath(plugin: string, path: string, if_none_match?: string) {
        let hs = {};
        
        if (if_none_match) {
            hs["if_none_match"] = if_none_match
        };
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"plugin",value:plugin},{name:"path",value:path}];
        
        let u = this.host + (await getPathFromOperationId("GetByPluginAssetsByPath", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};