import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
export default function Item({ title, id }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.deleteItemSytle}
      onPress={() => {
        alert(`Presionaste ${title}`);
      }}>X</Text>
      <Text id={id}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  deleteItemSytle: {
    position: 'absolute',
    right:1,
  },
  itemContainer: {
    marginTop: 16,
    paddingVertical: 8,
    borderColor: "#20232a",
    backgroundColor: "#61dafb",
    color: "#20232a",
    alignItems: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});