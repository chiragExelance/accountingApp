import React from 'react';
import { StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import MainStackNavigator from './src/navigators/navigation';
import storage from './src/reducers/store';

const {store, persistor} = storage();

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <MainStackNavigator />
    </Provider>
  );
};

export default App;
