export interface LolPatchV1ProductsLeagueOfLegendsState {
    endpoint: string
    eventName: string
    eventType: string
    data: Data
}

export interface RawData {
  uri: string
  eventType: string
  data: any
};

export type ConnectionData = {
    port: string,
    protocol: string,
    username: string,
    addr: string,
    auth_header: string,
    password: string,
    url: string,
    wssUrl: string
};

export interface Data {
    action: string
    components: Component[]
    id: string
    isCorrupted: boolean
    isStopped: boolean
    isUpToDate: boolean
    isUpdateAvailable: boolean
    percentPatched: number
  }
  
export interface Component {
    action: string
    id: string
    isCorrupted: boolean
    isUpToDate: boolean
    isUpdateAvailable: boolean
    progress: any
    timeOfLastUpToDateCheckISO8601: string
  }
  
export interface PatcherV1ProductsByProductIdState {
    endpoint: string
    eventName: string
    eventType: string
    data: Data2
  }
  
export interface Data2 {
    action: string
    components: Component2[]
    id: string
    isCorrupted: boolean
    isStopped: boolean
    isUpToDate: boolean
    isUpdateAvailable: boolean
    percentPatched: number
  }
  
export interface Component2 {
    action: string
    id: string
    isCorrupted: boolean
    isUpToDate: boolean
    isUpdateAvailable: boolean
    progress: any
    timeOfLastUpToDateCheckISO8601: string
  }
  
export interface LolPatchV1CheckingEnabled {
    endpoint: string
    eventName: string
    eventType: string
    data: boolean
  }
  
export interface DataStoreV1InstallSettingsByPath {
    endpoint: string
    eventName: string
    eventType: string
    data: number
  }
  
export interface LolGameflowV1ActivePatcherLock {
    endpoint: string
    eventName: string
    eventType: string
    data: boolean
  }
  
export interface LolLobbyV1PartiesGamemode {
    endpoint: string
    eventName: string
    eventType: string
    data: Data3
  }
  
export interface Data3 {
    allowSpectators: any
    botDifficulty: any
    customsSettings: any
    gameCustomization: GameCustomization
    gameType: string
    gameTypeConfigId: any
    mapId: any
    maxPartySize: number
    maxTeamSize: number
    queueId: number
  }
  
export interface GameCustomization {}
  
export interface LolLobbyV2LobbyCountdown {
    endpoint: string
    eventName: string
    eventType: string
    data: Data4
  }
  
export interface Data4 {
    countdown: number
    enabled: boolean
  }
  
export interface LolChatV1Me {
    endpoint: string
    eventName: string
    eventType: string
    data: Data5
  }
  
export interface Data5 {
    availability: string
    gameName: string
    gameTag: string
    icon: number
    id: string
    lastSeenOnlineTimestamp: any
    lol: Lol
    name: string
    obfuscatedSummonerId: number
    patchline: string
    pid: string
    platformId: string
    product: string
    productName: string
    puuid: string
    statusMessage: string
    summary: string
    summonerId: number
    time: number
  }
  
export interface Lol {
    bannerIdSelected: string
    challengeCrystalLevel: string
    challengePoints: string
    challengeTitle: string
    challengeTitleSelected: string
    challengeTokensSelected: string
    championId: string
    companionId: string
    damageSkinId: string
    gameId: string
    gameMode: string
    gameQueueType: string
    gameStatus: string
    iconOverride: string
    isObservable: string
    level: string
    mapId: string
    mapSkinId: string
    masteryScore: string
    pty: string
    puuid: string
    queueId: string
    rankedLeagueDivision: string
    rankedLeagueQueue: string
    rankedLeagueTier: string
    rankedLosses: string
    rankedSplitRewardLevel: string
    rankedWins: string
    regalia: string
    skinVariant: string
    skinname: string
    timeStamp: string
  }
  
export interface RiotclientAffinity {
    endpoint: string
    eventName: string
    eventType: string
    data: any
  }
  
export interface LolHovercardV1FriendInfoByPuuid {
    endpoint: string
    eventName: string
    eventType: string
    data: Data6
  }
  
export interface Data6 {
    accountId: number
    availability: string
    gameName: string
    gameTag: string
    icon: number
    id: string
    lol: Lol2
    masteryScore: number
    name: string
    note: string
    partySummoners: any[]
    patchline: string
    platformId: string
    product: string
    productName: string
    puuid: string
    remotePlatform: boolean
    remoteProduct: boolean
    remoteProductBackdropUrl: string
    remoteProductIconUrl: string
    statusMessage: string
    summonerIcon: number
    summonerId: number
    summonerLevel: number
  }
  
export interface Lol2 {
    bannerIdSelected: string
    challengeCrystalLevel: string
    challengePoints: string
    challengeTitle: string
    challengeTitleSelected: string
    challengeTokensSelected: string
    championId: string
    companionId: string
    damageSkinId: string
    gameId: string
    gameMode: string
    gameQueueType: string
    gameStatus: string
    iconOverride: string
    isObservable: string
    level: string
    mapId: string
    mapSkinId: string
    masteryScore: string
    pty: string
    puuid: string
    queueId: string
    rankedLeagueDivision: string
    rankedLeagueQueue: string
    rankedLeagueTier: string
    rankedLosses: string
    rankedSplitRewardLevel: string
    rankedWins: string
    regalia: string
    skinVariant: string
    skinname: string
    timeStamp: string
  }
  
export interface LolClashV1Time {
    endpoint: string
    eventName: string
    eventType: string
    data: number
  }
  
export interface LolClashV1PlaymodeRestricted {
    endpoint: string
    eventName: string
    eventType: string
    data: boolean
  }
  
export interface LolClashV2PlaymodeRestricted {
    endpoint: string
    eventName: string
    eventType: string
    data: Data7
  }
  
export interface Data7 {
    isRestricted: boolean
    phaseId: number
    presenceState: string
    readyForVoice: boolean
    rosterId: string
    tournamentId: number
  }
  
export interface LolHovercardV1FriendInfoBySummonerBySummonerId {
    endpoint: string
    eventName: string
    eventType: string
    data: Data8
  }
  
export interface Data8 {
    accountId: number
    availability: string
    gameName: string
    gameTag: string
    icon: number
    id: string
    lol: Lol3
    masteryScore: number
    name: string
    note: string
    partySummoners: any[]
    patchline: string
    platformId: string
    product: string
    productName: string
    puuid: string
    remotePlatform: boolean
    remoteProduct: boolean
    remoteProductBackdropUrl: string
    remoteProductIconUrl: string
    statusMessage: string
    summonerIcon: number
    summonerId: number
    summonerLevel: number
  }
  
export interface Lol3 {
    bannerIdSelected: string
    challengeCrystalLevel: string
    challengePoints: string
    challengeTitle: string
    challengeTitleSelected: string
    challengeTokensSelected: string
    championId: string
    companionId: string
    damageSkinId: string
    gameId: string
    gameMode: string
    gameQueueType: string
    gameStatus: string
    iconOverride: string
    isObservable: string
    level: string
    mapId: string
    mapSkinId: string
    masteryScore: string
    pty: string
    puuid: string
    queueId: string
    rankedLeagueDivision: string
    rankedLeagueQueue: string
    rankedLeagueTier: string
    rankedLosses: string
    rankedSplitRewardLevel: string
    rankedWins: string
    regalia: string
    skinVariant: string
    skinname: string
    timeStamp: string
  }
  
export interface LolGameflowV1Session {
    endpoint: string
    eventName: string
    eventType: string
    data: Data9
  }
  
export interface Data9 {
    gameClient: GameClient
    gameData: GameData
    gameDodge: GameDodge
    map: Map
    phase: string
  }
  
export interface GameClient {
    observerServerIp: string
    observerServerPort: number
    running: boolean
    serverIp: string
    serverPort: number
    visible: boolean
  }
  
export interface GameData {
    gameId: number
    gameName: string
    isCustomGame: boolean
    password: string
    playerChampionSelections: any[]
    queue: Queue
    spectatorsAllowed: boolean
    teamOne: any[]
    teamTwo: any[]
  }
  
export interface Queue {
    allowablePremadeSizes: any[]
    areFreeChampionsAllowed: boolean
    assetMutator: string
    category: string
    championsRequiredToPlay: number
    description: string
    detailedDescription: string
    gameMode: string
    gameTypeConfig: GameTypeConfig
    id: number
    isRanked: boolean
    isTeamBuilderManaged: boolean
    lastToggledOffTime: number
    lastToggledOnTime: number
    mapId: number
    maximumParticipantListSize: number
    minLevel: number
    minimumParticipantListSize: number
    name: string
    numPlayersPerTeam: number
    queueAvailability: string
    queueRewards: QueueRewards
    removalFromGameAllowed: boolean
    removalFromGameDelayMinutes: number
    shortName: string
    showPositionSelector: boolean
    spectatorEnabled: boolean
    type: string
  }
  
export interface GameTypeConfig {
    advancedLearningQuests: boolean
    allowTrades: boolean
    banMode: string
    banTimerDuration: number
    battleBoost: boolean
    crossTeamChampionPool: boolean
    deathMatch: boolean
    doNotRemove: boolean
    duplicatePick: boolean
    exclusivePick: boolean
    id: number
    learningQuests: boolean
    mainPickTimerDuration: number
    maxAllowableBans: number
    name: string
    onboardCoopBeginner: boolean
    pickMode: string
    postPickTimerDuration: number
    reroll: boolean
    teamChampionPool: boolean
  }
  
export interface QueueRewards {
    isChampionPointsEnabled: boolean
    isIpEnabled: boolean
    isXpEnabled: boolean
    partySizeIpRewards: any[]
  }
  
export interface GameDodge {
    dodgeIds: any[]
    phase: string
    state: string
  }
  
export interface Map {
    assets: any
    categorizedContentBundles: any
    description: string
    gameMode: string
    gameModeName: string
    gameModeShortName: string
    gameMutator: string
    id: number
    isRGM: boolean
    mapStringId: string
    name: string
    perPositionDisallowedSummonerSpells: PerPositionDisallowedSummonerSpells
    perPositionRequiredSummonerSpells: PerPositionRequiredSummonerSpells
    platformId: string
    platformName: string
    properties: any
  }
  
export interface PerPositionDisallowedSummonerSpells {}
  
export interface PerPositionRequiredSummonerSpells {}
  
export interface LolGameflowV1GameflowPhase {
    endpoint: string
    eventName: string
    eventType: string
    data: string
  }
  
export interface LolGameflowV1Availability {
    endpoint: string
    eventName: string
    eventType: string
    data: Data10
  }
  
export interface Data10 {
    isAvailable: boolean
    state: string
  }
  
export interface LolClashV1CheckinAllowed {
    endpoint: string
    eventName: string
    eventType: string
    data: boolean
  }
  
export interface LolChatV1PlayerMutes {
    endpoint: string
    eventName: string
    eventType: string
    data: Data11
  }
  
export interface Data11 {}
  
export interface LolChatV1ConversationsByIdParticipantsByPid {
    endpoint: string
    eventName: string
    eventType: string
    data: Data12
  }
  
export interface Data12 {
    availability: string
    gameName: string
    gameTag: string
    icon: number
    id: string
    lastSeenOnlineTimestamp: any
    lol: Lol4
    name: string
    obfuscatedSummonerId: number
    patchline: string
    pid: string
    platformId: string
    product: string
    productName: string
    puuid: string
    statusMessage: string
    summary: string
    summonerId: number
    time: number
  }
  
export interface Lol4 {
    bannerIdSelected: string
    challengeCrystalLevel: string
    challengePoints: string
    challengeTitle: string
    challengeTitleSelected: string
    challengeTokensSelected: string
    championId: string
    companionId: string
    damageSkinId: string
    gameId: string
    gameMode: string
    gameQueueType: string
    gameStatus: string
    iconOverride: string
    isObservable: string
    level: string
    mapId: string
    mapSkinId: string
    masteryScore: string
    profileIcon: string
    pty: string
    puuid: string
    queueId: string
    rankedLeagueDivision: string
    rankedLeagueQueue: string
    rankedLeagueTier: string
    rankedLosses: string
    rankedSplitRewardLevel: string
    rankedWins: string
    regalia: string
    skinVariant: string
    skinname: string
    timeStamp: string
  }
  
export interface LolGameflowV1GameflowMetadataPlayerStatus {
    endpoint: string
    eventName: string
    eventType: string
    data: Data13
  }
  
export interface Data13 {
    canInviteOthersAtEog: boolean
    currentLobbyStatus: CurrentLobbyStatus
    lastQueuedLobbyStatus: LastQueuedLobbyStatus
  }
  
export interface CurrentLobbyStatus {
    allowedPlayAgain: boolean
    customSpectatorPolicy: string
    invitedSummonerIds: any[]
    isCustom: boolean
    isLeader: boolean
    isPracticeTool: boolean
    isSpectator: boolean
    lobbyId: string
    memberSummonerIds: number[]
    queueId: number
  }
  
export interface LastQueuedLobbyStatus {
    allowedPlayAgain: boolean
    customSpectatorPolicy: string
    invitedSummonerIds: any[]
    isCustom: boolean
    isLeader: boolean
    isPracticeTool: boolean
    isSpectator: boolean
    lobbyId: string
    memberSummonerIds: number[]
    queueId: number
  }
  
export interface LolLobbyV1LobbyAvailability {
    endpoint: string
    eventName: string
    eventType: string
    data: string
  }
  
export interface LolLobbyV2Lobby {
    endpoint: string
    eventName: string
    eventType: string
    data: Data14
  }
  
export interface Data14 {
    canStartActivity: boolean
    gameConfig: GameConfig
    invitations: Invitation[]
    localMember: LocalMember
    members: Member[]
    mucJwtDto: MucJwtDto
    multiUserChatId: string
    multiUserChatJWT: string
    multiUserChatPassword: string
    partyId: string
    partyType: string
    restrictions: any[]
    scarcePositions: any[]
    warnings: any[]
  }
  
export interface GameConfig {
    allowablePremadeSizes: number[]
    customLobbyName: string
    customMutatorName: string
    customRewardsDisabledReasons: any[]
    customSpectatorPolicy: string
    customSpectators: any[]
    customTeam100: any[]
    customTeam200: any[]
    gameMode: string
    isCustom: boolean
    isLobbyFull: boolean
    isTeamBuilderManaged: boolean
    mapId: number
    maxHumanPlayers: number
    maxLobbySize: number
    maxTeamSize: number
    pickType: string
    premadeSizeAllowed: boolean
    queueId: number
    shouldForceScarcePositionSelection: boolean
    showPositionSelector: boolean
  }
  
export interface Invitation {
    invitationId: string
    invitationType: string
    state: string
    timestamp: string
    toSummonerId: number
    toSummonerName: string
  }
  
export interface LocalMember {
    allowedChangeActivity: boolean
    allowedInviteOthers: boolean
    allowedKickOthers: boolean
    allowedStartActivity: boolean
    allowedToggleInvite: boolean
    autoFillEligible: boolean
    autoFillProtectedForPromos: boolean
    autoFillProtectedForSoloing: boolean
    autoFillProtectedForStreaking: boolean
    botChampionId: number
    botDifficulty: string
    botId: string
    firstPositionPreference: string
    isBot: boolean
    isLeader: boolean
    isSpectator: boolean
    puuid: string
    ready: boolean
    secondPositionPreference: string
    showGhostedBanner: boolean
    summonerIconId: number
    summonerId: number
    summonerInternalName: string
    summonerLevel: number
    summonerName: string
    teamId: number
  }
  
export interface Member {
    allowedChangeActivity: boolean
    allowedInviteOthers: boolean
    allowedKickOthers: boolean
    allowedStartActivity: boolean
    allowedToggleInvite: boolean
    autoFillEligible: boolean
    autoFillProtectedForPromos: boolean
    autoFillProtectedForSoloing: boolean
    autoFillProtectedForStreaking: boolean
    botChampionId: number
    botDifficulty: string
    botId: string
    firstPositionPreference: string
    isBot: boolean
    isLeader: boolean
    isSpectator: boolean
    puuid: string
    ready: boolean
    secondPositionPreference: string
    showGhostedBanner: boolean
    summonerIconId: number
    summonerId: number
    summonerInternalName: string
    summonerLevel: number
    summonerName: string
    teamId: number
  }
  
export interface MucJwtDto {
    channelClaim: string
    jwt: string
  }
  
export interface LolLobbyV2LobbyMembers {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum[]
  }
  
export interface Daum {
    allowedChangeActivity: boolean
    allowedInviteOthers: boolean
    allowedKickOthers: boolean
    allowedStartActivity: boolean
    allowedToggleInvite: boolean
    autoFillEligible: boolean
    autoFillProtectedForPromos: boolean
    autoFillProtectedForSoloing: boolean
    autoFillProtectedForStreaking: boolean
    botChampionId: number
    botDifficulty: string
    botId: string
    firstPositionPreference: string
    isBot: boolean
    isLeader: boolean
    isSpectator: boolean
    puuid: string
    ready: boolean
    secondPositionPreference: string
    showGhostedBanner: boolean
    summonerIconId: number
    summonerId: number
    summonerInternalName: string
    summonerLevel: number
    summonerName: string
    teamId: number
  }
  
export interface LolLobbyV2PartyActive {
    endpoint: string
    eventName: string
    eventType: string
    data: boolean
  }
  
export interface LolChallengesV1SummaryPlayerDataPlayerByPuuid {
    endpoint: string
    eventName: string
    eventType: string
    data: Data15
  }
  
export interface Data15 {
    apexLadderUpdateTime: number
    apexLeaderboardPosition: number
    bannerId: string
    categoryProgress: CategoryProgress[]
    crestId: string
    isApex: boolean
    overallChallengeLevel: string
    pointsUntilNextRank: number
    positionPercentile: number
    prestigeCrestBorderLevel: number
    selectedChallengesString: string
    title: Title
    topChallenges: any[]
    totalChallengeScore: number
  }
  
export interface CategoryProgress {
    category: string
    current: number
    level: string
    max: number
    positionPercentile: number
  }
  
export interface Title {
    challengeDescription: string
    challengeId: number
    challengeName: string
    contentId: string
    itemId: number
    level: string
    levelToIconPath: LevelToIconPath
    name: string
    purchaseDate: string
  }
  
export interface LevelToIconPath {}
  
export interface LolChallengesV1SuggestedChallengesLocalPlayer {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum2[]
  }
  
export interface Daum2 {
    availableIds: number[]
    capstoneGroupId: number
    capstoneGroupName: string
    capstoneId: number
    category: string
    completedIds: any[]
    currentLevel: string
    currentLevelAchievedTime: number
    currentThreshold: number
    currentValue: number
    description: string
    descriptionShort: string
    friendsAtLevels: FriendsAtLevel[]
    gameModes: string[]
    hasLeaderboard: boolean
    iconPath: string
    id: number
    idListType: string
    isApex: boolean
    isCapstone: boolean
    isReverseDirection: boolean
    levelToIconPath: LevelToIconPath2
    name: string
    nextLevel: string
    nextLevelIconPath: string
    nextThreshold: number
    parentCapstoneName: string
    percentile: number
    playersInLevel: number
    pointsAwarded: number
    position: number
    previousLevel: string
    previousValue: number
    priority: number
    retireTimestamp: number
    source: string
    thresholds: Thresholds
    valueMapping: string
  }
  
export interface FriendsAtLevel {
    friends: string[]
    level: string
  }
  
export interface LevelToIconPath2 {
    BRONZE: string
    DIAMOND: string
    GOLD: string
    IRON: string
    MASTER: string
    PLATINUM: string
    SILVER: string
    CHALLENGER?: string
    GRANDMASTER?: string
  }
  
export interface Thresholds {
    DIAMOND: Diamond
    GOLD: Gold
    MASTER: Master
    PLATINUM: Platinum
    SILVER: Silver
    CHALLENGER?: Challenger
    GRANDMASTER?: Grandmaster
    BRONZE?: Bronze
    IRON?: Iron
  }
  
export interface Diamond {
    rewards: Reward[]
    value: number
  }
  
export interface Reward {
    asset: string
    category: string
    name: string
    quantity: number
  }
  
export interface Gold {
    rewards: Reward2[]
    value: number
  }
  
export interface Reward2 {
    asset: string
    category: string
    name: string
    quantity: number
  }
  
export interface Master {
    rewards: Reward3[]
    value: number
  }
  
export interface Reward3 {
    asset: string
    category: string
    name: string
    quantity: number
  }
  
export interface Platinum {
    rewards: Reward4[]
    value: number
  }
  
export interface Reward4 {
    asset: string
    category: string
    name: string
    quantity: number
  }
  
export interface Silver {
    rewards: Reward5[]
    value: number
  }
  
export interface Reward5 {
    asset: string
    category: string
    name: string
    quantity: number
  }
  
export interface Challenger {
    rewards: Reward6[]
    value: number
  }
  
export interface Reward6 {
    asset: string
    category: string
    name: string
    quantity: number
  }
  
export interface Grandmaster {
    rewards: Reward7[]
    value: number
  }
  
export interface Reward7 {
    asset: string
    category: string
    name: string
    quantity: number
  }
  
export interface Bronze {
    rewards: Reward8[]
    value: number
  }
  
export interface Reward8 {
    asset: string
    category: string
    name: string
    quantity: number
  }
  
export interface Iron {
    rewards: Reward9[]
    value: number
  }
  
export interface Reward9 {
    asset: string
    category: string
    name: string
    quantity: number
  }
  
export interface LolChallengesV1ChallengesLocalPlayer {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum3[]
  }
  
export interface Daum3 {
    availableIds: number[]
    capstoneGroupId: number
    capstoneGroupName: string
    capstoneId: number
    category: string
    completedIds: number[]
    currentLevel: string
    currentLevelAchievedTime: number
    currentThreshold: number
    currentValue: number
    description: string
    descriptionShort: string
    friendsAtLevels: FriendsAtLevel2[]
    gameModes: string[]
    hasLeaderboard: boolean
    iconPath: string
    id: number
    idListType: string
    isApex: boolean
    isCapstone: boolean
    isReverseDirection: boolean
    levelToIconPath: LevelToIconPath3
    name: string
    nextLevel: string
    nextLevelIconPath: string
    nextThreshold: number
    parentCapstoneName: string
    percentile: number
    playersInLevel: number
    pointsAwarded: number
    position: number
    previousLevel: string
    previousValue: number
    priority: number
    retireTimestamp: number
    source: string
    thresholds: Thresholds2
    valueMapping: string
  }
  
export interface FriendsAtLevel2 {
    friends: string[]
    level: string
  }
  
export interface LevelToIconPath3 {
    BRONZE: string
    DIAMOND: string
    GOLD: string
    IRON: string
    MASTER: string
    PLATINUM: string
    SILVER: string
    CHALLENGER?: string
    GRANDMASTER?: string
  }
  
export interface Thresholds2 {
    DIAMOND?: Diamond2
    GOLD?: Gold2
    MASTER?: Master2
    PLATINUM?: Platinum2
    SILVER?: Silver2
    CHALLENGER?: Challenger2
    GRANDMASTER?: Grandmaster2
    BRONZE?: Bronze2
    IRON?: Iron2
  }
  
export interface Diamond2 {
    rewards: Reward10[]
    value: number
  }
  
export interface Reward10 {
    asset: string
    category: string
    name: string
    quantity: number
  }
  
export interface Gold2 {
    rewards: Reward11[]
    value: number
  }
  
export interface Reward11 {
    asset: string
    category: string
    name: string
    quantity: number
  }
  
export interface Master2 {
    rewards: Reward12[]
    value: number
  }
  
export interface Reward12 {
    asset: string
    category: string
    name: string
    quantity: number
  }
  
export interface Platinum2 {
    rewards: Reward13[]
    value: number
  }
  
export interface Reward13 {
    asset: string
    category: string
    name: string
    quantity: number
  }
  
export interface Silver2 {
    rewards: Reward14[]
    value: number
  }
  
export interface Reward14 {
    asset: string
    category: string
    name: string
    quantity: number
  }
  
export interface Challenger2 {
    rewards: Reward15[]
    value: number
  }
  
export interface Reward15 {
    asset: string
    category: string
    name: string
    quantity: number
  }
  
export interface Grandmaster2 {
    rewards: Reward16[]
    value: number
  }
  
export interface Reward16 {
    asset: string
    category: string
    name: string
    quantity: number
  }
  
export interface Bronze2 {
    rewards: Reward17[]
    value: number
  }
  
export interface Reward17 {
    asset: string
    category: string
    name: string
    quantity: number
  }
  
export interface Iron2 {
    rewards: Reward18[]
    value: number
  }
  
export interface Reward18 {
    asset: string
    category: string
    name: string
    quantity: number
  }
  
export interface RiotMessagingServiceV1MessageByAbyBbyC {
    endpoint: string
    eventName: string
    eventType: string
    data: Data16
  }
  
export interface Data16 {
    ackRequired: boolean
    id: string
    payload: string
    resource: string
    service: string
    timestamp: number
    version: string
  }
  
export interface LolLobbyV1PartyRewards {
    endpoint: string
    eventName: string
    eventType: string
    data: Data17
  }
  
export interface Data17 {
    isCustom: boolean
    isEnabled: boolean
    partyRewards: any[]
    queueId: number
  }
  
export interface LolSettingsV1AccountByCategory {
    endpoint: string
    eventName: string
    eventType: string
    data: Data18
  }
  
