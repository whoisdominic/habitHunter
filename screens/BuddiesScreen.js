import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import BackImg from '../assets/images/habithunterback.png';

export default function Buddiescreen({ navigation }) {
  return (
    <ImageBackground source={BackImg} style={styles.backImage}>
      <StatusBar hidden={true} />
      <SafeAreaView />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212121',
  },
  backImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
