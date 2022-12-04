import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
export default function Item({ title, id }) {
  return (
    <View style={styles.itemContainer}>
      <Text id={id}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 2,
    backgroundColor: "#61dafb",
    color: "#20232a",
    alignItems: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});