export interface Data18 {
    data: Data19
    schemaVersion: number
  }
  
export interface Data19 {
    Parties: Parties
  }
  
export interface Parties {
    defaultPartyType: string
  }
  
export interface LolSettingsV2AccountByPpTypeByCategory {
    endpoint: string
    eventName: string
    eventType: string
    data: Data20
  }
  
export interface Data20 {
    data: Data21
    schemaVersion: number
  }
  
export interface Data21 {
    Parties: Parties2
  }
  
export interface Parties2 {
    defaultPartyType: string
  }
  
export interface LolNpeTutorialPathV1Tutorials {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum4[]
  }
  
export interface Daum4 {
    backgroundUrl: string
    description: string
    id: string
    isViewed: boolean
    queueId: string
    rewards: Reward19[]
    status: string
    stepNumber: number
    title: string
    type: string
    useChosenChampion: boolean
    useQuickSearchMatchmaking: boolean
  }
  
export interface Reward19 {
    description: string
    iconUrl: string
    itemId: string
    rewardFulfilled: boolean
    rewardType: string
    sequence: number
    uniqueName: string
  }
  
export interface LolMissionsV1Series {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum5[]
  }
  
export interface Daum5 {
    createdDate: number
    description: string
    displayType: string
    eligibilityType: string
    endDate: number
    id: string
    internalName: string
    lastUpdatedTimestamp: number
    media: Media
    optInButtonText: string
    optOutButtonText: string
    parentInternalName: string
    startDate: number
    status: string
    tags: string[]
    title: string
    type: string
    viewed: boolean
    warnings: any[]
  }
  
export interface Media {
    accentColor: string
    backgroundImageLargeUrl: string
    backgroundImageSmallUrl: string
    backgroundUrl: string
    trackerIcon: string
    trackerIconUrl: string
  }
  
export interface LolChatV1ConversationsActive {
    endpoint: string
    eventName: string
    eventType: string
    data: Data22
  }
  
export interface Data22 {
    id: string
  }
  
export interface LolClashV1AllTournaments {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum6[]
  }
  
export interface Daum6 {
    bracketFormationInitDelayMs: number
    bracketFormationIntervalMs: number
    bracketSize: string
    buyInOptions: number[]
    buyInOptionsPremium: number[]
    entryFee: number
    honorRestriction: boolean
    id: number
    lastThemeOfSeason: boolean
    lft: boolean
    maxInvites: number
    maxSuggestionsPerPlayer: number
    minGames: number
    nameLocKey: string
    nameLocKeySecondary: string
    phases: Phase[]
    queueId: number
    rankRestriction: boolean
    resumeTime: number
    rewardConfig: RewardConfig[]
    rosterCreateDeadline: number
    rosterSize: number
    scheduleEndTime: number
    scheduleTime: number
    scoutingTimeMs: number
    smsRestriction: boolean
    status: string
    themeId: number
    tierConfigs: TierConfig[]
    voiceEnabled: boolean
  }
  
export interface Phase {
    cancelled: boolean
    capacityStatus: string
    id: number
    limitTiers: any[]
    period: number
    registrationTime: number
    startTime: number
    tournamentId: number
  }
  
export interface RewardConfig {
    entries: Entry[]
    keyDef: string[]
    name: string
  }
  
export interface Entry {
    key: string
    vals: Val[]
  }
  
export interface Val {
    alternative: Alternative
    grant: string
    primary: Primary
    show: string
  }
  
export interface Alternative {
    rewardSpec: RewardSpec
    rewardType: string
  }
  
export interface RewardSpec {
    bracket: string
    cup: string
    gem: string
    level: string
    name: string
    pedestal: string
    quantity: string
    seasonId: string
    theme: string
    tier: string
  }
  
export interface Primary {
    rewardSpec: RewardSpec2
    rewardType: string
  }
  
export interface RewardSpec2 {
    bracket: string
    cup: string
    gem: string
    level: string
    name: string
    pedestal: string
    quantity: string
    seasonId: string
    theme: string
    tier: string
  }
  
export interface TierConfig {
    delayTime: number
    estimateTime: number
    tier: number
  }
  
export interface LolClashV1CurrentTournamentIds {
    endpoint: string
    eventName: string
    eventType: string
    data: number[]
  }
  
export interface LolClashV1TournamentSummary {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum7[]
  }
  
export interface Daum7 {
    bracketId: number
    rosterId: string
    state: string
    tournamentId: number
  }
  
export interface LolClashV1TournamentStateInfo {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum8[]
  }
  
export interface Daum8 {
    currentPhaseId: number
    nextPhaseId: number
    nextStateChangeTime: number
    numRemainingPeriods: number
    state: string
    tournamentId: number
  }
  
export interface LolClashV1TournamentByTournamentIdStateInfo {
    endpoint: string
    eventName: string
    eventType: string
    data: Data23
  }
  
export interface Data23 {
    currentPhaseId: number
    nextPhaseId: number
    nextStateChangeTime: number
    numRemainingPeriods: number
    state: string
    tournamentId: number
  }
  
export interface LolClashV1TournamentByTournamentIdPlayer {
    endpoint: string
    eventName: string
    eventType: string
    data: Data24
  }
  
export interface Data24 {
    bracketId: number
    rosterId: string
    state: string
  }
  
export interface LolClashV1TournamentByTournamentIdPlayerHonorRestricted {
    endpoint: string
    eventName: string
    eventType: string
    data: boolean
  }
  
export interface LolClashV1InvitedRosterIds {
    endpoint: string
    eventName: string
    eventType: string
    data: any[]
  }
  
export interface LolClashV1PlayerHistory {
    endpoint: string
    eventName: string
    eventType: string
    data: any
  }
  
export interface LolClashV1Rewards {
    endpoint: string
    eventName: string
    eventType: string
    data: Data25
  }
  
export interface Data25 {
    seasonVp: number
    themeVp: any[]
  }
  
export interface LolLoadoutV4LoadoutById {
    endpoint: string
    eventName: string
    eventType: string
    data: Data26
  }
  
export interface Data26 {
    id: string
    itemId: any
    loadout: Loadout
    name: string
    refreshTime: string
    scope: string
  }
  
export interface Loadout {
    EMOTES_WHEEL_CENTER: EmotesWheelCenter
    REGALIA_BANNER_SLOT: RegaliaBannerSlot
    REGALIA_CREST_SLOT: RegaliaCrestSlot
    TOURNAMENT_TROPHY: TournamentTrophy
    WARD_SKIN_SLOT: WardSkinSlot
  }
  
export interface EmotesWheelCenter {
    contentId: string
    inventoryType: string
    itemId: number
  }
  
export interface RegaliaBannerSlot {
    contentId: string
    inventoryType: string
    itemId: number
  }
  
export interface RegaliaCrestSlot {
    contentId: string
    inventoryType: string
    itemId: number
  }
  
export interface TournamentTrophy {
    contentId: string
    inventoryType: string
    itemId: number
  }
  
export interface WardSkinSlot {
    contentId: string
    inventoryType: string
    itemId: number
  }
  
export interface LolLoadoutsV4LoadoutsScopeAccount {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum9[]
  }
  
export interface Daum9 {
    id: string
    itemId: any
    loadout: Loadout2
    name: string
    refreshTime: string
    scope: string
  }
  
export interface Loadout2 {
    EMOTES_WHEEL_CENTER: EmotesWheelCenter2
    REGALIA_BANNER_SLOT: RegaliaBannerSlot2
    REGALIA_CREST_SLOT: RegaliaCrestSlot2
    TOURNAMENT_TROPHY: TournamentTrophy2
    WARD_SKIN_SLOT: WardSkinSlot2
  }
  
export interface EmotesWheelCenter2 {
    contentId: string
    inventoryType: string
    itemId: number
  }
  
export interface RegaliaBannerSlot2 {
    contentId: string
    inventoryType: string
    itemId: number
  }
  
export interface RegaliaCrestSlot2 {
    contentId: string
    inventoryType: string
    itemId: number
  }
  
export interface TournamentTrophy2 {
    contentId: string
    inventoryType: string
    itemId: number
  }
  
export interface WardSkinSlot2 {
    contentId: string
    inventoryType: string
    itemId: number
  }
  
export interface ClientConfigV2ConfigByName {
    endpoint: string
    eventName: string
    eventType: string
    data: boolean
  }
  
export interface LolLootV1PlayerLootByLootId {
    endpoint: string
    eventName: string
    eventType: string
    data: Data27
  }
  
export interface Data27 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface LolLootV1PlayerLootMap {
    endpoint: string
    eventName: string
    eventType: string
    data: Data28
  }
  
export interface Data28 {
    CHAMPION_SKIN_222037: ChampionSkin222037
    CHAMPION_SKIN_RENTAL_10015: ChampionSkinRental10015
    CHAMPION_SKIN_RENTAL_103004: ChampionSkinRental103004
    CHAMPION_SKIN_RENTAL_105016: ChampionSkinRental105016
    CHAMPION_SKIN_RENTAL_110016: ChampionSkinRental110016
    CHAMPION_SKIN_RENTAL_117037: ChampionSkinRental117037
    CHAMPION_SKIN_RENTAL_164011: ChampionSkinRental164011
    CHAMPION_SKIN_RENTAL_19003: ChampionSkinRental19003
    CHAMPION_SKIN_RENTAL_223001: ChampionSkinRental223001
    CHAMPION_SKIN_RENTAL_32003: ChampionSkinRental32003
    CHAMPION_SKIN_RENTAL_51002: ChampionSkinRental51002
    CHAMPION_SKIN_RENTAL_57006: ChampionSkinRental57006
    CHAMPION_SKIN_RENTAL_85001: ChampionSkinRental85001
    CHAMPION_SKIN_RENTAL_86013: ChampionSkinRental86013
    "CHAMPION_TOKEN_6-110": ChampionToken6110
    "CHAMPION_TOKEN_6-17": ChampionToken617
    "CHAMPION_TOKEN_6-235": ChampionToken6235
    "CHAMPION_TOKEN_7-350": ChampionToken7350
    CHEST_224: Chest224
    CHEST_champion_mastery: ChestChampionMastery
    CHEST_generic: ChestGeneric
    CURRENCY_RP: CurrencyRp
    CURRENCY_champion: CurrencyChampion
    CURRENCY_cosmetic: CurrencyCosmetic
    MATERIAL_key: MaterialKey
    STATSTONE_SHARD_66600025: StatstoneShard66600025
    STATSTONE_SHARD_66600031: StatstoneShard66600031
    STATSTONE_SHARD_66600036: StatstoneShard66600036
    STATSTONE_SHARD_66600062: StatstoneShard66600062
    STATSTONE_SHARD_66600068: StatstoneShard66600068
    STATSTONE_SHARD_66600077: StatstoneShard66600077
    STATSTONE_SHARD_66600084: StatstoneShard66600084
    STATSTONE_SHARD_66600105: StatstoneShard66600105
    STATSTONE_SHARD_66600357: StatstoneShard66600357
    WARD_SKIN_RENTAL_201: WardSkinRental201
    WARD_SKIN_RENTAL_35: WardSkinRental35
  }
  
