import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth } from 'firebase/auth';
import { auth } from './Firebase'; // Import your Firebase configuration

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} initialParams={{ auth }} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{ auth }} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
