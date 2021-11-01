import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import RootNavigation from './navigation/RootNavigation';
import Entry from './navigation/Entry';

export default function App() {

  return (
    <Provider store={store}>
          <Entry/>
    </Provider>
  );
}
