import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: sessionStorage.getItem('username') || '',
    token: sessionStorage.getItem('token') || '',
    email: sessionStorage.getItem('email') || '',
    userId: sessionStorage.getItem('userId') || '',
    userLists: JSON.parse(sessionStorage.getItem('userLists') || '[]'),
    preferences: JSON.parse(sessionStorage.getItem('preferences') || '[]'),
  });

  const updateUser = (userData) => {
    setUser(userData);
    Object.entries(userData).forEach(([key, value]) => {
      if (key === 'preferences' || key === 'userLists') {
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
      userLists: [],
    });
    sessionStorage.clear();
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};
