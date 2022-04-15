import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/redux/store';
import MainNavigator from './src/navigation/MainNavigation';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainNavigator />
    </PersistGate>
  </Provider>
);

export default App;
