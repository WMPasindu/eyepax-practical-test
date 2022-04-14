import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import moment from 'moment';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const CustomNewsListItem = ({articles, navigate}) => {
  return (
    <View>
      <FlatList
        data={articles}
        renderItem={({item, index}) => {
          return (
            <View style={styles.container} key={index}>
              <TouchableOpacity
                onPress={() =>
                  navigate.navigate('NewsDetailsScreen', {
                    itemObject: item,
                  })
                }>
                <ImageBackground
                  source={{uri: item.urlToImage}}
                  style={styles.image}>
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 10,
                      bottom: 0,
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <View style={styles.textContainer}>
                      <Text style={styles.authorText}>{item.author}</Text>
                      <Text style={styles.dateText}>
                        {moment(item.publishedAt).format('dddd, d MMM yyyy')}
                      </Text>
                    </View>
                    {/* <Text style={styles.descriptionText}>
                      {item.description}
                    </Text> */}
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
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
    opacity: 1,
    backgroundColor: 'rgba(255,0,0,.6)',
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    padding: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    padding: 20,
    paddingRight: 20,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    textAlign: 'center',
  },
  authorText: {
    color: 'white',
    fontSize: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 16,
    padding: 20,
  },
  dateText: {
    color: 'white',
    fontSize: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionText: {
    color: 'white',
    fontSize: 10,
  },
});

export default CustomNewsListItem;
