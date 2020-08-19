import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import {
  TapGestureHandler,
  State,
  RectButton,
} from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import HabitLogo from './assets/images/habitHunterLogo500.png';
import Forest from './assets/images/habithuntersplashimage.jpeg';

const { width, height } = Dimensions.get('window');

export default function LandingScreen() {
  const [buttonOpaticy, setButtonOpacity] = useState(1);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
      }}
    >
      <StatusBar hidden={true} />
      <View style={{ ...StyleSheet.absoluteFill }}>
        <ImageBackground source={Forest} style={styles.image}>
          <LinearGradient
            // Background Linear Gradient
            start={[0.5, 0.22]}
            colors={['rgba(0,0,0,0.70)', 'transparent']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 400,
            }}
          />
          <Image
            accessibilityLabel="Habit Hunter"
            style={styles.logo}
            source={HabitLogo}
          />
        </ImageBackground>
      </View>
      <View style={{ height: height / 3, justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => Alert.alert('Login Pressed')}>
          <View accessibilityLabel="Login" style={styles.button} accessible>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>LOGIN</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Facebook Pressed')}>
          <View
            accessibilityLabel="Login"
            style={{ ...styles.button, backgroundColor: '#4267b2' }}
            accessible
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
              LOGIN WITH FACEBOOK
            </Text>
          </View>
        </TouchableOpacity>
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
  },
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  logo: { marginTop: -70 },
});
