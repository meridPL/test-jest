/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NaviContainer from './component/NaviContainer';
import HomeScreen from './screen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ContextProvider } from './component/Context';
import { StoreMB } from './mobx/store';

const App = () => {

  return (
    <View style={{
      flex: 1
    }}>
      <ContextProvider value={new StoreMB()}>

      <NavigationContainer>

        <NaviContainer />
      </NavigationContainer>
      </ContextProvider>
    </View>
  );
};

export default App;
