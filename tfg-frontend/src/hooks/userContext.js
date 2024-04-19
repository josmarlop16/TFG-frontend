import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: sessionStorage.getItem('username') || '',
    token: sessionStorage.getItem('token') || '',
    email: sessionStorage.getItem('email') || '',
    userId: sessionStorage.getItem('userId') || '',
    preferences: JSON.parse(sessionStorage.getItem('preferences')) || [], // Parseamos preferences de JSON
  });

  const updateUser = (userData) => {
    setUser(userData);
    Object.entries(userData).forEach(([key, value]) => {
      if (key === 'preferences') {
        // Si el key es 'preferences', convertimos el value a JSON
        sessionStorage.setItem(key, JSON.stringify(value));
      } else {
        sessionStorage.setItem(key, value);
      }
    });
  };

  const clearUser = () => {
    setUser({
      username: '',
      avatar: '',
      token: '',
      email: '',
      userId: '',
      preferences: [],
    });
    sessionStorage.clear();
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};
