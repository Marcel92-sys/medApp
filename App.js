import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import RootNavigation from './navigation/RootNavigation';

export default function App() {

  return (
    <Provider store={store}>
          <RootNavigation/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
