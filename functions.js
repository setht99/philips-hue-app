//import Constants from 'expo-constants';
//import { expoConfig } from '@expo/config';
//require('dotenv').config();
import axios from 'axios';
//import 'dotenv/config';
//console.log(process.env); // remove this after you've confirmed it is working
//const axios = require('axios');



const hueUsername = "Y1o4tP0brNpfTsd79l5rvhdQc-RTdbDbyZw1P-Zj";
const hueIpAddress = "192.168.50.201";

console.log(`Hue Username: ${hueUsername}`);
console.log(`Hue IP Address: ${hueIpAddress}`);

export const OnButton = async () => {
    const url = `http://${hueIpAddress}/api/${hueUsername}/lights/1/state`;
    try {
        return await axios.put(url, {
            on: true,
        });
    } catch (err) {
        console.error(err);
    }
};

export const OffButton = async () => {
    const url = `http://${hueIpAddress}/api/${hueUsername}/lights/1/state`;
    try {
        return await axios.put(url, {
            on: false,
        });
    } catch (err) {
        console.error(err);
    }
};

export const ConcentrateMode = async () => {
    const url = `http://${hueIpAddress}/api/${hueUsername}/lights/1/state`;
    try {
        return await axios.put(url, {
            on: true,
            "bri": 254,
            "ct": 233
        });
    } catch (err) {
        console.error(err);
    }
};

export const RestMode = async () => {
    const url = `http://${hueIpAddress}/api/${hueUsername}/lights/1/state`;
    try {
        return await axios.put(url, {
            on: true,
            "bri": 90,
            "ct": 500
        });
    } catch (err) {
        console.error(err);
    }
};
 
/* OnButton();
OffButton(); */

//ConcentrateMode();
//RestMode();


//OnButton();