import React from 'react';
import {View, SafeAreaView} from 'react-native';
import CarouselCards from '../../components/CarouselCards';

const Dashboard = () => {
  return (
    <SafeAreaView>
      <View>
        <CarouselCards />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
