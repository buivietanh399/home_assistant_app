/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Navigator from './src/navigate/Navigator';

function App(): React.JSX.Element {

  return (
    <Navigator />
  );
}

export default App;
