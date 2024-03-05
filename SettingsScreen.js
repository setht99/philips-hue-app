import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const SettingsScreen = () => {
  return (
    <View style={styles.container} >
        <Text style={styles.text} >Yo What's Up</Text>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red'
    }
  });