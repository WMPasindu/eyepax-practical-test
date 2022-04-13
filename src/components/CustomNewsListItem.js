import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const CustomNewsListItem = ({item, index}) => {
  return (
    <View style={styles.container} key={index}>
      <TouchableOpacity onPress={() => console.log('Item : ' + index)}>
        <ImageBackground source={{uri: item.imgUrl}} style={styles.image}>
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
            <Text style={styles.descriptionText}>{item.title}</Text>
            <Text style={styles.descriptionText}>{item.body}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginVertical: 5,
  },
  image: {
    width: ITEM_WIDTH,
    height: 150,
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
  titleText: {
    color: 'white',
  },
  descriptionText: {
    color: 'white',
  },
});

export default CustomNewsListItem;
