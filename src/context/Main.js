import React, { useContext, useState, createContext } from 'react';
import {
  Squares2X2Icon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {

  const [isListGymGoer, setIsListGymGoer] = useState(false);

  const context = {
    isListGymGoer, setIsListGymGoer,
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