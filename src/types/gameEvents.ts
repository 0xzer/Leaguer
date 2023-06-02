export interface GameEvents {
    GameStart?: (EventData: GameStart, ActivePlayer?: ActivePlayer, AllPlayers?: AllPlayer) => void;
    MinionsSpawning?: (EventData: MinionsSpawning, ActivePlayer?: ActivePlayer, AllPlayers?: AllPlayer) => void;
    ChampionKill?: (EventData: ChampionKill, ActivePlayer?: ActivePlayer, AllPlayers?: AllPlayer) => void;
    FirstBlood?: (EventData: FirstBlood, ActivePlayer?: ActivePlayer, AllPlayers?: AllPlayer) => void;
    Multikill?: (EventData: Multikill, ActivePlayer?: ActivePlayer, AllPlayers?: AllPlayer) => void;
    DragonKill?: (EventData: DragonKill, ActivePlayer?: ActivePlayer, AllPlayers?: AllPlayer) => void;
    HeraldKill?: (EventData: HeraldKill, ActivePlayer?: ActivePlayer, AllPlayers?: AllPlayer) => void;
    TurretKilled?: (EventData: TurretKilled, ActivePlayer?: ActivePlayer, AllPlayers?: AllPlayer) => void;
    FirstBrick?: (EventData: FirstBrick, ActivePlayer?: ActivePlayer, AllPlayers?: AllPlayer) => void;
    InhibKilled?: (EventData: InhibKilled, ActivePlayer?: ActivePlayer, AllPlayers?: AllPlayer) => void;
    GameEnd?: (EventData: GameEnd, ActivePlayer?: ActivePlayer, AllPlayers?: AllPlayer) => void;
  }

  export type SummonerName = string;
  
  export interface GameStart {
    EventID: number
    EventName: string
    EventTime: number
  }
  
  export interface MinionsSpawning {
    EventID: number
    EventName: string
    EventTime: number
  }
  
  export interface ChampionKill {
    Assisters: Array<SummonerName>
    EventID: number
    EventName: string
    EventTime: number
    KillerName: SummonerName
    VictimName: SummonerName
  }
  
  export interface FirstBlood {
    EventID: number
    EventName: string
    EventTime: number
    Recipient: SummonerName
  }
  
  export interface Multikill {
    EventID: number
    EventName: string
    EventTime: number
    KillStreak: number
    KillerName: SummonerName
  }
  
  export interface DragonKill {
    Assisters: Array<SummonerName>
    DragonType: string
    EventID: number
    EventName: string
    EventTime: number
    KillerName: SummonerName
    Stolen: string
  }
  
  export interface HeraldKill {
    Assisters: Array<SummonerName>
    EventID: number
    EventName: string
    EventTime: number
    KillerName: SummonerName
    Stolen: string
  }
  
  export interface TurretKilled {
    Assisters: Array<SummonerName>
    EventID: number
    EventName: string
    EventTime: number
    KillerName: SummonerName
    TurretKilled: string
  }
  
  export interface FirstBrick {
    EventID: number
    EventName: string
    EventTime: number
    KillerName: SummonerName
  }
  
  export interface InhibKilled {
    Assisters: Array<SummonerName>
    EventID: number
    EventName: string
    EventTime: number
    InhibKilled: string
    KillerName: SummonerName
  }
  
  export interface GameEnd {
    EventID: number
    EventName: string
    EventTime: number
    Result: string
  }

  export interface GameEventData {
    activePlayer: ActivePlayer
    allPlayers: AllPlayer[]
    gameData: GameData
  }
  
  export interface ActivePlayer {
    abilities: Abilities
    championStats: ChampionStats
    currentGold: number
    fullRunes: FullRunes
    level: number
    summonerName: string
    teamRelativeColors: boolean
  }
  
  export interface Abilities {
    E: E
    Passive: Passive
    Q: Q
    R: R
    W: W
  }
  
  export interface E {
    abilityLevel: number
    displayName: string
    id: string
    rawDescription: string
    rawDisplayName: string
  }
  
  export interface Passive {
    displayName: string
    id: string
    rawDescription: string
    rawDisplayName: string
  }
  
  export interface Q {
    abilityLevel: number
    displayName: string
    id: string
    rawDescription: string
    rawDisplayName: string
  }
  
  export interface R {
    abilityLevel: number
    displayName: string
    id: string
    rawDescription: string
    rawDisplayName: string
  }
  
  export interface W {
    abilityLevel: number
    displayName: string
    id: string
    rawDescription: string
    rawDisplayName: string
  }
  
  export interface ChampionStats {
    abilityHaste: number
    abilityPower: number
    armor: number
    armorPenetrationFlat: number
    armorPenetrationPercent: number
    attackDamage: number
    attackRange: number
    attackSpeed: number
    bonusArmorPenetrationPercent: number
    bonusMagicPenetrationPercent: number
    critChance: number
    critDamage: number
    currentHealth: number
    healShieldPower: number
    healthRegenRate: number
    lifeSteal: number
    magicLethality: number
    magicPenetrationFlat: number
    magicPenetrationPercent: number
    magicResist: number
    maxHealth: number
    moveSpeed: number
    omnivamp: number
    physicalLethality: number
    physicalVamp: number
    resourceMax: number
    resourceRegenRate: number
    resourceType: string
    resourceValue: number
    spellVamp: number
    tenacity: number
  }
  
  export interface FullRunes {
    generalRunes: GeneralRune[]
    keystone: Keystone
    primaryRuneTree: PrimaryRuneTree
    secondaryRuneTree: SecondaryRuneTree
    statRunes: StatRune[]
  }
  
  export interface GeneralRune {
    displayName: string
    id: number
    rawDescription: string
    rawDisplayName: string
  }
  
  export interface Keystone {
    displayName: string
    id: number
    rawDescription: string
    rawDisplayName: string
  }
  
  export interface PrimaryRuneTree {
    displayName: string
    id: number
    rawDescription: string
    rawDisplayName: string
  }
  
  export interface SecondaryRuneTree {
    displayName: string
    id: number
    rawDescription: string
    rawDisplayName: string
  }
  
  export interface StatRune {
    id: number
    rawDescription: string
  }
  
  export interface AllPlayer {
    championName: string
    isBot: boolean
    isDead: boolean
    items: Item[]
    level: number
    position: string
    rawChampionName: string
    respawnTimer: number
    runes: Runes
    scores: Scores
    skinID: number
    summonerName: string
    summonerSpells: SummonerSpells
    team: string
    rawSkinName?: string
    skinName?: string
  }
  
  export interface Item {
    canUse: boolean
    consumable: boolean
    count: number
    displayName: string
    itemID: number
    price: number
    rawDescription: string
    rawDisplayName: string
    slot: number
  }
  
  export interface Runes {
    keystone: Keystone2
    primaryRuneTree: PrimaryRuneTree2
    secondaryRuneTree: SecondaryRuneTree2
  }
  
  export interface Keystone2 {
    displayName: string
    id: number
    rawDescription: string
    rawDisplayName: string
  }
  
  export interface PrimaryRuneTree2 {
    displayName: string
    id: number
    rawDescription: string
    rawDisplayName: string
  }
  
  export interface SecondaryRuneTree2 {
    displayName: string
    id: number
    rawDescription: string
    rawDisplayName: string
  }
  
  export interface Scores {
    assists: number
    creepScore: number
    deaths: number
    kills: number
    wardScore: number
  }
  
  export interface SummonerSpells {
    summonerSpellOne: SummonerSpellOne
    summonerSpellTwo: SummonerSpellTwo
  }
  
  export interface SummonerSpellOne {
    displayName: string
    rawDescription: string
    rawDisplayName: string
  }
  
  export interface SummonerSpellTwo {
    displayName: string
    rawDescription: string
    rawDisplayName: string
  }
  
  export interface GameData {
    gameMode: string
    gameTime: number
    mapName: string
    mapNumber: number
    mapTerrain: string
  }
  