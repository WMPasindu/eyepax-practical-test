import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CarouselCards from '../../components/CarouselCards';
import CustomNewsListItem from '../../components/CustomNewsListItem';
import CategoryListItem from '../../components/CategoryListItem';
import {SeeAllIcon, BellIcon} from '../../assets';

const Dashboard = () => {
  data = [
    {
      id: 1,
      title: 'Aenean leo',
      body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      imgUrl: 'https://picsum.photos/id/11/200/300',
    },
    {
      id: 2,
      title: 'In turpis',
      body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
      imgUrl: 'https://picsum.photos/id/10/200/300',
    },
    {
      id: 3,
      title: 'Lorem Ipsum',
      body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
      imgUrl: 'https://picsum.photos/id/12/200/300',
    },
  ];

  const ANIMAL_NAMES = [
    {
      id: 1,
      name: 'Cat',
    },
    {
      id: 2,
      name: 'Dog',
    },
    {
      id: 3,
      name: 'Chicken',
    },
    {
      id: 4,
      name: 'Duck',
    },
    {
      id: 5,
      name: 'Cow',
    },
    {
      id: 6,
      name: 'Deer',
    },
    {
      id: 7,
      name: 'Horse',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerSearchNotificationCenter}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.handleSearch}
          status="info"
          placeholder="Dogecoin to the Moon..."
          style={styles.containerSearch}
          textStyle={{color: '#818181', fontSize: 15}}
        />
        <View style={styles.containerNotification}>
          <TouchableOpacity>
            <BellIcon />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.headerTitleLatestNews}>
          <Text style={styles.headerTitleLatestNewsText}>Latest News</Text>
          <View>
            <TouchableOpacity style={styles.componentLatestNewsSeeAll}>
              <Text style={styles.headerTitleLatestNewsSeeAllText}>
                See All
              </Text>
              <SeeAllIcon />
            </TouchableOpacity>
          </View>
        </View>
        <CarouselCards />
      </View>

      <View style={styles.containerCategoryList}>
        <FlatList
          data={ANIMAL_NAMES}
          renderItem={CategoryListItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.containerNewsLineList}>
        <FlatList
          data={data}
          renderItem={CustomNewsListItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerSearchNotificationCenter: {
    flexDirection: 'row',
    height: '5%',
    width: '95%',
    margin: 10,
    justifyContent: 'space-evenly',
  },
  containerLatestNewsLine: {
    marginTop: 10,
  },
  containerCategoryList: {
    paddingHorizontal: 10,
  },
  containerNewsLineList: {
    paddingHorizontal: 10,
  },
  componentLatestNewsSeeAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleLatestNews: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  headerTitleLatestNewsText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerTitleLatestNewsSeeAllText: {
    color: '#0080FF',
    marginHorizontal: 10,
  },
  containerSearch: {
    height: '100%',
    width: '80%',
    padding: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#F0F1FA',
  },
  containerNotification: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
