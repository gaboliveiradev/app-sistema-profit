import React, { useEffect, useState } from 'react';
import * as plan from '../../services/plan';

import estacionamento from '../../assets/icon/carro.svg';
import armario from './../../assets/icon/guarda-roupas.svg';
import nutricionista from '../../assets/icon/frutas-calculadora.svg';
import avaliacaoFisica from '../../assets/icon/balanca.svg';

import { usePlanContext } from '../../context/Plan';
import { useMainContext } from '../../context/Main';
import ButtonsFooterForms from '../SmallComponents/ButtonsFooterForms';
import HorizontalSeparator from '../SmallComponents/HorizontalSeparator';

import { Store } from 'react-notifications-component';
import { optionsToastStore } from '../../common/options';
import 'animate.css/animate.min.css';

export default function ModalAddService() {
    const {
        setIsOpenMdlAddService,
        servicesSelected, setServicesSelected,
    } = usePlanContext();
    const { setIsLoader } = useMainContext();

    const [serviceList, setServiceList] = useState([]);

    const [idService, setIdService] = useState('');

    useEffect(() => {
        getServices();
    }, []);

    const getServices = async () => {
        try {
            setIsLoader(true);

            const service = await plan.getServices();
            setServiceList(service.data);
        } finally {
            setIsLoader(false);
        }
    }

    const clear = async (e) => {
        e.preventDefault();

        setIsOpenMdlAddService(false);
    }

    const save = async (e) => {
        e.preventDefault();

        if (idService === '') {
            Store.addNotification({
                ...optionsToastStore,
                title: 'Dados Obrigatórios',
                message: "Selecione um serviço para continuar.",
                type: "danger",
            });

            return;
        }

        let isExist = (servicesSelected.length > 0) ? servicesSelected.filter((item) => item.id === idService) : [];

        if (isExist.length > 0) {
            Store.addNotification({ 
                ...optionsToastStore,
                title: 'Erro ao Selecionar',
                message: "Este serviço já foi selecionado.",
                type: "danger",
            });

            return;
        }

        const service = {
            id: idService,
            name: serviceList.filter((item) => item.id === idService)[0].name,
        };

        setServicesSelected([...servicesSelected, service]);

        setIdService('');

        Store.addNotification({
            ...optionsToastStore,
            title: 'Adicionado com Sucesso',
            message: "Este serviço foi adicionado com sucesso ao plano.",
            type: "success",
        });
    }

    return (
        <div class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-1 outline-none focus:outline-none" id="modal-id">
            <div class="absolute bg-black opacity-80 inset-0 z-2"></div>
            <div class="w-full max-w-2xl relative mx-auto my-auto shadow-lg ">
                <div className='bg-green-table-items p-4 flex flex-row justify-between items-center'>
                    <h1 className='text-white font-bold text-[13px] uppercase'>Adicionar Serviço</h1>
                    <div onClick={() => setIsOpenMdlAddService(false)} className='cursor-pointer text-white opacity-[0.7] hover:opacity-[1] font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className='bg-white'>
                    <div className="p-3 grid grid-cols-1 sm:grid-cols-12">
                        <div className="sm:col-span-6">
                            <label className="text-green-table-items block text-sm font-medium text-[14px] text-gray-600 dark:text-white">
                                Selecione <strong>um serviço</strong>.
                            </label>
                        </div>
                        <div className="mt-4 sm:col-span-12">
                            <div class="flex flex-wrap">
                                {
                                    serviceList.map((item, index) => {
                                        return (
                                            <div key={index} class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/2 p-4">
                                                <div onDoubleClick={() => setIdService('')} onClick={() => setIdService(item.id)} className='cursor-pointer flex items-center'>
                                                    <div className={`text-center flex justify-center items-center rounded-full w-[60px] h-[60px] bg-grayF5 ${idService === item.id && ' border border-dashed border-2 border-green-table-items'}`}>
                                                        <img width="32" height="32" src={(item.id === 1) ? armario : (item.id === 2) ? estacionamento : (item.id === 3) ? avaliacaoFisica : (item.id === 4) && nutricionista} alt="A" />
                                                    </div>
                                                    <div className={`px-3 ${servicesSelected.includes(item.id) && 'text-green-table-items'}`}>
                                                        <h1>{item.name}</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <HorizontalSeparator />
                        <div className="mt-4 sm:col-span-12 flex flex-row justify-end">
                            <ButtonsFooterForms
                                clearMethod={clear}
                                saveMethod={save}
                                labelClear='Cancelar'
                                labelSave='Incluir Serviço'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}