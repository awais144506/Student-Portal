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

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
