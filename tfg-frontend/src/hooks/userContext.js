// UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: sessionStorage.getItem('username') || '',
    token: sessionStorage.getItem('token') || '',
    email: sessionStorage.getItem('email') || '',
    userId: sessionStorage.getItem('userId') || '',
  });

  const updateUser = (userData) => {
    setUser(userData);
    Object.entries(userData).forEach(([key, value]) => {
      sessionStorage.setItem(key, value);
    });
  };

  const clearUser = () => {
    setUser({
      username: '',
      avatar: '',
      token: '',
      email: '',
      userId: '',
    });
    sessionStorage.clear();
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};
