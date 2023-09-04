import React, { createContext, useContext, useEffect, useState } from 'react';
import { account } from '../../Appwrite';
import { useNavigation } from '@react-navigation/native';
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('')
  const navigation = useNavigation();


  useEffect(() => {
    account.get()
      .then((response) => setUser(response))
      .catch((error) => setUser(null));
  }, []);


  const login = async (email, password) => {
    try {
      const response = await account.createEmailSession(email, password);
      console.log('Logged In', response);
  
      const accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      setError('Invalid Username or Password');
    }
  }

  const logout = () => {
    if (!user) {
      console.error('User is null or undefined. Logout aborted.');
      return;
    }
  
    account
      .deleteSession('current')
      .then((response) => {
        console.log('Logout successful:', response);
        setUser(null);
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.error('Logout failed:', error);
      });
  };
  




  return (
    <AuthContext.Provider value={{ user, logout ,login,error}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
