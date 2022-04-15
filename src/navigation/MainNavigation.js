import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {isReadyRef, navigationRef} from 'react-navigation-helpers';
import DashboardScreen from '../screens/DashBoardScreen/Dashboard';
import UserLoginScreen from '../screens/Authentication/UserLogin/UserLogin';
import UserRegistration from '../screens/Authentication/UserRegistration/UserRegistration';
import SearchScreen from '../screens/SearchScreen/Search';
import NewsDetails from '../screens/NewsDetailsScreen/NewsDetails';
import HotUpdates from '../screens/NotificationScreen/HotUpdates';

const {createStackNavigator} = require('@react-navigation/stack');

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

const MainNavigator = () => {
  const {isLoggedIn} = useSelector(state => state.loginReducer);

  const AuthNavigator = () => {
    return (
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="UserLogin"
          component={UserLoginScreen}
          options={{
            animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          }}
        />
        <Stack.Screen
          name="UserRegistration"
          component={UserRegistration}
          options={{
            animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          }}
        />
      </AuthStack.Navigator>
    );
  };

  if (isLoggedIn) {
    return (
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="DashboardScreen"
            component={DashboardScreen}
            options={{animationEnabled: false}}
          />
          <Stack.Screen
            name="NewsDetailsScreen"
            component={NewsDetails}
            options={{animationEnabled: false}}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{animationEnabled: false}}
          />
          <Stack.Screen
            name="NotificationScreen"
            component={HotUpdates}
            options={{animationEnabled: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}>
        <AuthNavigator />
      </NavigationContainer>
    );
  }
};

export default MainNavigator;
