import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import BackImg from '../assets/images/habithunterAccount.png';
const { width, height } = Dimensions.get('window');

export default function Buddiescreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
      }}
    >
      <StatusBar hidden={true} />
      <View style={{ ...StyleSheet.absoluteFill }}>
        <ImageBackground source={BackImg} style={styles.backImage}>
          <SafeAreaView />
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.sectionSm}>
              <View style={styles.center}>
                <Text>Account Info</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.sectionMed}>
              <View style={styles.center}>
                <Text>User Stats</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.sectionSm}>
              <View style={styles.center}>
                <Text>App Info</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
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
  backImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  sectionSm: {
    marginVertical: 10,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    width: width * 0.9,
    height: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionMed: {
    marginVertical: 10,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    width: width * 0.9,
    height: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
