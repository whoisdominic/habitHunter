import React, { useState } from "react";
import {
  View,
  Text,
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
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import BackGraphic from "../../assets/habithunterauth.png";
import RegisterImage from "../../assets/images/habithunterregister.png";
// validators
import * as EmailValidator from "email-validator";
import Phone from "phone";
import Axios from "axios";

export default function SignUpScreen({ navigation }) {
  const [data, setData] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    phoneNumber: "",
    check_emailInputChange: false,
    check_phoneInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  const [error, setError] = useState(null);
  const emailInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_emailInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_emailInputChange: false,
      });
    }
  };
  const phoneInputChange = (val) => {
    if (val.length >= 10) {
      setData({
        ...data,
        phoneNumber: val,
        check_phoneInputChange: true,
      });
    } else {
      setData({
        ...data,
        phoneNumber: val,
        check_phoneInputChange: false,
      });
    }
  };
  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const handlePasswordCheckChange = (val) => {
    setData({
      ...data,
      passwordCheck: val,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const handleSubmit = async (event) => {
    setError(null);
    const emailVal = await EmailValidator.validate(data.email);
    const phoneVal = await Phone(data.phoneNumber);
    console.log(phoneVal);
    console.log("form data pre", data);
    if (data.password !== data.passwordCheck) {
      setError("Paswords do not match");
    } else if (!emailVal) {
      setError("Not a valid email address");
    } else if (!phoneVal[0]) {
      setError("Not a valid phone number");
    } else {
      try {
        const request = await Axios({
          method: "post",
          url: "http://localhost:8000/users/signup",
          data: {
            email: data.email,
            phoneNumber: data.phoneNumber,
            password: data.password,
            passwordCheck: data.passwordCheck,
          },
        });
        navigation.navigate("SignInScreen");
      } catch (error) {
        console.log(error);
        setError(error);
      }
    }
  };

  return (
    <View style={{ ...StyleSheet.absoluteFill }}>
      <ImageBackground source={BackGraphic} style={styles.image}>
        <SafeAreaView />
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <View style={styles.header}>
          <Image source={RegisterImage} style={styles.heroImg} />
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" size={24} color="black" />
            <TextInput
              autoCapitalize="none"
              placeholder="Your Email"
              style={styles.textInput}
              onChangeText={(val) => emailInputChange(val)}
            />
            {data.check_emailInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" size={24} color="green" />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={[{ marginTop: 20 }, styles.text_footer]}>
            Phone Number
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" size={24} color="black" />
            <TextInput
              autoCapitalize="none"
              placeholder="Phone Number"
              style={styles.textInput}
              onChangeText={(val) => phoneInputChange(val)}
            />
            {data.check_phoneInputChange ? (
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
            <Feather name="lock" size={24} color="#05375a" />
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
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" size={24} color="#05375a" />
            <TextInput
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              autoCapitalize="none"
              placeholder="Password"
              style={styles.textInput}
              onChangeText={(val) => handlePasswordCheckChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.confirm_secureTextEntry ? (
                <Feather name="eye-off" size={24} color="grey" />
              ) : (
                <Feather name="eye" size={24} color="grey" />
              )}
            </TouchableOpacity>
          </View>

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
            <TouchableOpacity
              onPress={handleSubmit}
              style={[
                styles.signIn,
                { borderColor: "#009387", borderWidth: 1, marginTop: -15 },
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
