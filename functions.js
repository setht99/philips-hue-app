//import Constants from 'expo-constants';
//import { expoConfig } from '@expo/config';
//require('dotenv').config();
import axios from 'axios';
//import 'dotenv/config';
//console.log(process.env); // remove this after you've confirmed it is working
//const axios = require('axios');



const hueUsername = "mtgxTLQqa5fWUHimRP9Q8z35zm7Cct9gqM-OgOPZ";
const hueIpAddress = "192.168.50.202";

//console.log(`Hue Username: ${hueUsername}`);
//console.log(`Hue IP Address: ${hueIpAddress}`);

export const OnButton = async () => {
    const url = `http://${hueIpAddress}/api/${hueUsername}/lights/1/state`;
    try {
        return await axios.put(url, {
            on: true,
            "bri": 75
        });
    } catch (err) {
        console.error(err);
    }
};

export const OnButton2 = async () => {
    const url = `http://${hueIpAddress}/api/${hueUsername}/lights/2/state`;
    try {
        return await axios.put(url, {
            on: true,
            "bri": 75
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
            "bri": 1
        });
    } catch (err) {
        console.error(err);
    }
};

export const OffButton2 = async () => {
    const url = `http://${hueIpAddress}/api/${hueUsername}/lights/2/state`;
    try {
        return await axios.put(url, {
            on: false,
            "bri": 1
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

export const ConcentrateMode2 = async () => {
    const url = `http://${hueIpAddress}/api/${hueUsername}/lights/2/state`;
    try {
        return await axios.put(url, {
            on: true,
            "bri": 254,
            "hue": 39391,
            "sat" : 14
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


export const RestMode2 = async () => {
    const url = `http://${hueIpAddress}/api/${hueUsername}/lights/2/state`;
    try {
        return await axios.put(url, {
            on: true,
            "bri": 143,
		    "hue": 7687,
		    "sat": 199,
        });
    } catch (err) {
        console.error(err);
    }
};

export const FetchBrightness = async () => {
    const url = `http://${hueIpAddress}/api/${hueUsername}/lights/1`;
    try {
        const response = await axios.get(url);
        //console.log(response)
        const brightness = response.data.state.bri;
        console.log(brightness);
        return brightness;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const FetchBrightness2 = async () => {
    const url = `http://${hueIpAddress}/api/${hueUsername}/lights/2`;
    try {
        const response = await axios.get(url);
        //console.log(response)
        const brightness = response.data.state.bri;
        console.log(brightness);
        return brightness;
    } catch (err) {
        console.error(err);
        return null;
    }
};








//FetchBrightness();

/* FetchBrightness().then(response => {
    console.log('Brightness:', response.data);
}).catch(error => {
    console.error('Error fetching brightness:', error);
}); */
//OnButton();
//OffButton();

//ConcentrateMode();
//RestMode();


//OnButton();