import { StatusBar } from 'expo-status-bar';
import * as Contacts from 'expo-contacts';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import BackImg from '../assets/images/habithunterbackBuddies.png';

const { width, height } = Dimensions.get('window');

export default function Buddiescreen({ navigation }) {
  const [contactList, setContactList] = useState(null);

  const fetchContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.FirstName, Contacts.Fields.LastName],
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
        setContactList(contacts);
      }
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);
  // LIST ITEM
  const Item = ({ name }) => (
    <TouchableOpacity activeOpacity={0.5}>
      <View
        style={{
          padding: 25,
          alignItems: 'center',
          borderRadius: 7.5,
          width: width * 0.9,
          margin: 3.5,
          backgroundColor: '#24ab89',
          borderColor: '#FFF',
          borderWidth: 2.25,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: '#fff',
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => <Item name={item.name} />;

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
          <View style={[styles.sectionHeader, styles.center]}>
            <Text style={styles.txtSections}>Buddies</Text>
          </View>
          <View style={[styles.sectionHeader, styles.center]}>
            <Text style={styles.txtSections}>Contacts</Text>
          </View>
          <View style={styles.container}>
            <FlatList
              data={contactList}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
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
  },
  backImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
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
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    width: width * 0.9,
    height: 35,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtSections: {
    fontSize: 20,
  },
});
