import EventSchema from '../data/EventSchemas.json';
import { LCUFullEvents } from '../types/events';

export const formatLCUEvent = async (eventData: any) => {
    let data = eventData.data;
    let endpoint = eventData.uri;
    let endpointSplit = endpoint.split("/").slice(1);
    let eventName = (await getEventName(endpointSplit)) as keyof LCUFullEvents;
    let eventType = eventData.eventType;
    const LCUData = {
        data: data,
        endpoint: endpoint,
        eventName: eventName,
        eventType: eventType
    };
    return LCUData;
};

export const getEventName = async (arr: Array<string>): Promise<string> => {
    try {
        let arrLength = arr.length;
        let firstPath = "/"+arr[0]+"/"+arr[1];
        let entries: [key: string, val: string] = EventSchema[firstPath];
        for(let [key,val] of Object.entries(entries)) {
            let keySplit = key.split("/").slice(1);
            let keyLength = keySplit.length;
            if (keyLength === arrLength) {
                const newArr = [...arr];
                for(let i = 0; i < keySplit.length; i++) {
                    if (keySplit[i].includes("{") && keySplit[i].includes("}")) {
                        keySplit.splice(i,1);
                        newArr.splice(i,1);
                        i--;
                    };
                    if (newArr[i] === keySplit[i]) {
                    };
                };
                let isSame = newArr.join("") === keySplit.join("");
                if (isSame) {
                    return val;
                };
            };
        };
        return "";
    } catch(e: any) {
        console.log("/"+arr.join("/"))
        return "";
    };
};