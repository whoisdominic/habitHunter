import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import MonthlyImg from '../assets/images/habithuntermonthly.png';
import WeeklyImg from '../assets/images/habithunterweekly.png';
import DailyImg from '../assets/images/habithunterdaily.png';
import BackImg from '../assets/images/habithunterback.png';
import { StatusBar } from 'expo-status-bar';

const { height, width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
      }}
    >
      <View style={{ ...StyleSheet.absoluteFill }}>
        <View style={styles.container}>
          <ImageBackground source={BackImg} style={styles.backImage}>
            <StatusBar hidden={true} />
            <SafeAreaView />
            <ScrollView centerContent={true}></ScrollView>
            <View style={styles.infoCont}>
              <Text>WTF</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backImage: {
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
    justifyContent: 'center',
  },
  infoCont: {
    flex: 2,
    width: width,
    height: height,
    backgroundColor: '#212121',
  },
});
