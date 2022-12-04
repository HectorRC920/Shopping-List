import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Item from './Item';
export default function ListItems({ items }) {
  return (
    <ScrollView style={styles.ScrollView}>
      {items.map((item) => {
        return <Item key={item.id} id={item.id} title={item.title} />;
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  ScrollView: {
    // flex: 2,
    // backgroundColor: "#61dafb",
    borderColor: '#20232a',
    width: '60%',
    height: '50%'
  },
});