export interface ChampionSkin222037 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental10015 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental103004 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental105016 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental110016 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental117037 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental164011 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental19003 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental223001 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental32003 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental51002 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental57006 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental85001 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental86013 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionToken6110 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionToken617 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionToken6235 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionToken7350 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface Chest224 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChestChampionMastery {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChestGeneric {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface CurrencyRp {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface CurrencyChampion {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface CurrencyCosmetic {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface MaterialKey {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface StatstoneShard66600025 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface StatstoneShard66600031 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface StatstoneShard66600036 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface StatstoneShard66600062 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface StatstoneShard66600068 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface StatstoneShard66600077 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface StatstoneShard66600084 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface StatstoneShard66600105 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface StatstoneShard66600357 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface WardSkinRental201 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface WardSkinRental35 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface LolLootV2PlayerLootMap {
    endpoint: string
    eventName: string
    eventType: string
    data: Data29
  }
  
export interface Data29 {
    playerLoot: PlayerLoot
    version: number
  }
  
export interface PlayerLoot {
    CHAMPION_SKIN_222037: ChampionSkin2220372
    CHAMPION_SKIN_RENTAL_10015: ChampionSkinRental100152
    CHAMPION_SKIN_RENTAL_103004: ChampionSkinRental1030042
    CHAMPION_SKIN_RENTAL_105016: ChampionSkinRental1050162
    CHAMPION_SKIN_RENTAL_110016: ChampionSkinRental1100162
    CHAMPION_SKIN_RENTAL_117037: ChampionSkinRental1170372
    CHAMPION_SKIN_RENTAL_164011: ChampionSkinRental1640112
    CHAMPION_SKIN_RENTAL_19003: ChampionSkinRental190032
    CHAMPION_SKIN_RENTAL_223001: ChampionSkinRental2230012
    CHAMPION_SKIN_RENTAL_32003: ChampionSkinRental320032
    CHAMPION_SKIN_RENTAL_51002: ChampionSkinRental510022
    CHAMPION_SKIN_RENTAL_57006: ChampionSkinRental570062
    CHAMPION_SKIN_RENTAL_85001: ChampionSkinRental850012
    CHAMPION_SKIN_RENTAL_86013: ChampionSkinRental860132
    "CHAMPION_TOKEN_6-110": ChampionToken61102
    "CHAMPION_TOKEN_6-17": ChampionToken6172
    "CHAMPION_TOKEN_6-235": ChampionToken62352
    "CHAMPION_TOKEN_7-350": ChampionToken73502
    CHEST_224: Chest2242
    CHEST_champion_mastery: ChestChampionMastery2
    CHEST_generic: ChestGeneric2
    CURRENCY_RP: CurrencyRp2
    CURRENCY_champion: CurrencyChampion2
    CURRENCY_cosmetic: CurrencyCosmetic2
    MATERIAL_key: MaterialKey2
    STATSTONE_SHARD_66600025: StatstoneShard666000252
    STATSTONE_SHARD_66600031: StatstoneShard666000312
    STATSTONE_SHARD_66600036: StatstoneShard666000362
    STATSTONE_SHARD_66600062: StatstoneShard666000622
    STATSTONE_SHARD_66600068: StatstoneShard666000682
    STATSTONE_SHARD_66600077: StatstoneShard666000772
    STATSTONE_SHARD_66600084: StatstoneShard666000842
    STATSTONE_SHARD_66600105: StatstoneShard666001052
    STATSTONE_SHARD_66600357: StatstoneShard666003572
    WARD_SKIN_RENTAL_201: WardSkinRental2012
    WARD_SKIN_RENTAL_35: WardSkinRental352
  }
  
export interface ChampionSkin2220372 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental100152 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental1030042 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental1050162 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental1100162 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental1170372 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental1640112 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental190032 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental2230012 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental320032 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental510022 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental570062 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental850012 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionSkinRental860132 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionToken61102 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionToken6172 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionToken62352 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChampionToken73502 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface Chest2242 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChestChampionMastery2 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface ChestGeneric2 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface CurrencyRp2 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface CurrencyChampion2 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface CurrencyCosmetic2 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface MaterialKey2 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface StatstoneShard666000252 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface StatstoneShard666000312 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface StatstoneShard666000362 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface StatstoneShard666000622 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface StatstoneShard666000682 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface StatstoneShard666000772 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface StatstoneShard666000842 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface StatstoneShard666001052 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface StatstoneShard666003572 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface WardSkinRental2012 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface WardSkinRental352 {
    asset: string
    count: number
    disenchantLootName: string
    disenchantValue: number
    displayCategories: string
    expiryTime: number
    isNew: boolean
    isRental: boolean
    itemDesc: string
    itemStatus: string
    localizedDescription: string
    localizedName: string
    localizedRecipeSubtitle: string
    localizedRecipeTitle: string
    lootId: string
    lootName: string
    parentItemStatus: string
    parentStoreItemId: number
    rarity: string
    redeemableStatus: string
    refId: string
    rentalGames: number
    rentalSeconds: number
    shadowPath: string
    splashPath: string
    storeItemId: number
    tags: string
    tilePath: string
    type: string
    upgradeEssenceName: string
    upgradeEssenceValue: number
    upgradeLootName: string
    value: number
  }
  
export interface LolLootV1PlayerLootByLootIdContextMenu {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum10[]
  }
  
export interface Daum10 {
    actionType: string
    enabled: boolean
    essenceQuantity: number
    essenceType: string
    name: string
    recipeContextMenuAction: string
    recipeDescription: string
    requiredOthers: string
    requiredOthersCount: number
    requiredOthersName: string
    requiredTokens: string
  }
  
export interface LolLootV1RecipesInitialItemByLootId {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum11[]
  }
  
export interface Daum11 {
    contextMenuText: string
    crafterName: string
    description: string
    displayCategories: string
    imagePath: string
    introVideoPath: string
    loopVideoPath: string
    lootMilestoneIds: any[]
    metadata: Metadata
    outputs: any[]
    outroVideoPath: string
    recipeName: string
    requirementText: string
    slots: Slot[]
    type: string
  }
  
export interface Metadata {
    bonusDescriptions: any[]
    guaranteedDescriptions: any[]
    tooltipsDisabled: boolean
  }
  
export interface Slot {
    lootIds: string[]
    quantity: number
    slotNumber: number
    tags: string
  }
  
export interface LolInventoryV1WalletByCurrencyType {
    endpoint: string
    eventName: string
    eventType: string
    data: Data30
  }
  
export interface Data30 {
    lol_orange_essence: number
  }
  
export interface LolStoreV1Wallet {
    endpoint: string
    eventName: string
    eventType: string
    data: Data31
  }
  
export interface Data31 {
    ip: number
    rp: number
  }
  
export interface LolInventoryV2InventoryByInventoryType {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum12[]
  }
  
export interface Daum12 {
    expirationDate: string
    f2p: boolean
    inventoryType: string
    itemId: number
    loyalty: boolean
    loyaltySources: any[]
    owned: boolean
    ownershipType: string
    payload?: Payload
    purchaseDate: string
    quantity: number
    rental: boolean
    uuid: string
  }
  
export interface Payload {
    isVintage: boolean
  }
  
export interface LolLoyaltyV1StatusNotification {
    endpoint: string
    eventName: string
    eventType: string
    data: Data32
  }
  
export interface Data32 {
    reloadInventory: boolean
    rewards: Rewards
    status: string
  }
  
export interface Rewards {
    championIds: any[]
    freeRewardedChampionsCount: number
    freeRewardedSkinsCount: number
    global: Global
    ipBoost: number
    loyaltySources: LoyaltySources
    loyaltyTFTCompanionCount: number
    loyaltyTFTDamageSkinCount: number
    loyaltyTFTMapSkinCount: number
    skinIds: any[]
    xpBoost: number
  }
  
export interface Global {
    allChampions: boolean
  }
  
export interface LoyaltySources {}
  
export interface LolInventoryV1NotificationsByInventoryType {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum13[]
  }
  
export interface Daum13 {
    acknowledged: boolean
    id: number
    inventoryType: string
    itemId: number
    type: string
  }
  
export interface LolLobbyV2LobbyCustomAvailableBots {
    endpoint: string
    eventName: string
    eventType: string
    data: any[]
  }
  
export interface LolLobbyV2LobbyCustomBotsEnabled {
    endpoint: string
    eventName: string
    eventType: string
    data: boolean
  }
  
export interface LolChampSelectV1AllGridChampions {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum14[]
  }
  
export interface Daum14 {
    disabled: boolean
    freeToPlay: boolean
    freeToPlayForQueue: boolean
    id: number
    loyaltyReward: boolean
    masteryChestGranted: boolean
    masteryLevel: number
    masteryPoints: number
    name: string
    owned: boolean
    positionsFavorited: string[]
    rented: boolean
    roles: string[]
    selectionStatus: SelectionStatus
    squarePortraitPath: string
    xboxGPReward: boolean
  }
  
export interface SelectionStatus {
    banIntented: boolean
    banIntentedByMe: boolean
    isBanned: boolean
    pickIntented: boolean
    pickIntentedByMe: boolean
    pickIntentedPosition: string
    pickedByOtherOrBanned: boolean
    selectedByMe: boolean
  }
  
export interface LolChampionsV1InventoriesBySummonerIdChampionsMinimal {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum15[]
  }
  
export interface Daum15 {
    active: boolean
    alias: string
    banVoPath: string
    baseLoadScreenPath: string
    baseSplashPath: string
    botEnabled: boolean
    chooseVoPath: string
    disabledQueues: any[]
    freeToPlay: boolean
    id: number
    name: string
    ownership: Ownership
    purchased: number
    rankedPlayEnabled: boolean
    roles: string[]
    squarePortraitPath: string
    stingerSfxPath: string
    title: string
  }
  
export interface Ownership {
    loyaltyReward: boolean
    owned: boolean
    rental: Rental
    xboxGPReward: boolean
  }
  
export interface Rental {
    endDate: number
    purchaseDate: number
    rented: boolean
    winCountRemaining: number
  }
  
export interface LolChampionsV1InventoriesBySummonerIdChampionsPlayableCount {
    endpoint: string
    eventName: string
    eventType: string
    data: Data33
  }
  
export interface Data33 {
    championsFreeToPlay: number
    championsLoyaltyReward: number
    championsOwned: number
    championsRented: number
    championsXboxGPReward: number
  }
  
export interface LolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkinsByChampionSkinId {
    endpoint: string
    eventName: string
    eventType: string
    data: Data34
  }
  
export interface Data34 {
    championId: number
    chromaPath: any
    chromas: any[]
    collectionSplashVideoPath: any
    disabled: boolean
    emblems: any[]
    featuresText: any
    id: number
    isBase: boolean
    lastSelected: boolean
    loadScreenPath: string
    name: string
    ownership: Ownership2
    questSkinInfo: QuestSkinInfo
    rarityGemPath: string
    skinType: string
    splashPath: string
    splashVideoPath: any
    stillObtainable: boolean
    tilePath: string
    uncenteredSplashPath: string
  }
  
export interface Ownership2 {
    loyaltyReward: boolean
    owned: boolean
    rental: Rental2
    xboxGPReward: boolean
  }
  
export interface Rental2 {
    endDate: number
    purchaseDate: number
    rented: boolean
    winCountRemaining: number
  }
  
export interface QuestSkinInfo {
    collectionCardPath: string
    collectionDescription: string
    descriptionInfo: any[]
    name: string
    splashPath: string
    tiers: any[]
    tilePath: string
    uncenteredSplashPath: string
  }
  
export interface LolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkins {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum16[]
  }
  
export interface Daum16 {
    championId: number
    chromaPath?: string
    chromas: Chroma[]
    collectionSplashVideoPath: any
    disabled: boolean
    emblems: any[]
    featuresText: any
    id: number
    isBase: boolean
    lastSelected: boolean
    loadScreenPath: string
    name: string
    ownership: Ownership4
    questSkinInfo: QuestSkinInfo2
    rarityGemPath: string
    skinType: string
    splashPath: string
    splashVideoPath: any
    stillObtainable: boolean
    tilePath: string
    uncenteredSplashPath: string
  }
  
export interface Chroma {
    championId: number
    chromaPath: string
    colors: string[]
    disabled: boolean
    id: number
    lastSelected: boolean
    name: string
    ownership: Ownership3
    stillObtainable: boolean
  }
  
export interface Ownership3 {
    loyaltyReward: boolean
    owned: boolean
    rental: Rental3
    xboxGPReward: boolean
  }
  
export interface Rental3 {
    endDate: number
    purchaseDate: number
    rented: boolean
    winCountRemaining: number
  }
  
export interface Ownership4 {
    loyaltyReward: boolean
    owned: boolean
    rental: Rental4
    xboxGPReward: boolean
  }
  
export interface Rental4 {
    endDate: number
    purchaseDate: number
    rented: boolean
    winCountRemaining: number
  }
  
export interface QuestSkinInfo2 {
    collectionCardPath: string
    collectionDescription: string
    descriptionInfo: any[]
    name: string
    splashPath: string
    tiers: any[]
    tilePath: string
    uncenteredSplashPath: string
  }
  
export interface RiotMessagingServiceV1MessageByAbyBbyCbyD {
    endpoint: string
    eventName: string
    eventType: string
    data: Data35
  }
  
export interface Data35 {
    ackRequired: boolean
    id: string
    payload: string
    resource: string
    service: string
    timestamp: number
    version: string
  }
  
export interface LolLeagueSessionV1LeagueSessionToken {
    endpoint: string
    eventName: string
    eventType: string
    data: string
  }
  
export interface LolLobbyV2CommsMembers {
    endpoint: string
    eventName: string
    eventType: string
    data: Data36
  }
  
export interface Data36 {
    commsEnabled: boolean
    partyId: string
    players: Players
  }
  
export interface Players {
    "4e2f4ead-13ad-568a-b625-3236515bd142": N4e2f4ead13ad568aB6253236515bd142
  }
  
export interface N4e2f4ead13ad568aB6253236515bd142 {
    displayName: string
    partyId: string
    puuid: string
    role: string
    summonerId: number
  }
  
export interface LolPremadeVoiceV1Availability {
    endpoint: string
    eventName: string
    eventType: string
    data: Data37
  }
  
export interface Data37 {
    connectedToVoiceServer: boolean
    disabledAfterLogin: boolean
    enabled: boolean
    showDisconnectedState: boolean
    showUI: boolean
    voiceChannelAvailable: boolean
  }
  
export interface LolClashV1LftTeamRequests {
    endpoint: string
    eventName: string
    eventType: string
    data: any[]
  }
  
export interface LolCosmeticsV1InventoriesBySetNameCompanions {
    endpoint: string
    eventName: string
    eventType: string
    data: Data38
  }
  
export interface Data38 {
    defaultItemId: number
    groups: Group[]
    selectedLoadoutItem: SelectedLoadoutItem
  }
  
export interface Group {
    groupId: number
    groupName: string
    items: Item[]
    numAvailable: number
    numOwned: number
  }
  
export interface Item {
    color: string
    contentId: string
    description: string
    f2p: boolean
    groupId: number
    isRecentItem: boolean
    itemId: number
    level: number
    loadoutsIcon: string
    loyalty: boolean
    name: string
    offerData: any
    owned: boolean
    purchaseDate: string
    rarityValue: number
    selected: boolean
    species: string
    starShardsPrice: StarShardsPrice
    upgrades: Upgrade[]
  }
  
export interface StarShardsPrice {
    offerId: string
    price: number
  }
  
export interface Upgrade {
    color: string
    contentId: string
    description: string
    f2p: boolean
    groupId: number
    isRecentItem: boolean
    itemId: number
    level: number
    loadoutsIcon: string
    loyalty: boolean
    name: string
    offerData?: OfferData
    owned: boolean
    purchaseDate: string
    rarityValue: number
    selected: boolean
    species: string
    starShardsPrice: StarShardsPrice2
    upgrades: any[]
  }
  
export interface OfferData {
    active: boolean
    createdDate: string
    id: string
    label: string
    merchantId: string
    payload: Payload2[]
    productId: string
    startDate: string
    typeId: string
  }
  
export interface Payload2 {
    fulfillmentTypeId: string
    inventoryTypeUUID: string
    itemInstanceId: string
    itemPriceMap: ItemPriceMap
  }
  
export interface ItemPriceMap {
    "33fe7291-2082-5b1d-be4a-8848d8a1eef8": number
  }
  
export interface StarShardsPrice2 {
    offerId: string
    price: number
  }
  
export interface SelectedLoadoutItem {
    color: string
    contentId: string
    description: string
    f2p: boolean
    groupId: number
    isRecentItem: boolean
    itemId: number
    level: number
    loadoutsIcon: string
    loyalty: boolean
    name: string
    offerData: any
    owned: boolean
    purchaseDate: string
    rarityValue: number
    selected: boolean
    species: string
    starShardsPrice: StarShardsPrice3
    upgrades: any[]
  }
  
export interface StarShardsPrice3 {
    offerId: string
    price: number
  }
  
export interface LolLobbyV1LobbyCustomAvailableBots {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum17[]
  }
  
export interface Daum17 {
    active: boolean
    botDifficulties: string[]
    id: number
    name: string
  }
  
export interface LolLobbyV1LobbyCountdown {
    endpoint: string
    eventName: string
    eventType: string
    data: number
  }
  
export interface LolLobbyV1LobbyInvitations {
    endpoint: string
    eventName: string
    eventType: string
    data: any[]
  }
  
export interface LolChampSelectLegacyV1Session {
    endpoint: string
    eventName: string
    eventType: string
    data: Data40
  }
  
export interface LolChampSelectLegacyV1PickableChampionIds {
    endpoint: string
    eventName: string
    eventType: string
    data: any
  }
  
export interface LolChampSelectLegacyV1BannableChampionIds {
    endpoint: string
    eventName: string
    eventType: string
    data: any
  }
  
export interface LolChampSelectLegacyV1DisabledChampionIds {
    endpoint: string
    eventName: string
    eventType: string
    data: any
  }
  
export interface LolChampSelectLegacyV1PickableSkinIds {
    endpoint: string
    eventName: string
    eventType: string
    data: any
  }
  
export interface LolChampSelectLegacyV1TeamBoost {
    endpoint: string
    eventName: string
    eventType: string
    data: any
  }
  
export interface LolChampSelectLegacyV1CurrentChampion {
    endpoint: string
    eventName: string
    eventType: string
    data: any
  }
  
export interface LolChampSelectLegacyV1ImplementationActive {
    endpoint: string
    eventName: string
    eventType: string
    data: boolean
  }
  
export interface LolChampSelectV1SfxNotifications {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum18[]
  }
  
export interface Daum18 {
    delayMillis: number
    eventType: string
    path: string
  }
  
export interface LolChampSelectV1SummonersBySlotId {
    endpoint: string
    eventName: string
    eventType: string
    data: Data39
  }
  
export interface Data39 {
    actingBackgroundAnimationState: string
    activeActionType: string
    areSummonerActionsComplete: boolean
    assignedPosition: string
    banIntentSquarePortratPath: string
    cellId: number
    championIconStyle: string
    championId: number
    championName: string
    currentChampionVotePercentInteger: number
    entitledFeatureType: string
    isActingNow: boolean
    isDonePicking: boolean
    isOnPlayersTeam: boolean
    isPickIntenting: boolean
    isPlaceholder: boolean
    isSelf: boolean
    nameVisibilityType: string
    obfuscatedPuuid: string
    obfuscatedSummonerId: number
    pickSnipedClass: string
    puuid: string
    shouldShowActingBar: boolean
    shouldShowBanIntentIcon: boolean
    shouldShowExpanded: boolean
    shouldShowRingAnimations: boolean
    shouldShowSelectedSkin: boolean
    shouldShowSpells: boolean
    showMuted: boolean
    showSwaps: boolean
    showTrades: boolean
    skinId: number
    skinSplashPath: string
    slotId: number
    spell1IconPath: string
    spell2IconPath: string
    statusMessageKey: string
    summonerId: number
    swapId: number
    tradeId: number
  }
  
export interface LolChampSelectV1Session {
    endpoint: string
    eventName: string
    eventType: string
    data: Data40
  }
  
export interface Data40 {
    actions: Action[][]
    allowBattleBoost: boolean
    allowDuplicatePicks: boolean
    allowLockedEvents: boolean
    allowRerolling: boolean
    allowSkinSelection: boolean
    bans: Bans
    benchChampions: any[]
    benchEnabled: boolean
    boostableSkinCount: number
    chatDetails: ChatDetails
    counter: number
    entitledFeatureState: EntitledFeatureState
    gameId: number
    hasSimultaneousBans: boolean
    hasSimultaneousPicks: boolean
    isCustomGame: boolean
    isSpectating: boolean
    localPlayerCellId: number
    lockedEventIndex: number
    myTeam: MyTeam[]
    pickOrderSwaps: any[]
    recoveryCounter: number
    rerollsRemaining: number
    skipChampionSelect: boolean
    theirTeam: TheirTeam[]
    timer: Timer
    trades: any[]
  }
  
export interface Action {
    actorCellId: number
    championId: number
    completed: boolean
    id: number
    isAllyAction: boolean
    isInProgress: boolean
    pickTurn: number
    type: string
  }
  
export interface Bans {
    myTeamBans: any[]
    numBans: number
    theirTeamBans: any[]
  }
  
export interface ChatDetails {
    mucJwtDto: MucJwtDto2
    multiUserChatId: string
    multiUserChatJWT: string
    multiUserChatPassword: string
  }
  
export interface MucJwtDto2 {
    channelClaim: string
    jwt: string
  }
  
export interface EntitledFeatureState {
    additionalRerolls: number
    unlockedSkinIds: any[]
  }
export interface MyTeam {
    assignedPosition: string
    cellId: number
    championId: number
    championPickIntent: number
    entitledFeatureType: string
    nameVisibilityType: string
    obfuscatedPuuid: string
    obfuscatedSummonerId: number
    puuid: string
    selectedSkinId: number
    spell1Id: number
    spell2Id: number
    summonerId: number
    team: number
    wardSkinId: number
}

export interface TheirTeam {
    assignedPosition: string
    cellId: number
    championId: number
    championPickIntent: number
    entitledFeatureType: string
    nameVisibilityType: string
    obfuscatedPuuid: string
    obfuscatedSummonerId: number
    puuid: string
    selectedSkinId: number
    spell1Id: number
    spell2Id: number
    summonerId: number
    team: number
    wardSkinId: number
  }
  
export interface Timer {
    adjustedTimeLeftInPhase: number
    internalNowInEpochMs: number
    isInfinite: boolean
    phase: string
    totalTimeInPhase: number
  }
  
export interface LolChampSelectV1PinDropNotification {
    endpoint: string
    eventName: string
    eventType: string
    data: Data41
  }
  
export interface Data41 {
    mapSide: string
    pinDropSummoners: PinDropSummoner[]
  }
  
export interface PinDropSummoner {
    isLocalSummoner: boolean
    isPlaceholder: boolean
    lane: string
    lanePosition: number
    position: string
    slotId: number
  }
  
export interface LolChampSelectV1SkinCarouselSkins {
    endpoint: string
    eventName: string
    eventType: string
    data: any[]
  }
  
export interface LolChampSelectV1PickableChampionIds {
    endpoint: string
    eventName: string
    eventType: string
    data: number[]
  }
  
export interface LolChampSelectV1BannableChampionIds {
    endpoint: string
    eventName: string
    eventType: string
    data: number[]
  }
  
export interface LolChampSelectV1DisabledChampionIds {
    endpoint: string
    eventName: string
    eventType: string
    data: any[]
  }
  
export interface LolReplaysV1Configuration {
    endpoint: string
    eventName: string
    eventType: string
    data: Data42
  }
  
export interface Data42 {
    gameVersion: string
    isInTournament: boolean
    isLoggedIn: boolean
    isPatching: boolean
    isPlayingGame: boolean
    isPlayingReplay: boolean
    isReplaysEnabled: boolean
    isReplaysForEndOfGameEnabled: boolean
    isReplaysForMatchHistoryEnabled: boolean
    minServerVersion: string
    minutesUntilReplayConsideredLost: number
  }
  
export interface LolHonorV2V1LateRecognition {
    endpoint: string
    eventName: string
    eventType: string
    data: any[]
  }
  
export interface LolHonorV2V1MutualHonor {
    endpoint: string
    eventName: string
    eventType: string
    data: Data43
  }
  
export interface Data43 {
    gameId: number
    summoners: any[]
  }
  
export interface LolPerksV1Pages {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum19[]
  }
  
export interface Daum19 {
    autoModifiedSelections: any[]
    current: boolean
    id: number
    isActive: boolean
    isDeletable: boolean
    isEditable: boolean
    isRecommendationOverride: boolean
    isTemporary: boolean
    isValid: boolean
    lastModified: number
    name: string
    order: number
    primaryStyleId: number
    recommendationChampionId: number
    recommendationIndex: number
    runeRecommendationId: string
    selectedPerkIds: number[]
    subStyleId: number
  }
  
export interface LolPerksV1Inventory {
    endpoint: string
    eventName: string
    eventType: string
    data: Data44
  }
  
export interface Data44 {
    canAddCustomPage: boolean
    customPageCount: number
    isCustomPageCreationUnlocked: boolean
    ownedPageCount: number
  }
  
export interface LolChatV1ConversationsById {
    endpoint: string
    eventName: string
    eventType: string
    data: Data45
  }
  
export interface Data45 {
    gameName: string
    gameTag: string
    id: string
    inviterId: string
    isMuted: boolean
    lastMessage: any
    name: string
    password: string
    pid: string
    targetRegion: string
    type: string
    unreadMessageCount: number
  }
  
export interface LolChatV1ConversationsByIdParticipants {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum20[]
  }
  
export interface Daum20 {
    availability: string
    gameName: string
    gameTag: string
    icon: number
    id: string
    lastSeenOnlineTimestamp: any
    lol: Lol5
    name: string
    obfuscatedSummonerId: number
    patchline: string
    pid: string
    platformId: string
    product: string
    productName: string
    puuid: string
    statusMessage: string
    summary: string
    summonerId: number
    time: number
  }
  
export interface Lol5 {
    bannerIdSelected: string
    challengeCrystalLevel: string
    challengePoints: string
    challengeTitle: string
    challengeTitleSelected: string
    challengeTokensSelected: string
    championId: string
    companionId: string
    damageSkinId: string
    gameId: string
    gameMode: string
    gameQueueType: string
    gameStatus: string
    iconOverride: string
    isObservable: string
    level: string
    mapId: string
    mapSkinId: string
    masteryScore: string
    profileIcon: string
    pty: string
    puuid: string
    queueId: string
    rankedLeagueDivision: string
    rankedLeagueQueue: string
    rankedLeagueTier: string
    rankedLosses: string
    rankedSplitRewardLevel: string
    rankedWins: string
    regalia: string
    skinVariant: string
    skinname: string
    timeStamp: string
  }
  
export interface LolChatV1ErrorsById {
    endpoint: string
    eventName: string
    eventType: string
    data: Data46
  }
  
export interface Data46 {
    code: number
    from: string
    id: number
    message: string
    text: string
  }
  
export interface LolChampSelectV1GridChampionsByChampionId {
    endpoint: string
    eventName: string
    eventType: string
    data: Data47
  }
  
export interface Data47 {
    disabled: boolean
    freeToPlay: boolean
    freeToPlayForQueue: boolean
    id: number
    loyaltyReward: boolean
    masteryChestGranted: boolean
    masteryLevel: number
    masteryPoints: number
    name: string
    owned: boolean
    positionsFavorited: any[]
    rented: boolean
    roles: string[]
    selectionStatus: SelectionStatus2
    squarePortraitPath: string
    xboxGPReward: boolean
  }
  
export interface SelectionStatus2 {
    banIntented: boolean
    banIntentedByMe: boolean
    isBanned: boolean
    pickIntented: boolean
    pickIntentedByMe: boolean
    pickIntentedPosition: string
    pickedByOtherOrBanned: boolean
    selectedByMe: boolean
  }
  
export interface LolPerksV1Currentpage {
    endpoint: string
    eventName: string
    eventType: string
    data: Data48
  }
  
export interface Data48 {
    autoModifiedSelections: any[]
    current: boolean
    id: number
    isActive: boolean
    isDeletable: boolean
    isEditable: boolean
    isRecommendationOverride: boolean
    isTemporary: boolean
    isValid: boolean
    lastModified: number
    name: string
    order: number
    primaryStyleId: number
    recommendationChampionId: number
    recommendationIndex: number
    runeRecommendationId: string
    selectedPerkIds: number[]
    subStyleId: number
  }
  
export interface LolPerksV1PagesById {
    endpoint: string
    eventName: string
    eventType: string
    data: Data49
  }
  
export interface Data49 {
    autoModifiedSelections: any[]
    current: boolean
    id: number
    isActive: boolean
    isDeletable: boolean
    isEditable: boolean
    isRecommendationOverride: boolean
    isTemporary: boolean
    isValid: boolean
    lastModified: number
    name: string
    order: number
    primaryStyleId: number
    recommendationChampionId: number
    recommendationIndex: number
    runeRecommendationId: string
    selectedPerkIds: number[]
    subStyleId: number
  }
  
export interface LolPerksV1Settings {
    endpoint: string
    eventName: string
    eventType: string
    data: Data50
  }
  
export interface Data50 {
    gameplayPatchVersionSeen: string
    gameplayUpdatedPerksSeen: any[]
    gridModeEnabled: boolean
    showLongDescriptions: boolean
    showPresetPages: boolean
  }
  
export interface LolChampSelectV1CurrentChampion {
    endpoint: string
    eventName: string
    eventType: string
    data: number
  }
  
export interface LolChampSelectV1SkinSelectorInfo {
    endpoint: string
    eventName: string
    eventType: string
    data: Data51
  }
  
export interface Data51 {
    championName: string
    isSkinGrantedFromBoost: boolean
    selectedChampionId: number
    selectedSkinId: number
    showSkinSelector: boolean
    skinSelectionDisabled: boolean
  }
  
export interface LolLoadoutsV4LoadoutsScopeByScopeByScopeItemId {
    endpoint: string
    eventName: string
    eventType: string
    data: any[]
  }
  
export interface LolSimpleDialogMessagesV1Messages {
    endpoint: string
    eventName: string
    eventType: string
    data: any[]
  }
  
export interface LolLootV1LootGrants {
    endpoint: string
    eventName: string
    eventType: string
    data: Daum21[]
  }
  
export interface Daum21 {
    accountId: number
    championId: number
    gameId: number
    id: number
    lootName: string
    messageKey: string
    msgId: string
    playerGrade: string
    playerId: number
  }
  
export interface LolChampSelectV1TeamBoost {
    endpoint: string
    eventName: string
    eventType: string
    data: Data52
  }
  
export interface Data52 {
    availableSkins: any[]
    ipReward: number
    ipRewardForPurchaser: number
    price: number
    skinUnlockMode: string
    summonerId: number
    unlocked: boolean
  }
  
export interface LolHonorV2V1LevelChange {
    endpoint: string
    eventName: string
    eventType: string
    data: any
  }
  
export interface LolLootV1RecipesConfiguration {
    endpoint: string
    eventName: string
    eventType: string
    data: Data53
  }
  
export interface Data53 {
    alwaysShowLootIds: string[]
    enabled: boolean
    lootItemsUsingBreakoutRecipeMenu: string[]
  }
  
export interface LolLootV1CurrencyConfiguration {
    endpoint: string
    eventName: string
    eventType: string
    data: Data54
  }
  
export interface Data54 {
    currenciesUsingCapWallets: string[]
  }
  
export interface LolPerksV1ShowAutoModifiedPagesNotification {
    endpoint: string
    eventName: string
    eventType: string
    data: boolean
  }
  
export interface LolItemSetsV1ItemSetsBySummonerIdSets {
    endpoint: string
    eventName: string
    eventType: string
    data: Data55
  }
  
export interface Data55 {
    accountId: number
    itemSets: ItemSet[]
    timestamp: number
  }
  
export interface ItemSet {
    associatedChampions: number[]
    associatedMaps: number[]
    blocks: Block[]
    map: string
    mode: string
    preferredItemSlots: any[]
    sortrank: number
    startedFrom: string
    title: string
    type: string
    uid: string
  }
  
export interface Block {
    hideIfSummonerSpell: string
    items: Item2[]
    showIfSummonerSpell: string
    type: string
  }
  
export interface Item2 {
    count: number
    id: string
  }
  
export interface LolClashV1RosterByRosterId {
    endpoint: string
    eventName: string
    eventType: string
    data: Data56
  }
  
export interface Data56 {
    availableLogos: any[]
    captainSummonerId: number
    currentBracketWins: number
    highTierVariance: boolean
    iconColorId: number
    iconId: number
    id: string
    invitationId: string
    isActiveInCurrentPhase: boolean
    isClashBanned: boolean
    isCurrentBracketComplete: boolean
    isEliminated: boolean
    isRegistered: boolean
    lft: boolean
    losses: number
    members: Member2[]
    name: string
    numCompletedPeriods: number
    phaseInfos: any[]
    points: number
    shortName: string
    suggestedInvites: any[]
    tier: number
    tournamentId: number
    wins: number
    withdraw: any
  }
  
export interface Member2 {
    buyinType: string
    currentBuyin: number
    incomingOffers: any[]
    inviteType: string
    inviterId: number
    position: string
    previousBuyin: number
    replacedSummonerId: number
    state: string
    summonerId: number
    tier: number
  }
  
export interface LolClashV1Player {
    endpoint: string
    eventName: string
    eventType: string
    data: Data57
  }
  
export interface Data57 {
    isClashBanned: boolean
    lft: boolean
    primaryPos: string
    secondaryPos: string
    tickets: Tickets
    tier: number
  }
  
export interface Tickets {
    BASIC: number
    PREMIUM: number
  }
  
export interface LolPremadeVoiceV1Settings {
    data: Data58
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data58 {
    autoJoin: boolean
    currentCaptureDeviceHandle: string
    inputMode: string
    localMicMuted: boolean
    loopbackEnabled: boolean
    micLevel: number
    muteOnConnect: boolean
    pttActive: boolean
    pttKey: string
    vadActive: boolean
    vadHangoverTime: number
    vadSensitivity: number
  }
  
export interface LolChatV1ConversationsByIdMessagesByMessageId {
    data: Data59
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data59 {
    body: string
    fromId: string
    fromObfuscatedSummonerId: number
    fromPid: string
    fromSummonerId: number
    id: string
    isHistorical: boolean
    timestamp: string
    type: string
  }
  
export interface LolReplaysV1MetadataByGameId {
    data: Data60
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data60 {
    downloadProgress: number
    gameId: number
    state: string
  }
  
export interface LolLobbyV1CustomGames {
    data: Daum22[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Daum22 {
    filledPlayerSlots: number
    filledSpectatorSlots: number
    gameType: string
    hasPassword: boolean
    id: number
    lobbyName: string
    mapId: number
    maxPlayerSlots: number
    maxSpectatorSlots: number
    ownerSummonerName: string
    partyId: string
    passbackUrl: string
    spectatorPolicy: string
  }
  
export interface LolSuggestedPlayersV1SuggestedPlayers {
    data: Daum23[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Daum23 {
    commonFriendId: number
    commonFriendName: string
    gameId: number
    reason: string
    summonerId: number
    summonerName: string
  }
  
export interface LolRegaliaV2SummonersBySummonerIdRegaliaAsync {
    data: Data61
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data61 {
    md5: string
  }
  
export interface LolLobbyV1LobbyMembers {
    data: Daum24[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Daum24 {
    autoFillEligible: boolean
    autoFillProtectedForPromos: boolean
    autoFillProtectedForSoloing: boolean
    autoFillProtectedForStreaking: boolean
    botChampionId: number
    botDifficulty: string
    canInviteOthers: boolean
    excludedPositionPreference: any
    id: number
    isBot: boolean
    isOwner: boolean
    isSpectator: boolean
    positionPreferences: PositionPreferences
    showPositionExcluder: boolean
    summonerInternalName: string
  }
  
export interface PositionPreferences {
    firstPreference: string
    secondPreference: string
  }
  
export interface LolChatV1BlockedPlayers {
    data: Daum25[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Daum25 {
    gameName: string
    gameTag: string
    icon: number
    id: string
    name: string
    pid: string
    puuid: string
    summonerId: number
  }
  
export interface LolChatV1FriendRequestsById {
    data: any
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolGameClientChatV1BuddiesByName {
    data: string
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolChatV1FriendsById {
    data: Data62
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data62 {
    availability: string
    displayGroupId: number
    displayGroupName: string
    gameName: string
    gameTag: string
    groupId: number
    groupName: string
    icon: number
    id: string
    isP2PConversationMuted: boolean
    lastSeenOnlineTimestamp: any
    lol: Lol6
    name: string
    note: string
    patchline: string
    pid: string
    platformId: string
    product: string
    productName: string
    puuid: string
    statusMessage: string
    summary: string
    summonerId: number
    time: number
  }
  
export interface Lol6 {
    bannerIdSelected: string
    challengeCrystalLevel: string
    challengePoints: string
    challengeTitle: string
    challengeTitleSelected: string
    challengeTokensSelected: string
    championId: string
    companionId: string
    damageSkinId: string
    gameId: string
    gameMode: string
    gameQueueType: string
    gameStatus: string
    iconOverride: string
    isObservable: string
    level: string
    mapId: string
    mapSkinId: string
    masteryScore: string
    profileIcon: string
    pty: string
    puuid: string
    queueId: string
    rankedLeagueDivision: string
    rankedLeagueQueue: string
    rankedLeagueTier: string
    rankedLosses: string
    rankedPrevSeasonDivision: string
    rankedPrevSeasonTier: string
    rankedSplitRewardLevel: string
    rankedWins: string
    regalia: string
    skinVariant: string
    skinname: string
    timeStamp: string
  }
  
export interface LolChatV1FriendCounts {
    data: Data63
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data63 {
    numFriends: number
    numFriendsAvailable: number
    numFriendsAway: number
    numFriendsInChampSelect: number
    numFriendsInGame: number
    numFriendsInQueue: number
    numFriendsMobile: number
    numFriendsOnline: number
  }
  
export interface LolChatV1FriendGroupsById {
    data: Data64
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data64 {
    collapsed: boolean
    id: number
    isLocalized: boolean
    isMetaGroup: boolean
    name: string
    priority: number
  }
  
export interface LolChatV1Settings {
    data: Data65
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data65 {
    bounceDockIconEnabled: boolean
    "chat-status-message": string
    chatFilterDisabled: boolean
    chatGBG: boolean
    chatGroupMobile: boolean
    chatGroupOffline: boolean
    chatWindow: ChatWindow
    chatWindowDockedHeight: number
    "closed-conversations": ClosedConversations
    friendRequestToastsDisabled: boolean
    "hidden-conversations": HiddenConversations
    linkClickWarningEnabled: boolean
    messageNotificationsEnabled: boolean
    moreUnreadsEnabled: boolean
    "muted-conversations": MutedConversations
    recentlyPlayedFirstOpen: boolean
    recentlyPlayedOpen: boolean
    "roster-group-collapsed": RosterGroupCollapsed
    showWhenTypingEnabled: boolean
    sortBy: string
    usePlayerPreferences: boolean
  }
  
export interface ChatWindow {
    detached: boolean
    height: number
    left: number
    top: number
    width: number
  }
  
export interface ClosedConversations {
    "0a946e75-bc5a-5361-8622-4b9bc297e6d5@eu1.pvp.net": number
    "97266787-9be2-579f-bc23-939f5fea8c39@ru1.pvp.net": number
    "af057a2c-b8a2-5d67-b2e2-8a7da564277d@eu1.pvp.net": number
  }
  
export interface HiddenConversations {}
  
export interface MutedConversations {}
  
export interface RosterGroupCollapsed {
    "**Default": boolean
  }
  
export interface LolClashV1PlayerRoster {
    data: Data66
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data66 {
    availableLogos: any[]
    captainSummonerId: number
    currentBracketWins: number
    highTierVariance: boolean
    iconColorId: number
    iconId: number
    id: string
    invitationId: string
    isActiveInCurrentPhase: boolean
    isClashBanned: boolean
    isCurrentBracketComplete: boolean
    isEliminated: boolean
    isRegistered: boolean
    lft: boolean
    losses: number
    members: Member3[]
    name: string
    numCompletedPeriods: number
    phaseInfos: any[]
    points: number
    shortName: string
    suggestedInvites: any[]
    tier: number
    tournamentId: number
    wins: number
    withdraw: any
  }
  
export interface Member3 {
    buyinType: string
    currentBuyin: number
    incomingOffers: any[]
    inviteType: string
    inviterId: number
    position: string
    previousBuyin: number
    replacedSummonerId: number
    state: string
    summonerId: number
    tier: number
  }
  
export interface LolAccountVerificationV1IsVerified {
    data: Data67
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data67 {
    message: string
    status: number
    success: boolean
  }
  
export interface LolChatV1Session {
    data: Data68
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data68 {
    sessionExpire: number
    sessionState: string
  }
  
export interface LolChatV1BlockedPlayersById {
    data: any
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolChatV1Friends {
    data: Daum26[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Daum26 {
    availability: string
    displayGroupId: number
    displayGroupName: string
    gameName: string
    gameTag: string
    groupId: number
    groupName: string
    icon: number
    id: string
    isP2PConversationMuted: boolean
    lastSeenOnlineTimestamp: any
    lol: Lol7
    name: string
    note: string
    patchline: string
    pid: string
    platformId: string
    product: string
    productName: string
    puuid: string
    statusMessage: string
    summary: string
    summonerId: number
    time: number
  }
  
export interface Lol7 {}
  
export interface LolStoreV1StoreReady {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolSummonerV1CurrentSummonerAccountAndSummonerIds {
    data: any
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolClashV1Ready {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolLoginV1Session {
    data: Data69
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data69 {
    accountId: number
    connected: boolean
    error: any
    idToken: string
    isInLoginQueue: boolean
    isNewPlayer: boolean
    puuid: string
    state: string
    summonerId: number
    userAuthToken: string
    username: string
  }
  
export interface ProcessControlV1Process {
    data: Data70
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data70 {
    status: string
  }
  
export interface PaymentsV1PmcStartUrl {
    data: any
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolRsoAuthV1Authorization {
    data: any
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolLoadoutsV1LoadoutsReady {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolRsoAuthV1AuthorizationAccessToken {
    data: any
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface EntitlementsV1Token {
    data: any
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolRsoAuthV1AuthorizationIdToken {
    data: any
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolEventShopV1EventShopInfo {
    data: Data71
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data71 {
    currentTokenBalance: any
    eventIcon: string
    eventId: string
    eventName: string
    eventPassBundles: any[]
    eventTokenImage: string
    isEventActive: boolean
    isPassPurchased: boolean
    lockedTokenCount: any
    showPip: boolean
    tokenBundles: any[]
    unclaimedRewardCount: any
  }
  
export interface LolEventShopV1EventShopTokenUpsell {
    data: any[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolEventShopV1EventNavigationButtonData {
    data: Data72
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data72 {
    activeEventId: string
    iconPath: string
    showPip: boolean
  }
  
export interface LolLoadoutsV4LoadoutsById {
    data: any
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolLoginV1Wallet {
    data: any
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolLoginV1LoginDataPacket {
    data: any
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolLoginV1LoginPlatformCredentials {
    data: any
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolLobbyV2EligibilityInitialConfigurationComplete {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolPlatformConfigV1NamespacesByNsByKey {
    data: any
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolPlatformConfigV1NamespacesByNs {
    data: any
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolPlatformConfigV1Namespaces {
    data: Data73
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data73 {
    AccountVerification: AccountVerification
    Banners: Banners
    BetterRewards: BetterRewards
    BotConfigurations: BotConfigurations
    CareerStats: CareerStats
    Challenges: Challenges
    ChampionMasteryConfig: ChampionMasteryConfig
    ChampionSelect: ChampionSelect
    ChampionTradeService: ChampionTradeService
    Chat: Chat
    ChatDomain: ChatDomain
    Chroma: Chroma2
    ClashConfig: ClashConfig
    ClientSystemStates: any
    Clubs: Clubs
    Companions: Companions
    ContextualEducation: ContextualEducation
    ContextualEducationURLs: ContextualEducationUrls
    CustomGame: CustomGame
    DisabledChampion: DisabledChampion
    DisabledChampionSkins: DisabledChampionSkins
    DisabledChampions: DisabledChampions
    DockedPrompt: DockedPrompt
    ESports: Esports
    Emotes: Emotes
    EndOfGameGiftSettings: EndOfGameGiftSettings
    EndOfGameGifting: EndOfGameGifting
    EoGReporting: EoGreporting
    Esports: Esports2
    Eternals: Eternals
    FeaturedGame: FeaturedGame
    FeaturedModes: FeaturedModes
    FriendRecommendations: FriendRecommendations
    GameClientCmdLineToggles: GameClientCmdLineToggles
    GameInvites: GameInvites
    GameTimerSync: GameTimerSync
    Gameflow: Gameflow
    GeoInfo: GeoInfo
    GuestSlots: GuestSlots
    Highlights: Highlights
    Honor: Honor
    IconConfig: IconConfig
    Inventory: Inventory
    ItemSets: ItemSets
    Karma: Karma
    LCU: Lcu
    LCUACS: Lcuacs
    LCUCollections: Lcucollections
    LCUStore: Lcustore
    LcuAlphaShutdown: LcuAlphaShutdown
    LcuBuddySpectate: LcuBuddySpectate
    LcuChampionDetails: LcuChampionDetails
    LcuChampionSelect: LcuChampionSelect
    LcuContentTargeting: LcuContentTargeting
    LcuDisambiguation: LcuDisambiguation
    LcuEmailVerification: LcuEmailVerification
    LcuGameSettings: LcuGameSettings
    LcuHome: LcuHome
    LcuHovercard: LcuHovercard
    LcuLeagueSpectate: LcuLeagueSpectate
    LcuLevelUp: LcuLevelUp
    LcuLobby: LcuLobby
    LcuLoyalty: LcuLoyalty
    LcuNpe: LcuNpe
    LcuPayments: LcuPayments
    LcuProfiles: LcuProfiles
    LcuPurchaseWidget: LcuPurchaseWidget
    LcuReadyCheckUpdate: LcuReadyCheckUpdate
    LcuRevivals: LcuRevivals
    LcuSentryJSErrors: LcuSentryJserrors
    LcuSettings: LcuSettings
    LcuSocial: LcuSocial
    LcuSummonerIconPicker: LcuSummonerIconPicker
    LcuTft: LcuTft
    LcuTutorial: LcuTutorial
    LcuUiKit: LcuUiKit
    LeagueConfig: LeagueConfig
    LeagueEdgeClient: LeagueEdgeClient
    LeagueEdgeClientEnabledServices: LeagueEdgeClientEnabledServices
    LeagueEdgeClientLeagueSessionServicesEnabled: LeagueEdgeClientLeagueSessionServicesEnabled
    LeagueEdgeClientServiceTrafficBalanceRate: LeagueEdgeClientServiceTrafficBalanceRate
    LeaverBuster: LeaverBuster
    Loadouts: Loadouts
    LoginDataPacket: LoginDataPacket
    LootConfig: LootConfig
    Masteries: Masteries
    Missions: Missions
    Mutators: Mutators
    Navigation: Navigation
    NewMatchHistory: NewMatchHistory
    NewPlayerIntro: NewPlayerIntro
    NewPlayerRouter: NewPlayerRouter
    Parties: Parties3
    PartyRewards: PartyRewards
    Perks: Perks
    PersonalizedOffers: PersonalizedOffers
    PersonlizedOffers: PersonlizedOffers
    PlatformShutdown: PlatformShutdown
    PlayerBehavior: PlayerBehavior
    PlayerFeedbackTool: PlayerFeedbackTool
    PlayerNotification: PlayerNotification
    PlayerPreferences: PlayerPreferences
    Postgame: Postgame
    ProfileHoverCard: ProfileHoverCard
    Profiles: Profiles
    PublishingContent: PublishingContent
    QueueImages: QueueImages
    QueueRestriction: QueueRestriction
    Replays: Replays
    Rewards: Rewards2
    SLcuChampionSelecttring: SlcuChampionSelecttring
    Sanitizer: Sanitizer
    SeasonReward: SeasonReward
    Sentry: Sentry
    ServiceStatusAPI: ServiceStatusApi
    ShareMatchHistory: ShareMatchHistory
    SkinRentals: SkinRentals
    SkinsViewer: SkinsViewer
    SocialLeaderboard: SocialLeaderboard
    Spectator: Spectator
    String: String
    SuggestedPlayers: SuggestedPlayers
    Summoner: Summoner
    TeamBoost: TeamBoost
    TeamBuilderDraft: TeamBuilderDraft
    ThirdPartyVerification: ThirdPartyVerification
    Trophies: Trophies
    Voice: Voice
    WardSkinConfig: WardSkinConfig
  }
  
export interface AccountVerification {
    Enabled: boolean
    IsNewAvsServiceEnabled: boolean
    KrPhoneDisplayEnabled: boolean
    PasswordEnabled: boolean
    PhoneValidationEnabled: boolean
    SettingsEnable: boolean
    SettingsEnabled: boolean
    SettingsVerifyEnabled: boolean
    ShouldUseNewAvs: boolean
  }
  
export interface Banners {
    Enabled: any
    IsEnabledOnProfile: boolean
    IsEquipEnabled: boolean
    IsOtherSummonersProfileEnabled: boolean
  }
  
export interface BetterRewards {
    DayOneModalEnabled: boolean
    GetPostgameXpFromRms: boolean
    VisualUpdateEnabled: boolean
  }
  
export interface BotConfigurations {
    IntermediateInCustoms: boolean
  }
  
export interface CareerStats {
    StatsEnabled: boolean
  }
  
export interface Challenges {
    ChallengeUpdateDelaySeconds: number
    ClientState: string
    CollectionEnabled: boolean
    CustomizeIdentityEnabled: boolean
    EnabledInventoryTypes: string[]
    FeatureIntroEnabled: boolean
    LobbyChallengesEnabled: boolean
    MaxNotificationSubscriptionDelaySeconds: number
    PartiesV2Enabled: boolean
    PostgameOverride: boolean
    RankIdentityOverride: boolean
  }
  
export interface ChampionMasteryConfig {
    CapUnlockChampionLevel: number
    ChampionPointQueueTypes: string
    Enabled: boolean
    EndOfGameEnabled: boolean
    GradeEnabled: boolean
    LegsEnabled: boolean
    LootChestsEnabled: boolean
    MaxChampionLevel: number
    MinSummonerLevel: number
    ShowGradeAvailablePopup: boolean
    SupportedQueueTypes: string
  }
  
export interface ChampionSelect {
    AllChampsAvailableInAram: boolean
    AlwaysShowRewardIcon: boolean
    AutoReconnectEnabled: boolean
    CollatorChampionFilterEnabled: boolean
    UseActionPatchV2: boolean
    UseOptimizedBotChampionSelectProcessor: boolean
    UseOptimizedChampSelectProcessor: boolean
    UseOptimizedSpellSelectProcessor: boolean
  }
  
export interface ChampionTradeService {
    Enabled: boolean
  }
  
export interface Chat {
    ChatHistoryEnabled: boolean
    ChatHistoryThreshold: number
    Default_public_chat_rooms: string
    MaximumRosterSize: number
    MobileEnabled: boolean
    Rename_general_group_throttle: number
  }
  
export interface ChatDomain {
    ChampSelectDomainName: string
    PostGameDomainName: string
  }
  
export interface Chroma2 {
    IsEnabled: boolean
  }
  
export interface ClashConfig {
    AwardsTabEnabled: boolean
    BracketSpectateEnabled: boolean
    CapacityIndicatorEnabled: boolean
    ClashStartModalEnabled: boolean
    DarkModeEntitlement: any
    EnabledState: string
    EndOfGameFlowEnabled: boolean
    FindTeamViewEnabled: boolean
    HonorLevelRequired: number
    IconConfig: string
    InviteModalTiersEnabled: boolean
    IsPlaymodeRestrictionEnabled: boolean
    IsRewardsModalEnabled: boolean
    LftEnabled: boolean
    LoginModalEnabled: boolean
    PremiumTicketsEnabled: boolean
    ScoutingEnabled: boolean
    SmsVerificationEnabled: any
    StorePageLink: string
    SubstitutionEnabled: any
    ThirdPartyInvitesEnabled: boolean
    TutorialEnabled: boolean
    Visibility: string
    VoiceEnabled: any
    Worlds2020LootModalEnabled: boolean
  }
  
export interface Clubs {
    ClubPresenceDecryptionKey: string
    ClubServiceUrl: string
    ClubsActiveIcon: string
    ClubsEnabled: boolean
    ClubsLCUEnabled: boolean
    ClubsMemberIcon: string
    InviteToClubLobbyEnabled: boolean
  }
  
export interface Companions {
    SelectorInChampSelectEnabled: boolean
  }
  
export interface ContextualEducation {
    Enabled: boolean
    MaxTargetSummonerLevel: number
    TargetMinionsPerWave: number
  }
  
export interface ContextualEducationUrls {
    LAST_HIT: string
  }
  
export interface CustomGame {
    BotsAvailableInAram: boolean
  }
  
export interface DisabledChampion {
    "ODINBOT-5x5": any
  }
  
export interface DisabledChampionSkins {
    DisabledChampionSkins: any[]
    DisabledChromas: number[]
  }
  
export interface DisabledChampions {
    ARAM: any[]
    ARAM_BOT: any[]
    ARAM_CLASH: any[]
    ARAM_UNRANKED_5x5: any[]
    ARSR: any[]
    ASCENSION: any[]
    BILGEWATER: any[]
    BOT: any[]
    BOT_3x3: any[]
    CLASH: any[]
    CLASSIC: any[]
    COUNTER_PICK: any[]
    FIRSTBLOOD: any[]
    FIRSTBLOOD_1x1: any[]
    FIRSTBLOOD_2x2: any[]
    GAMEMODEX: any[]
    HEXAKILL: any[]
    KINGPORO: any[]
    "KINGPORO-5X5": number[]
    KING_PORO: any[]
    LNY23_TFT: any[]
    NEXUSBLITZ: number[]
    NIGHTMARE_BOT: any[]
    NORMAL: any[]
    NORMAL_3x3: any[]
    NORMAL_TFT: any[]
    ODIN: any[]
    ODINBOT: number[]
    "ODINBOT-5x5": number[]
    ODINBOT_5x5: number[]
    ODIN_UNRANKED: any[]
    ODYSSEY: any[]
    ONEFORALL: any[]
    ONEFORALL_5x5: any[]
    PRACTICETOOL: any[]
    RANKED_FLEX_SR: any[]
    RANKED_FLEX_TT: any[]
    RANKED_PREMADE_3x3: any[]
    RANKED_PREMADE_5x5: any[]
    RANKED_SOLO_5x5: any[]
    RANKED_TEAM_3x3: any[]
    RANKED_TEAM_5x5: any[]
    RANKED_TFT: any[]
    RANKED_TFT_DOUBLE_UP: any[]
    RANKED_TFT_PAIRS: any[]
    RANKED_TFT_TURBO: any[]
    SIEGE: any[]
    SNOWURF: any[]
    SR_6x6: any[]
    TFT: any[]
    TUTORIAL: any[]
    TUTORIAL_MODULE_1: any[]
    TUTORIAL_MODULE_2: any[]
    TUTORIAL_MODULE_3: any[]
    TUTORIAL_TFT: any[]
    ULTBOOK: any[]
    URF: any[]
    URF_BOT: any[]
  }
  
export interface DockedPrompt {
    EnabledNewDockedPromptRenderer: boolean
  }
  
export interface Esports {
    CS_CZ_Enabled: boolean
    DE_DE_Enabled: boolean
    EL_GR_Enabled: boolean
    EN_AU_Enabled: boolean
    EN_GB_Enabled: boolean
    EN_PH_Enabled: boolean
    EN_PL_Enabled: boolean
    EN_SG_Enabled: boolean
    EN_US_Enabled: boolean
    ES_AR_Enabled: boolean
    ES_ES_Enabled: boolean
    ES_MX_Enabled: boolean
    EsportsHubDataURL: string
    EsportsHubInitialized: boolean
    EsportsHubLongPollMinutes: number
    EsportsHubShortPollMinutes: number
    FR_FR_Enabled: boolean
    HU_HU_Enabled: boolean
    ID_ID_Enabled: boolean
    IT_IT_Enabled: boolean
    JA_JP_Enabled: boolean
    KO_KR_Enabled: boolean
    KillHub: boolean
    Landing_Embed_URL: string
    MS_MY_Enabled: boolean
    PL_PL_Enabled: boolean
    PT_BR_Enabled: boolean
    RO_RO_Enabled: boolean
    RU_RU_Enabled: boolean
    Staging: boolean
    TH_TH_Enabled: boolean
    TR_TR_Enabled: boolean
    VN_VN_Enabled: boolean
    ZH_CN_Enabled: boolean
    ZH_MY_Enabled: boolean
    ZH_TW_Enabled: boolean
  }
  
export interface Emotes {
    IsEmotePanelEnabled: boolean
    IsEmoteTutorialModalEnabled: boolean
  }
  
export interface EndOfGameGiftSettings {
    GiftRecipientLevelMin: number
    GiftSenderLevelMin: number
    GiftSenderRPMax: number
    RecipientGiftDailyMax: number
    SenderGiftDailyMax: number
  }
  
export interface EndOfGameGifting {
    Enabled: boolean
  }
  
export interface EoGreporting {
    GameAgnosticReportingTrinary: string
  }
  
export interface Esports2 {
    NotificationsAssetMagickURL: string
    NotificationsEnabled: string
    NotificationsServiceEndpoint: string
    NotificationsStreamGroupSlug: string
    NotificationsStreamURL: string
  }
  
export interface Eternals {
    Enabled: boolean
    ServiceUrl: string
  }
  
export interface FeaturedGame {
    MetadataEnabled: string
  }
  
export interface FeaturedModes {
    DisabledRgmButtonEnabled: boolean
    GoldenSpatulaClubDisabled: boolean
    MaxNotificationSaveDelayMinutes: number
    NotificationsEnabled: boolean
    QueueToggleNotificationMinutesThreshold: number
  }
  
export interface FriendRecommendations {
    AssociationUrlTemplate: any
    ContactDetailsUrlTemplate: any
    ContactsUrlTemplate: any
    EnableAddFriendButton: any
    EnableSocial: any
    EnableViewAllPanel: any
    EnabledPercent: any
    EnabledSocialNetworks: any
    FacebookAssociationUrlTemplate: any
    FacebookUnlinkUrlTemplate: any
    FaqLink: any
    HideFriends: any
    PlayerLevelForNewNotification: any
    RegistrationPollDurationMillis: any
    RegistrationPollRateMillis: any
    ShowToolTip: any
    StatusExpiryMillis: any
    UnlinkUrlTemplate: any
    UseNativeFacebookPop: any
  }
  
export interface GameClientCmdLineToggles {
    EnableLNP: any
    UseDX11: string
    UseMetal: string
    UseNewX3D: any
    UseNewX3DFramebuffers: any
  }
  
export interface GameInvites {
    GameInviteServiceEnabled: boolean
    InviteBulkMaxSize: number
    LobbyCreationEnabled: boolean
    ServiceEnabled: boolean
  }
  
export interface GameTimerSync {
    Enabled: boolean
    PercentOfTotalTimerToSyncAt: number
  }
  
export interface Gameflow {
    ForceGameLocaleAsEnglish: boolean
  }
  
export interface GeoInfo {
    Enabled: any
  }
  
export interface GuestSlots {
    Enabled: any
  }
  
export interface Highlights {
    Enabled: boolean
  }
  
export interface Honor {
    DayOneModalEnabled: boolean
    Enabled: boolean
    Honor2018Enabled: boolean
    SecondsToVote: number
  }
  
export interface IconConfig {
    EnabledState: string
  }
  
export interface Inventory {
    BaseServiceUrl: string
    Enabled: boolean
  }
  
export interface ItemSets {
    EditorEnabled: boolean
    MaxItemSets: number
    SendItemSetsToGame: boolean
  }
  
export interface Karma {
    Worlds2017VotingEnabled: boolean
  }
  
export interface Lcu {
    AirClientAlphaInviteEnabled: boolean
    AirClientAlphaInviteURL: string
  }
  
export interface Lcuacs {
    Endpoint: string
    UseIdTokens: boolean
  }
  
export interface Lcucollections {
    LCUAugmentsVisible: boolean
    LCUCollectiblesWardSkinsEnabled: any
    LCUMasteriesVisible: boolean
    LCUPerksVisible: boolean
    LCURunesVisible: boolean
    LCUSkinsViewerEnabled: boolean
  }
  
export interface Lcustore {
    CanQueryInactiveItems: boolean
    DisableCapRMS: boolean
    EnableDropRatesInPurchaseModal: boolean
    EnableFetchOffers: boolean
    Enabled: boolean
    LookupMissingCatalogItemKeys: boolean
    PlayerGiftingNotificationsEnabled: boolean
    RecommendationsEnabled: boolean
    SinglePageApplicationEnabled: boolean
    UseGameDataAssets: boolean
    UseRMS: boolean
    UseRsoAccessToken: boolean
  }
  
export interface LcuAlphaShutdown {
    Countdown: number
    Enabled: boolean
  }
  
export interface LcuBuddySpectate {
    Enabled: boolean
  }
  
export interface LcuChampionDetails {
    AbilitiesSectionEnabled: boolean
    Enabled: boolean
    PawEnabled: boolean
    SkinsSectionEnabled: boolean
  }
  
export interface LcuChampionSelect {
    AlliedSkinDisplayEnabled: boolean
    ChampSelectChangeTooltipDurationMillis: number
    ChampSelectChangeTooltipKey: string
    ChampSelectMutingEnabled: boolean
    ChampSelectReportV2Enabled: boolean
    ChampTradingTooltipEnabled: boolean
    EnableFavorites: boolean
    EnablePositionFilters: boolean
    IsDisconnectNotificationEnabled: boolean
    PickOrderSwappingTooltipEnabled: boolean
    PositionAssignmentAnimationEnabled: boolean
    RandomChampionEnabledGameQueues: number[]
    RandomChampionRateLimitInterval: number
    RandomChampionRateLimitMaxActions: number
    ReportingEnabled: boolean
    ShowChampSelectChangeTooltip: boolean
    ShowEmoteButton: boolean
    SkinPurchaseEnabled: boolean
    SkinPurchaseNotificationEnabled: boolean
    SkinPurchaseTime: number
  }
  
export interface LcuContentTargeting {
    ABTestFilterEnabled: any
    ABTestFilterGroups: any
    ABTestFilterSalt: any
    Enabled: any
    EntitlementsFilterEnabled: any
    LaneFilterEnabled: any
    LevelFilterEnabled: any
    LocationFiltersEnabled: any
    Mapping: any
    MasteryFilterChampionLimit: any
    MasteryFilterDaysSinceLastPlayed: any
    MasteryFilterEnabled: any
    MasteryFilterLevelThreshold: any
    MissionsFilterEnabled: any
    ModalEnabled: any
    RankFilterEnabled: any
    RankedFilterEnabled: any
    RevivalFilterEnabled: any
    RevivalFilterThreshold: any
    ShowSettingsForAll: any
    TargetingAttributeStorageBaseUri: any
    TargetingAttributeStorageEnabled: any
    TargetingAttributeStorageRolloutPct: any
    TargetingAttributeStorageUri: any
    TasIngestionDelayInSeconds: any
  }
  
export interface LcuDisambiguation {
    Enabled: any
    Required: any
  }
  
export interface LcuEmailVerification {
    Enabled: boolean
    IsOptional: boolean
    MandatoryAt: string
    MaxOptionalLevel: number
    MinimumSummonerLevel: number
    RequiredLogins: number
  }
  
export interface LcuGameSettings {
    GameplayEnabled: boolean
    HotkeysEnabled: boolean
    InterfaceEnabled: boolean
    SoundEnabled: boolean
  }
  
export interface LcuHome {
    LandingPagesTimeout: number
    ReloadEnabled: boolean
    ReloadPollerInterval: number
    ReloadStaleInterval: number
    RequireItemLoaded: boolean
  }
  
export interface LcuHovercard {
    Disabled: boolean
    RoleInfoEnabled: boolean
  }
  
export interface LcuLeagueSpectate {
    Enabled: boolean
  }
  
export interface LcuLevelUp {
    ModalNotificationDisabled: boolean
  }
  
export interface LcuLobby {
    AutoGrantInviteEnabled: boolean
    GameInvitesEnabled: boolean
    ObserverModeEnabled: boolean
    PracticeGameEnabled: boolean
    PracticeGameListEnabled: boolean
    QueueEligibilityGateKeeperEnabled: boolean
    QueueEligibilityV2Enabled: boolean
    SendInventoryTokenMetricsEnabled: boolean
    UseInventoryToken: boolean
  }
  
export interface LcuLoyalty {
    LeagueUnlockedEnabled: boolean
    LolcafeEnabled: boolean
  }
  
export interface LcuNpe {
    HardMaxSummonerLevel: number
    MaxSummonerLevel: number
    RewardsChallengesEnabled: boolean
    RewardsEnabled: boolean
    RewardsLoginEnabled: boolean
  }
  
export interface LcuPayments {
    BypassAccountIds: string
    Host: string
    PmcEdgeHost: string
    PmcEdgeUrl: any
    PmcSessionsEnabled: boolean
    RiotPayEnabled: boolean
    RiotPayThrottle: number
  }
  
export interface LcuProfiles {
    Enabled: boolean
    ForceLayout: any
  }
  
export interface LcuPurchaseWidget {
    BaseUrl: string
    CapOrdersUrl: string
    Enabled: boolean
    NonRefundableDisclaimerEnabled: boolean
    PurchaseDisclaimerEnabled: boolean
  }
  
export interface LcuReadyCheckUpdate {
    Enabled: boolean
  }
  
export interface LcuRevivals {
    FoundationEnabled: boolean
  }
  
export interface LcuSentryJserrors {
    Enabled: boolean
    SampleRate: number
    SentryDSN: string
  }
  
export interface LcuSettings {
    FullRepairEnabled: boolean
  }
  
export interface LcuSocial {
    AutoLinkEnabled: boolean
    ChatWindowPopoutEnabled: boolean
    ChatWindowResizeEnabled: boolean
    ClearChatHistoryEnabled: boolean
    DefaultGameQueues: string
    DetachedChatWindowResizeDisabled: boolean
    EnabledGameQueues: string
    FriendRequestToastsDisabled: boolean
    FriendsListGiftingEnabled: boolean
    LcuSupportedGameQueues: string
    MoreUnreadsEnabled: boolean
    NewChatButtonEnabled: boolean
    RecentlyPlayedDisabled: boolean
    SlashMeEnabled: boolean
    SortConversationsByTimeEnabled: boolean
    StatusesDisabled: boolean
    VirtualizedMessagesEnabled: boolean
    VirtualizedRosterEnabled: boolean
  }
  
export interface LcuSummonerIconPicker {
    Enabled: boolean
  }
  
export interface LcuTft {
    BattlepassHubEnabled: boolean
    EligibilityInventoryTypes: string[]
    HubEnabled: boolean
    MatchHistoryEnabled: boolean
    OrbEnabled: boolean
    PlayButtonEnabled: boolean
    SeriesInternalName: string
    TftHomeEnabled: boolean
  }
  
export interface LcuTutorial {
    CarouselChampIds: string
    Enabled: boolean
    GameModeSelectEnabled: boolean
    IntroABTestPercentage: number
    NewPlayerExperienceEnabled: boolean
    PracticeToolEnabled: boolean
    SkipTutorialPathAfterLevel: number
    StatsTimeout: number
    TutorialSummonerIcon: number
  }
  
export interface LcuUiKit {
    CelebrationModalsDisabled: boolean
  }
  
export interface LeagueConfig {
    ApexDemotionNotificationEnabled: boolean
    CurrentSplit: string
    CurrentYear: string
    EosNotificationEndTime: any
    EosNotificationSettingsName: string
    EosNotificationStartTime1: any
    EosNotificationStartTime2: any
    EosNotificationStartTime3: any
    EosNotificationsConfig: string
    EosNotificationsEnabled: boolean
    EosRewardGroupsConfig: string
    EosRewardsConfig: string
    FlexRestrictionModalEnabled: boolean
    IsGlobalNotificationsEnabled: boolean
    IsPreseason: boolean
    IsSeasonMemorialModalEnabled: boolean
    IsSplitStartModalEnabled: boolean
    JWTEnabled: boolean
    MasterTierEnabled: boolean
    PreseasonName: string
    PromoHelperEnabled: boolean
    PromotionVignetteV2Enabled: boolean
    Ranked2017Enabled: boolean
    Ranked2019Enabled: boolean
    RankedReferenceModalEnabled: boolean
    RankedRewardConfig: string
    SeasonModalEnabled: boolean
    SeasonName: string
    SendSignedRankedOverview: boolean
    TftSeasonNameLocKey: string
  }
  
export interface LeagueEdgeClient {
    Enabled: boolean
    LeagueSessionEnabled: boolean
  }
  
export interface LeagueEdgeClientEnabledServices {
    GSMv2: boolean
    GameAgnosticMatchHistory: boolean
    Leagues: boolean
    MarketingPreferences: boolean
    Missions: boolean
    Parties: boolean
    PlayerBehavior: boolean
    PublishingContent: boolean
    Summoner: boolean
    Tastes: boolean
    Teambuilder: boolean
  }
  
export interface LeagueEdgeClientLeagueSessionServicesEnabled {
    Leagues: any
  }
  
export interface LeagueEdgeClientServiceTrafficBalanceRate {
    Parties: any
  }
  
export interface LeaverBuster {
    IsLbsEnabled: boolean
    IsLockoutModalEnabled: boolean
  }
  
export interface Loadouts {
    EnableStarShardsServices: boolean
    EnableStarShardsUpgradeFlow: boolean
    Enabled: boolean
    InventoryServiceUrl: string
    LoadoutsServiceUrl: string
    NewLoadoutPickerEnabled: boolean
    UseV4LoadoutFlow: boolean
    ValidInventoryTypes: string[]
  }
  
export interface LoginDataPacket {
    bannedUntilDateMillis: number
    broadcastNotification: BroadcastNotification
    coOpVsAiMinutesLeftToday: number
    coOpVsAiMsecsUntilReset: number
    competitiveRegion: string
    customMinutesLeftToday: number
    customMsecsUntilReset: number
    displayPrimeReformCard: boolean
    emailStatus: string
    gameTypeConfigs: GameTypeConfig2[]
    inGhostGame: boolean
    languages: string[]
    matchMakingEnabled: boolean
    maxPracticeGameSize: number
    minor: boolean
    minorShutdownEnforced: boolean
    minutesUntilMidnight: number
    minutesUntilShutdown: number
    minutesUntilShutdownEnabled: boolean
    platformGameLifecycle: any
    platformId: string
    playerStatSummaries: any
    restrictedChatGamesRemaining: number
    restrictedGamesRemainingForRanked: number
    showEmailVerificationPopup: boolean
    simpleMessages: any[]
  }
  
export interface BroadcastNotification {
    broadcastMessages: any
  }
  
export interface GameTypeConfig2 {
    allowTrades: boolean
    banMode: string
    banTimerDuration: number
    crossTeamChampionPool: boolean
    duplicatePick: boolean
    exclusivePick: boolean
    id: number
    mainPickTimerDuration: number
    maxAllowableBans: number
    name: string
    pickMode: string
    postPickTimerDuration: number
    teamChampionPool: boolean
  }
  
export interface LootConfig {
    ChestBundleDiscount1: number
    ChestBundleDiscount2: number
    ChestBundleDiscount3: number
    ChestBundleDiscount4: number
    ChestBundleDiscount5: number
    EnableMythicEssenceDisplay: boolean
    Enabled: boolean
    EventChestBundleId1: string
    EventChestBundleId2: string
    EventChestBundleId3: string
    EventChestBundleId4: string
    EventChestBundleId5: string
    EventChestsEnabled: boolean
    LEdgeAccessEnabled: boolean
    LEdgeAccessPercentage: number
    LcuEnabled: boolean
    LootMilestonesEnabled: boolean
    LootOddsQueryEvaluationEnabled: boolean
    MATERIAL_112LearnMoreURL: string
    MinSummonerLevel: number
    NewPlayerChestEnabled: boolean
    NoRefundConfirmationEnabled: boolean
    PurchaseChestsEnabled: boolean
    Visible: boolean
    WorldsTokensEnabled: boolean
  }
  
export interface Masteries {
    ShowPointsResetMessage: boolean
  }
  
export interface Missions {
    EligibilityInventoryTypes: string[]
    MissionsEnabled: boolean
    MissionsFrontEndEnabled: boolean
    MissionsPollingTime: number
    MissionsTabTrackerEnabled: boolean
    MissionsUseV4Api: boolean
    SendSimpleInventoryTokens: boolean
  }
  
export interface Mutators {
    BasicTutorialMutators: string[]
    BattleTrainingMutators: string[]
    CustomGameMutators: string[]
    EnabledAssetMutators: string[]
    EnabledModes: string[]
    EnabledMutators: string[]
  }
  
export interface Navigation {
    NavBarDisplayMode: string
    UseEnhancedMenu: boolean
    UseTextLabels: any
  }
  
export interface NewMatchHistory {
    Enabled: boolean
    MatchHistoryWebURL: string
    PostIPXPToLegSEnabled: boolean
    SharingEnabled: boolean
    TftMatchHistoryEnabled: boolean
  }
  
export interface NewPlayerIntro {
    IntroUrl: string
    NewSummonerIconIds: string
  }
  
export interface NewPlayerRouter {
    ABDisablingOfTutorial: boolean
    QueueID: string
  }
  
export interface Parties3 {
    Enabled: boolean
    EnabledForTeamBuilderQueues: boolean
    GameflowSamplingProbability: number
    NotificationDelaySamplingPercentage: number
    OpenPartyEnable: boolean
    PremadeEligibilityFromPartiesEnabled: boolean
    RegistrationCredentialsRequired: boolean
    ServiceProxySamplingPercentage: number
  }
  
export interface PartyRewards {
    Enabled: boolean
    GameFlowVisualUpdate: boolean
  }
  
export interface Perks {
    PerksEnabled: boolean
  }
  
export interface PersonalizedOffers {
    BaseServiceURL: string
    HubEnabled: boolean
    Port: number
    PromotionEndTime: string
    PromotionName: string
    PromotionStartTime: string
    Protocol: string
    ServiceConfig: any
    ServicePath: string
    ShowNavButton: boolean
    ThemedBackground: boolean
  }
  
export interface PersonlizedOffers {
    BaseServiceURL: string
    HubEnabled: boolean
    Port: number
    Protocol: string
    ServiceConfig: ServiceConfig[]
    ServicePath: string
  }
  
export interface ServiceConfig {
    endpoint: string
    operation: string
    version: number
  }
  
export interface PlatformShutdown {
    Enabled: boolean
  }
  
export interface PlayerBehavior {
    CodeOfConductEnabled: boolean
    ReformCardV2Enabled: boolean
  }
  
export interface PlayerFeedbackTool {
    BackendUrl: string
    EnableHomeTrigger: boolean
  }
  
export interface PlayerNotification {
    Enabled: boolean
  }
  
export interface PlayerPreferences {
    Enabled: boolean
    EnforceHttps: boolean
    ServiceEndpoint: string
    Version: string
  }
  
export interface Postgame {
    ShowPositionDetectionEnabled: boolean
  }
  
export interface ProfileHoverCard {
    ACSLookup: string
    ChampionMasteryLookup: string
    CreateStringConfiguration: any
    IsEnabled: string
    IsEnabledForBuddyPanelView: string
    IsEnabledForChatFriendsList: string
    IsEnabledForChatGroupChatParticipants: string
    IsEnabledForClubChatParticipants: string
    IsEnabledForCustomGameLobby: string
    IsEnabledForGameLobbySuggestedPlayers: string
    IsEnabledForGroupFinderCapViewSuggestedPlayers: any
    IsEnabledForSummonerQuickView: string
    IsEnabledForTeamBuilderSuggestedPlayers: string
    LeagueLookup: string
  }
  
export interface Profiles {
    EosIconEnabled: boolean
    EosTooltipShowOnce: boolean
    RankQueueOnCount: number
    SkinsPickerEnabled: boolean
  }
  
export interface PublishingContent {
    Enabled: boolean
    LocalePreferenceEnabled: boolean
    LocalePreferenceOptions: string
    TftGdsTest: any
    TftHubCardsUrl: string
  }
  
export interface QueueImages {
    OverrideQueueImage: boolean
  }
  
export interface QueueRestriction {
    AllowablePremadeSizesForQueueId440: string
    KarmaEnabled: boolean
    MaxTierAndDivisionForPremadeSize2QueueId1100: string
    MaxTierAndDivisionForPremadeSize2QueueId420: string
    MaxTierAndRankForPremadeSize1: string
    MaxTierAndRankForPremadeSize1QueueId410: string
    MaxTierAndRankForPremadeSize1QueueId420: string
    MaxTierAndRankForPremadeSize1QueueId440: string
    MaxTierAndRankForPremadeSize1QueueId470: string
    MaxTierAndRankForPremadeSize1QueueId9: string
    MaxTierAndRankForPremadeSize2: string
    MaxTierAndRankForPremadeSize2QueueId410: string
    MaxTierAndRankForPremadeSize2QueueId420: string
    MaxTierAndRankForPremadeSize2QueueId440: string
    MaxTierAndRankForPremadeSize2QueueId470: string
    MaxTierAndRankForPremadeSize2QueueId9: string
    MaxTierAndRankForPremadeSize3: string
    MaxTierAndRankForPremadeSize3QueueId410: string
    MaxTierAndRankForPremadeSize3QueueId420: string
    MaxTierAndRankForPremadeSize3QueueId440: string
    MaxTierAndRankForPremadeSize3QueueId470: string
    MaxTierAndRankForPremadeSize3QueueId9: string
    MaxTierAndRankForPremadeSize4: string
    MaxTierAndRankForPremadeSize4QueueId410: string
    MaxTierAndRankForPremadeSize4QueueId420: string
    MaxTierAndRankForPremadeSize4QueueId440: string
    MaxTierAndRankForPremadeSize4QueueId470: string
    MaxTierAndRankForPremadeSize4QueueId9: string
    MaxTierAndRankForPremadeSize5: string
    MaxTierAndRankForPremadeSize5QueueId410: string
    MaxTierAndRankForPremadeSize5QueueId420: string
    MaxTierAndRankForPremadeSize5QueueId440: string
    MaxTierAndRankForPremadeSize5QueueId470: string
    MaxTierAndRankForPremadeSize5QueueId9: string
    QueuesRequiringTwentyChampions: number[]
    RankedDuoQueueDefaultUnseededTier: string
    RankedDuoQueueDefaultUnseededTierQueueId410: string
    RankedDuoQueueDefaultUnseededTierQueueId420: string
    RankedDuoQueueDefaultUnseededTierQueueId440: string
    RankedDuoQueueDefaultUnseededTierQueueId470: string
    RankedDuoQueueDefaultUnseededTierQueueId9: string
    RankedDuoQueueRestrictionMaxDelta: number
    RankedDuoQueueRestrictionMode: string
    RankedHighMmrPremadeMaxSize: number
    RankedHighMmrPremadeRank: string
    RankedHighMmrPremadeRestrictionEnabled: boolean
    RankedHighMmrPremadeTier: string
    RankedHighSkillLowestTier: string
    RankedHighSkillLowestTierQueueId410: string
    RankedHighSkillLowestTierQueueId420: string
    RankedHighSkillLowestTierQueueId440: string
    RankedHighSkillLowestTierQueueId470: string
    RankedHighSkillLowestTierQueueId9: string
    RankedHighSkillRestrictionMaxDelta: number
    RankedHighSkillRestrictionMaxDeltaQueueId410: number
    RankedHighSkillRestrictionMaxDeltaQueueId420: number
    RankedHighSkillRestrictionMaxDeltaQueueId440: number
    RankedHighSkillRestrictionMaxDeltaQueueId470: number
    RankedHighSkillRestrictionMaxDeltaQueueId9: number
    RankedHighSkillRestrictionMode: string
    RankedHighSkillRestrictionModeQueueId410: string
    RankedHighSkillRestrictionModeQueueId420: string
    RankedHighSkillRestrictionModeQueueId440: string
    RankedHighSkillRestrictionModeQueueId470: string
    RankedHighSkillRestrictionModeQueueId9: string
    RankedLowSkillRestrictionMaxDelta: number
    RankedLowSkillRestrictionMaxDeltaQueueId410: number
    RankedLowSkillRestrictionMaxDeltaQueueId420: number
    RankedLowSkillRestrictionMaxDeltaQueueId440: number
    RankedLowSkillRestrictionMaxDeltaQueueId470: number
    RankedLowSkillRestrictionMaxDeltaQueueId9: number
    RankedLowSkillRestrictionMode: string
    RankedLowSkillRestrictionModeQueueId410: string
    RankedLowSkillRestrictionModeQueueId420: string
    RankedLowSkillRestrictionModeQueueId440: string
    RankedLowSkillRestrictionModeQueueId470: string
    RankedLowSkillRestrictionModeQueueId9: string
    ServiceEnabled: boolean
  }
  
export interface Replays {
    MinSupportedGameServerVersion: string
    ThirdPersonAccessibleGameQueues: string
  }
  
export interface Rewards2 {
    Enabled: boolean
  }
  
export interface SlcuChampionSelecttring {
    RandomChampionRateLimitInterval: number
    RandomChampionRateLimitMaxActions: number
  }
  
export interface Sanitizer {
    Level1Unfilter: string
  }
  
export interface SeasonReward {
    Enabled: boolean
    Maximum_team_reward_level: number
    Minimum_points_per_reward_level: string
    Minimum_win_team_reward_level_1: number
    Minimum_win_team_reward_level_2: number
    Minimum_win_team_reward_level_3: number
    QualificationWarningEnabled: boolean
    ServiceCallEnabled: boolean
  }
  
export interface Sentry {
    SampleRate: any
  }
  
export interface ServiceStatusApi {
    Enabled: boolean
  }
  
export interface ShareMatchHistory {
    AdvancedGameDetailsEnabled: boolean
    AdvancedGameDetailsUrlTemplate: string
    MatchDetailsUrlTemplate: string
    MatchHistoryEnabled: boolean
    MatchHistoryUrlTemplate: string
    ShareEndOfGameEnabled: boolean
    ShareGameUrlTemplate: string
  }
  
export interface SkinRentals {
    Enabled: string
  }
  
export interface SkinsViewer {
    VintageSkinSummonerIconConfig: string
  }
  
export interface SocialLeaderboard {
    IsSocialLeaderboardEnabled: boolean
    LeaguesPuuidPageSize: number
    MinsTillCacheExpiry: number
    UseSocialLeaderboardLeaguesEndpoint: boolean
  }
  
export interface Spectator {
    SaveReconnectInfoEnabled: boolean
  }
  
export interface String {
    String: boolean
  }
  
export interface SuggestedPlayers {
    Enabled: boolean
    FriendsOfFriendsEnabled: boolean
    FriendsOfFriendsLimit: number
    HonoredPlayersLimit: number
    MaxNumReplacements: number
    MaxNumSuggestedPlayers: number
    OnlineFriendsLimit: number
    PreviousPremadesLimit: number
    VictoriousComradesLimit: number
  }
  
export interface Summoner {
    JWTEnabled: boolean
  }
  
export interface TeamBoost {
    AllSkinEnabled: string
    RandomSkinEnabled: string
  }
  
export interface TeamBuilderDraft {
    EstimatedWaitAdjustmentEnabled: boolean
    FillPrimaryWaitFactor: number
    FillSecondaryWaitFactor: number
    LogAllLCDSMessages: boolean
    MidPrimaryWaitFactor: number
    SendAfkCheckMetricsEnabled: boolean
    SendSummonerIconJwt: boolean
    SkinPurchaseEnabled: boolean
    SupportPrimaryWaitFactor: number
    SupportSecondaryWaitFactor: number
    TBRerollServiceEnabled: boolean
    TakeoverEnabled: boolean
    UnlockLockInButtonTimeoutEnabled: boolean
    UnlockLockInButtonWaitTime: any
  }
  
export interface ThirdPartyVerification {
    CAHServiceEnabled: boolean
  }
  
export interface Trophies {
    IsEnabledOnProfile: boolean
    IsOtherSummonersProfileEnabled: boolean
  }
  
export interface Voice {
    Enabled: boolean
  }
  
export interface WardSkinConfig {
    UseLoadouts: boolean
    WardSkinSelection: boolean
  }
  
export interface LolChampionsV1OwnedChampionsMinimal {
    data: Daum27[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Daum27 {
    active: boolean
    alias: string
    banVoPath: string
    baseLoadScreenPath: string
    baseSplashPath: string
    botEnabled: boolean
    chooseVoPath: string
    disabledQueues: any[]
    freeToPlay: boolean
    id: number
    name: string
    ownership: Ownership5
    purchased: number
    rankedPlayEnabled: boolean
    roles: string[]
    squarePortraitPath: string
    stingerSfxPath: string
    title: string
  }
  
export interface Ownership5 {
    loyaltyReward: boolean
    owned: boolean
    rental: Rental5
    xboxGPReward: boolean
  }
  
export interface Rental5 {
    endDate: number
    purchaseDate: number
    rented: boolean
    winCountRemaining: number
  }
  
export interface LolClashV1Visible {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolClashV1Enabled {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolClashV1DisabledConfig {
    data: Data74
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data74 {
    disabledReason: string
    estimatedEnableTimeMillis: number
  }
  
export interface LolClashV1Iconconfig {
    data: Data75
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data75 {
    logos: Logo[]
  }
  
export interface Logo {
    colors: Colors
    free: boolean
    id: number
    vpReward?: boolean
  }
  
export interface Colors {
    "1": number
    "2": number
    "3": number
    "4": number
    "5": number
  }
  
export interface LolSettingsV2Config {
    data: Data76
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data76 {
    isGameplayEnabled: boolean
    isHotkeysEnabled: boolean
    isInterfaceEnabled: boolean
    isLegalStatementsEnabled: boolean
    isPrivacyNoticeEnabled: boolean
    isReplaysEnabled: boolean
    isSoundEnabled: boolean
    isTermsEnabled: boolean
    localizedLicensesURL: string
  }
  
export interface LolHighlightsV1Config {
    data: Data77
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data77 {
    invalidHighlightNameCharacters: string
    isHighlightsEnabled: boolean
  }
  
export interface LolShutdownV1Notification {
    data: any
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolPurchaseWidgetV1Configuration {
    data: Data78
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data78 {
    alwaysShowPurchaseDisclaimer: boolean
    enabled: boolean
    nonRefundableDisclaimerEnabled: boolean
  }
  
export interface LolRankedV1EosRewards {
    data: Data79
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data79 {
    seasons: Seasons
  }
  
export interface Seasons {
    "12": N12
    "19": N19
    "20": N20
  }
  
export interface N12 {
    rewards: Rewards3
  }
  
export interface Rewards3 {
    ETERNALS_CAPSULE: EternalsCapsule
    SUMMONER_ICON_FLEX_BRONZE: SummonerIconFlexBronze
    SUMMONER_ICON_FLEX_CHALLENGER: SummonerIconFlexChallenger
    SUMMONER_ICON_FLEX_DIAMOND: SummonerIconFlexDiamond
    SUMMONER_ICON_FLEX_GOLD: SummonerIconFlexGold
    SUMMONER_ICON_FLEX_GRANDMASTER: SummonerIconFlexGrandmaster
    SUMMONER_ICON_FLEX_IRON: SummonerIconFlexIron
    SUMMONER_ICON_FLEX_MASTER: SummonerIconFlexMaster
    SUMMONER_ICON_FLEX_PLATINUM: SummonerIconFlexPlatinum
    SUMMONER_ICON_FLEX_SILVER: SummonerIconFlexSilver
    SUMMONER_ICON_SOLODUO_BRONZE: SummonerIconSoloduoBronze
    SUMMONER_ICON_SOLODUO_CHALLENGER: SummonerIconSoloduoChallenger
    SUMMONER_ICON_SOLODUO_DIAMOND: SummonerIconSoloduoDiamond
    SUMMONER_ICON_SOLODUO_GOLD: SummonerIconSoloduoGold
    SUMMONER_ICON_SOLODUO_GRANDMASTER: SummonerIconSoloduoGrandmaster
    SUMMONER_ICON_SOLODUO_IRON: SummonerIconSoloduoIron
    SUMMONER_ICON_SOLODUO_MASTER: SummonerIconSoloduoMaster
    SUMMONER_ICON_SOLODUO_PLATINUM: SummonerIconSoloduoPlatinum
    SUMMONER_ICON_SOLODUO_SILVER: SummonerIconSoloduoSilver
    VICTORIOUS_CHAMPION: VictoriousChampion
    VICTORIOUS_CHROMA_FLEX_CHALLENGER: VictoriousChromaFlexChallenger
    VICTORIOUS_CHROMA_FLEX_DIAMOND: VictoriousChromaFlexDiamond
    VICTORIOUS_CHROMA_FLEX_GRANDMASTER: VictoriousChromaFlexGrandmaster
    VICTORIOUS_CHROMA_FLEX_MASTER: VictoriousChromaFlexMaster
    VICTORIOUS_CHROMA_FLEX_PLATINUM: VictoriousChromaFlexPlatinum
    VICTORIOUS_CHROMA_SOLODUO_CHALLENGER: VictoriousChromaSoloduoChallenger
    VICTORIOUS_CHROMA_SOLODUO_DIAMOND: VictoriousChromaSoloduoDiamond
    VICTORIOUS_CHROMA_SOLODUO_GRANDMASTER: VictoriousChromaSoloduoGrandmaster
    VICTORIOUS_CHROMA_SOLODUO_MASTER: VictoriousChromaSoloduoMaster
    VICTORIOUS_CHROMA_SOLODUO_PLATINUM: VictoriousChromaSoloduoPlatinum
    VICTORIOUS_SKIN: VictoriousSkin
  }
  
export interface EternalsCapsule {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface SummonerIconFlexBronze {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface SummonerIconFlexChallenger {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface SummonerIconFlexDiamond {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface SummonerIconFlexGold {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface SummonerIconFlexGrandmaster {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface SummonerIconFlexIron {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface SummonerIconFlexMaster {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface SummonerIconFlexPlatinum {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface SummonerIconFlexSilver {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface SummonerIconSoloduoBronze {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface SummonerIconSoloduoChallenger {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface SummonerIconSoloduoDiamond {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface SummonerIconSoloduoGold {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface SummonerIconSoloduoGrandmaster {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface SummonerIconSoloduoIron {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface SummonerIconSoloduoMaster {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface SummonerIconSoloduoPlatinum {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface SummonerIconSoloduoSilver {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface VictoriousChampion {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface VictoriousChromaFlexChallenger {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface VictoriousChromaFlexDiamond {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface VictoriousChromaFlexGrandmaster {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface VictoriousChromaFlexMaster {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface VictoriousChromaFlexPlatinum {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface VictoriousChromaSoloduoChallenger {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface VictoriousChromaSoloduoDiamond {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface VictoriousChromaSoloduoGrandmaster {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface VictoriousChromaSoloduoMaster {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface VictoriousChromaSoloduoPlatinum {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface VictoriousSkin {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface N19 {
    rewards: Rewards4
  }
  
export interface Rewards4 {
    TFT7_5_VICTORIOUS: Tft75Victorious
  }
  
export interface Tft75Victorious {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface N20 {
    rewards: Rewards5
  }
  
export interface Rewards5 {
    TFT7_5_DOUBLEUP_CHALLENGER: Tft75DoubleupChallenger
    TFT7_5_DOUBLEUP_DIAMOND: Tft75DoubleupDiamond
    TFT7_5_DOUBLEUP_GOLD: Tft75DoubleupGold
    TFT7_5_DOUBLEUP_GRANDMASTER: Tft75DoubleupGrandmaster
    TFT7_5_DOUBLEUP_MASTER: Tft75DoubleupMaster
    TFT7_5_DOUBLEUP_PLATINUM: Tft75DoubleupPlatinum
    TFT7_5_HYPERROLL_BLUE: Tft75HyperrollBlue
    TFT7_5_HYPERROLL_GREEN: Tft75HyperrollGreen
    TFT7_5_HYPERROLL_ORANGE: Tft75HyperrollOrange
    TFT7_5_HYPERROLL_PURPLE: Tft75HyperrollPurple
    TFT7_5_STANDARD_CHALLENGER: Tft75StandardChallenger
    TFT7_5_STANDARD_DIAMOND: Tft75StandardDiamond
    TFT7_5_STANDARD_GOLD: Tft75StandardGold
    TFT7_5_STANDARD_GRANDMASTER: Tft75StandardGrandmaster
    TFT7_5_STANDARD_MASTER: Tft75StandardMaster
    TFT7_5_STANDARD_PLATINUM: Tft75StandardPlatinum
    TFT7_5_TRIUMPHANT: Tft75Triumphant
    TFT7_5_VICTORIOUS: Tft75Victorious2
  }
  
export interface Tft75DoubleupChallenger {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface Tft75DoubleupDiamond {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface Tft75DoubleupGold {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface Tft75DoubleupGrandmaster {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface Tft75DoubleupMaster {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface Tft75DoubleupPlatinum {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface Tft75HyperrollBlue {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface Tft75HyperrollGreen {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface Tft75HyperrollOrange {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface Tft75HyperrollPurple {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface Tft75StandardChallenger {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface Tft75StandardDiamond {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface Tft75StandardGold {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface Tft75StandardGrandmaster {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface Tft75StandardMaster {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface Tft75StandardPlatinum {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface Tft75Triumphant {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface Tft75Victorious2 {
    id: string
    overrideImagePath: string
    type: string
  }
  
export interface LolLootV1Enabled {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolPlayerBehaviorV1Config {
    data: Data80
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data80 {
    CodeOfConductEnabled: boolean
    IsLoaded: boolean
  }
  
export interface LolActiveBoostsV1ActiveBoosts {
    data: Data81
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data81 {
    firstWinOfTheDayStartTime: string
    ipBoostEndDate: string
    ipBoostPerWinCount: number
    ipLoyaltyBoost: number
    summonerId: number
    xpBoostEndDate: string
    xpBoostPerWinCount: number
    xpLoyaltyBoost: number
  }
  
export interface RiotclientV1CrashReportingEnvironment {
    data: Data82
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data82 {
    environment: string
    userId: string
    userName: string
  }
  
export interface LolPlatformConfigV1InitialConfigurationComplete {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolLoginV2LeagueSessionInitToken {
    data: Data83
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data83 {
    logoutOnFailure: boolean
    token: string
  }
  
export interface SanitizerV1Status {
    data: Data84
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data84 {
    breakingCharsCount: number
    filteredWordCountsByLevel: FilteredWordCountsByLevel
    locale: string
    projectedCharsCount: number
    ready: boolean
    region: string
    whitelistedWordCountsByLevel: WhitelistedWordCountsByLevel
  }
  
export interface FilteredWordCountsByLevel {
    "0": number
    "1": number
    "2": number
    "3": number
  }
  
export interface WhitelistedWordCountsByLevel {
    "0": number
    "1": number
    "2": number
    "3": number
  }
  
export interface LolHonorV2V1Profile {
    data: Data85
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data85 {
    checkpoint: number
    honorLevel: number
    rewardsLocked: boolean
  }
  
export interface LolPlayerPreferencesV1PlayerPreferencesReady {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolInventoryV1InitialConfigurationComplete {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolTastesV1Ready {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolClientConfigV3ClientConfigByName {
    data: any
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolSummonerV1CurrentSummonerJwt {
    data: string
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolPerksV1Perks {
    data: Daum28[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Daum28 {
    iconPath: string
    id: number
    longDesc: string
    name: string
    recommendationDescriptor: string
    shortDesc: string
    slotType: string
    styleId: number
    styleIdName: string
    tooltip: string
  }
  
export interface LolGameQueuesV1Queues {
    data: Daum29[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Daum29 {
    allowablePremadeSizes: number[]
    areFreeChampionsAllowed: boolean
    assetMutator: string
    category: string
    championsRequiredToPlay: number
    description: string
    detailedDescription: string
    gameMode: string
    gameTypeConfig: GameTypeConfig3
    id: number
    isRanked: boolean
    isTeamBuilderManaged: boolean
    lastToggledOffTime: number
    lastToggledOnTime: number
    mapId: number
    maxDivisionForPremadeSize2: string
    maxTierForPremadeSize2: string
    maximumParticipantListSize: number
    minLevel: number
    minimumParticipantListSize: number
    name: string
    numPlayersPerTeam: number
    queueAvailability: string
    queueRewards: QueueRewards2
    removalFromGameAllowed: boolean
    removalFromGameDelayMinutes: number
    shortName: string
    showPositionSelector: boolean
    spectatorEnabled: boolean
    type: string
  }
  
export interface GameTypeConfig3 {
    advancedLearningQuests: boolean
    allowTrades: boolean
    banMode: string
    banTimerDuration: number
    battleBoost: boolean
    crossTeamChampionPool: boolean
    deathMatch: boolean
    doNotRemove: boolean
    duplicatePick: boolean
    exclusivePick: boolean
    gameModeOverride: any
    id: number
    learningQuests: boolean
    mainPickTimerDuration: number
    maxAllowableBans: number
    name: string
    numPlayersPerTeamOverride: any
    onboardCoopBeginner: boolean
    pickMode: string
    postPickTimerDuration: number
    reroll: boolean
    teamChampionPool: boolean
  }
  
export interface QueueRewards2 {
    isChampionPointsEnabled: boolean
    isIpEnabled: boolean
    isXpEnabled: boolean
    partySizeIpRewards: any[]
  }
  
export interface LolGameQueuesV1Custom {
    data: Data86
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data86 {
    gameServerRegions: any
    queueAvailability: string
    spectatorPolicies: string[]
    spectatorSlotLimit: number
    subcategories: Subcategory[]
  }
  
export interface Subcategory {
    customSpectatorPolicies: any[]
    gameMode: string
    mapId: number
    maxPlayerCount: number
    maximumParticipantListSize: number
    minLevel: number
    minimumParticipantListSize: number
    mutators: Mutator[]
    numPlayersPerTeam: number
    queueAvailability: string
  }
  
export interface Mutator {
    advancedLearningQuests: boolean
    allowTrades: boolean
    banMode: string
    banTimerDuration: number
    battleBoost: boolean
    crossTeamChampionPool: boolean
    deathMatch: boolean
    doNotRemove: boolean
    duplicatePick: boolean
    exclusivePick: boolean
    gameModeOverride: any
    id: number
    learningQuests: boolean
    mainPickTimerDuration: number
    maxAllowableBans: number
    name: string
    numPlayersPerTeamOverride: any
    onboardCoopBeginner: boolean
    pickMode: string
    postPickTimerDuration: number
    reroll: boolean
    teamChampionPool: boolean
  }
  
export interface LolGameQueuesV1CustomNonDefault {
    data: Data87
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data87 {
    gameServerRegions: any
    queueAvailability: string
    spectatorPolicies: any[]
    spectatorSlotLimit: number
    subcategories: Subcategory2[]
  }
  
export interface Subcategory2 {
    customSpectatorPolicies: any[]
    gameMode: string
    mapId: number
    maxPlayerCount: number
    maximumParticipantListSize: number
    minLevel: number
    minimumParticipantListSize: number
    mutators: Mutator2[]
    numPlayersPerTeam: number
    queueAvailability: string
  }
  
export interface Mutator2 {
    advancedLearningQuests: boolean
    allowTrades: boolean
    banMode: string
    banTimerDuration: number
    battleBoost: boolean
    crossTeamChampionPool: boolean
    deathMatch: boolean
    doNotRemove: boolean
    duplicatePick: boolean
    exclusivePick: boolean
    gameModeOverride: any
    id: number
    learningQuests: boolean
    mainPickTimerDuration: number
    maxAllowableBans: number
    name: string
    numPlayersPerTeamOverride: any
    onboardCoopBeginner: boolean
    pickMode: string
    postPickTimerDuration: number
    reroll: boolean
    teamChampionPool: boolean
  }
  
export interface LolPerksV1Styles {
    data: Daum30[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Daum30 {
    allowedSubStyles: number[]
    assetMap: AssetMap
    defaultPageName: string
    defaultPerks: number[]
    defaultSubStyle: number
    iconPath: string
    id: number
    idName: string
    name: string
    slots: Slot2[]
    subStyleBonus: SubStyleBonu[]
    tooltip: string
  }
  
export interface AssetMap {
    p8000_s0_k0?: string
    p8000_s0_k8005?: string
    p8000_s0_k8008?: string
    p8000_s0_k8010?: string
    p8000_s0_k8021?: string
    p8000_s8100_k0?: string
    p8000_s8100_k8005?: string
    p8000_s8100_k8008?: string
    p8000_s8100_k8010?: string
    p8000_s8100_k8021?: string
    p8000_s8200_k0?: string
    p8000_s8200_k8005?: string
    p8000_s8200_k8008?: string
    p8000_s8200_k8010?: string
    p8000_s8200_k8021?: string
    p8000_s8300_k0?: string
    p8000_s8300_k8005?: string
    p8000_s8300_k8008?: string
    p8000_s8300_k8010?: string
    p8000_s8300_k8021?: string
    p8000_s8400_k0?: string
    p8000_s8400_k8005?: string
    p8000_s8400_k8008?: string
    p8000_s8400_k8010?: string
    p8000_s8400_k8021?: string
    svg_icon: string
    svg_icon_16: string
    p8100_s0_k0?: string
    p8100_s0_k8112?: string
    p8100_s0_k8124?: string
    p8100_s0_k8128?: string
    p8100_s0_k9923?: string
    p8100_s8000_k0?: string
    p8100_s8000_k8112?: string
    p8100_s8000_k8124?: string
    p8100_s8000_k8128?: string
    p8100_s8000_k9923?: string
    p8100_s8200_k0?: string
    p8100_s8200_k8112?: string
    p8100_s8200_k8124?: string
    p8100_s8200_k8128?: string
    p8100_s8200_k9923?: string
    p8100_s8300_k0?: string
    p8100_s8300_k8112?: string
    p8100_s8300_k8124?: string
    p8100_s8300_k8128?: string
    p8100_s8300_k9923?: string
    p8100_s8400_k0?: string
    p8100_s8400_k8112?: string
    p8100_s8400_k8124?: string
    p8100_s8400_k8128?: string
    p8100_s8400_k9923?: string
    p8200_s0_k0?: string
    p8200_s0_k8214?: string
    p8200_s0_k8229?: string
    p8200_s0_k8230?: string
    p8200_s8000_k0?: string
    p8200_s8000_k8214?: string
    p8200_s8000_k8229?: string
    p8200_s8000_k8230?: string
    p8200_s8100_k0?: string
    p8200_s8100_k8214?: string
    p8200_s8100_k8229?: string
    p8200_s8100_k8230?: string
    p8200_s8300_k0?: string
    p8200_s8300_k8214?: string
    p8200_s8300_k8229?: string
    p8200_s8300_k8230?: string
    p8200_s8400_k0?: string
    p8200_s8400_k8214?: string
    p8200_s8400_k8229?: string
    p8200_s8400_k8230?: string
    p8300_s0_k0?: string
    p8300_s0_k8351?: string
    p8300_s0_k8360?: string
    p8300_s0_k8369?: string
    p8300_s8000_k0?: string
    p8300_s8000_k8351?: string
    p8300_s8000_k8360?: string
    p8300_s8000_k8369?: string
    p8300_s8100_k0?: string
    p8300_s8100_k8351?: string
    p8300_s8100_k8360?: string
    p8300_s8100_k8369?: string
    p8300_s8200_k0?: string
    p8300_s8200_k8351?: string
    p8300_s8200_k8360?: string
    p8300_s8200_k8369?: string
    p8300_s8400_k0?: string
    p8300_s8400_k8351?: string
    p8300_s8400_k8360?: string
    p8300_s8400_k8369?: string
    p8400_s0_k0?: string
    p8400_s0_k8437?: string
    p8400_s0_k8439?: string
    p8400_s0_k8465?: string
    p8400_s8000_k0?: string
    p8400_s8000_k8437?: string
    p8400_s8000_k8439?: string
    p8400_s8000_k8465?: string
    p8400_s8100_k0?: string
    p8400_s8100_k8437?: string
    p8400_s8100_k8439?: string
    p8400_s8100_k8465?: string
    p8400_s8200_k0?: string
    p8400_s8200_k8437?: string
    p8400_s8200_k8439?: string
    p8400_s8200_k8465?: string
    p8400_s8300_k0?: string
    p8400_s8300_k8437?: string
    p8400_s8300_k8439?: string
    p8400_s8300_k8465?: string
  }
  
export interface Slot2 {
    perks: number[]
    slotLabel: string
    type: string
  }
  
export interface SubStyleBonu {
    perkId: number
    styleId: number
  }
  
export interface LolRankedV1SignedRankedStats {
    data: Data88
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data88 {
    earnedRegaliaRewardIds: any[]
    highestPreviousSeasonAchievedRank: string
    highestPreviousSeasonAchievedTier: string
    highestPreviousSeasonEndRank: string
    highestPreviousSeasonEndTier: string
    jwt: string
    queues: Queue2[]
    seasons: Seasons2
    splitsProgress: SplitsProgress
  }
  
export interface Queue2 {
    highestRank: string
    highestTier: string
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedRank: string
    previousSeasonAchievedTier: string
    previousSeasonEndRank: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    rank: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface Seasons2 {
    RANKED_FLEX_SR: RankedFlexSr
    RANKED_SOLO_5x5: RankedSolo5x5
    RANKED_TFT: RankedTft
    RANKED_TFT_DOUBLE_UP: RankedTftDoubleUp
    RANKED_TFT_PAIRS: RankedTftPairs
    RANKED_TFT_TURBO: RankedTftTurbo
  }
  
export interface RankedFlexSr {
    currentSeasonEnd: number
    currentSeasonId: number
    nextSeasonStart: number
  }
  
export interface RankedSolo5x5 {
    currentSeasonEnd: number
    currentSeasonId: number
    nextSeasonStart: number
  }
  
export interface RankedTft {
    currentSeasonEnd: number
    currentSeasonId: number
    nextSeasonStart: number
  }
  
export interface RankedTftDoubleUp {
    currentSeasonEnd: number
    currentSeasonId: number
    nextSeasonStart: number
  }
  
export interface RankedTftPairs {
    currentSeasonEnd: number
    currentSeasonId: number
    nextSeasonStart: number
  }
  
export interface RankedTftTurbo {
    currentSeasonEnd: number
    currentSeasonId: number
    nextSeasonStart: number
  }
  
export interface SplitsProgress {}
  
export interface LolRankedV1RankedStatsByPuuid {
    data: Data89
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data89 {
    earnedRegaliaRewardIds: any[]
    highestCurrentSeasonReachedTierSR: string
    highestPreviousSeasonAchievedDivision: string
    highestPreviousSeasonAchievedTier: string
    highestPreviousSeasonEndDivision: string
    highestPreviousSeasonEndTier: string
    highestRankedEntry: HighestRankedEntry
    highestRankedEntrySR: HighestRankedEntrySr
    queueMap: QueueMap
    queues: Queue3[]
    rankedRegaliaLevel: number
    seasons: Seasons3
    splitsProgress: SplitsProgress2
  }
  
export interface HighestRankedEntry {
    division: string
    highestDivision: string
    highestTier: string
    isProvisional: boolean
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedDivision: string
    previousSeasonAchievedTier: string
    previousSeasonEndDivision: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface HighestRankedEntrySr {
    division: string
    highestDivision: string
    highestTier: string
    isProvisional: boolean
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedDivision: string
    previousSeasonAchievedTier: string
    previousSeasonEndDivision: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface QueueMap {
    RANKED_FLEX_SR: RankedFlexSr2
    RANKED_SOLO_5x5: RankedSolo5x52
    RANKED_TFT: RankedTft2
    RANKED_TFT_DOUBLE_UP: RankedTftDoubleUp2
    RANKED_TFT_PAIRS: RankedTftPairs2
    RANKED_TFT_TURBO: RankedTftTurbo2
  }
  
export interface RankedFlexSr2 {
    division: string
    highestDivision: string
    highestTier: string
    isProvisional: boolean
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedDivision: string
    previousSeasonAchievedTier: string
    previousSeasonEndDivision: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface RankedSolo5x52 {
    division: string
    highestDivision: string
    highestTier: string
    isProvisional: boolean
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedDivision: string
    previousSeasonAchievedTier: string
    previousSeasonEndDivision: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface RankedTft2 {
    division: string
    highestDivision: string
    highestTier: string
    isProvisional: boolean
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedDivision: string
    previousSeasonAchievedTier: string
    previousSeasonEndDivision: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface RankedTftDoubleUp2 {
    division: string
    highestDivision: string
    highestTier: string
    isProvisional: boolean
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedDivision: string
    previousSeasonAchievedTier: string
    previousSeasonEndDivision: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface RankedTftPairs2 {
    division: string
    highestDivision: string
    highestTier: string
    isProvisional: boolean
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedDivision: string
    previousSeasonAchievedTier: string
    previousSeasonEndDivision: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface RankedTftTurbo2 {
    division: string
    highestDivision: string
    highestTier: string
    isProvisional: boolean
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedDivision: string
    previousSeasonAchievedTier: string
    previousSeasonEndDivision: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface Queue3 {
    division: string
    highestDivision: string
    highestTier: string
    isProvisional: boolean
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedDivision: string
    previousSeasonAchievedTier: string
    previousSeasonEndDivision: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface Seasons3 {
    RANKED_FLEX_SR: RankedFlexSr3
    RANKED_SOLO_5x5: RankedSolo5x53
    RANKED_TFT: RankedTft3
    RANKED_TFT_DOUBLE_UP: RankedTftDoubleUp3
    RANKED_TFT_PAIRS: RankedTftPairs3
    RANKED_TFT_TURBO: RankedTftTurbo3
  }
  
export interface RankedFlexSr3 {
    currentSeasonEnd: number
    currentSeasonId: number
    nextSeasonStart: number
  }
  
export interface RankedSolo5x53 {
    currentSeasonEnd: number
    currentSeasonId: number
    nextSeasonStart: number
  }
  
export interface RankedTft3 {
    currentSeasonEnd: number
    currentSeasonId: number
    nextSeasonStart: number
  }
  
export interface RankedTftDoubleUp3 {
    currentSeasonEnd: number
    currentSeasonId: number
    nextSeasonStart: number
  }
  
export interface RankedTftPairs3 {
    currentSeasonEnd: number
    currentSeasonId: number
    nextSeasonStart: number
  }
  
export interface RankedTftTurbo3 {
    currentSeasonEnd: number
    currentSeasonId: number
    nextSeasonStart: number
  }
  
export interface SplitsProgress2 {}
  
export interface LolRankedV1CurrentRankedStats {
    data: Data90
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data90 {
    earnedRegaliaRewardIds: any[]
    highestCurrentSeasonReachedTierSR: string
    highestPreviousSeasonAchievedDivision: string
    highestPreviousSeasonAchievedTier: string
    highestPreviousSeasonEndDivision: string
    highestPreviousSeasonEndTier: string
    highestRankedEntry: HighestRankedEntry2
    highestRankedEntrySR: HighestRankedEntrySr2
    queueMap: QueueMap2
    queues: Queue4[]
    rankedRegaliaLevel: number
    seasons: Seasons4
    splitsProgress: SplitsProgress3
  }
  
export interface HighestRankedEntry2 {
    division: string
    highestDivision: string
    highestTier: string
    isProvisional: boolean
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedDivision: string
    previousSeasonAchievedTier: string
    previousSeasonEndDivision: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface HighestRankedEntrySr2 {
    division: string
    highestDivision: string
    highestTier: string
    isProvisional: boolean
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedDivision: string
    previousSeasonAchievedTier: string
    previousSeasonEndDivision: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface QueueMap2 {
    RANKED_FLEX_SR: RankedFlexSr4
    RANKED_SOLO_5x5: RankedSolo5x54
    RANKED_TFT: RankedTft4
    RANKED_TFT_DOUBLE_UP: RankedTftDoubleUp4
    RANKED_TFT_PAIRS: RankedTftPairs4
    RANKED_TFT_TURBO: RankedTftTurbo4
  }
  
export interface RankedFlexSr4 {
    division: string
    highestDivision: string
    highestTier: string
    isProvisional: boolean
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedDivision: string
    previousSeasonAchievedTier: string
    previousSeasonEndDivision: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface RankedSolo5x54 {
    division: string
    highestDivision: string
    highestTier: string
    isProvisional: boolean
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedDivision: string
    previousSeasonAchievedTier: string
    previousSeasonEndDivision: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface RankedTft4 {
    division: string
    highestDivision: string
    highestTier: string
    isProvisional: boolean
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedDivision: string
    previousSeasonAchievedTier: string
    previousSeasonEndDivision: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface RankedTftDoubleUp4 {
    division: string
    highestDivision: string
    highestTier: string
    isProvisional: boolean
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedDivision: string
    previousSeasonAchievedTier: string
    previousSeasonEndDivision: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface RankedTftPairs4 {
    division: string
    highestDivision: string
    highestTier: string
    isProvisional: boolean
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedDivision: string
    previousSeasonAchievedTier: string
    previousSeasonEndDivision: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface RankedTftTurbo4 {
    division: string
    highestDivision: string
    highestTier: string
    isProvisional: boolean
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedDivision: string
    previousSeasonAchievedTier: string
    previousSeasonEndDivision: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface Queue4 {
    division: string
    highestDivision: string
    highestTier: string
    isProvisional: boolean
    leaguePoints: number
    losses: number
    miniSeriesProgress: string
    previousSeasonAchievedDivision: string
    previousSeasonAchievedTier: string
    previousSeasonEndDivision: string
    previousSeasonEndTier: string
    provisionalGameThreshold: number
    provisionalGamesRemaining: number
    queueType: string
    ratedRating: number
    ratedTier: string
    tier: string
    warnings: any
    wins: number
  }
  
export interface Seasons4 {
    RANKED_FLEX_SR: RankedFlexSr5
    RANKED_SOLO_5x5: RankedSolo5x55
    RANKED_TFT: RankedTft5
    RANKED_TFT_DOUBLE_UP: RankedTftDoubleUp5
    RANKED_TFT_PAIRS: RankedTftPairs5
    RANKED_TFT_TURBO: RankedTftTurbo5
  }
  
export interface RankedFlexSr5 {
    currentSeasonEnd: number
    currentSeasonId: number
    nextSeasonStart: number
  }
  
export interface RankedSolo5x55 {
    currentSeasonEnd: number
    currentSeasonId: number
    nextSeasonStart: number
  }
  
export interface RankedTft5 {
    currentSeasonEnd: number
    currentSeasonId: number
    nextSeasonStart: number
  }
  
export interface RankedTftDoubleUp5 {
    currentSeasonEnd: number
    currentSeasonId: number
    nextSeasonStart: number
  }
  
export interface RankedTftPairs5 {
    currentSeasonEnd: number
    currentSeasonId: number
    nextSeasonStart: number
  }
  
export interface RankedTftTurbo5 {
    currentSeasonEnd: number
    currentSeasonId: number
    nextSeasonStart: number
  }
  
export interface SplitsProgress3 {}
  
export interface LolCollectionsV1InventoriesBySummonerIdChampionMastery {
    data: any[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolCollectionsV1InventoriesLocalPlayerChampionMasteryScore {
    data: number
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolSummonerV1CurrentSummonerRerollPoints {
    data: Data91
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data91 {
    currentPoints: number
    maxRolls: number
    numberOfRolls: number
    pointsCostToRoll: number
    pointsToReroll: number
  }
  
export interface LolSummonerV1CurrentSummonerAutofill {
    data: any[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolSummonerV1SummonerRequestsReady {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolSummonerV1Status {
    data: Data92
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data92 {
    ready: boolean
  }
  
export interface LolPublishingContentV1Ready {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolSummonerV1CurrentSummoner {
    data: Data93
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data93 {
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
  
export interface RerollPoints {
    currentPoints: number
    maxRolls: number
    numberOfRolls: number
    pointsCostToRoll: number
    pointsToReroll: number
  }
  
export interface LolRankedV1SplitsConfig {
    data: Data94
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data94 {
    currentSeasonId: number
    currentSplit: CurrentSplit
    currentSplitId: number
    rewardInfoByRewardId: RewardInfoByRewardId
    splits: Split[]
  }
  
export interface CurrentSplit {
    endTimeMillis: number
    rewardTrack: RewardTrack[]
    seasonId: number
    splitId: number
    startTimeMillis: number
    victoriousSkinRewardGroup: VictoriousSkinRewardGroup
  }
  
export interface RewardTrack {
    rewards: Reward20[]
    splitPoints: number
  }
  
export interface Reward20 {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface VictoriousSkinRewardGroup {
    itemInstanceId: string
    splitPointsByHighestAchievedTier: SplitPointsByHighestAchievedTier
  }
  
export interface SplitPointsByHighestAchievedTier {
    BRONZE: number
    CHALLENGER: number
    DIAMOND: number
    GOLD: number
    GRANDMASTER: number
    IRON: number
    MASTER: number
    PLATINUM: number
    SILVER: number
  }
  
export interface RewardInfoByRewardId {
    "03b769ab-bdf7-4eda-a476-85908cb6dd45": N03b769abBdf74edaA47685908cb6dd45
    "1e041e42-36e1-4f7c-92f7-eeaa6b66751d": N1e041e4236e14f7c92f7Eeaa6b66751d
    "33ef355b-4b37-4cd1-a6b4-5e357e6e9808": N33ef355b4b374cd1A6b45e357e6e9808
    "36a55436-73de-405c-b57c-e518706a86f2": N36a5543673de405cB57cE518706a86f2
    "3faefd24-d2c1-46a5-84a2-f9ff19e51910": N3faefd24D2c146a584a2F9ff19e51910
    "40b94e8b-cce6-4f37-a360-c5c175d83a76": N40b94e8bCce64f37A360C5c175d83a76
    "94532203-09f6-4446-9ac3-c9da16a9f681": N9453220309f644469ac3C9da16a9f681
    "94910107-7396-44d3-96eb-2a3150df5f0c": N94910107739644d396eb2a3150df5f0c
    "b23ac0e8-8b01-40cc-be42-b2442a73d3fc": B23ac0e88b0140ccBe42B2442a73d3fc
    "bbdf56f5-780d-4774-9c82-9eb8c7689e72": Bbdf56f5780d47749c829eb8c7689e72
    "bcb68868-c4a4-48d0-bc3f-84fd538a842c": Bcb68868C4a448d0Bc3f84fd538a842c
    "bd41e712-bca0-4d29-b8e1-67f5348d2abb": Bd41e712Bca04d29B8e167f5348d2abb
    "c2c5c1b7-1e9d-4bbc-bc3f-a02647d455b5": C2c5c1b71e9d4bbcBc3fA02647d455b5
    "c6fb8856-2958-40fd-9645-f1639a6ca0a6": C6fb8856295840fd9645F1639a6ca0a6
    "df1019f3-db04-4854-b6b8-5fb613c2ea6d": Df1019f3Db044854B6b85fb613c2ea6d
    "e5783dfa-a729-4034-a36b-515d39640c06": E5783dfaA7294034A36b515d39640c06
    "efbd4be5-bd63-452b-871d-9e0402fcac97": Efbd4be5Bd63452b871d9e0402fcac97
    "fe0aaffa-e9b6-4fd3-8f1a-533edf7390c3": Fe0aaffaE9b64fd38f1a533edf7390c3
  }
  
export interface N03b769abBdf74edaA47685908cb6dd45 {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface N1e041e4236e14f7c92f7Eeaa6b66751d {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface N33ef355b4b374cd1A6b45e357e6e9808 {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface N36a5543673de405cB57cE518706a86f2 {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface N3faefd24D2c146a584a2F9ff19e51910 {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface N40b94e8bCce64f37A360C5c175d83a76 {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface N9453220309f644469ac3C9da16a9f681 {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface N94910107739644d396eb2a3150df5f0c {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface B23ac0e88b0140ccBe42B2442a73d3fc {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface Bbdf56f5780d47749c829eb8c7689e72 {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface Bcb68868C4a448d0Bc3f84fd538a842c {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface Bd41e712Bca04d29B8e167f5348d2abb {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface C2c5c1b71e9d4bbcBc3fA02647d455b5 {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface C6fb8856295840fd9645F1639a6ca0a6 {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface Df1019f3Db044854B6b85fb613c2ea6d {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface E5783dfaA7294034A36b515d39640c06 {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface Efbd4be5Bd63452b871d9e0402fcac97 {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface Fe0aaffaE9b64fd38f1a533edf7390c3 {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface Split {
    endTimeMillis: number
    rewardTrack: RewardTrack2[]
    seasonId: number
    splitId: number
    startTimeMillis: number
    victoriousSkinRewardGroup: VictoriousSkinRewardGroup2
  }
  
export interface RewardTrack2 {
    rewards: Reward21[]
    splitPoints: number
  }
  
export interface Reward21 {
    championId: number
    description: string
    id: string
    pointsRequired: number
    quantity: number
    regaliaLevel: any
    rewardType: string
    splitId: number
  }
  
export interface VictoriousSkinRewardGroup2 {
    itemInstanceId: string
    splitPointsByHighestAchievedTier: SplitPointsByHighestAchievedTier2
  }
  
export interface SplitPointsByHighestAchievedTier2 {
    BRONZE: number
    CHALLENGER: number
    DIAMOND: number
    GOLD: number
    GRANDMASTER: number
    IRON: number
    MASTER: number
    PLATINUM: number
    SILVER: number
  }
  
export interface LolRankedV1Notifications {
    data: any[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolRewardsV1Groups {
    data: Daum31[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Daum31 {
    active: boolean
    celebrationType: string
    childRewardGroupIds: any[]
    id: string
    localizations: Localizations
    media: Media2
    productId: string
    rewardStrategy: string
    rewards: Reward22[]
    selectionStrategyConfig?: SelectionStrategyConfig
    types: any[]
  }
  
export interface Localizations {
    description: string
    title: string
  }
  
export interface Media2 {}
  
export interface Reward22 {
    fulfillmentSource: string
    id: string
    itemId: string
    itemType: string
    localizations: Localizations2
    media: Media3
    quantity: number
  }
  
export interface Localizations2 {
    details?: string
    title?: string
  }
  
export interface Media3 {
    iconUrl?: string
  }
  
export interface SelectionStrategyConfig {
    maxSelectionsAllowed: number
    minSelectionsAllowed: number
  }
  
export interface LolRewardsV1Grants {
    data: any[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolEventShopV1EventShopRewardTrackItems {
    data: any[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolEventShopV1EventShopRewardTrackProgress {
    data: Data95
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data95 {
    currentLevelXP: number
    futureLevelProgress: number
    iteration: number
    level: number
    levelProgress: number
    passProgress: number
    totalLevelXP: number
  }
  
export interface LolEventShopV1EventShopRewardTrackBonusProgress {
    data: Data96
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data96 {
    currentLevelXP: number
    futureLevelProgress: number
    iteration: number
    level: number
    levelProgress: number
    passProgress: number
    totalLevelXP: number
  }
  
export interface LolSettingsV2Ready {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolPlayerBehaviorV1CodeOfConductNotification {
    data: Data97
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data97 {
    message: string
  }
  
export interface LolClashV1SimpleStateFlags {
    data: Daum32[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Daum32 {
    id: string
    status: string
  }
  
export interface LolSettingsV1LocalByCategory {
    data: Data98
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data98 {
    data: Data99
    schemaVersion: number
  }
  
export interface Data99 {
    simpleStateFlagIds: string[]
  }
  
export interface LolSettingsV2LocalByCategory {
    data: Data100
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data100 {
    data: Data101
    schemaVersion: number
  }
  
export interface Data101 {
    simpleStateFlagIds: string[]
  }
  
export interface LolStoreV1GetStoreUrl {
    data: string
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolGameSettingsV1GameSettings {
    data: Data102
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data102 {
    FloatingText: FloatingText
    General: General
    HUD: Hud
    LossOfControl: LossOfControl
    Performance: Performance
    Voice: Voice2
    Volume: Volume
  }
  
export interface FloatingText {
    Damage_Enabled: boolean
    Dodge_Enabled: boolean
    EnemyDamage_Enabled: boolean
    Experience_Enabled: boolean
    Gold_Enabled: boolean
    Heal_Enabled: boolean
    Invulnerable_Enabled: boolean
    Level_Enabled: boolean
    ManaDamage_Enabled: boolean
    QuestReceived_Enabled: boolean
    Score_Enabled: boolean
    Special_Enabled: boolean
  }
  
export interface General {
    AutoAcquireTarget: boolean
    BindSysKeys: boolean
    CursorOverride: boolean
    CursorScale: number
    EnableAudio: boolean
    EnableTargetedAttackMove: boolean
    GameMouseSpeed: number
    HideEyeCandy: boolean
    OSXMouseAcceleration: boolean
    PredictMovement: boolean
    PreferDX9LegacyMode: boolean
    PreferOpenGLLegacyMode: boolean
    RecommendJunglePaths: boolean
    RelativeTeamColors: boolean
    ShowCursorLocator: boolean
    ShowGodray: boolean
    ShowTurretRangeIndicators: boolean
    SnapCameraOnRespawn: boolean
    ThemeMusic: number
    WaitForVerticalSync: boolean
    WindowMode: number
  }
  
export interface Hud {
    AutoDisplayTarget: boolean
    CameraLockMode: number
    ChatChannelVisibility: number
    ChatScale: number
    DisableHudSpellClick: boolean
    DrawHealthBars: boolean
    EmotePopupUIDisplayMode: number
    EmoteSize: number
    EnableLineMissileVis: boolean
    EternalsMilestoneDisplayMode: number
    FlashScreenWhenDamaged: boolean
    FlashScreenWhenStunned: boolean
    FlipMiniMap: boolean
    GlobalScale: number
    KeyboardScrollSpeed: number
    MapScrollSpeed: number
    MiddleClickDragScrollEnabled: boolean
    MinimapMoveSelf: boolean
    MinimapScale: number
    MirroredScoreboard: boolean
    NumericCooldownFormat: number
    ObjectiveVoteScale: number
    ScrollSmoothingEnabled: boolean
    ShowAllChannelChat: boolean
    ShowAlliedChat: boolean
    ShowAttackRadius: boolean
    ShowNeutralCamps: boolean
    ShowOffScreenPointsOfInterest: boolean
    ShowSpellCosts: boolean
    ShowSpellRecommendations: boolean
    ShowSummonerNames: boolean
    ShowSummonerNamesInScoreboard: boolean
    ShowTeamFramesOnLeft: boolean
    ShowTimestamps: boolean
    SmartCastOnKeyRelease: boolean
    SmartCastWithIndicator_CastWhenNewSpellSelected: boolean
  }
  
export interface LossOfControl {
    LossOfControlEnabled: boolean
    ShowSlows: boolean
  }
  
export interface Performance {
    EnableHUDAnimations: boolean
  }
  
export interface Voice2 {
    ShowVoiceChatHalos: boolean
    ShowVoicePanelWithScoreboard: boolean
  }
  
export interface Volume {
    AmbienceMute: boolean
    AmbienceVolume: number
    AnnouncerMute: boolean
    AnnouncerVolume: number
    MasterMute: boolean
    MasterVolume: number
    MusicMute: boolean
    MusicVolume: number
    PingsMute: boolean
    PingsVolume: number
    SfxMute: boolean
    SfxVolume: number
    VoiceMute: boolean
    VoiceVolume: number
  }
  
export interface LolGameSettingsV1InputSettings {
    data: Data103
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data103 {
    GameEvents: GameEvents
    HUDEvents: Hudevents
    Quickbinds: Quickbinds
    ShopEvents: ShopEvents
  }
  
export interface GameEvents {
    evntPlayerPing: string
    evntPlayerPingCursor: string
    evntPlayerPingCursorDanger: string
    evntPlayerPingDanger: string
    evtCameraLockToggle: string
    evtCameraSnap: string
    evtCastAvatarSpell1: string
    evtCastAvatarSpell2: string
    evtCastSpell1: string
    evtCastSpell2: string
    evtCastSpell3: string
    evtCastSpell4: string
    evtChampMasteryDisplay: string
    evtChampionOnly: string
    evtChatHistory: string
    evtDragScrollLock: string
    evtDrawHud: string
    evtEmoteDance: string
    evtEmoteJoke: string
    evtEmoteLaugh: string
    evtEmoteTaunt: string
    evtEmoteToggle: string
    evtLevelSpell1: string
    evtLevelSpell2: string
    evtLevelSpell3: string
    evtLevelSpell4: string
    evtNormalCastAvatarSpell1: string
    evtNormalCastAvatarSpell2: string
    evtNormalCastItem1: string
    evtNormalCastItem2: string
    evtNormalCastItem3: string
    evtNormalCastItem4: string
    evtNormalCastItem5: string
    evtNormalCastItem6: string
    evtNormalCastSpell1: string
    evtNormalCastSpell2: string
    evtNormalCastSpell3: string
    evtNormalCastSpell4: string
    evtNormalCastVisionItem: string
    evtOnUIMouse4Pan: string
    evtOpenShop: string
    evtPetMoveClick: string
    evtPlayerAttackMove: string
    evtPlayerAttackMoveClick: string
    evtPlayerAttackOnlyClick: string
    evtPlayerCursorPingAreaIsWarded: string
    evtPlayerHoldPosition: string
    evtPlayerMoveClick: string
    evtPlayerPingAllIn: string
    evtPlayerPingAreaIsWarded: string
    evtPlayerPingBait: string
    evtPlayerPingComeHere: string
    evtPlayerPingHold: string
    evtPlayerPingMIA: string
    evtPlayerPingOMW: string
    evtPlayerPingPush: string
    evtPlayerPingRadialDanger: string
    evtPlayerPingVisionCleared: string
    evtPlayerPingVisionNeeded: string
    evtPlayerStopPosition: string
    evtPushToTalk: string
    evtRadialEmoteInstantOpen: string
    evtRadialEmoteOpen: string
    evtRadialEmotePlaySlot0: string
    evtRadialEmotePlaySlot1: string
    evtRadialEmotePlaySlot2: string
    evtRadialEmotePlaySlot3: string
    evtRadialEmotePlaySlot4: string
    evtScrollDown: string
    evtScrollLeft: string
    evtScrollRight: string
    evtScrollUp: string
    evtSelectAlly1: string
    evtSelectAlly2: string
    evtSelectAlly3: string
    evtSelectAlly4: string
    evtSelectSelf: string
    evtSelfCastAvatarSpell1: string
    evtSelfCastAvatarSpell2: string
    evtSelfCastItem1: string
    evtSelfCastItem2: string
    evtSelfCastItem3: string
    evtSelfCastItem4: string
    evtSelfCastItem5: string
    evtSelfCastItem6: string
    evtSelfCastSpell1: string
    evtSelfCastSpell2: string
    evtSelfCastSpell3: string
    evtSelfCastSpell4: string
    evtSelfCastVisionItem: string
    evtShowCharacterMenu: string
    evtShowHealthBars: string
    evtShowScoreBoard: string
    evtShowSummonerNames: string
    evtShowVoicePanel: string
    evtSmartCastAvatarSpell1: string
    evtSmartCastAvatarSpell2: string
    evtSmartCastItem1: string
    evtSmartCastItem2: string
    evtSmartCastItem3: string
    evtSmartCastItem4: string
    evtSmartCastItem5: string
    evtSmartCastItem6: string
    evtSmartCastSpell1: string
    evtSmartCastSpell2: string
    evtSmartCastSpell3: string
    evtSmartCastSpell4: string
    evtSmartCastVisionItem: string
    evtSmartCastWithIndicatorAvatarSpell1: string
    evtSmartCastWithIndicatorAvatarSpell2: string
    evtSmartCastWithIndicatorItem1: string
    evtSmartCastWithIndicatorItem2: string
    evtSmartCastWithIndicatorItem3: string
    evtSmartCastWithIndicatorItem4: string
    evtSmartCastWithIndicatorItem5: string
    evtSmartCastWithIndicatorItem6: string
    evtSmartCastWithIndicatorSpell1: string
    evtSmartCastWithIndicatorSpell2: string
    evtSmartCastWithIndicatorSpell3: string
    evtSmartCastWithIndicatorSpell4: string
    evtSmartCastWithIndicatorVisionItem: string
    evtSmartPlusSelfCastAvatarSpell1: string
    evtSmartPlusSelfCastAvatarSpell2: string
    evtSmartPlusSelfCastItem1: string
    evtSmartPlusSelfCastItem2: string
    evtSmartPlusSelfCastItem3: string
    evtSmartPlusSelfCastItem4: string
    evtSmartPlusSelfCastItem5: string
    evtSmartPlusSelfCastItem6: string
    evtSmartPlusSelfCastSpell1: string
    evtSmartPlusSelfCastSpell2: string
    evtSmartPlusSelfCastSpell3: string
    evtSmartPlusSelfCastSpell4: string
    evtSmartPlusSelfCastVisionItem: string
    evtSmartPlusSelfCastWithIndicatorAvatarSpell1: string
    evtSmartPlusSelfCastWithIndicatorAvatarSpell2: string
    evtSmartPlusSelfCastWithIndicatorItem1: string
    evtSmartPlusSelfCastWithIndicatorItem2: string
    evtSmartPlusSelfCastWithIndicatorItem3: string
    evtSmartPlusSelfCastWithIndicatorItem4: string
    evtSmartPlusSelfCastWithIndicatorItem5: string
    evtSmartPlusSelfCastWithIndicatorItem6: string
    evtSmartPlusSelfCastWithIndicatorSpell1: string
    evtSmartPlusSelfCastWithIndicatorSpell2: string
    evtSmartPlusSelfCastWithIndicatorSpell3: string
    evtSmartPlusSelfCastWithIndicatorSpell4: string
    evtSmartPlusSelfCastWithIndicatorVisionItem: string
    evtSysMenu: string
    evtToggleMinionHealthBars: string
    evtUseItem1: string
    evtUseItem2: string
    evtUseItem3: string
    evtUseItem4: string
    evtUseItem5: string
    evtUseItem6: string
    evtUseItem7: string
    evtUseVisionItem: string
  }
  
export interface Hudevents {
    evtHoldShowScoreBoard: string
    evtToggleDeathRecapShowcase: string
    evtToggleFPSAndLatency: string
    evtToggleMouseClip: string
    evtTogglePlayerStats: string
  }
  
export interface Quickbinds {
    evtCastAvatarSpell1smart: boolean
    evtCastAvatarSpell2smart: boolean
    evtCastSpell1smart: boolean
    evtCastSpell2smart: boolean
    evtCastSpell3smart: boolean
    evtCastSpell4smart: boolean
    evtUseItem1smart: boolean
    evtUseItem2smart: boolean
    evtUseItem3smart: boolean
    evtUseItem4smart: boolean
    evtUseItem5smart: boolean
    evtUseItem6smart: boolean
    evtUseVisionItemsmart: boolean
  }
  
export interface ShopEvents {
    evtShopFocusSearch: string
    evtShopSwitchTabs: string
  }
  
export interface LolGameSettingsV1Ready {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolChatV1Resources {
    data: Data104
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data104 {
    products: Products
  }
  
export interface Products {
    bacon: Bacon
    league_of_legends: LeagueOfLegends
    ritoplus: Ritoplus
    valorant: Valorant
    wildrift: Wildrift
  }
  
export interface Bacon {
    id: string
    name: string
    patchlines: Patchlines
  }
  
export interface Patchlines {
    "bacon.live": BaconLive
  }
  
export interface BaconLive {
    content_cookies: any[]
    content_paths: ContentPaths
    id: string
    product_id: string
  }
  
export interface ContentPaths {
    social: string
  }
  
export interface LeagueOfLegends {
    id: string
    name: string
    patchlines: Patchlines2
  }
  
export interface Patchlines2 {
    "league_of_legends.live": LeagueOfLegendsLive
    "league_of_legends.pbe": LeagueOfLegendsPbe
  }
  
export interface LeagueOfLegendsLive {
    content_cookies: any[]
    content_paths: ContentPaths2
    id: string
    product_id: string
  }
  
export interface ContentPaths2 {
    social: string
  }
  
export interface LeagueOfLegendsPbe {
    content_cookies: any[]
    content_paths: ContentPaths3
    id: string
    product_id: string
  }
  
export interface ContentPaths3 {
    social: string
  }
  
export interface Ritoplus {
    id: string
    name: string
    patchlines: Patchlines3
  }
  
export interface Patchlines3 {
    "ritoplus.live": RitoplusLive
  }
  
export interface RitoplusLive {
    content_cookies: any[]
    content_paths: ContentPaths4
    id: string
    product_id: string
  }
  
export interface ContentPaths4 {
    social: string
  }
  
export interface Valorant {
    id: string
    name: string
    patchlines: Patchlines4
  }
  
export interface Patchlines4 {
    "valorant.live": ValorantLive
  }
  
export interface ValorantLive {
    content_cookies: any[]
    content_paths: ContentPaths5
    id: string
    product_id: string
  }
  
export interface ContentPaths5 {
    social: string
  }
  
export interface Wildrift {
    id: string
    name: string
    patchlines: Patchlines5
  }
  
export interface Patchlines5 {
    "wildrift.live": WildriftLive
  }
  
export interface WildriftLive {
    content_cookies: any[]
    content_paths: ContentPaths6
    id: string
    product_id: string
  }
  
export interface ContentPaths6 {
    social: string
  }
  
export interface PlayerNotificationsV1NotificationsById {
    data: Data105
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data105 {
    backgroundUrl: string
    created: string
    critical: boolean
    data: Data106
    detailKey: string
    dismissible: boolean
    expires: string
    iconUrl: string
    id: number
    source: string
    state: string
    titleKey: string
    type: string
  }
  
export interface Data106 {}
  
export interface LolPerksV1PerksDisabled {
    data: any[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolPatchV1GameVersion {
    data: string
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolCollectionsV1InventoriesBySummonerIdWardSkins {
    data: Daum33[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Daum33 {
    description: string
    id: number
    name: string
    ownership: Ownership6
    wardImagePath: string
    wardShadowImagePath: string
  }
  
export interface Ownership6 {
    loyaltyReward: boolean
    owned: boolean
    rental: Rental6
    xboxGPReward: boolean
  }
  
export interface Rental6 {
    endDate: number
    purchaseDate: number
    rented: boolean
    winCountRemaining: number
  }
  
export interface LolCosmeticsV1InventoriesBySetNameMapSkins {
    data: Data107
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data107 {
    defaultItemId: number
    groups: Group2[]
    selectedLoadoutItem: SelectedLoadoutItem2
  }
  
export interface Group2 {
    groupId: number
    groupName: string
    items: Item3[]
    numAvailable: number
    numOwned: number
  }
  
export interface Item3 {
    contentId: string
    description: string
    f2p: boolean
    groupId: number
    groupName: string
    isRecentItem: boolean
    itemId: number
    loadoutsIcon: string
    loyalty: boolean
    name: string
    owned: boolean
    purchaseDate: string
    rarityValue: number
    selected: boolean
  }
  
export interface SelectedLoadoutItem2 {
    contentId: string
    description: string
    f2p: boolean
    groupId: number
    groupName: string
    isRecentItem: boolean
    itemId: number
    loadoutsIcon: string
    loyalty: boolean
    name: string
    owned: boolean
    purchaseDate: string
    rarityValue: number
    selected: boolean
  }
  
export interface LolNpeRewardsV1LevelRewardsState {
    data: Data108
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data108 {
    allRewardsClaimed: boolean
  }
  
export interface LolNpeRewardsV1LevelRewards {
    data: Data109
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data109 {
    rewardPacks: RewardPack[]
  }
  
export interface RewardPack {
    delay: number
    index: number
    majorReward: MajorReward
    minorRewards: any[]
    premiumReward: boolean
    requirements: Requirements
    rewardKey: string
    state: string
    type: string
    unlockTime: number
  }
  
export interface MajorReward {
    data: Data110
    renderer: string
  }
  
export interface Data110 {
    ids: number[]
  }
  
export interface Requirements {
    day: number
    level: number
    missionInternalName: string
  }
  
export interface LolNpeTutorialPathV1Settings {
    data: Data111
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data111 {
    hasSeenTutorialPath: boolean
    hasSkippedTutorialPath: boolean
    shouldSeeNewPlayerExperience: boolean
  }
  
export interface LolEventShopV1EventShopTokenBalance {
    data: number
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolNpeTutorialPathV1RewardsChamp {
    data: any
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolMissionsV1Missions {
    data: Daum34[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Daum34 {
    backgroundImageUrl: string
    celebrationType: string
    clientNotifyLevel: string
    completedDate: number
    completionExpression: string
    cooldownTimeMillis: number
    description: string
    display: Display
    displayType: string
    earnedDate: number
    endTime: number
    expiringWarnings: ExpiringWarning[]
    helperText: string
    iconImageUrl: string
    id: string
    internalName: string
    isNew: boolean
    lastUpdatedTimestamp: number
    locale: string
    media: Media4
    metadata: Metadata2
    missionType: string
    objectives: Objec[]
    requirements: string[]
    rewardStrategy: RewardStrategy
    rewards: Reward23[]
    sequence: number
    seriesName: string
    startTime: number
    status: string
    title: string
    viewed: boolean
  }
  
export interface Display {
    attributes: any[]
    locations: string[]
  }
  
export interface ExpiringWarning {
    alertTime: number
    message: string
    type: string
  }
  
export interface Media4 {
    mission_icon?: string
  }
  
export interface Metadata2 {
    level: number
    npeRewardPack: NpeRewardPack
    tutorial: Tutorial
  }
  
export interface NpeRewardPack {
    index: number
    majorReward: MajorReward2
    minorRewards: MinorReward[]
    premiumReward: boolean
    rewardKey: string
  }
  
export interface MajorReward2 {
    data?: Data112
    renderer: string
  }
  
export interface Data112 {
    gameModes?: string[]
    champIds?: number[]
    type?: string
    ids?: number[]
    id?: number
    hasCustomDetailImage?: boolean
    hideInCalendarDetail?: boolean
    quantity?: number
  }
  
export interface MinorReward {
    data: Data113
    renderer: string
  }
  
export interface Data113 {
    quantity?: number
    type?: string
    gameModes?: string[]
    hideInCalendarDetail?: boolean
  }
  
export interface Tutorial {
    displayRewards: DisplayRewards
    queueId: string
    stepNumber: number
    useChosenChampion: boolean
    useQuickSearchMatchmaking: boolean
  }
  
export interface DisplayRewards {}
  
export interface Objec {
    description: string
    hasObjectiveBasedReward: boolean
    progress: Progress
    requirements: any[]
    rewardGroups: any[]
    sequence: number
    status: string
    type: string
  }
  
export interface Progress {
    currentProgress: number
    lastViewedProgress: number
    totalCount: number
  }
  
export interface RewardStrategy {
    groupStrategy: string
    selectMaxGroupCount: number
    selectMinGroupCount: number
  }
  
export interface Reward23 {
    description: string
    iconNeedsFrame: boolean
    iconUrl: string
    isObjectiveBasedReward: boolean
    itemId: string
    media: Media5
    quantity: number
    rewardFulfilled: boolean
    rewardGroup: string
    rewardGroupSelected: boolean
    rewardType: string
    sequence: number
    smallIconUrl: string
    uniqueName: string
  }
  
export interface Media5 {
    icon?: string
  }
  
export interface LolTftV2TftBattlepass {
    data: Data114
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data114 {
    activeMilestone: ActiveMilestone
    bonuses: Bonuse[]
    info: Info
    lastViewedMilestone: LastViewedMilestone
    lastViewedProgress: number
    milestones: Milestone[]
    progressMissionId: string
    totalPointsEarned: number
  }
  
export interface ActiveMilestone {
    description: string
    iconImageUrl: string
    iconNeedsFrame: boolean
    internalName: string
    isBonus: boolean
    isKeystone: boolean
    isLocked: boolean
    isPaid: boolean
    level: number
    missionId: string
    pointsEarnedForMilestone: number
    pointsNeededForMilestone: number
    rewards: Reward24[]
    state: string
    status: string
    title: string
    totalPointsForMilestone: number
  }
  
export interface Reward24 {
    description: string
    iconNeedsFrame: boolean
    iconUrl: string
    isObjectiveBasedReward: boolean
    itemId: string
    media: Media6
    quantity: number
    rewardFulfilled: boolean
    rewardGroup: string
    rewardGroupSelected: boolean
    rewardType: string
    sequence: number
    smallIconUrl: string
    uniqueName: string
  }
  
export interface Media6 {
    icon: string
  }
  
export interface Bonuse {
    description: string
    iconImageUrl: string
    iconNeedsFrame: boolean
    internalName: string
    isBonus: boolean
    isKeystone: boolean
    isLocked: boolean
    isPaid: boolean
    level: number
    missionId: string
    pointsEarnedForMilestone: number
    pointsNeededForMilestone: number
    rewards: Reward25[]
    state: string
    status: string
    title: string
    totalPointsForMilestone: number
  }
  
export interface Reward25 {
    description: string
    iconNeedsFrame: boolean
    iconUrl: string
    isObjectiveBasedReward: boolean
    itemId: string
    media: Media7
    quantity: number
    rewardFulfilled: boolean
    rewardGroup: string
    rewardGroupSelected: boolean
    rewardType: string
    sequence: number
    smallIconUrl: string
    uniqueName: string
  }
  
export interface Media7 {
    icon: string
  }
  
export interface Info {
    backgroundImageUrl: string
    description: string
    endDate: number
    internalName: string
    media: Media8
    pcPurchaseRequirement: string
    premium: boolean
    startDate: number
    title: string
  }
  
export interface Media8 {
    "background--battlepass": string
    "background--battlepass-completion": string
    "background--battlepass-reward-celebration": string
    "background--battlepass-unavailable": string
    "background--eog": string
    "background--season-start-modal": string
    "battlepass-footer-bg": string
    "dotted-line": string
    "gold-circle": string
    "home-footer-bg": string
    "level-pip--active": string
    "level-pip--active-hover": string
    "level-pip--bonus": string
    "level-pip--bonus-hover": string
    "level-pip--complete": string
    "level-pip--complete-hover": string
    "level-pip--upcoming": string
    "level-pip--upcoming-hover": string
    "news-footer-bg": string
    "pass-end-marker-circle": string
    "pass-end-marker-dotted": string
    "progression-pengu": string
    "reward-background": string
    "reward-checkmark": string
    "reward-frame--free-available": string
    "reward-frame--free-available-hover": string
    "reward-frame--free-claimable": string
    "reward-frame--free-claimable-hover": string
    "reward-frame--free-claimed": string
    "reward-frame--free-claimed-hover": string
    "reward-frame--keystone-available": string
    "reward-frame--keystone-available-hover": string
    "reward-frame--keystone-claimable": string
    "reward-frame--keystone-claimable-hover": string
    "reward-frame--keystone-claimed": string
    "reward-frame--keystone-claimed-hover": string
    "reward-frame--keystone-locked": string
    "reward-frame--keystone-locked-hover": string
    "reward-frame--premium-available": string
    "reward-frame--premium-available-hover": string
    "reward-frame--premium-claimable": string
    "reward-frame--premium-claimable-hover": string
    "reward-frame--premium-claimed": string
    "reward-frame--premium-claimed-hover": string
    "reward-frame--premium-locked": string
    "reward-frame--premium-locked-hover": string
    "reward-hover-highlight": string
    "season-start-divider.png": string
    "selected-reward": string
    "selection-highlight": string
  }
  
export interface LastViewedMilestone {
    description: string
    iconImageUrl: string
    iconNeedsFrame: boolean
    internalName: string
    isBonus: boolean
    isKeystone: boolean
    isLocked: boolean
    isPaid: boolean
    level: number
    missionId: string
    pointsEarnedForMilestone: number
    pointsNeededForMilestone: number
    rewards: Reward26[]
    state: string
    status: string
    title: string
    totalPointsForMilestone: number
  }
  
export interface Reward26 {
    description: string
    iconNeedsFrame: boolean
    iconUrl: string
    isObjectiveBasedReward: boolean
    itemId: string
    media: Media9
    quantity: number
    rewardFulfilled: boolean
    rewardGroup: string
    rewardGroupSelected: boolean
    rewardType: string
    sequence: number
    smallIconUrl: string
    uniqueName: string
  }
  
export interface Media9 {
    icon: string
  }
  
export interface Milestone {
    description: string
    iconImageUrl: string
    iconNeedsFrame: boolean
    internalName: string
    isBonus: boolean
    isKeystone: boolean
    isLocked: boolean
    isPaid: boolean
    level: number
    missionId: string
    pointsEarnedForMilestone: number
    pointsNeededForMilestone: number
    rewards: Reward27[]
    state: string
    status: string
    title: string
    totalPointsForMilestone: number
  }
  
export interface Reward27 {
    description: string
    iconNeedsFrame: boolean
    iconUrl: string
    isObjectiveBasedReward: boolean
    itemId: string
    media: Media10
    quantity: number
    rewardFulfilled: boolean
    rewardGroup: string
    rewardGroupSelected: boolean
    rewardType: string
    sequence: number
    smallIconUrl: string
    uniqueName: string
  }
  
export interface Media10 {
    icon: string
  }
  
export interface LolCosmeticsV1InventoriesBySetNameDamageSkins {
    data: Data115
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data115 {
    defaultItemId: number
    groups: Group3[]
    selectedLoadoutItem: SelectedLoadoutItem3
  }
  
export interface Group3 {
    groupId: number
    groupName: string
    items: Item4[]
    numAvailable: number
    numOwned: number
  }
  
export interface Item4 {
    contentId: string
    description: string
    f2p: boolean
    groupId: number
    groupName: string
    isRecentItem: boolean
    itemId: number
    level: number
    loadoutsIcon: string
    loyalty: boolean
    name: string
    owned: boolean
    purchaseDate: string
    rarityValue: number
    selected: boolean
    upgrades: Upgrade2[]
  }
  
export interface Upgrade2 {
    contentId: string
    description: string
    f2p: boolean
    groupId: number
    groupName: string
    isRecentItem: boolean
    itemId: number
    level: number
    loadoutsIcon: string
    loyalty: boolean
    name: string
    owned: boolean
    purchaseDate: string
    rarityValue: number
    selected: boolean
    upgrades: any[]
  }
  
export interface SelectedLoadoutItem3 {
    contentId: string
    description: string
    f2p: boolean
    groupId: number
    groupName: string
    isRecentItem: boolean
    itemId: number
    level: number
    loadoutsIcon: string
    loyalty: boolean
    name: string
    owned: boolean
    purchaseDate: string
    rarityValue: number
    selected: boolean
    upgrades: any[]
  }
  
export interface LolNpeRewardsV1LoginRewards {
    data: Data116
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data116 {
    rewardPacks: RewardPack2[]
  }
  
export interface RewardPack2 {
    delay: number
    index: number
    majorReward: MajorReward3
    minorRewards: MinorReward2[]
    premiumReward: boolean
    requirements: Requirements2
    rewardKey: string
    state: string
    type: string
    unlockTime: number
  }
  
export interface MajorReward3 {
    data: Data117
    renderer: string
  }
  
export interface Data117 {
    champIds?: number[]
    type?: string
    quantity?: number
  }
  
export interface MinorReward2 {
    data: Data118
    renderer: string
  }
  
export interface Data118 {
    quantity: number
  }
  
export interface Requirements2 {
    day: number
    level: number
    missionInternalName: string
  }
  
export interface LolStatstonesV2PlayerSummarySelf {
    data: Daum35[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Daum35 {
    championId: number
    milestonesPassed: number
    sets: Set[]
    stonesAvailable: number
    stonesIlluminated: number
    stonesOwned: number
  }
  
export interface Set {
    milestonesPassed: number
    name: string
    stonesAvailable: number
    stonesIlluminated: number
    stonesOwned: number
  }
  
export interface LolLootV1PlayerDisplayCategories {
    data: string[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolEventShopV1EventShopUnclaimedRewards {
    data: Data119
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data119 {
    lockedTokensCount: number
    rewardsCount: number
  }
  
export interface LolEventShopV1EventShopCategoriesOffers {
    data: Daum36[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Daum36 {
    category: string
    categoryIconPath: string
    offers: Offer[]
  }
  
export interface Offer {
    highlighted: boolean
    id: string
    image: string
    items: Item5[]
    localizedDescription: string
    localizedTitle: string
    offerState: string
    price: number
  }
  
export interface Item5 {
    inventoryType: string
    itemId: string
    price: number
  }
  
export interface LolCatalogV1ItemsByInventoryType {
    data: Daum37[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Daum37 {
    active: boolean
    description: string
    imagePath: string
    inactiveDate: number
    inventoryType: string
    itemId: number
    itemInstanceId: string
    metadata?: Metadaum[]
    name: string
    offerId: string
    owned: boolean
    ownershipType: any
    prices: Price[]
    purchaseDate: number
    questSkinInfo: any
    releaseDate: number
    sale: any
    subInventoryType: string
    subTitle: string
    tags: string[]
  }
  
export interface Metadaum {
    type: string
    value: string
  }
  
export interface Price {
    cost: number
    costType: any
    currency: string
    sale?: Sale
  }
  
export interface Sale {
    cost: number
    discount: number
    endDate: string
    startDate: string
  }
  
export interface LolLobbyV2EligibilityGameSelectEligibilityHash {
    data: number
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolGameflowV1GameflowMetadataRegistrationStatus {
    data: Data120
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data120 {
    complete: boolean
    errorCodes: any[]
  }
  
export interface LolChampionsV1InventoriesBySummonerIdChampions {
    data: Daum38[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Daum38 {
    active: boolean
    alias: string
    banVoPath: string
    baseLoadScreenPath: string
    baseSplashPath: string
    botEnabled: boolean
    chooseVoPath: string
    disabledQueues: any[]
    freeToPlay: boolean
    id: number
    name: string
    ownership: Ownership7
    passive: Passive
    purchased: number
    rankedPlayEnabled: boolean
    roles: string[]
    skins: Skin[]
    spells: Spell[]
    squarePortraitPath: string
    stingerSfxPath: string
    tacticalInfo: TacticalInfo
    title: string
  }
  
export interface Ownership7 {
    loyaltyReward: boolean
    owned: boolean
    rental: Rental7
    xboxGPReward: boolean
  }
  
export interface Rental7 {
    endDate: number
    purchaseDate: number
    rented: boolean
    winCountRemaining: number
  }
  
export interface Passive {
    description: string
    name: string
  }
  
export interface Skin {
    championId: number
    chromaPath?: string
    chromas: Chroma3[]
    collectionSplashVideoPath?: string
    disabled: boolean
    emblems: any[]
    featuresText?: string
    id: number
    isBase: boolean
    lastSelected: boolean
    loadScreenPath: string
    name: string
    ownership: Ownership9
    questSkinInfo: QuestSkinInfo3
    rarityGemPath: string
    skinType: string
    splashPath: string
    splashVideoPath?: string
    stillObtainable: boolean
    tilePath: string
    uncenteredSplashPath: string
  }
  
export interface Chroma3 {
    championId: number
    chromaPath: string
    colors: string[]
    disabled: boolean
    id: number
    lastSelected: boolean
    name: string
    ownership: Ownership8
    stillObtainable: boolean
  }
  
export interface Ownership8 {
    loyaltyReward: boolean
    owned: boolean
    rental: Rental8
    xboxGPReward: boolean
  }
  
export interface Rental8 {
    endDate: number
    purchaseDate: number
    rented: boolean
    winCountRemaining: number
  }
  
export interface Ownership9 {
    loyaltyReward: boolean
    owned: boolean
    rental: Rental9
    xboxGPReward: boolean
  }
  
export interface Rental9 {
    endDate: number
    purchaseDate: number
    rented: boolean
    winCountRemaining: number
  }
  
export interface QuestSkinInfo3 {
    collectionCardPath: string
    collectionDescription: string
    descriptionInfo: DescriptionInfo[]
    name: string
    splashPath: string
    tiers: Tier[]
    tilePath: string
    uncenteredSplashPath: string
  }
  
export interface DescriptionInfo {
    description: string
    iconPath: string
    title: string
  }
  
export interface Tier {
    championId: number
    chromaPath: any
    collectionSplashVideoPath: string
    description: string
    disabled: boolean
    id: number
    isBase: boolean
    lastSelected: boolean
    loadScreenPath: string
    name: string
    ownership: Ownership10
    shortName: string
    splashPath: string
    splashVideoPath: string
    stage: number
    stillObtainable: boolean
    tilePath: string
    uncenteredSplashPath: string
  }
  
export interface Ownership10 {
    loyaltyReward: boolean
    owned: boolean
    rental: Rental10
    xboxGPReward: boolean
  }
  
export interface Rental10 {
    endDate: number
    purchaseDate: number
    rented: boolean
    winCountRemaining: number
  }
  
export interface Spell {
    description: string
    name: string
  }
  
export interface TacticalInfo {
    damageType: string
    difficulty: number
    style: number
  }
  
export interface LolLootV1Ready {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolLootV1MilestonesByLootMilestonesIdCounter {
    data: Data121
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data121 {
    completedLoops: number
    counterValue: number
    lootMilestonesId: string
    readyToClaimMilestones: any[]
  }
  
export interface LolLootV1MilestonesItems {
    data: string[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolSummonerV1CurrentSummonerSummonerProfile {
    data: Data122
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data122 {}
  
export interface LolCollectionsV1InventoriesBySummonerIdBackdrop {
    data: Data123
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data123 {
    accountId: number
    backdropImage: string
    backdropMaskColor: string
    backdropType: string
    backdropVideo: string
    championId: number
    profileIconId: number
    puuid: string
    summonerId: number
  }
  
export interface LolSummonerV1SummonersById {
    data: Data124
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data124 {
    accountId: number
    displayName: string
    internalName: string
    nameChangeFlag: boolean
    percentCompleteForNextLevel: number
    privacy: string
    profileIconId: number
    puuid: string
    rerollPoints: RerollPoints2
    summonerId: number
    summonerLevel: number
    unnamed: boolean
    xpSinceLastLevel: number
    xpUntilNextLevel: number
  }
  
export interface RerollPoints2 {
    currentPoints: number
    maxRolls: number
    numberOfRolls: number
    pointsCostToRoll: number
    pointsToReroll: number
  }
  
export interface RiotclientPreShutDownBegin {
    data: any
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface RiotclientUxStateRequest {
    data: Data125
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data125 {
    requestId: number
    state: string
  }
  
export interface LolYourshopV1Status {
    data: Data126
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data126 {
    endTime: string
    hubEnabled: boolean
    name: string
    startTime: string
  }
  
export interface LolChallengesV1ClientState {
    data: string
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolRankedV1GlobalNotifications {
    data: any[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolLoadoutsV1LoadoutsEnabled {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolYourshopV1Ready {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolHoneyfruitV1AccountClaimMigration {
    data: string
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolYourshopV1Modal {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolMarketingPreferencesV1Ready {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolChallengesV1Seasons {
    data: Daum39[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Daum39 {
    isActive: boolean
    seasonEnd: number
    seasonId: number
    seasonStart: number
  }
  
export interface LolPublishingContentV1Settings {
    data: Data127
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data127 {
    locale: string
    publishingLocale: string
    region: string
    rsoPlatformId: string
    webLocale: string
    webRegion: string
  }
  
export interface LolPublishingContentV1ListenersClientData {
    data: Data128
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data128 {
    account_id: number
    app_name: string
    app_version: string
    assetUrls: AssetUrls
    env: string
    locale: string
    port: number
    protocol: string
    puuid: string
    summoner_level: number
    summoner_name: string
    system_os: string
    web_region: string
  }
  
export interface AssetUrls {
    baseUrl: string
    ipIconUrl: string
    rpIconUrl: string
    splashUrl: string
  }
  
export interface LolPublishingContentV1ListenersPubhubConfig {
    data: Data129
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data129 {
    appContext: AppContext
    edge: Edge
  }
  
export interface AppContext {
    appId: string
    appLanguage: string
    appLocale: string
    appSessionId: string
    appVersion: string
    deviceCategory: string
    deviceOperatingSystem: string
    deviceOperatingSystemVersion: string
    publishingLocale: string
    userId: string
    userRegion: string
  }
  
export interface Edge {
    clientId: string
    clientRegion: string
  }
  
export interface LolTftV1TftEvents {
    data: Data130
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data130 {
    events: any[]
  }
  
export interface LolHoneyfruitV1AccountAutoDismiss {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolEventShopV1RewardTrackBonusItems {
    data: any[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolEventShopV1RewardTrackXp {
    data: Data131
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data131 {
    currentLevel: number
    currentLevelXP: number
    isBonusPhase: boolean
    iteration: number
    totalLevelXP: number
  }
  
export interface LolLobbyV1LobbyCustomBotsEnabled {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolEventShopV1FailureLoadingTokenShop {
    data: Data132
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data132 {
    errorId: string
    errorMessage: string
  }
  
export interface LolEventShopV1FailureLoadingRewardTrack {
    data: Data133
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data133 {
    errorId: string
    errorMessage: string
  }
  
export interface LolProgressionV1Ready {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolPlayerBehaviorV1ChatRestriction {
    data: Data134
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data134 {
    displayReformCard: boolean
    expirationMillis: number
    gamesRemaining: number
    id: number
    source: string
  }
  
export interface LolClashV1TournamentByTournamentId {
    data: Data135
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data135 {
    allowRosterCreation: boolean
    bracketFormationInitDelayMs: number
    bracketFormationIntervalMs: number
    bracketSize: string
    buyInOptions: number[]
    buyInOptionsPremium: number[]
    endTimeMs: number
    entryFee: number
    id: number
    isHonorRestrictionEnabled: boolean
    isRankedRestrictionEnabled: boolean
    isSmsRestrictionEnabled: boolean
    lastThemeOfSeason: boolean
    lft: boolean
    maxInvites: number
    maxSuggestionsPerPlayer: number
    nameLocKey: string
    nameLocKeySecondary: string
    phases: Phase2[]
    queueId: number
    resumeTime: number
    rewardConfig: RewardConfig2[]
    rosterCreateDeadline: number
    rosterSize: number
    scoutingDurationMs: number
    startTimeMs: number
    status: string
    themeId: number
    tierConfigs: TierConfig2[]
  }
  
export interface Phase2 {
    cancelled: boolean
    capacityStatus: string
    id: number
    limitTiers: any[]
    lockinStartTime: number
    period: number
    scoutingStartTime: number
    tournamentId: number
  }
  
export interface RewardConfig2 {
    entries: Entry2[]
    keyDef: string[]
    name: string
  }
  
export interface Entry2 {
    key: string
    vals: Val2[]
  }
  
export interface Val2 {
    alternative: Alternative2
    grant: string
    primary: Primary2
    show: string
  }
  
export interface Alternative2 {
    rewardSpec: RewardSpec3
    rewardType: string
  }
  
export interface RewardSpec3 {
    bracket: string
    cup: string
    gem: string
    level: string
    name: string
    pedestal: string
    quantity: string
    seasonId: string
    theme: string
    tier: string
  }
  
export interface Primary2 {
    rewardSpec: RewardSpec4
    rewardType: string
  }
  
export interface RewardSpec4 {
    bracket: string
    cup: string
    gem: string
    level: string
    name: string
    pedestal: string
    quantity: string
    seasonId: string
    theme: string
    tier: string
  }
  
export interface TierConfig2 {
    delayTime: number
    estimateTime: number
    tier: number
  }
  
export interface LolClashV1TournamentCancelled {
    data: any[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolPremadeVoiceV1FirstExperience {
    data: Data136
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data136 {
    showFirstExperienceInGame: boolean
    showFirstExperienceInLCU: boolean
  }
  
export interface LolChatV1Conversations {
    data: any[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolPerksV1PerksGameplayUpdated {
    data: number[]
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface LolNpeRewardsV1LoginRewardsState {
    data: Data137
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data137 {
    allRewardsClaimed: boolean
  }
  
export interface LolMarketingPreferencesV1PartitionFaerieCourtEmbed2023 {
    data: Data138
    endpoint: string
    eventName: string
    eventType: string
  }
  
export interface Data138 {}
  
export interface LolPerksV1RuneRecommenderAutoSelect {
    data: boolean
    endpoint: string
    eventName: string
    eventType: string
  }

  export interface LolLobbyV1LobbyLastQueuedLobby {
    data: Data139
    endpoint: string
    eventName: string
    eventType: string
  }
  
  export interface Data139 {
    canPlayAgain: boolean
    members: any[]
    queueId: number
    wasOwner: boolean
  }

  export interface LolLobbyV1LobbyLocalMember {
    data: Data140
    endpoint: string
    eventName: string
    eventType: string
  }
  
  export interface Data140 {
    autoFillEligible: boolean
    autoFillProtectedForPromos: boolean
    autoFillProtectedForSoloing: boolean
    autoFillProtectedForStreaking: boolean
    botChampionId: number
    botDifficulty: string
    canInviteOthers: boolean
    excludedPositionPreference: any
    id: number
    isBot: boolean
    isOwner: boolean
    isSpectator: boolean
    positionPreferences: PositionPreferences2
    showPositionExcluder: boolean
    summonerInternalName: string
  }
  
  export interface PositionPreferences2 {
    firstPreference: string
    secondPreference: string
  }