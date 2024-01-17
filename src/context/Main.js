import React, { useContext, useState, createContext } from 'react';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [isLoader, setIsLoader] = useState(false);

  const [isListGymGoer, setIsListGymGoer] = useState(false);
  const [isListPlan, setIsListPlan] = useState(false);

  const context = {
    isListGymGoer, setIsListGymGoer,
    isListPlan, setIsListPlan,
    isLoader, setIsLoader,
  };

  return (
    <MainContext.Provider value={context}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  return useContext(MainContext);
};