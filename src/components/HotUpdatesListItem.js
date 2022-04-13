import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{uri: item.imgUrl}} style={styles.image} />

      <Text style={styles.date}>{'Monday, 10 May 2021'}</Text>
      <Text style={styles.titleText}>
        {
          'WHO classifies triple-mutant Covid variant from India as global health risk'
        }
      </Text>
      <Text style={styles.descriptionText}>
        {
          'A World Health Organization official said Monday it is reclassifying the highly contagious triple-mutant Covid variant spreading in India as a “variant of concern,” indicating that it’s become a...Read More'
        }
      </Text>
      <Text style={styles.author}>{'Published by Berkeley Lovelace Jr.'}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 20,
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
  date: {
    color: 'black',
    marginTop: 10,
    marginHorizontal: 5,
    fontSize: 12,
  },
  titleText: {
    color: 'black',
    marginTop: 5,
    marginHorizontal: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionText: {
    color: 'black',
    marginTop: 10,
    marginHorizontal: 5,
    fontSize: 16,
  },
  author: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 5,
    fontSize: 12,
  },
});

export default CarouselCardItem;
