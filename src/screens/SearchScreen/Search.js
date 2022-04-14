import React, {useRef, useState} from 'react';
import {View, SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';
import {useSelector} from 'react-redux';
import CustomNewsListItem from '../../components/CustomNewsListItem';
import CategoryListItem from '../../components/CategoryListItem';
import BottomSheet from 'react-native-simple-bottom-sheet';

const Dashboard = ({navigation}) => {
  const panelRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(0);
  const {articles, articlesCount} = useSelector(state => state.topNewsReducer);

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

  const clicked = value => {
    if (value === 0) {
      panelRef.current.togglePanel();
      setSelectedItem(value);
    } else {
      setSelectedItem(value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.containerSearchArea}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.handleSearch}
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
            onPress={clicked}
            selectItem={selectedItem}
          />
        </View>

        <View style={styles.containerNewsLineList}>
          <CustomNewsListItem articles={articles} navigate={navigation} />
        </View>
        <BottomSheet
          isOpen={false}
          ref={ref => (panelRef.current = ref)}
          wrapperStyle={{backgroundColor: '#FFF'}}>
          <View style={{height: 400}}>
            <Text style={{height: 110}}>Some random content</Text>
          </View>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
