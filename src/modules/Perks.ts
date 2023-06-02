import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Perks {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async GetLolPerksV1Currentpage() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPerksV1Currentpage", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPerksV1Customizationlimits() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPerksV1Customizationlimits", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPerksV1Inventory() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPerksV1Inventory", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPerksV1Pages() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPerksV1Pages", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolPerksV1Pages(autoModifiedSelections?: Array<number>, current?: boolean, id?: number, isActive?: boolean, isDeletable?: boolean, isEditable?: boolean, isValid?: boolean, lastModified?: number, name?: string, order?: number, primaryStyleId?: number, selectedPerkIds?: Array<number>, subStyleId?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolPerksV1Pages"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (autoModifiedSelections) {
            d["autoModifiedSelections"] = autoModifiedSelections;
        };
        

        if (current) {
            d["current"] = current;
        };
        

        if (id) {
            d["id"] = id;
        };
        

        if (isActive) {
            d["isActive"] = isActive;
        };
        

        if (isDeletable) {
            d["isDeletable"] = isDeletable;
        };
        

        if (isEditable) {
            d["isEditable"] = isEditable;
        };
        

        if (isValid) {
            d["isValid"] = isValid;
        };
        

        if (lastModified) {
            d["lastModified"] = lastModified;
        };
        

        if (name) {
            d["name"] = name;
        };
        

        if (order) {
            d["order"] = order;
        };
        

        if (primaryStyleId) {
            d["primaryStyleId"] = primaryStyleId;
        };
        

        if (selectedPerkIds) {
            d["selectedPerkIds"] = selectedPerkIds;
        };
        

        if (subStyleId) {
            d["subStyleId"] = subStyleId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolPerksV1PagesById(id: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolPerksV1PagesById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPerksV1Perks() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPerksV1Perks", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPerksV1PerksDisabled() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPerksV1PerksDisabled", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPerksV1PerksGameplayUpdated() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPerksV1PerksGameplayUpdated", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPerksV1SchemaVersion() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPerksV1SchemaVersion", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPerksV1Servicesettings() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPerksV1Servicesettings", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPerksV1Settings() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPerksV1Settings", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPerksV1ShowAutoModifiedPagesNotification() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPerksV1ShowAutoModifiedPagesNotification", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolPerksV1Styles() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolPerksV1Styles", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async PostLolPerksV1UpdatePageOrder(destinationPageId?: number, offset?: number, targetPageId?: number) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolPerksV1UpdatePageOrder"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (destinationPageId) {
            d["destinationPageId"] = destinationPageId;
        };
        

        if (offset) {
            d["offset"] = offset;
        };
        

        if (targetPageId) {
            d["targetPageId"] = targetPageId;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

};