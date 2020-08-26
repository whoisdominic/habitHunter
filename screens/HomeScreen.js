import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native-gesture-handler";
// Cards
import MonthlyImg from "../assets/images/habithuntermonthly.png";
import WeeklyImg from "../assets/images/habithunterweekly.png";
import DailyImg from "../assets/images/habithunterdaily.png";
import BackImg from "../assets/images/habithunterback.png";
import BlankImg from "../assets/images/habithunternew.png";
// Typo
import NewHabit from "../assets/images/typography/newhabit.png";
// Icons
import { AntDesign } from "@expo/vector-icons";
// Constants
const { width, height } = Dimensions.get("window");

const element = ({ goal, image }) => {
  return (
    <TouchableOpacity style={styles.blankCard}>
      <View style={styles.cardCont}>
        <Image style={styles.cardTypo} source={NewHabit} />
        <AntDesign
          style={styles.cardBtn}
          name="pluscircleo"
          size={80}
          color="black"
        />
      </View>
    </TouchableOpacity>
  );
};
const newHabit = () => {
  return (
    <TouchableOpacity style={styles.blankCard}>
      <View style={styles.cardCont}>
        <Image style={styles.cardTypo} source={NewHabit} />
        <AntDesign
          style={styles.cardBtn}
          name="pluscircleo"
          size={80}
          color="black"
        />
      </View>
    </TouchableOpacity>
  );
};
const element2 = () => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.5}>
        <Image source={MonthlyImg} style={styles.heroImg} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <Image source={WeeklyImg} style={styles.heroImg} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <Image source={DailyImg} style={styles.heroImg} />
      </TouchableOpacity>
    </View>
  );
};

const data = [
  {
    id: "1",
    goal: "eat healthy",
    daily: true,
    weekly: false,
    monthly: false,
    progress: 10,
    buddies: [{ buddyId: "Bot" }],
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "flex-end",
      }}
    >
      <View style={{ ...StyleSheet.absoluteFill }}>
        <View style={styles.container}>
          <View style={styles.spacer}>
            <Text style={styles.spacer}>{""}</Text>
          </View>
          <ImageBackground source={BackImg} style={styles.backImage}>
            <StatusBar hidden={true} />
            <SafeAreaView />
            <ScrollView centerContent={true}>
              <TouchableOpacity activeOpacity={0.5}>
                <Image source={MonthlyImg} style={styles.heroImg} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <Image source={WeeklyImg} style={styles.heroImg} />
              </TouchableOpacity>
              <ScrollView horizontal={true}>
                <TouchableOpacity activeOpacity={0.5}>
                  <Image source={DailyImg} style={styles.heroImg} />
                </TouchableOpacity>
                <FlatList
                  horizontal={true}
                  data={data}
                  renderItem={element}
                  keyExtractor={(item) => item.id}
                />
              </ScrollView>
            </ScrollView>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backImage: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#212121",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  spacer: {
    width: 600,
    height: 0,
  },
  heroImg: {
    borderRadius: 15,
    maxWidth: 400,
    marginVertical: 7.5,
    marginRight: 20,
    marginLeft: 8,
  },
  blankCard: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: 400,
    height: 230,
    marginVertical: 7.5,
    marginRight: 8,
    backgroundColor: "#48b6db",
  },
  backImage: {
    flex: 1,
    justifyContent: "center",
  },
  cardCont: {
    width: width * 0.8,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  cardTypo: { marginRight: 60 },
  cardBtn: { marginRight: 25 },
});
