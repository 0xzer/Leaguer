import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Item {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolItemSetsV1ItemSetsBySummonerIdSets(summonerId: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"summonerId",value:summonerId}];
        
        let u = this.host + (await getPathFromOperationId("GetLolItemSetsV1ItemSetsBySummonerIdSets", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolItemSetsV1ItemSetsBySummonerIdSets(associatedChampions?: Array<number>, associatedMaps?: Array<number>, blocks?: Array<any>, map?: string, mode?: string, preferredItemSlots?: Array<any>, sortrank?: number, startedFrom?: string, title?: string, type?: string, uid?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolItemSetsV1ItemSetsBySummonerIdSets"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (associatedChampions) {
            d["associatedChampions"] = associatedChampions;
        };
        

        if (associatedMaps) {
            d["associatedMaps"] = associatedMaps;
        };
        

        if (blocks) {
            d["blocks"] = blocks;
        };
        

        if (map) {
            d["map"] = map;
        };
        

        if (mode) {
            d["mode"] = mode;
        };
        

        if (preferredItemSlots) {
            d["preferredItemSlots"] = preferredItemSlots;
        };
        

        if (sortrank) {
            d["sortrank"] = sortrank;
        };
        

        if (startedFrom) {
            d["startedFrom"] = startedFrom;
        };
        

        if (title) {
            d["title"] = title;
        };
        

        if (type) {
            d["type"] = type;
        };
        

        if (uid) {
            d["uid"] = uid;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async PostLolItemSetsV1ItemSetsBySummonerIdValidate(name?: string) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolItemSetsV1ItemSetsBySummonerIdValidate"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (name) {
            d["name"] = name;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

};