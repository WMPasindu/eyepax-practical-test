import {createStore, applyMiddleware, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import activityReducer from './reducers/activityReducer';
import loginReducer from './reducers/loginReducer';
import registerReducer from './reducers/registerReducer';
import appDataReducer from './reducers/appDataReducer';
import topNewsReducer from './reducers/topNewsReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['activityReducer', 'registerReducer', 'appDataReducer'],
};

const rootReducer = combineReducers({
  activityReducer,
  loginReducer,
  registerReducer,
  appDataReducer,
  topNewsReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor};
