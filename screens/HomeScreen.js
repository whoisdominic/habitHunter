import React, { useState, useEffect, useContext } from "react";
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
  TextInput,
  Switch,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native-gesture-handler";
import Modal from "react-native-modal";
// Local Storage
import AsyncStorage from "@react-native-community/async-storage";
// Other Libraries
import Axios from "axios";
// Cards
import MonthlyImg from "../assets/images/habithuntermonthly.png";
import WeeklyImg from "../assets/images/habithunterweekly.png";
import DailyImg from "../assets/images/habithunterdaily.png";
import BackImg from "../assets/images/habithunterback.png";
import BlankImg from "../assets/images/habithunternew.png";
// Typo
import NewHabit from "../assets/images/typography/newhabit.png";
import Start from "../assets/images/typography/start.png";
import Buddies from "../assets/images/typography/buddies.png";
// Icons
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
// Constants
const { width, height } = Dimensions.get("window");

import { AuthContext } from "../components/authContext.js";

const element = ({ goal, image }) => {
  return (
    <TouchableOpacity style={styles.blankDailyCard}>
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
    <TouchableOpacity style={styles.blankDailyCard}>
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
  const [dailyModal, setDailyModal] = useState(false);
  const [weeklyModal, setWeeklyModal] = useState(false);
  const [monthlyModal, setMonthlyModal] = useState(false);
  const [buddies, setBuddies] = useState();
  const [userToken, setUserToken] = useState(null);

  const [attachBuddies, setAttachBuddies] = useState({});

  const toggleSwitch = (props) => {
    const buddy = props._id;
    if (attachBuddies[buddy] === undefined) {
      setAttachBuddies({ ...attachBuddies, [buddy]: true });
    } else {
      setAttachBuddies({ ...attachBuddies, [buddy]: !attachBuddies[buddy] });
    }
  };

  const buddyItem = ({ item }) => (
    <View style={styles.buddyItemCont}>
      <Text style={styles.buddyItem}>{item.name}</Text>
      <Switch
        value={attachBuddies[item._id]}
        onValueChange={() => {
          toggleSwitch(item);
        }}
      />
    </View>
  );

  const dailyModalToggle = () => {
    fetchBuddies();
    setDailyModal(!dailyModal);
  };
  const weeklyModalToggle = () => {
    setWeeklyModal(!weeklyModal);
  };
  const monthlyModalToggle = () => {
    setMonthlyModal(!monthlyModal);
  };

  const habitGoalChange = (val) => {
    console.log(val);
  };

  const fetchBuddies = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@habit_hunter_user");
      if (jsonValue === null) {
        setUserToken(null);
      }
      const user = JSON.parse(jsonValue);
      setUserToken(user);
      var config = {
        method: "get",
        url: "https://habithunter.herokuapp.com/buddies/all",
        headers: {
          "x-auth-token": user.token,
          id: user.user.id,
        },
        data: "",
      };
      const allBuddiesRequest = await Axios(config);
      const test = await console.log(allBuddiesRequest.data.buddies);
      setBuddies(allBuddiesRequest.data.buddies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBuddies();
  }, []);

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
            <ScrollView horizontal={true}>
              <TouchableOpacity activeOpacity={0.5}>
                <Image source={MonthlyImg} style={styles.heroImg} />
              </TouchableOpacity>

              <TouchableOpacity
                onLongPress={monthlyModalToggle}
                activeOpacity={0.75}
                style={styles.blankMonthlyCard}
              >
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

              {/* <FlatList
                  horizontal={true}
                  data={data}
                  renderItem={element}
                  keyExtractor={(item) => item.id}
                /> */}
            </ScrollView>

            <ScrollView horizontal={true}>
              <TouchableOpacity activeOpacity={0.5}>
                <Image source={WeeklyImg} style={styles.heroImg} />
              </TouchableOpacity>

              <TouchableOpacity
                onLongPress={weeklyModalToggle}
                activeOpacity={0.75}
                style={styles.blankWeeklyCard}
              >
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

              {/* <FlatList
                  horizontal={true}
                  data={data}
                  renderItem={element}
                  keyExtractor={(item) => item.id}
                /> */}
            </ScrollView>

            <ScrollView horizontal={true}>
              <TouchableOpacity activeOpacity={0.5}>
                <Image source={DailyImg} style={styles.heroImg} />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.75}
                style={styles.blankDailyCard}
                onLongPress={dailyModalToggle}
              >
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

              {/* <FlatList
                  horizontal={true}
                  data={data}
                  renderItem={element}
                  keyExtractor={(item) => item.id}
                /> */}
            </ScrollView>
          </ImageBackground>
        </View>

        <Modal
          style={{ flex: 1, maxHeight: height, marginTop: 50 }}
          swipeDirection={["left", "right"]}
          onSwipeComplete={dailyModalToggle}
          isVisible={dailyModal}
        >
          <View style={styles.modal}>
            <View style={styles.modalCont}>
              <View style={styles.modalHead}>
                <Image source={NewHabit} style={styles.modalLogo} />
                <TouchableOpacity onPress={dailyModalToggle}>
                  <Ionicons
                    style={{ margin: 16 }}
                    name="ios-close-circle-outline"
                    size={60}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.modalContBuddies}>
                <View>
                  <Text style={styles.habitTitle}>Habit Goal</Text>
                  <TextInput
                    autoCapitalize="none"
                    placeholder="Type Here"
                    placeholderTextColor={"grey"}
                    selectionColor={"#48b6db"}
                    style={styles.habitInput}
                    onChangeText={(val) => habitGoalChange(val)}
                  />
                </View>

                <View style={styles.modalBtn}>
                  <Text>Buddies</Text>
                </View>
                <FlatList
                  data={buddies}
                  renderItem={buddyItem}
                  keyExtractor={(item) => item._id}
                />
                <View style={styles.modalBtn}>
                  <Text>Start</Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        {/* 
        <Modal
          style={{ flex: 1, maxHeight: height, marginTop: 50 }}
          swipeDirection={["left", "right"]}
          isVisible={weeklyModal}
        >
          <View style={styles.modal}>
            <View style={styles.modalCont}>
              <Text>Weekly Modal</Text>
              <Button title="Hide modal" onPress={weeklyModalToggle} />
            </View>
          </View>
        </Modal>

        <Modal
          style={{ flex: 1, maxHeight: height, marginTop: 50 }}
          swipeDirection={["left", "right"]}
          isVisible={monthlyModal}
        >
          <View style={styles.modal}>
            <View style={styles.modalCont}>
              <Text>Monthly Modal</Text>
              <Button title="Hide modal" onPress={monthlyModalToggle} />
            </View>
          </View>
        </Modal> */}
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
  blankDailyCard: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: 400,
    height: 230,
    marginVertical: 7.5,
    marginRight: 6,
    backgroundColor: "#48b6db",
  },
  blankWeeklyCard: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: 400,
    height: 230,
    marginVertical: 7.5,
    marginRight: 6,
    backgroundColor: "#6639e3",
  },
  blankMonthlyCard: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: 400,
    height: 230,
    marginVertical: 7.5,
    marginRight: 6,
    backgroundColor: "#24ab89",
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
  modal: {
    flex: 1,
    borderRadius: 15,
    height: height * 0.8,
    backgroundColor: "#212121",
  },
  modalCont: {
    flex: 1,
  },
  modalHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: height * 0.2,
    marginTop: 6,
  },
  modalLogo: {
    width: width * 0.5,
    height: height * 0.1,
  },
  modalBtn: {
    backgroundColor: "#48b6db",
    borderRadius: 25,
    height: 75,
    width: width * 0.75,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContBuddies: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  habitInput: {
    color: "white",
    fontSize: 25,
    marginTop: 0,
    color: "#FFF",
  },
  habitTitle: {
    fontSize: 25,
    color: "#FFF",
    marginBottom: 20,
  },
  buddyItem: {
    color: "#FFF",
    fontSize: 20,
  },
  buddyItemCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.75,
    height: 40,
    marginTop: 15,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
});
