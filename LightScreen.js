import axios from 'axios';
import {React, useState, useEffect}  from 'react';
import { View, Text, Button } from 'react-native';
//import {Slider} from '@react-native-community/slider';
import Slider from '@react-native-community/slider';
import { OnButton, OffButton, ConcentrateMode, RestMode, RestMode2, ConcentrateMode2, OnButton2, OffButton2 } from './functions';

const hueUsername = "mtgxTLQqa5fWUHimRP9Q8z35zm7Cct9gqM-OgOPZ";
const hueIpAddress = "192.168.50.202";


const url = `http://${hueIpAddress}/api/${hueUsername}/lights/1/state`;



const LightScreen = () => {


  const [brightness, setBrightness] = useState(null); // State to hold the brightness value

  useEffect(() => {
    fetchBrightness(); // Fetch brightness value on component mount
    
  }, []);

  const [brightness2, setBrightness2] = useState(null); // State to hold the brightness value

  useEffect(() => {
    fetchBrightness2(); // Fetch brightness value on component mount
    
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

  const fetchBrightness2 = async () => {
    try {
      const url = `http://${hueIpAddress}/api/${hueUsername}/lights/2`;
      const response = await axios.get(url);
      const brightnessValue2 = response.data.state.bri;
      setBrightness2(brightnessValue2); // Update brightness state with the fetched value
    } catch (err) {
      console.error('Error fetching brightness:', err);
    }
  };

  
  const handleOnPressOnButton = async () => {
    await OnButton();
    await fetchBrightness(); // Fetch brightness after turning on the light
    console.log('On button pressed');
  };

  const handleOnPressOnButton2 = async () => {
    await OnButton2();
    await fetchBrightness2(); // Fetch brightness after turning on the light
    console.log('On button2 pressed');
  };
  

  const handleOnPressOffButton = async () => {
    await OffButton();
    await fetchBrightness();
    console.log('Off button pressed');
  };

  const handleOnPressOffButton2 = async () => {
    await OffButton2();
    await fetchBrightness2();
    console.log('Off button2 pressed');
  };

  const handleOnPressConcentrateMode = async () => {
    await ConcentrateMode();
    await fetchBrightness();
    console.log('Concentrate mode button pressed');
  };

  const handleOnPressConcentrateMode2 = async () => {
    await ConcentrateMode2();
    await fetchBrightness2();
    console.log('Concentrate mode button2 pressed');
  };

  const handleOnPressRestMode = async () => {
    await RestMode();
    await fetchBrightness();
    console.log('Rest mode button pressed');
  };

  const handleOnPressRestMode2 = async () => {
    await RestMode2();
    await fetchBrightness2();
    console.log('Rest mode button2 pressed');
  };

  const handleBrightnessChange = async (value) => {
    // Update the brightness value locally
    setBrightness(value);
    try {
    // Update the brightness value on the lamp
    const url = `http://${hueIpAddress}/api/${hueUsername}/lights/1/state`;
    await axios.put(url, {
    "bri": value
    });
    } catch (err) {
    console.error('Error updating brightness:', err);
    }
    };

  const handleBrightnessChange2 = async (value) => {
    // Update the brightness value locally
    setBrightness2(value);
    try {
      // Update the brightness value on the lamp
    const url = `http://${hueIpAddress}/api/${hueUsername}/lights/2/state`;
    await axios.put(url, {
    "bri": value
    });
    } catch (err) {
    console.error('Error updating brightness:', err);
    }
    };

  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Both Lights</Text>
      <Button title="Concentrate Mode" onPress= {() => {
        handleOnPressConcentrateMode();
        handleOnPressConcentrateMode2();
      }} />

      <Button title="Rest Mode" onPress= {() => {
        handleOnPressRestMode();
        handleOnPressRestMode2();
      }} />


      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text >Light 1</Text>
          <Text>Brightness: {Math.round((brightness / 254) * 100) !== null ? Math.round((brightness / 254) * 100) : 'Loading...'}%</Text>
          <Button title="Turn On" onPress={handleOnPressOnButton} />
          <Button title="Turn Off" onPress={handleOnPressOffButton} />
          <Button title="Concentrate Mode" onPress={handleOnPressConcentrateMode} />
          <Button title="Rest Mode" onPress={handleOnPressRestMode} />
         
      <Slider
        style={{ width: '80%', marginTop: 20 }}
        minimumValue={1}
        maximumValue={254}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        step={1}
        value={brightness !== null ? brightness : 0}
        onValueChange={handleBrightnessChange}
      />
        </View>

        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text >Light 2</Text>
          <Text>Brightness: {Math.round((brightness2 / 254) * 100) !== null ? Math.round((brightness2 / 254) * 100) : 'Loading...'}%</Text>
          <Button title="Turn On" onPress={handleOnPressOnButton2} />
          <Button title="Turn Off" onPress={handleOnPressOffButton2} />
          <Button title="Concentrate Mode" onPress={handleOnPressConcentrateMode2} />
          <Button title="Rest Mode" onPress={handleOnPressRestMode2} />
          {/* Slider */}
      <Slider
        style={{ width: '80%', marginTop: 20 }}
        minimumValue={1}
        maximumValue={254}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        step={1}
        value={brightness2 !== null ? brightness2 : 0}
        onValueChange={handleBrightnessChange2}
      />
        </View>
      </View>

     
    </View>




  
    
  );
};

export default LightScreen;
