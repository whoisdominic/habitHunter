import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HabitLogo from './assets/images/habitHunterLogo500_2.png';
const image = {
  uri: 'https://miro.medium.com/max/3668/1*6G4hXpEpdF4y1WcHwUp-2A.jpeg',
};

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground source={image} style={styles.image}>
        <LinearGradient
          // Background Linear Gradient
          start={[0.5, 0.2]}
          colors={['rgba(0,0,0,0.80)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 600,
          }}
        />
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
    alignItems: 'center',
  },
  logo: { marginTop: -70 },
});
