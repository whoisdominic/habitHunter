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
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import Animated, { Easing } from 'react-native-reanimated';
import {
  TapGestureHandler,
  State,
  RectButton,
} from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import HabitLogo from '../../assets/images/habitHunterLogo500.png';
import Forest from '../../assets/images/habithuntersplashimage.jpeg';

const { width, height } = Dimensions.get('window');
const height_logo = height * 0.5;

export default function LandingScreen({ navigation }) {
  const [buttonOpaticy, setButtonOpacity] = useState(1);
  return (
    <View style={{ ...StyleSheet.absoluteFill }}>
      <StatusBar hidden={true} />
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
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duration={1500}
            style={styles.logo}
            resizeMode="stretch"
            source={HabitLogo}
            accessibilityLabel="Habit Hunter Logo"
          />
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.title}>Stay connected with everyone!</Text>
          <Text style={styles.text}>Sign in with account</Text>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignInScreen')}
            >
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Get Started</Text>
                <AntDesign
                  style={{ marginLeft: 4, marginRight: -6 }}
                  name="rightcircleo"
                  size={16}
                  color="white"
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
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
  container: {
    flex: 1,
    backgroundColor: '#696969',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
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
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});

// export default function SplashScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Animatable.Image
//           animation="bounceIn"
//           duration={1500}
//           style={styles.logo}
//           resizeMode="stretch"
//           source={require('../../assets/images/habitHunterLogo500.png')}
//         />
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({

// });
