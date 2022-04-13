import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import HotUpdatesListItem from '../../components/HotUpdatesListItem';
import {BackButton} from '../../assets';

const Dashboard = () => {
  const MenuButton = () => <BackButton />;

  const Header = () => (
    <React.Fragment>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <MenuButton />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>HOT UPDATES</Text>
        </View>
      </View>
    </React.Fragment>
  );

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
    {
      id: 4,
      title: 'Lorem Ipsum',
      body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
      imgUrl: 'https://picsum.photos/id/12/200/300',
    },
    {
      id: 5,
      title: 'Lorem Ipsum',
      body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
      imgUrl: 'https://picsum.photos/id/12/200/300',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.containerNewsLineList}>
        <FlatList
          data={data}
          renderItem={HotUpdatesListItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
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
  containerNewsLineList: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  containerSearch: {
    height: '100%',
    width: '90%',
    padding: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#F0F1FA',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5%',
  },
  headerTextContainer: {
    width: '100%',
  },
  headerText: {
    color: '#FE5861',
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default Dashboard;
