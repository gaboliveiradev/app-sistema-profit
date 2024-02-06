import React, { useState, createContext, useContext } from "react";

import Swal from "sweetalert2";
import * as plan from '../services/plan';
import { toast, Flip } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useMainContext } from './Main';
import { useAuthContext } from './Auth';

export const CardFeesContext = createContext();

export const CardFeesProvider = ({ children }) => {

    const { setIsLoader } = useMainContext();
    const { gym } = useAuthContext();

    const [isOpenModalInsert, setIsOpenModalInsert] = useState(false);

    const [flag, setFlag] = useState('');
    const [type, setType] = useState('');
    const [percentage, setPercentage] = useState('');
    const [listCardFees, setListCardFees] = useState([]);

    const clear = async (ev) => {
        ev.preventDefault();

        setFlag('');
        setType('');
        setPercentage('');

        setIsOpenModalInsert(false);
    }

    const get = async () => {
        setIsLoader(true);

        const response = await plan.get();
        setListCardFees(response.data.filter((plan) => plan.deleted_at === null));
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
        flag, setFlag,
        type, setType,
        percentage, setPercentage,
        listCardFees, setListCardFees,
        isOpenModalInsert, setIsOpenModalInsert,
        // methods
        get, destroy, clear,
    };

    return (
        <CardFeesContext.Provider value={context}>
            {children}
        </CardFeesContext.Provider>
    )
}

export const useCardFeesContext = () => {
    return useContext(CardFeesContext);
}