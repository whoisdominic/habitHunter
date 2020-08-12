import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Buddiescreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StatusBar hidden={true} />
      <Text>Buddies</Text>
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
});
