import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {
  getDataToDashboad,
  getTopHeadLines,
} from '../../redux/actions/appDataActions';
import CarouselCards from '../../components/CarouselCards';
import CustomNewsListItem from '../../components/CustomNewsListItem';
import CategoryListItem from '../../components/CategoryListItem';
import {SeeAllIcon, BellIcon} from '../../assets';

const Dashboard = ({navigation}) => {
  const [selectedCategoryId, setSeleactCategoryId] = useState(0);
  const [selectedCategoryValue, setSeleactCategoryValue] =
    useState('popularity');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getDataToDashboad(selectedCategoryValue, moment().format('YYYY-MM-DD')),
    );
    dispatch(getTopHeadLines('country', 'us'));
  }, []);

  useEffect(() => {
    dispatch(
      getDataToDashboad(selectedCategoryValue, moment().format('YYYY-MM-DD')),
    );
  }, [selectedCategoryId]);

  const {articles, articlesCount} = useSelector(state => state.topNewsReducer);

  const [articleArray, setArticlesArray] = useState([]);

  useEffect(() => {
    setArticlesArray(articles);
  }, [articles]);

  const fetchMoreData = () => {
    console.log('Helloooooo');
  };

  const categories = [
    {
      id: 1,
      name: 'Healthy',
    },
    {
      id: 2,
      name: 'Technology',
    },
    {
      id: 3,
      name: 'Finance',
    },
    {
      id: 4,
      name: 'Arts',
    },
    {
      id: 5,
      name: 'Science',
    },
  ];

  const onSelectCategory = (id, name) => {
    setSeleactCategoryId(id);
    setSeleactCategoryValue(name.toLowerCase());
  };

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
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationScreen')}>
            <BellIcon />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.headerTitleLatestNews}>
          <Text style={styles.headerTitleLatestNewsText}>Latest News</Text>
          <View>
            <TouchableOpacity
              style={styles.componentLatestNewsSeeAll}
              onPress={() => navigation.navigate('SearchScreen')}>
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
        <CategoryListItem
          data={categories}
          navigate={navigation}
          onPress={onSelectCategory}
          selectItem={selectedCategoryId}
        />
      </View>

      <View style={styles.containerNewsLineList}>
        <CustomNewsListItem articles={articleArray} navigate={navigation} />
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
    paddingLeft: 15,
  },
  containerNewsLineList: {
    paddingHorizontal: 15,
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
