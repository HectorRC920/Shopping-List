import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
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
} from "react-native";

const Item = ({ title, id }) => {
  return (
    <View style={styles.itemContainer}>
      <Text id={id}>{title}</Text>
    </View>
  );
};
export default function App() {
  let [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({});

  const addItem = (newItem) => {
    if (newItem == null) return;
    const tempArr = items;
    tempArr.push(newItem);
    setItems(tempArr);
    console.log(items);
    setNewItem("");
    // console.log(items);
    // Keyboard.dismiss()
  };
  const onChangeText = (event) => {
    let newItemObject = {
      id: event,
      title: event,
    };
    setNewItem(newItemObject);
  };
  const renderItem = ({ item }) => {
    return <Item title={item.title} />;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista pal mandado de los titos</Text>
      <StatusBar style="light" />
      <TextInput
        placeholder="Escribe cosa pal mandado"
        onChangeText={onChangeText}
        value={newItem}
        onSubmitEditing={() => addItem(newItem)}
      ></TextInput>
      <ScrollView style={styles.ScrollView}>
        {items.map((item) => {
          return <Item id={item.id} title={item.title} />;
        })}
      </ScrollView>
      <Text>title {newItem.title}</Text>
      <Text>Id {newItem.id}</Text>
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    justifyContent: "center",
  },
  itemContainer: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    // width: '70%',
    backgroundColor: "#61dafb",
    color: "#20232a",
    alignItems: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  header: {
    marginTop: 60,
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
  },
  ScrollView: {
    // flex: 2,
    borderWidth: 1,
    // backgroundColor: "#61dafb",
    borderColor: "#20232a",
    width: "70%",
  },
  addItemButtonContainer:{
    borderWidth: 1,
    // backgroundColor: "#61dafb",
    borderColor: "#20232a",
    marginBottom: 20
  }
});
