import { EventEmitter } from "events";

export interface ApiOptions {
    installDirectory?: string
    liveGameData?: boolean
    liveClientData?: boolean
    riotClient?: boolean
    rawEventData?: boolean
}

export interface Api {
    ApiOptions: ApiOptions
}

export interface CurrentSummoner {
    accountId: number
    displayName: string
    internalName: string
    nameChangeFlag: boolean
    percentCompleteForNextLevel: number
    privacy: string
    profileIconId: number
    puuid: string
    rerollPoints: RerollPoints
    summonerId: number
    summonerLevel: number
    unnamed: boolean
    xpSinceLastLevel: number
    xpUntilNextLevel: number
}

interface RerollPoints {
    currentPoints: number
    maxRolls: number
    numberOfRolls: number
    pointsCostToRoll: number
    pointsToReroll: number
}