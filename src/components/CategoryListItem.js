import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CategoryListItem = ({item}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => console.log(item.name)}>
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    borderColor: '#F0F1FA',
    borderWidth: 1,
    paddingVertical: 5,
    marginVertical: 20,
    paddingHorizontal: 20,
    margin: 2,
    borderRadius: 16,
  },
  itemText: {
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
  },
});

export default CategoryListItem;
