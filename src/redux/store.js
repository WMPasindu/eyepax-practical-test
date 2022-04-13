import {createStore, applyMiddleware, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import activityReducer from './reducers/activityReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['activityReducer'],
};

const rootReducer = combineReducers({activityReducer});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor};
