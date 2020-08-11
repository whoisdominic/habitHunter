import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HabitLogo from './assets/images/habitHunterLogo500.png';
import Forest from './assets/images/habithuntersplashimage.jpeg';
export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground
        accessibilityLabel="Forest with a path"
        source={Forest}
        style={styles.image}
      >
        <LinearGradient
          // Background Linear Gradient
          start={[0.5, 0.1]}
          colors={['rgba(0,0,0,0.775)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 600,
          }}
        />
        <Image
          accessibilityLabel="Habit Hunter"
          style={styles.logo}
          source={HabitLogo}
        />
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
