import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Dashboard from '../screens/DashBoard/Dashboard';
import UserLogin from '../screens/Authentication/UserLogin/UserLogin';

const {createStackNavigator} = require('@react-navigation/stack');

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{animationEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
