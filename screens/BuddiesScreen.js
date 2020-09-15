// Expo
import { StatusBar } from "expo-status-bar";
import * as Contacts from "expo-contacts";
// React +
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from "react-native";
// Other Libraries
import { SwipeListView } from "react-native-swipe-list-view";
// Icons
import { AntDesign } from "@expo/vector-icons";
// Images
import BackImg from "../assets/images/habithunterbackBuddies.png";
// Algorithms
import ContactSort from "../algorithms/ContactSort.js";
// Constants
const { width, height } = Dimensions.get("window");

export default function Buddiescreen({ navigation }) {
  const [contactList, setContactList] = useState(null);

  const fetchContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.FirstName, Contacts.Fields.LastName],
        sort: Contacts.SortTypes.FirstName,
      });

      if (data.length > 0) {
        const contacts = data;
        // Sort Function Here
        /*
        _____________________
        _____________________
        _____________________
        _____________________
        */
        console.log(contacts);
        setContactList(contacts);
      }
    }
  };
  const handleBuddieAdd = async (item) => {
    console.log(item);
  };

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  useEffect(() => {
    fetchContacts();
  }, []);
  // LIST ITEM
  const ContactItem = ({ name }) => (
    <View style={styles.contactBtn}>
      <Text
        style={{
          fontSize: 15,
          color: "#fff",
        }}
      >
        {name}
      </Text>
    </View>
  );

  const ContactHiddenItem = ({ item }) => (
    <View style={styles.backRightBtn}>
      <TouchableOpacity
        onPress={() => {
          handleBuddieAdd(item);
        }}
      >
        <AntDesign
          style={styles.addIcon}
          name="adduser"
          size={34}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
  const renderContactItem = ({ item }) => <ContactItem name={item.name} />;
  const renderContactHiddenItem = (item) => <ContactHiddenItem item={item} />;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <StatusBar hidden={true} />
      <View style={{ ...StyleSheet.absoluteFill }}>
        <ImageBackground source={BackImg} style={styles.backImage}>
          <SafeAreaView />
          <View style={[styles.sectionHeader, styles.center]}>
            <Text style={styles.txtSections}>Buddies</Text>
          </View>
          <View style={[styles.sectionHeader, styles.center]}>
            <Text style={styles.txtSections}>Contacts</Text>
          </View>
          <View style={styles.container}>
            <SwipeListView
              data={contactList}
              renderItem={renderContactItem}
              renderHiddenItem={renderContactHiddenItem}
              keyExtractor={(item) => item.id}
              rightOpenValue={-75}
              leftOpenValue={0}
            />

            {/* <FlatList
              data={contactList}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            /> */}
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  item: {
    flex: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  sectionHeader: {
    marginVertical: 10,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    width: width * 0.9,
    height: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  txtSections: {
    fontSize: 20,
  },
  hiddenItem: {
    backgroundColor: "#FFF",
  },
  contactBtn: {
    padding: 25,
    alignItems: "center",
    borderRadius: 7.5,
    width: width * 0.9,
    margin: 3.5,
    backgroundColor: "#24ab89",
    borderColor: "#FFF",
    borderWidth: 2.25,
  },
  contactBtnHidden: {
    backgroundColor: "#24ab89",
    padding: 25,
    alignItems: "flex-end",
    borderRadius: 7.5,
    width: width * 0.9,
    margin: 3.5,
    borderColor: "#FFF",
    borderWidth: 2.25,
  },
  backRightBtn: {
    flexDirection: "row",
    justifyContent: "flex-end",
    borderRadius: 7.5,
    width: width * 0.9,
    margin: 3.5,
    padding: 25,
    backgroundColor: "#212121",
    borderColor: "#FFF",
    borderWidth: 2.25,
  },
  addIcon: {
    marginTop: -15,
    height: 32,
    top: 5,
    right: -7.5,
  },
});
