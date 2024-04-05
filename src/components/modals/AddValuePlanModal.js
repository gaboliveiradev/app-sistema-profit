import React, { useEffect, useState } from 'react';
import HorizontalSeparator from '../SmallComponents/HorizontalSeparator';
import ButtonsFooterForms from '../SmallComponents/ButtonsFooterForms';
import { useMainContext } from '../../context/Main';
import { usePlanContext } from '../../context/Plan';
import * as plan from '../../services/plan';

import { Store } from 'react-notifications-component';
import { optionsToastStore } from '../../common/options';
import 'animate.css/animate.min.css';

export default function AddValuePlanModal() {
    const {
        selectedValuesPlan, setSelectedValuesPlan,
        setAddValuePlanModal
    } = usePlanContext();

    const [idFrequency, setIdFrequency] = useState('');
    const [valueFrequency, setValueFrequency] = useState('');
    const [valuesPlan, setValuesPlan] = useState([]);

    const { setIsLoader } = useMainContext();

    const clear = async (ev) => {
        ev.preventDefault();
        setAddValuePlanModal(false);
    }

    useEffect(() => {
        getValues();
    }, []);

    const getValues = async () => {
        try {
            setIsLoader(true);

            const response = await plan.getValues();
            setValuesPlan(response.data);
            setIdFrequency(1);
        } finally {
            setIsLoader(false);
        }
    }

    const addValues = async (e) => {
        e.preventDefault();

        if (idFrequency === '' || valueFrequency === '') {
            Store.addNotification({
                ...optionsToastStore,
                message: "Selecione uma periodicidade e/ou valor.",
                type: "warning",
                insert: "top",
                container: "bottom-right",
            });

            return;
        }

        let isFrequencyExist = valuesPlan.filter((value) => value.id === idFrequency);

        setSelectedValuesPlan([...selectedValuesPlan, {
            id: idFrequency,
            name: isFrequencyExist[0].name,
            value: valueFrequency,
        }]);

        Store.addNotification({
            ...optionsToastStore,
            message: "Valor Adicionado.",
            type: "success",
            insert: "top",
            container: "bottom-right",
        });

        setIdFrequency(1);
        setValueFrequency('');
    }

    return (
        <div class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-1 outline-none focus:outline-none" id="modal-id">
            <div class="absolute bg-black opacity-80 inset-0 z-2"></div>

            <div class="w-full max-w-2xl relative mx-auto my-auto shadow-lg ">
                <div className='bg-green-table-items p-4 flex flex-row justify-between items-center'>
                    <h1 className='text-white font-bold text-[13px] uppercase'>Adicionando Valores</h1>
                    <div onClick={() => setAddValuePlanModal(false)} className='cursor-pointer text-white opacity-[0.7] hover:opacity-[1] font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className='bg-white'>
                    <div className="p-3 grid grid-cols-1 gap-x-4 sm:grid-cols-12">
                        <div className="sm:col-span-6">
                            <label className="block text-sm text-[12px] font-medium text-gray-700 dark:text-white">
                                Periodicidade *
                            </label>
                            <div className="mt-1">
                                <select
                                    value={idFrequency}
                                    onChange={(e) => setIdFrequency(parseInt(e.target.value))}
                                    class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-1.5"
                                >
                                    {
                                        valuesPlan.map((value) => {
                                            return (
                                                <option value={value.id}>{value.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-6">
                            <label className="block text-sm text-[12px] font-medium text-gray-700 dark:text-white">
                                Valor Total *
                            </label>
                            <div className="mt-1 relative">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span class="text-gray-500 sm:text-sm">R$</span>
                                </div>
                                <input
                                    value={valueFrequency}
                                    onChange={(e) => setValueFrequency(e.target.value)}
                                    class="pl-9 dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-1.5"
                                    type='text'
                                />
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <span class="text-gray-500 sm:text-sm" id="valor">BRL</span>
                                </div>
                            </div>
                        </div>
                        <HorizontalSeparator />
                        <div className="mt-4 sm:col-span-12 flex flex-row justify-end">
                            <ButtonsFooterForms
                                clearMethod={clear}
                                saveMethod={addValues}
                                labelClear='Cancelar'
                                labelSave='Salvar'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}