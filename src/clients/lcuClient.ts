import { WebSocket } from 'ws';
import { writeFileSync } from 'fs';
import { readFileSync } from 'fs';
import { promisify, types } from 'util';
import { exec } from 'child_process';
import { TypedEmitter } from 'tiny-typed-emitter';
import { LCUFullEvents } from '../types/events';
import { ConnectionData } from '../types/eventTypes';
import { formatLCUEvent } from '../util/formatter';
import { join } from 'path';
import { 
    ApiOptions, CurrentSummoner
} from '../types';


import { Account } from '../modules/Account';
import { Active } from '../modules/Active';
import { Anti } from '../modules/Anti';
import { Banners } from '../modules/Banners';
import { Builtin } from '../modules/Builtin';
import { Career } from '../modules/Career';
import { Catalog } from '../modules/Catalog';
import { Challenges } from '../modules/Challenges';    
import { Champ } from '../modules/Champ';
import { Champions } from '../modules/Champions';      
import { Chat } from '../modules/Chat';
import { Clash } from '../modules/Clash';
import { Client } from '../modules/Client';
import { Collections } from '../modules/Collections';  
import { Config } from '../modules/Config';
import { Content } from '../modules/Content';
import { Cosmetics } from '../modules/Cosmetics';      
import { Email } from '../modules/Email';
import { End } from '../modules/End';
import { Entitlements } from '../modules/Entitlements';
import { Esport } from '../modules/Esport';
import { External } from '../modules/External';        
import { Game } from '../modules/Game';
import { Gameflow } from '../modules/Gameflow';        
import { Geoinfo } from '../modules/Geoinfo';
import { Highlights } from '../modules/Highlights';    
import { Honor } from '../modules/Honor';
import { Hovercard } from '../modules/Hovercard';
import { Inventory } from '../modules/Inventory';
import { Item } from '../modules/Item';
import { Kickout } from '../modules/Kickout';
import { Kr } from '../modules/Kr';
import { League } from '../modules/League';
import { Leaver } from '../modules/Leaver';
import { License } from '../modules/License';
import { Loadouts } from '../modules/Loadouts';
import { Lobby } from '../modules/Lobby';
import { Login } from '../modules/Login';
import { Loot } from '../modules/Loot';
import { Loyalty } from '../modules/Loyalty';
import { Manager } from '../modules/Manager';
import { Maps } from '../modules/Maps';
import { Match } from '../modules/Match';
import { Matchmaking } from '../modules/Matchmaking';
import { Messaging } from '../modules/Messaging';
import { Missions } from '../modules/Missions';
import { Notifications } from '../modules/Notifications';
import { Npe } from '../modules/Npe';
import { Patch } from '../modules/Patch';
import { Patcher } from '../modules/Patcher';
import { Payments } from '../modules/Payments';
import { Performance } from '../modules/Performance';
import { Perks } from '../modules/Perks';
import { Personalized } from '../modules/Personalized';
import { Pft } from '../modules/Pft';
import { Platform } from '../modules/Platform';
import { Player } from '../modules/Player';
import { Pre } from '../modules/Pre';
import { Premade } from '../modules/Premade';
import { Publishing } from '../modules/Publishing';
import { Purchase } from '../modules/Purchase';
import { Ranked } from '../modules/Ranked';
import { Regalia } from '../modules/Regalia';
import { Replays } from '../modules/Replays';
import { Rewards } from '../modules/Rewards';
import { Riot } from '../modules/Riot';
import { Rso } from '../modules/Rso';
import { Sanitizer } from '../modules/Sanitizer';
import { Service } from '../modules/Service';
import { Settings } from '../modules/Settings';
import { Shutdown } from '../modules/Shutdown';
import { Simple } from '../modules/Simple';
import { Social } from '../modules/Social';
import { Spectator } from '../modules/Spectator';
import { Statstones } from '../modules/Statstones';
import { Store } from '../modules/Store';
import { Suggested } from '../modules/Suggested';
import { Summoner } from '../modules/Summoner';
import { Tastes } from '../modules/Tastes';
import { Tft } from '../modules/Tft';
import { Tracing } from '../modules/Tracing';
import { Trophies } from '../modules/Trophies';
import { Worlds } from '../modules/Worlds';
const execAsync = promisify(exec);

const MESSAGE_TYPES = {
    WELCOME: 0,
    PREFIX: 1,
    CALL: 2,
    CALLRESULT: 3,
    CALLERROR: 4,
    SUBSCRIBE: 5,
    UNSUBSCRIBE: 6,
    PUBLISH: 7,
    EVENT: 8
};

