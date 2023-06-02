import { request, getPathFromOperationId } from '../util/request';

interface Parameters {
    name: string,
    value: any
};

export class Maps {
    host: string
    constructor(host: string) {
        this.host = host;
    };
    
    async PostLolMapsV1Map(assets?: object, categorizedContentBundles?: object, description?: string, gameMode?: string, gameModeDescription?: string, gameModeName?: string, gameModeShortName?: string, gameMutator?: string, id?: number, isDefault?: boolean, isRGM?: boolean, locStrings?: object, mapStringId?: string, name?: string, perPositionDisallowedSummonerSpells?: object, perPositionRequiredSummonerSpells?: object, platformId?: string, platformName?: string, properties?: object, tutorialCards?: Array<any>) {
        let params = {};
        let u = this.host + (await getPathFromOperationId("PostLolMapsV1Map"));
        let headers = {"content-type": "application/json"};
        let d = {};
        
        if (assets) {
            d["assets"] = assets;
        };
        

        if (categorizedContentBundles) {
            d["categorizedContentBundles"] = categorizedContentBundles;
        };
        

        if (description) {
            d["description"] = description;
        };
        

        if (gameMode) {
            d["gameMode"] = gameMode;
        };
        

        if (gameModeDescription) {
            d["gameModeDescription"] = gameModeDescription;
        };
        

        if (gameModeName) {
            d["gameModeName"] = gameModeName;
        };
        

        if (gameModeShortName) {
            d["gameModeShortName"] = gameModeShortName;
        };
        

        if (gameMutator) {
            d["gameMutator"] = gameMutator;
        };
        

        if (id) {
            d["id"] = id;
        };
        

        if (isDefault) {
            d["isDefault"] = isDefault;
        };
        

        if (isRGM) {
            d["isRGM"] = isRGM;
        };
        

        if (locStrings) {
            d["locStrings"] = locStrings;
        };
        

        if (mapStringId) {
            d["mapStringId"] = mapStringId;
        };
        

        if (name) {
            d["name"] = name;
        };
        

        if (perPositionDisallowedSummonerSpells) {
            d["perPositionDisallowedSummonerSpells"] = perPositionDisallowedSummonerSpells;
        };
        

        if (perPositionRequiredSummonerSpells) {
            d["perPositionRequiredSummonerSpells"] = perPositionRequiredSummonerSpells;
        };
        

        if (platformId) {
            d["platformId"] = platformId;
        };
        

        if (platformName) {
            d["platformName"] = platformName;
        };
        

        if (properties) {
            d["properties"] = properties;
        };
        

        if (tutorialCards) {
            d["tutorialCards"] = tutorialCards;
        };
        
        const r = await request("POST", u, params, d, headers, "json");
        return r;
    };

    async GetLolMapsV1MapById(id: number) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id}];
        
        let u = this.host + (await getPathFromOperationId("GetLolMapsV1MapById", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolMapsV1Maps() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolMapsV1Maps", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolMapsV2MapByIdByGameMode(id: number, gameMode: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id},{name:"gameMode",value:gameMode}];
        
        let u = this.host + (await getPathFromOperationId("GetLolMapsV2MapByIdByGameMode", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolMapsV2MapByIdByGameModeByGameMutator(id: number, gameMode: string, gameMutator: string) {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [{name:"id",value:id},{name:"gameMode",value:gameMode},{name:"gameMutator",value:gameMutator}];
        
        let u = this.host + (await getPathFromOperationId("GetLolMapsV2MapByIdByGameModeByGameMutator", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

    async GetLolMapsV2Maps() {
        let hs = {};
        
        let ps = {};
        let pathParameters: Array<Parameters> = [];
        
        let u = this.host + (await getPathFromOperationId("GetLolMapsV2Maps", pathParameters));
        
        const r = await request("GET", u, ps, null, hs, "json");
        return r;
    };

};