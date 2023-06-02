import fetch from 'node-fetch';
import https from 'https';

import { 
    ApiOptions
} from '../types';
import { TypedEmitter } from 'tiny-typed-emitter';
import { GameEvents } from '../types/gameEvents';

const agent = new https.Agent({
    rejectUnauthorized: false
});

export class GameClient extends TypedEmitter<GameEvents>{
    ApiOptions?: ApiOptions
    url: string
    events: object
    constructor(ApiOptions?: ApiOptions) {
        super();
        this.ApiOptions = ApiOptions;
        this.url = "https://127.0.0.1:2999";
        this.events = {};
    };

    async fetchEvents() {
        let request = await fetch(`${this.url}/liveclientdata/allgamedata`, {
            agent: agent,
        });
        let response = await request.json();
        return {
            events: response.events.Events,
            currentPlayer: response.activePlayer,
            allPlayers: response.allPlayers
        };
    };

    async eventListener() {
        let leagueEvents = await this.fetchEvents();
        let events: Array<any> = leagueEvents.events;
        let cachedEventIds = Object.keys(this.events);
        const notEmitted = events.filter(e => !cachedEventIds.includes(e.EventID));
        if (notEmitted.length > 0) {
            for(let eventToEmit of notEmitted) {
                this.events[eventToEmit.EventID] = true;
                this.emit(eventToEmit.EventName, eventToEmit, leagueEvents.currentPlayer, leagueEvents.allPlayers);
            };
        };
    }

    async connect() {
        await this.eventListener();
    };
}