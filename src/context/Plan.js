import React, { useContext, useState, createContext } from 'react';

import * as plan from '../services/plan';
import { toast, Flip } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useMainContext } from './Main';
import { useAuthContext } from './Auth';

export const PlanContext = createContext();

export const PlanProvider = ({ children }) => {

  const { setIsLoader } = useMainContext();
  const { gym } = useAuthContext();

  const [name, setName] = useState('');
  const [days, setDays] = useState('');
  const [price, setPrice] = useState('');

  const save = async (ev) => {
    ev.preventDefault();
    setIsLoader(true);

    const paramerts = {
      id_gym: gym.id,
      description: name,
      days: days,
      price: price,
    };

    const response = await plan.create(paramerts);

    if (response) {
      toast.success('🏋🏻‍♀️ Plano criado com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    }

    clear(ev);
    setIsLoader(false);
  }

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
    clear, save
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