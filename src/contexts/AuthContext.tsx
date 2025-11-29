import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children } : any) {
  const [userLogged, setUserLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

type AuthContextType = {
    userLogged: boolean;
    setUserLogged: (value: boolean) => void;
  };