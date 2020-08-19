import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import HabitLogo from '../../assets/images/habitHunterLogo2.png';
import Forest from '../../assets/images/habithuntersplash.png';

const { width, height } = Dimensions.get('window');
const height_logo = height * 0.5;

export default function LandingScreen({ navigation }) {
  return (
    <View style={{ ...StyleSheet.absoluteFill }}>
      <StatusBar hidden={true} />
      <ImageBackground source={Forest} style={styles.image}>
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duration={1500}
            style={styles.logo}
            resizeMode="stretch"
            source={HabitLogo}
            accessibilityLabel="Habit Hunter Logo"
          />
          <TouchableOpacity
            activeOpacity={0.35}
            onPress={() => navigation.navigate('SignInScreen')}
          >
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Get Started</Text>
              <AntDesign
                style={{ marginLeft: 10, marginRight: -6, marginTop: 2.5 }}
                name="rightcircleo"
                size={20}
                color="white"
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 2,
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
  container: {
    flex: 1,
    backgroundColor: '#696969',
  },
  header: {
    flex: 2,
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 250,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  textSign: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
