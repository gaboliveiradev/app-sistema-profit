import React, { useContext, useState, createContext } from 'react';

import Swal from "sweetalert2";
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
  const [listPlans, setListPlans] = useState([]);

  const getPlans = async () => {
    setIsLoader(true);

    const response = await plan.get();
    setListPlans(response.data);
    setIsLoader(false);
  }

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

  const destroy = async (e, id) => {
    e.preventDefault();

    Swal.fire({
      title: 'Você tem Certeza?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, deletar!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        setIsLoader(true);

        const response = await plan.destroy(id);

        if (response) {
          getPlans();

          toast.success('🏋🏻‍♀️ Plano deletado com sucesso!', {
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

          return;
        }

        setIsLoader(false);
        toast.error('🏋🏻‍♀️ Plano não deletado!', {
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
    })
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
    listPlans, setListPlans,
    // methods
    clear, save, getPlans, destroy
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