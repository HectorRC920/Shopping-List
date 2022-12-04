import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Header from "./components/Header";
import ListItems from "./components/ListItems";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
} from "react-native";

export default function App() {
  let [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({});

  const addItem = (newItem) => {
    if (newItem == '') return;
    const tempArr = items;
    tempArr.push(newItem);
    setItems(tempArr);
    console.log(items);
    setNewItem("");
    // console.log(items);
    Keyboard.dismiss()
  };
  const onChangeText = (event) => {
    let newItemObject = {
      id: event,
      title: event,
    };
    setNewItem(newItemObject);
  };
  return (
    <View style={styles.container}>
      <Header/>
      <TextInput
      
        placeholder="Escribe cosa pal mandado"
        onChangeText={onChangeText}
        value={newItem}
        onSubmitEditing={() => addItem(newItem)}
      ></TextInput>
      <ListItems 
        items={items}
      />
      <View style={styles.addItemButtonContainer}>
        <Button
          style={styles.addItemButton}
          title="Agrega un productini"
          onPress={() => addItem(newItem)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  addItemButtonContainer:{
    borderWidth: 1,
    // backgroundColor: "#61dafb",
    borderColor: "#20232a",
    marginBottom: 20
  }
});
