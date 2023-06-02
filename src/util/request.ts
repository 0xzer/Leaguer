import fetch from 'node-fetch';
import https from 'https';
import { URLSearchParams } from 'url';
import EventSchema from '../data/EventSchemas.json';

const agent = new https.Agent({
    rejectUnauthorized: false
});

export const request = async (method: string, url: string, params: any, body: any, headers: any, returnType: string) => {
    if (Object.keys(params).length > 0) {
        params = new URLSearchParams(params).toString()
    };
    if (typeof(params) === "string") url += `?${params}`;
    let request = await fetch(url, {
        headers: headers,
        body: body ? JSON.stringify(body) : null,
        agent: agent,
        method: method,
    });
    try {
        let res;
        if (returnType === "json") {
            res = await request.json()
        } else {
            res = await request.text()
        };
        return res;
    } catch(e) {
        return request.status
    };
};

interface Parameters {
    name: string,
    value: any
};

export const getPathFromOperationId = async (operationId: string, pathParameters: Array<Parameters> = []) => {
    let operation = operationId.replace("Post", "").replace("Get", "").replace("Delete", "").replace("Head", "").replace("Put", "");
    let path = Object.keys(EventSchema).map(key => {
        let secondKey = Object.keys(EventSchema[key]).find(k => {
            return EventSchema[key][k] === operation;
        });
        if (secondKey) {
            return secondKey;
        };
    }).filter(p => p);
    if (!path.length) return "";
    let fullPath = path[0];
    if (pathParameters.length) {
        for(let param of pathParameters) {
            fullPath = fullPath.replaceAll(`{${param.name}}`, param.value);
        };
    };
    return fullPath;
};