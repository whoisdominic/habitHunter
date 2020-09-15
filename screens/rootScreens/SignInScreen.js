import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  TextInput,
  StatusBar,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// Icons
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
// Animations
import * as Animatable from "react-native-animatable";
import { set } from "react-native-reanimated";
// Forms
import * as EmailValidator from "email-validator";
import Phone from "phone";
import Axios from "axios";
// Images
import BackGraphic from "../../assets/habithunterauth.png";
import WelcomeImage from "../../assets/images/habithunterWelcome.png";
import AsyncStorage from "@react-native-community/async-storage";
import { AuthContext } from "../../components/context.js";
const APIURL = ["https://habithunter.herokuapp.com", "http://localhost:8000"];

export default function SignInScreen({ navigation }) {
  const { signIn } = useContext(AuthContext);

  const [error, setError] = useState(null);
  const [data, setData] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };
  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@habit_hunter_user", jsonValue);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };
  const handleSubmit = async (event) => {
    setError(null);
    const emailVal = await EmailValidator.validate(data.email);
    console.log("form data pre", data);
    if (!emailVal) {
      setError("Not a valid email address");
    } else if (data.password.length < 5) {
      setError("Invalid Password");
    } else {
      try {
        console.log("reached try");
        const request = await Axios({
          method: "post",
          url: `${APIURL[1]}/users/login`,
          data: {
            email: data.email,
            password: data.password,
          },
        });
        console.log("breaking", request);
        if (typeof request.data.msg == String) {
          setError(request.data.msg);
        } else {
          storeData(request.data);
          signIn(request.data);
        }
      } catch (error) {
        setError(JSON.stringify(error));
      }
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={BackGraphic} style={styles.image}>
        <SafeAreaView />
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <View style={styles.header}>
          <Image source={WelcomeImage} style={styles.heroImg} />
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" size={24} color="black" />
            <TextInput
              autoCapitalize="none"
              placeholder="Your Email"
              style={styles.textInput}
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" size={24} color="green" />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" size={24} color="black" />
            <TextInput
              secureTextEntry={data.secureTextEntry ? true : false}
              autoCapitalize="none"
              placeholder="Password"
              style={styles.textInput}
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" size={24} color="grey" />
              ) : (
                <Feather name="eye" size={24} color="grey" />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View style={styles.help}>
              <Text style={styles.text_footer}>Forgot Password?</Text>
              <SimpleLineIcons name="question" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <View style={styles.error}>
            {error ? (
              <>
                <Text>{error}</Text>
                <Feather name="alert-circle" size={24} color="red" />
              </>
            ) : (
              <></>
            )}
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={handleSubmit}>
              <LinearGradient
                style={styles.signIn}
                colors={["#24ab89", "#076e53"]}
              >
                <Text style={styles.textSign}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
              style={[
                styles.signIn,
                { borderColor: "#24ab89", borderWidth: 1, marginTop: 15 },
              ]}
            >
              <Text style={[styles.textSign, { color: "#20735d" }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
}

const { height, width } = Dimensions.get("screen");
const height_logo = height * 0.52;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: 12,
    paddingHorizontal: 20,
    paddingBottom: 50,
    marginBottom: 15,
    marginTop: 10,
  },
  footer: {
    flex: 2.3,
    width: width * 0.95,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#076e53",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  help: {
    width: width * 0.8,
    flexDirection: "row",
    marginTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 10,
    justifyContent: "space-between",
  },
  textInput: {
    flex: 1,
    marginTop: Platform.os === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#076e53",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  heroImg: {
    borderRadius: 15,
    maxWidth: 400,
  },
  error: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    color: "red",
  },
});
