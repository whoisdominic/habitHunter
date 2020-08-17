import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import MonthlyImg from '../assets/images/habithuntermonthly.png';
import WeeklyImg from '../assets/images/habithunterweekly.png';
import DailyImg from '../assets/images/habithunterdaily.png';
import BackImg from '../assets/images/habithunterback.png';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={BackImg} style={styles.backImage}>
        <StatusBar hidden={true} />
        <SafeAreaView />
        <ScrollView centerContent={true}>
          <Image source={WeeklyImg} style={styles.heroImg} />
        </ScrollView>
      </ImageBackground>
    </View>
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
  heroImg: {
    borderRadius: 15,
    maxWidth: 400,
    marginVertical: 5,
  },
  backImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
