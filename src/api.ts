import { LCUClient } from './clients/lcuClient';
import { GameClient } from './clients/gameClient';

//import { RiotClient } from './clients/riot';
/**
 * Types
*/
import { 
    ApiOptions, CurrentSummoner
} from './types';

export class Client {
    ApiOptions: ApiOptions
    //riot: RiotClient
    lcu: LCUClient
    game?: GameClient
    user?: CurrentSummoner
    constructor(ApiOptions?: ApiOptions) {
        this.ApiOptions = ApiOptions!;
        this.lcu = new LCUClient(this.ApiOptions);
        this.game = new GameClient();
    };


    async connect() {
        if (this.ApiOptions?.liveGameData) {
            await this.game.connect();
        };
        let connectedUser = await this.lcu.connect();
        this.user = connectedUser;
        this.lcu.emit("ready", this.lcu.data);
        return true;
    }
};