export class LCUClient extends TypedEmitter<LCUFullEvents> {
    data?: ConnectionData
    lockFile: Array<string>
    install_directory?: string
    ws!: WebSocket
    account: Account
    active: Active
    anti: Anti
    banners: Banners
    builtin: Builtin
    career: Career
    catalog: Catalog
    challenges: Challenges    
    champ: Champ
    champions: Champions      
    chat: Chat
    clash: Clash
    client: Client
    collections: Collections  
    config: Config
    content: Content
    cosmetics: Cosmetics      
    email: Email
    end: End
    entitlements: Entitlements
    esport: Esport
    external: External        
    game: Game
    gameflow: Gameflow        
    geoinfo: Geoinfo
    highlights: Highlights    
    honor: Honor
    hovercard: Hovercard
    inventory: Inventory
    item: Item
    kickout: Kickout
    kr: Kr
    league: League
    leaver: Leaver
    license: License
    loadouts: Loadouts
    lobby: Lobby
    login: Login
    loot: Loot
    loyalty: Loyalty
    manager: Manager
    maps: Maps
    match: Match
    matchmaking: Matchmaking
    messaging: Messaging
    missions: Missions
    notifications: Notifications
    npe: Npe
    patch: Patch
    patcher: Patcher
    payments: Payments
    performance: Performance
    perks: Perks
    personalized: Personalized
    pft: Pft
    platform: Platform
    player: Player
    plugin: Plugin
    pre: Pre
    premade: Premade
    publishing: Publishing
    purchase: Purchase
    ranked: Ranked
    regalia: Regalia
    replays: Replays
    rewards: Rewards
    riot: Riot
    rso: Rso
    sanitizer: Sanitizer
    service: Service
    settings: Settings
    shutdown: Shutdown
    simple: Simple
    social: Social
    spectator: Spectator
    statstones: Statstones
    store: Store
    suggested: Suggested
    summoner: Summoner
    tastes: Tastes
    tft: Tft
    tracing: Tracing
    trophies: Trophies
    worlds: Worlds
    ApiOptions?: ApiOptions
    constructor(ApiOptions?: ApiOptions) {
        super();
        this.ApiOptions = ApiOptions;
        this.install_directory = ApiOptions?.installDirectory;
        this.lockFile = [];
    };

    _onError(error: Error) {
        this.emit("error", error);
    }

    subscribe(topic: string, cb: (...args: any[]) => void) {
        this.ws.addListener(topic, cb);
        this.send(MESSAGE_TYPES.SUBSCRIBE, topic);
    }

    send(type: number, message: string) {
        this.ws.send(JSON.stringify([type, message]));
    }

    async _onMessage(data: any) {
        if (data.length === 0) return;
        try {
            data = JSON.parse(data.toString("utf-8")).slice(2)[0]
            let formattedData = await formatLCUEvent(data);
            if (this.ApiOptions?.rawEventData) {
                this.emit("raw", data);
            }
            if (formattedData.eventName.length === 0) {
                console.log(formattedData.endpoint);
                return;
            };
            /* debugging stuff
            let eventsNow = await getevents();
            if (!eventsNow[formattedData.eventName]) {
                eventsNow[formattedData.eventName] = formattedData;
                //writeFileSync(join(__dirname, "events.json"), JSON.stringify(eventsNow));
            };
            */
            this.emit(formattedData.eventName, data);
        } catch(e: any) {
            //writeFileSync("invalid.json", data.toString("utf-8"));
            console.log(e.message)
            this.emit("error", e);
        }
    }

    
    async connect(): Promise<CurrentSummoner> {
        const { stdout, stderr } = await execAsync("WMIC PROCESS WHERE name='LeagueClientUx.exe' GET commandline");
        if (stderr) {
            throw Error("LeagueClient is not opened");
        };
        if (!this.install_directory) this.install_directory = stdout.split('--install-directory=')[1].split('"')[0];
        this.lockFile = readFileSync(`${this.install_directory}\/lockfile`, "utf-8").split(':');
        const password = this.lockFile[3];
        const username = "riot";
        const protocol = this.lockFile[4];
        const port = this.lockFile[2];
        const address = "127.0.0.1";
        this.data = {
            port: port,
            protocol: protocol,
            username: username,
            addr: address,
            auth_header: "Basic "+Buffer.from(username+password).toString('base64'),
            password: password,
            url: `${protocol}://${username}:${password}@${address}:${port}`,
            wssUrl: `wss://riot:${password}@127.0.0.1:${port}`
        };
        this.ws = new WebSocket(this.data.wssUrl, {
            rejectUnauthorized: false
        });
        this.ws.on('message', this._onMessage.bind(this));
        this.ws.on('error', this._onError.bind(this));
        this.ws.on('open', () => {
            this.subscribe('OnJsonApiEvent', () =>{});
        });
        await this.setupClasses();
        const me = await this.summoner.GetLolSummonerV1CurrentSummoner();
        return me;
    };

