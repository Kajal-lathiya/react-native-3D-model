import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Animations, Multiple} from '../screens';

const Stack = createNativeStackNavigator();

const AppRootstack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Animations" component={Animations} />
        <Stack.Screen name='Multiple' component={Multiple} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <AppRootstack />;
};
