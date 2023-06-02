import LCU from '../index';


const client = new LCU({
    liveGameData: true,
});

client.lcu.on('ready', async (connection) => {
    console.log(`Connected as ${client.user.displayName}`)
});

client.game.on('DragonKill', (dragonKill, currPlayer, allPlayers) => {
    console.log(dragonKill);
});

client.game.on('ChampionKill', (championKill, currPlayer, allPlayers) => {
    console.log(championKill);
});

client.lcu.on('error', (err) => {
    console.error(err)
});

client.connect();