    async setupClasses() {
        this.account = new Account(this.data.url);
        this.active = new Active(this.data.url);
        this.anti = new Anti(this.data.url);
        this.banners = new Banners(this.data.url);
        this.builtin = new Builtin(this.data.url);
        this.career = new Career(this.data.url);
        this.catalog = new Catalog(this.data.url);
        this.challenges = new Challenges(this.data.url);
        this.champ = new Champ(this.data.url);
        this.champions = new Champions(this.data.url);
        this.chat = new Chat(this.data.url);
        this.clash = new Clash(this.data.url);
        this.client = new Client(this.data.url);
        this.collections = new Collections(this.data.url);
        this.config = new Config(this.data.url);
        this.content = new Content(this.data.url);
        this.cosmetics = new Cosmetics(this.data.url);
        this.email = new Email(this.data.url);
        this.end = new End(this.data.url);
        this.entitlements = new Entitlements(this.data.url);
        this.esport = new Esport(this.data.url);
        this.external = new External(this.data.url);
        this.game = new Game(this.data.url);
        this.gameflow = new Gameflow(this.data.url);
        this.geoinfo = new Geoinfo(this.data.url);
        this.highlights = new Highlights(this.data.url);
        this.honor = new Honor(this.data.url);
        this.hovercard = new Hovercard(this.data.url);
        this.inventory = new Inventory(this.data.url);
        this.item = new Item(this.data.url);
        this.kickout = new Kickout(this.data.url);
        this.kr = new Kr(this.data.url);
        this.league = new League(this.data.url);
        this.leaver = new Leaver(this.data.url);
        this.license = new License(this.data.url);
        this.loadouts = new Loadouts(this.data.url);
        this.lobby = new Lobby(this.data.url);
        this.login = new Login(this.data.url);
        this.loot = new Loot(this.data.url);
        this.loyalty = new Loyalty(this.data.url);
        this.manager = new Manager(this.data.url);
        this.maps = new Maps(this.data.url);
        this.match = new Match(this.data.url);
        this.matchmaking = new Matchmaking(this.data.url);
        this.messaging = new Messaging(this.data.url);
        this.missions = new Missions(this.data.url);
        this.notifications = new Notifications(this.data.url);
        this.npe = new Npe(this.data.url);
        this.patch = new Patch(this.data.url);
        this.patcher = new Patcher(this.data.url);
        this.payments = new Payments(this.data.url);
        this.performance = new Performance(this.data.url);
        this.perks = new Perks(this.data.url);
        this.personalized = new Personalized(this.data.url);
        this.pft = new Pft(this.data.url);
        this.platform = new Platform(this.data.url);
        this.player = new Player(this.data.url);
        this.pre = new Pre(this.data.url);
        this.premade = new Premade(this.data.url);
        this.publishing = new Publishing(this.data.url);
        this.purchase = new Purchase(this.data.url);
        this.ranked = new Ranked(this.data.url);
        this.regalia = new Regalia(this.data.url);
        this.replays = new Replays(this.data.url);
        this.rewards = new Rewards(this.data.url);
        this.riot = new Riot(this.data.url);
        this.rso = new Rso(this.data.url);
        this.sanitizer = new Sanitizer(this.data.url);
        this.service = new Service(this.data.url);
        this.settings = new Settings(this.data.url);
        this.shutdown = new Shutdown(this.data.url);
        this.simple = new Simple(this.data.url);
        this.social = new Social(this.data.url);
        this.spectator = new Spectator(this.data.url);
        this.statstones = new Statstones(this.data.url);
        this.store = new Store(this.data.url);
        this.suggested = new Suggested(this.data.url);
        this.summoner = new Summoner(this.data.url);
        this.tastes = new Tastes(this.data.url);
        this.tft = new Tft(this.data.url);
        this.tracing = new Tracing(this.data.url);
        this.trophies = new Trophies(this.data.url);
        this.worlds = new Worlds(this.data.url);
    }
}

/*
async function getevents() {
    let current = require(join(__dirname, "events.json"))
    return current;
}
*/