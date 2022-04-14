import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
import {BackIconWithBackground, FavouritIcon} from '../../assets';
import COLORS from '../../const/colors';

const NewsDetails = ({navigation, route}) => {
  const item = route.params.itemObject;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{flex: 1}} source={{uri: item.urlToImage}}>
        <View style={style.header}>
          {/* <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
          <Icon name="more-vert" size={28} color={COLORS.white} /> */}
          <TouchableOpacity onPress={navigation.goBack}>
            <BackIconWithBackground />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={style.detailsContainer}>
        <View style={style.imageDetails}>
          <Text
            style={{
              width: '100%',
              fontSize: 12,
              fontWeight: 'bold',
              color: COLORS.dark,
              margin: 5,
            }}>
            {moment(item.publishedAt).format('dddd, d MMM yyyy')}
          </Text>
          <Text
            style={{
              width: '100%',
              fontSize: 16,
              fontWeight: 'bold',
              color: COLORS.dark,
              margin: 5,
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              width: '100%',
              fontSize: 10,
              fontWeight: 'bold',
              color: COLORS.dark,
              margin: 5,
            }}>
            {'Published by ' + item.author}
          </Text>
        </View>

        <ScrollView
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              marginTop: 40,
              fontSize: 16,
            }}>
            {item.content}
          </Text>
        </ScrollView>
      </View>
      <TouchableOpacity style={style.iconContainer}>
        <FavouritIcon />
      </TouchableOpacity>
      {/* <View style={style.footer}>
        <View style={style.iconContainer}>
          <FavouritIcon />
        </View>
      </View> */}
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  iconContainer: {
    height: 60,
    width: 60,
    top: -30,
    backgroundColor: '#FF4B55',
    borderRadius: 30,
    right: 20,
    elevation: 10,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flex: 0.3,
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 10,
    flexDirection: 'column',
    alignSelf: 'center',
    width: '80%',
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    opacity: 0.85,
    bottom: 160,
  },
  footer: {
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default NewsDetails;
