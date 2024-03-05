/* import React from 'react';
import { View,Slider, Text, Button } from 'react-native';
import { OnButton, OffButton, ConcentrateMode, RestMode } from './functions';

const LightScreen = () => {
  const handleOnPressOnButton = () => {
    OnButton();
    console.log('On button pressed');
  };

  const handleOnPressOffButton = () => {
    OffButton();
    console.log('Off button pressed');
  };

  const handleOnPressConcentrateMode = () => {
    ConcentrateMode();
    console.log('Concentrate mode button pressed');
  };

  const handleOnPressRestMode = () => {
    RestMode();
    console.log('Rest mode button pressed');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Turn On" onPress={handleOnPressOnButton} />
      <Button title="Turn Off" onPress={handleOnPressOffButton} />
      <Button title="Concentrate Mode" onPress={handleOnPressConcentrateMode} />
      <Button title="Rest Mode" onPress={handleOnPressRestMode} />
    </View>
  );
};

export default LightScreen;
 */


import axios from 'axios';
import {React, useState, useEffect}  from 'react';
import { View, Text, Button } from 'react-native';
//import {Slider} from '@react-native-community/slider';
import Slider from '@react-native-community/slider';
import { OnButton, OffButton, ConcentrateMode, RestMode } from './functions';

const hueUsername = "Y1o4tP0brNpfTsd79l5rvhdQc-RTdbDbyZw1P-Zj";
const hueIpAddress = "192.168.50.201";


const url = `http://${hueIpAddress}/api/${hueUsername}/lights/1/state`;



const LightScreen = () => {


  const [brightness, setBrightness] = useState(null); // State to hold the brightness value

  useEffect(() => {
    fetchBrightness(); // Fetch brightness value on component mount
  }, []);

  const fetchBrightness = async () => {
    try {
      const url = `http://${hueIpAddress}/api/${hueUsername}/lights/1`;
      const response = await axios.get(url);
      const brightnessValue = response.data.state.bri;
      setBrightness(brightnessValue); // Update brightness state with the fetched value
    } catch (err) {
      console.error('Error fetching brightness:', err);
    }
  };

  
  const handleOnPressOnButton = async () => {
    await OnButton();
    await fetchBrightness(); // Fetch brightness after turning on the light
    console.log('On button pressed');
  };
  

  /* const handleOnPressOnButton = () => {
    OnButton();
    fetchBrightness();
    console.log('On button pressed');
  }; */

  const handleOnPressOffButton = async () => {
    await OffButton();
    await fetchBrightness();
    console.log('Off button pressed');
  };

  const handleOnPressConcentrateMode = async () => {
    await ConcentrateMode();
    await fetchBrightness();
    console.log('Concentrate mode button pressed');
  };

  const handleOnPressRestMode = async () => {
    await RestMode();
    await fetchBrightness();
    console.log('Rest mode button pressed');
  };




  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Brightness: {Math.round((brightness/254)*100) !== null ? Math.round((brightness/254)*100) : 'Loading...'}%</Text>
      <Button title="Turn On" onPress={handleOnPressOnButton} />
      <Button title="Turn Off" onPress={handleOnPressOffButton} />
      <Button title="Concentrate Mode" onPress={handleOnPressConcentrateMode} />
      <Button title="Rest Mode" onPress={handleOnPressRestMode} />
      
     {/*  <Text>Brightness: {brightness}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={1}
        maximumValue={254}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        step={1}
        value={brightness}
        onValueChange={handleBrightnessChange}
      /> */}
    </View>
  );
};

export default LightScreen;
