import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  SafeAreaView,
  Keyboard,
  ScrollView,
} from 'react-native';

export default function Header (){
  return (
  <View style={styles.headerContainer}>
    <Text style={styles.header}>Lista pal mandado de los titos</Text>
    <StatusBar style="light" />
  </View>
  )
};

const styles = StyleSheet.create({
  header: {
  //   marginTop: 60,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: 'center'
  },
  headerContainer:{
    marginTop: 60,
    // marginBottom: 60,
    margin: 0,
    borderWidth: 1
  }
})