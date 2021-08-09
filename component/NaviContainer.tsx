import React from 'react'
import { observer } from 'mobx-react-lite';
import { RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import AboutScreen from '../screen/AboutScreen';
import { StackNavigationProp } from '@react-navigation/stack';

const Stack = createNativeStackNavigator()

type RootStackParamList = {
   HomeScreen: undefined;
   AboutScreen: {ind: number};
};

type ProfileScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<RootStackParamList, T>;

type ProfileScreenNavigationProp<T extends keyof RootStackParamList> = StackNavigationProp<
   RootStackParamList,
   T
>;

export type PropsNavi<T extends keyof RootStackParamList> = {
   route: ProfileScreenRouteProp<T>;
   navigation: ProfileScreenNavigationProp<T>;
};

const NaviContainer = () => {
   return (
         <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AboutScreen" component={AboutScreen}/>
         </Stack.Navigator>
   )
}

export default observer(NaviContainer);