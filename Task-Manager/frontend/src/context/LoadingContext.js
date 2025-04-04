// context/LoadingContext.js
import React, { createContext, useState, useContext } from 'react';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const setLoadingState = (state) => setLoading(state);

  return (
    <LoadingContext.Provider value={{ loading, setLoadingState }}>
      {children}
    </LoadingContext.Provider>
  );
};
