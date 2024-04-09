import React, { useEffect, useState } from 'react';
import * as plan from '../../services/plan';

import biceps from '../../assets/icon/biceps.svg';
import crossfit from '../../assets/icon/crossfit.svg';
import funcional from '../../assets/icon/agachamento.svg';
import geral from '../../assets/icon/corrida.svg';

import { usePlanContext } from '../../context/Plan';
import { useMainContext } from '../../context/Main';
import HorizontalSeparator from '../SmallComponents/HorizontalSeparator';
import ButtonsFooterForms from '../SmallComponents/ButtonsFooterForms';

import { Store } from 'react-notifications-component';
import { optionsToastStore } from '../../common/options';
import 'animate.css/animate.min.css';

export default function ModalAddModality() {
    const {
        setIsOpenMdlAddModality,
        modalitiesSelected, setModalitiesSelected,
    } = usePlanContext();
    const { setIsLoader } = useMainContext();

    const [modalities, setModalities] = useState([]);

    const [idModality, setIdModality] = useState('');
    const [days, setDays] = useState('1');

    useEffect(() => {
        getModalities();
    }, []);

    const getModalities = async () => {
        try {
            setIsLoader(true);

            const modality = await plan.getModalities();
            setModalities(modality.data);
        } finally {
            setIsLoader(false);
        }
    }

    const clear = async (e) => {
        e.preventDefault();
        
        setIdModality('');
        setDays('1');

        setIsOpenMdlAddModality(false);
    }


    const save = async (e) => {
        e.preventDefault();

        if (idModality === '') {

            Store.addNotification({
                ...optionsToastStore,
                title: 'Dados Obrigatórios',
                message: "Selecione uma modalidade para continuar.",
                type: "danger",
            });

            return;
        }

        let isExist = (modalitiesSelected.length > 0) ? modalitiesSelected.filter((modality) => modality.id === idModality) : [];

        if (isExist.length > 0) {
            Store.addNotification({ 
                ...optionsToastStore,
                title: 'Erro ao Selecionar',
                message: "Esta modalidade já foi selecionada.",
                type: "danger",
            });

            return;
        }

        const modality = {
            id: idModality,
            name: modalities.filter((modality) => modality.id === idModality)[0].name,
            days: days,
        };

        setModalitiesSelected([...modalitiesSelected, modality]);

        setIdModality('');
        setDays('1');
    }

    return (
        <div class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-1 outline-none focus:outline-none" id="modal-id">
            <div class="absolute bg-black opacity-80 inset-0 z-2"></div>
            <div class="w-full max-w-2xl relative mx-auto my-auto shadow-lg ">
                <div className='bg-green-table-items p-4 flex flex-row justify-between items-center'>
                    <h1 className='text-white font-bold text-[13px] uppercase'>Adicionar Modalidade</h1>
                    <div onClick={() => setIsOpenMdlAddModality(false)} className='cursor-pointer text-white opacity-[0.7] hover:opacity-[1] font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className='bg-white'>
                    <div className="p-3 grid grid-cols-1 sm:grid-cols-12">
                        <div className="sm:col-span-6">
                            <label className="text-green-table-items block text-sm font-medium text-[14px] text-gray-600 dark:text-white">
                                Selecione <strong>uma modalidade</strong>.
                            </label>
                        </div>
                        <div className="mt-4 sm:col-span-12">
                            <div class="flex flex-wrap">
                                {
                                    modalities.map((modality, index) => {
                                        return (
                                            <div key={index} class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/2 p-4">
                                                <div onDoubleClick={() => setIdModality('')} onClick={() => setIdModality(modality.id)} className='cursor-pointer flex items-center'>
                                                    <div className={`text-center flex justify-center items-center rounded-full w-[60px] h-[60px] bg-grayF5 ${idModality === modality.id && ' border border-dashed border-2 border-green-table-items'}`}>
                                                        <img width="32" height="32" src={(modality.id === 1) ? geral : (modality.id === 2) ? biceps : (modality.id === 3) ? funcional : (modality.id === 4) && crossfit} alt="A" />
                                                    </div>
                                                    <div className={`px-3 ${modalitiesSelected.includes(modality.id) && 'text-green-table-items'}`}>
                                                        <h1>{modality.name}</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <HorizontalSeparator />
                        <div className="mt-4 sm:col-span-6">
                            <label className="text-green-table-items block text-sm font-medium text-[14px] text-gray-600 dark:text-white">
                                Defina <strong>as regras</strong> da modalidade <strong>selecionada</strong>.
                            </label>
                        </div>
                        <div className="sm:col-span-8 mt-4">
                            <div className='text-[14px] text-green-table-items flex flex-row justify-center items-center'>
                                <h1 className='pr-2'>Poderá frequentar</h1>
                                <select value={days} onChange={(e) => setDays(e.target.value)} class="text-[14px] dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-grayF5 border text-gray-900 block flex-1 text-sm border-gray-300 p-1.5">
                                    <option value="1">1 dia</option>
                                    <option value="2">2 dias</option>
                                    <option value="3">3 dias</option>
                                    <option value="4">4 dias</option>
                                    <option value="5">5 dias</option>
                                    <option value="6">6 dias</option>
                                    <option value="7">Todos os dias</option>
                                </select>
                                <h1 className='pl-2'>da semana</h1>
                            </div>
                        </div>
                        <div className="sm:col-span-4 mt-4"></div>
                        <div className="sm:col-span-8 mt-4 ml-8">
                            <div class="flex items-center mb-4">
                                <div>
                                    <input defaultChecked id="unic-access" type="radio" value="" name="default-radio" class="w-4 h-4 text-green-table-items bg-gray-100 border-gray-300 focus:ring-primary-color dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="unic-access" class="ms-2 text-[13px] font-medium text-gray-900 dark:text-gray-300">Acesso único por dia</label>
                                </div>
                            </div>
                            <div class="-mt-4 flex items-center mb-4">
                                <div className='pr-2'>
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-green-table-items bg-gray-100 border-gray-300 focus:ring-primary-color dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-1" class="ms-2 text-[13px] font-medium text-gray-900 dark:text-gray-300">Poderá acessar no mesmo dia</label>
                                </div>
                                <select disabled class="text-[14px] dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-grayF5 border text-gray-900 block flex-1 text-sm border-gray-300 p-1.5">
                                    <option value="2">2 vezes</option>
                                    <option value="3">3 vezes</option>
                                    <option value="4">4 vezes</option>
                                    <option value="5">5 vezes</option>
                                    <option value="6">6 vezes</option>
                                    <option value="7">7 vezes</option>
                                    <option value="8">8 vezes</option>
                                    <option value="9">9 vezes</option>
                                    <option value="10">Ilimitadamente</option>
                                </select>
                            </div>
                        </div>
                        <HorizontalSeparator />
                        <div className="mt-4 sm:col-span-12 flex flex-row justify-end">
                            <ButtonsFooterForms
                                clearMethod={clear}
                                saveMethod={save}
                                labelClear='Cancelar'
                                labelSave='Salvar Modalidade'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}