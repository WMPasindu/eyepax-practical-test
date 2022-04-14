import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';

const CategoryListItem = ({data, onPress, selectItem, navigation}) => {
  return (
    <View>
      <FlatList
        data={data}
        initialScrollIndex={0}
        renderItem={({item, index}) => {
          return (
            <View key={index}>
              <TouchableOpacity onPress={() => onPress(index)}>
                <View
                  style={
                    selectItem == index
                      ? styles.itemSeleted
                      : styles.itemNotSeleted
                  }>
                  <Text
                    style={
                      selectItem == index
                        ? styles.selectedItemText
                        : styles.notSelectedItemText
                    }>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemSeleted: {
    backgroundColor: '#FF6068',
    borderColor: '#FF464F',
    borderWidth: 1,
    paddingVertical: 5,
    marginVertical: 20,
    paddingHorizontal: 20,
    margin: 2,
    borderRadius: 16,
  },
  itemNotSeleted: {
    backgroundColor: '#FFF',
    borderColor: '#F0F1FA',
    borderWidth: 1,
    paddingVertical: 5,
    marginVertical: 20,
    paddingHorizontal: 20,
    margin: 2,
    borderRadius: 16,
  },
  selectedItemText: {
    fontSize: 15,
    color: '#FFF',
    textAlign: 'center',
  },
  notSelectedItemText: {
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
  },
});

export default CategoryListItem;
