import React, { useContext, useState, createContext } from 'react';

import Swal from "sweetalert2";
import * as plan from '../services/plan';
import { toast, Flip } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useMainContext } from './Main';
import { useAuthContext } from './Auth';

import { Store } from 'react-notifications-component';
import { optionsToastStore } from '../common/options';
import 'animate.css/animate.min.css';

export const PlanContext = createContext();

export const PlanProvider = ({ children }) => {

  const { setIsLoader } = useMainContext();
  const { businessPartners } = useAuthContext();

  const [namePlan, setNamePlan] = useState('');
  const [selectedValuesPlan, setSelectedValuesPlan] = useState([]);
  const [servicesSelected, setServicesSelected] = useState([]);
  const [modalitiesSelected, setModalitiesSelected] = useState([]);

  const [listPlans, setListPlans] = useState([]);
  
  // Controle de Modals
  const [isOpenMdlAddModality, setIsOpenMdlAddModality] = useState(false);
  const [isOpenMdlAddService, setIsOpenMdlAddService] = useState(false);
  const [addValuePlanModal, setAddValuePlanModal] = useState(false);

  const getPlans = async () => {
    setIsLoader(true);

    const response = await plan.get();
    setListPlans(response.data);
    setIsLoader(false);
  }

  const save = async (ev) => {
    ev.preventDefault();

    try {
      setIsLoader(true);

      if (namePlan === '') {
        Store.addNotification({
          ...optionsToastStore,
          title: 'Dados Obrigatórios',
          message: "Defina o nome do plano para continuar.",
          type: "danger",
        });

        return;  
      }

      if (modalitiesSelected.length === 0) {
        Store.addNotification({
          ...optionsToastStore,
          title: 'Dados Obrigatórios',
          message: "Selecione ao menos uma modalidade e defina as regras.",
          type: "danger",
        });

        return;
      }

      if (selectedValuesPlan.length === 0) {
        Store.addNotification({
          ...optionsToastStore,
          title: 'Dados Obrigatórios',
          message: "Defina as periodicidades e valores do plano.",
          type: "danger",
        });

        return;
      }

      const paramerts = {
        id_business_partners: businessPartners.id,
        name: namePlan,
        services: servicesSelected,
        modalities: modalitiesSelected,
        prices: selectedValuesPlan,
      };

      const response = await plan.create(paramerts);

      if (response) {
        Store.addNotification({
          ...optionsToastStore,
          title: 'Plano Criado',
          message: "Seu plano foi criado com sucesso, você poderá atualizar-lo quando quiser.",
          type: "success",
        });
      }

      clear(ev);
    } finally {
      setIsLoader(false);
    }
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

    setNamePlan('');
    setModalitiesSelected([]);
    setServicesSelected([]);

    setSelectedValuesPlan([]);
  }

  const context = {
    namePlan, setNamePlan,
    listPlans, setListPlans,
    servicesSelected, setServicesSelected,
    modalitiesSelected, setModalitiesSelected,
    addValuePlanModal, setAddValuePlanModal,
    selectedValuesPlan, setSelectedValuesPlan,
    // modals controls
    isOpenMdlAddModality, setIsOpenMdlAddModality,
    isOpenMdlAddService, setIsOpenMdlAddService,
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