import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={styles.container} key={index}>
      <ImageBackground source={{uri: item.urlToImage}} style={styles.image}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Text style={styles.authorText}>{item.author}</Text>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: ITEM_WIDTH,
    paddingBottom: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 15,
  },
  image: {
    width: ITEM_WIDTH,
    height: 240,
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
  authorText: {
    color: 'white',
    fontSize: 10,
    padding: 5,
  },
  titleText: {
    color: 'white',
    fontSize: 16,
    padding: 5,
  },
  descriptionText: {
    color: 'white',
    fontSize: 10,
    padding: 10,
  },
});

export default CarouselCardItem;
