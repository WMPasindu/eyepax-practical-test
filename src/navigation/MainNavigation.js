import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DashboardScreen from '../screens/DashBoardScreen/Dashboard';
import UserLoginScreen from '../screens/Authentication/UserLogin/UserLogin';
import SearchScreen from '../screens/SearchScreen/Search';
import NewsDetails from '../screens/NewsDetailsScreen/NewsDetails';
import HotUpdates from '../screens/NotificationScreen/HotUpdates';

const {createStackNavigator} = require('@react-navigation/stack');

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Dashboard"
          component={HotUpdates}
          options={{animationEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
