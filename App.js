import React from 'react';
import { View, Button } from 'react-native';
import { OnButton, OffButton, ConcentrateMode, RestMode } from './functions';

export default function App() {
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
}
