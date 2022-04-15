import React, {useRef, useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CustomNewsListItem from '../../components/CustomNewsListItem';
import CategoryListItem from '../../components/CategoryListItem';
import BottomSheet from 'react-native-simple-bottom-sheet';
import moment from 'moment';
import {getDataToDashboad} from '../../redux/actions/appDataActions';

const Dashboard = ({navigation}) => {
  const panelRef = useRef(null);
  const [selectedCategoryId, setSeleactCategoryId] = useState(0);
  const [selectedCategoryValue, setSeleactCategoryValue] =
    useState('popularity');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getDataToDashboad(selectedCategoryValue, moment().format('YYYY-MM-DD')),
    );
  }, [selectedCategoryValue]);

  const {articles, articlesCount} = useSelector(state => state.topNewsReducer);

  const [articleArray, setArticlesArray] = useState([]);

  useEffect(() => {
    setArticlesArray(articles);
  }, [articles]);

  const ANIMAL_NAMES = [
    {
      id: 0,
      name: 'Filter',
    },
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
    if (id === 0) {
      panelRef.current.togglePanel();
      setSeleactCategoryId(id);
    } else {
      setSeleactCategoryId(id);
      setSeleactCategoryValue(name.toLowerCase());
    }
  };

  const searchItems = text => {
    let newData = articleArray.filter(item => {
      const itemData = `${item.title}`;
      const textData = text.toUpperCase();
      if (text.length > 0) {
        return itemData.toUpperCase().indexOf(textData) > -1;
      } else {
        return articles;
      }
    });
    setArticlesArray(newData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.containerSearchArea}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={searchItems}
            status="info"
            placeholder="Dogecoin to the Moon..."
            style={styles.containerSearch}
            textStyle={{color: '#818181', fontSize: 15}}
          />
        </View>

        <View style={styles.containerCategoryList}>
          <CategoryListItem
            data={ANIMAL_NAMES}
            navigate={navigation}
            onPress={onSelectCategory}
            selectItem={selectedCategoryId}
          />
        </View>

        <View style={styles.containerNewsLineList}>
          <CustomNewsListItem articles={articleArray} navigate={navigation} />
        </View>
        <BottomSheet
          isOpen={false}
          ref={ref => (panelRef.current = ref)}
          wrapperStyle={{backgroundColor: '#FFF'}}>
          <View style={{height: 400}}>
            <Text style={{height: 110}}>This is not implemented yet.</Text>
          </View>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#FFF',
  },
  containerSearchArea: {
    flexDirection: 'row',
    height: '5%',
    width: '100%',
    marginTop: 10,
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
    width: '90%',
    padding: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#F0F1FA',
  },
});

export default Dashboard;
