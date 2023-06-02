import LCU from '../index';


const client = new LCU({
    rawEventData: true
});

client.lcu.on('ready', async (connection) => {
    console.log(`Connected as ${client.user.displayName}`)
});

client.lcu.on('raw', (data) => {
    console.log(data.data)
});

client.lcu.on('LolChampSelectV1SummonersBySlotId', (eventData) => {
    const data = eventData.data;

    // Picking_champion = hover key
    if (data.statusMessageKey === "picking_champion") {
        const championId = data.championId;
        console.log(championId);
    };
});

client.lcu.on('error', (err) => {
    console.error(err)
});

client.connect();