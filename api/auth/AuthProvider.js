import React, { createContext, useContext, useEffect, useState } from 'react';
import { account } from '../../Appwrite';
import { useNavigation } from '@react-navigation/native';
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    account.get()
      .then((response) => setUser(response))
      .catch((error) => setUser(null));
  }, []);


  const login = (email, password) => {
    const promise = account.createEmailSession(email, password);
    promise.then(function (response) {
      console.log('Logged In ',response)
      let accountDetails = account.get()
      setUser(accountDetails)
    }, function (error) {
      console.log(error); // Failure
    });
  }

  const logout = () => {
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
    <AuthContext.Provider value={{ user, logout ,login}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
