import React, { useContext, useState, createContext } from 'react';

export const PlanContext = createContext();

export const PlanProvider = ({ children }) => {

  const [name, setName] = useState('');
  const [days, setDays] = useState('');
  const [price, setPrice] = useState('');

  const clear = async (ev) => {
    ev.preventDefault();

    setName('');
    setDays('');
    setPrice('');
  }

  const context = {
    name, setName,
    days, setDays,
    price, setPrice,
    // methods
    clear,
  };

  return (
    <PlanContext.Provider value={context}>
      {children}
    </PlanContext.Provider>
  );
};

export const usePlanContext = () => {
  return useContext(PlanContext);
};