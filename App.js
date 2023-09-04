import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { AuthProvider } from './api/auth/AuthProvider';
import ChangePassword from './screens/ChangePassword';
import FeeDetails from './screens/FeeDetails';
import Notifications from './components/Notifications';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />  
        <Stack.Screen name="Notifications" component={Notifications}  options={{ headerShown: false }} />  
        <Stack.Screen name="ChangePass" component={ChangePassword}  options={{ headerShown: false }} />  
        <Stack.Screen name="FeeDetails" component={FeeDetails}  options={{ headerShown: false }} />  
      </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
