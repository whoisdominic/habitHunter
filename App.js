import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import HabitLogo from './assets/images/habitHunterLogo500.png';
const image = {
  uri: 'https://miro.medium.com/max/3668/1*6G4hXpEpdF4y1WcHwUp-2A.jpeg',
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground source={image} style={styles.image}>
        <Image style={styles.logo} source={HabitLogo} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: { marginBottom: 125 },
});
