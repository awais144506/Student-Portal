import React, { createContext, useContext, useEffect, useState } from 'react';
import { account } from '../../Appwrite';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    account.get()
      .then((response) => setUser(response))
      .catch((error) => setUser(null));
  }, []);

  const logout = () => {
    const promise = account.deleteSession('current');

    promise.then(function (response) {
      console.log(response); // Success
    }, function (error) {
      console.log(error); // Failure
    });

    
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
