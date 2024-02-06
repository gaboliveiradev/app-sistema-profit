import React, { useState, createContext, useContext } from "react";

import Swal from "sweetalert2";
import * as billingfees from '../services/billingfees';
import { toast, Flip } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useMainContext } from './Main';
import { useAuthContext } from './Auth';

export const BillingFeesContext = createContext();

export const BillingFeesProvider = ({ children }) => {

    const { setIsLoader } = useMainContext();
    const { gym } = useAuthContext();

    const [isOpenModalInsert, setIsOpenModalInsert] = useState(false);

    const [identification, setIdentification] = useState('');
    const [flag, setFlag] = useState('');
    const [type, setType] = useState(null);
    const [percentage, setPercentage] = useState('');
    const [listCardFees, setListCardFees] = useState([]);

    const save = async (ev) => {
        ev.preventDefault();
        setIsLoader(true);

        const paramerts = {
            id_gym: gym.id,
            identification: identification,
            flag: flag,
            type: type,
            percentage: percentage,
        };

        const response = await billingfees.create(paramerts);

        if (response) {
            toast.success('🏋🏻‍♀️ Taxa de Cartão criada com sucesso!', {
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
        await get();
        setIsLoader(false);
    }

    const clear = async (ev) => {
        ev.preventDefault();

        setIdentification('');
        setType(null);
        setPercentage('');

        setIsOpenModalInsert(false);
    }

    const get = async () => {
        setIsLoader(true);

        const response = await billingfees.get();
        setListCardFees(response.data);
        setIsLoader(false);
    }

    const destroy = async (ev, id) => {
        ev.preventDefault();

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

                const response = await billingfees.destroy(id);

                if (response) {
                    get();

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

    const context = {
        identification, setIdentification,
        flag, setFlag,
        type, setType,
        percentage, setPercentage,
        listCardFees, setListCardFees,
        isOpenModalInsert, setIsOpenModalInsert,
        // methods
        get, destroy, clear, save
    };

    return (
        <BillingFeesContext.Provider value={context}>
            {children}
        </BillingFeesContext.Provider>
    )
}

export const useBillingFeesContext = () => {
    return useContext(BillingFeesContext);
}