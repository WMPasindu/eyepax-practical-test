import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNC_KEY_USER} from '../config/config';

const storeUserData = async value => {
  try {
    console.log(`userData123`, value);
    const jsonValue = JSON.stringify(value);
    console.log(`userData123`, jsonValue);
    await AsyncStorage.setItem(ASYNC_KEY_USER, jsonValue);
  } catch (e) {
    console.log(`Async Storage Write Error`, e);
  }
};

const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(ASYNC_KEY_USER);
    console.log(`userData`, jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(`Async Storage Read Error`, e);
  }
};

export {storeUserData, getUserData};
