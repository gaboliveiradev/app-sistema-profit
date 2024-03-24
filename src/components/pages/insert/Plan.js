import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useMainContext } from '../../../context/Main';
import { usePlanContext } from '../../../context/Plan';
import { toast, Flip } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import '../../../css/toastify.css';
import * as plan from '../../../services/plan';

import biceps from '../../../assets/icon/biceps.svg';
import crossfit from '../../../assets/icon/crossfit.svg';
import funcional from '../../../assets/icon/agachamento.svg';
import geral from '../../../assets/icon/corrida.svg';
import lapis from '../../../assets/icon/lapis-grande.svg'
import pagamento from '../../../assets/icon/pagamento-dinheiro.svg';

import estacionamento from '../../../assets/icon/carro.svg';
import armario from './../../../assets/icon/guarda-roupas.svg';
import nutricionista from '../../../assets/icon/frutas-calculadora.svg';
import avaliacaoFisica from '../../../assets/icon/balanca.svg';
import DefineModalityRulesModal from '../../Modals/DefineModalityRulesModal';
import ButtonsFooterForms from '../../SmallComponents/ButtonsFooterForms';
import HorizontalSeparator from '../../SmallComponents/HorizontalSeparator';

export default function Plan() {

    const [modalities, setModalities] = useState([]);
    const [services, setServices] = useState([]);

    const {
        namePlan, setNamePlan,
        selectedServicesPlan, setSelectedServicesPlan,
        selectedModalitiesPlan, setSelectedModalitiesPlan,
        defineModalityRulesModal, setDefineModalityRulesModal,
        setSelectedModalityDefineRules,
        clear
    } = usePlanContext();
    const { setIsLoader } = useMainContext();

    useEffect(() => {
        getModalitiesAndServices();
    }, []);

    const getModalitiesAndServices = async () => {
        try {
            setIsLoader(true);

            const modality = await plan.getModalities();
            const service = await plan.getServices();

            setModalities(modality.data);
            setServices(service.data);
        } finally {
            setIsLoader(false);
        }
    }

    const addServices = async (idService) => {
        if (!selectedServicesPlan.includes(idService)) {
            setSelectedServicesPlan([...selectedServicesPlan, idService]);
        }
    }

    const deleteServices = async (idService) => {
        if (selectedServicesPlan.includes(idService)) {
            const newArray = selectedServicesPlan.filter(item => item !== idService);
            setSelectedServicesPlan(newArray);
        }
    }

    const addModalities = async (idModality) => {
        if (!selectedModalitiesPlan.includes(idModality)) {
            setSelectedModalitiesPlan([...selectedModalitiesPlan, idModality]);
        }
    }

    const deleteModalities = async (idModality) => {
        if (selectedModalitiesPlan.includes(idModality)) {
            const newArray = selectedModalitiesPlan.filter(item => item !== idModality);
            setSelectedModalitiesPlan(newArray);
        }
    }

    return (
        <form className='flex flex-row flex-wrap justify-center'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            {(defineModalityRulesModal) && <DefineModalityRulesModal />}

            <div class="w-full max-w-6xl relative shadow-lg mr-10">
                <div className='bg-green-table-items p-4 flex flex-row justify-between items-center'>
                    <h1 className='text-white font-bold text-[13px] uppercase'>Configurações</h1>
                </div>
                <div className='bg-white'>
                    <div className="p-4 grid grid-cols-1 sm:grid-cols-12">
                        <div className="sm:col-span-12">
                            <div>
                                <input
                                    value={namePlan}
                                    onChange={(e) => setNamePlan(e.target.value)}
                                    class="text-[14px] dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-grayF5 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-1.5"
                                    type="text"
                                    maxLength="255"
                                />
                            </div>
                        </div>
                        <div className="mt-4 sm:col-span-6">
                            <label className="text-green-table-items block text-sm font-medium text-[14px] text-gray-600 dark:text-white">
                                Selecione as <strong>modalidades</strong> e defina as <strong>regras</strong>. ({selectedModalitiesPlan.length}/4)
                            </label>
                        </div>
                        <div className="mt-4 sm:col-span-6"></div>
                        <div className="mt-4 sm:col-span-12">
                            <div class="flex flex-wrap">
                                {
                                    modalities.map((modality) => {
                                        return (
                                            <>
                                                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                                                    <div onDoubleClick={() => deleteModalities(modality.id)} onClick={() => addModalities(modality.id)} className='cursor-pointer flex items-center'>
                                                        <div className={`text-center flex justify-center items-center rounded-full w-[60px] h-[60px] bg-grayF5 ${selectedModalitiesPlan.includes(modality.id) && ' border border-dashed border-2 border-green-table-items'}`}>
                                                            <img width="32" height="32" src={(modality.id === 1) ? geral : (modality.id === 2) ? biceps : (modality.id === 3) ? funcional : (modality.id === 4) && crossfit} alt="A" />
                                                        </div>
                                                        <div className={`px-3 ${selectedModalitiesPlan.includes(modality.id) && 'text-green-table-items'}`}>
                                                            <h1>{modality.name}</h1>
                                                            <div onClick={() => {
                                                                setDefineModalityRulesModal(true);
                                                                setSelectedModalityDefineRules(modality);
                                                            }} className='flex flex-row justify-start items-center'>
                                                                <img width="12" height="12" src={lapis} alt="A" />
                                                                <p className='pl-1 text-[12px] text-red-700'>Configurar</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="mt-4 sm:col-span-6">
                            <label className="text-green-table-items block text-sm font-medium text-[14px] text-gray-600 dark:text-white">
                                Selecione os <strong>serviços</strong> incluso no plano. ({selectedServicesPlan.length}/4)
                            </label>
                        </div>
                        <div className="mt-4 sm:col-span-6"></div>
                        <div className="mt-4 sm:col-span-12">
                            <div class="flex flex-wrap">
                                {
                                    services.map((service) => {
                                        return (
                                            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                                                <div onDoubleClick={() => deleteServices(service.id)} onClick={() => addServices(service.id)} className='cursor-pointer flex items-center'>
                                                    <div className={`text-center flex justify-center items-center rounded-full w-[60px] h-[60px] bg-grayF5 ${selectedServicesPlan.includes(service.id) && ' border border-dashed border-2 border-green-table-items'}`}>
                                                        <img width="32" height="32" src={(service.id === 1) ? armario : (service.id === 2) ? estacionamento : (service.id === 3) ? avaliacaoFisica : (service.id === 4) && nutricionista} alt="A" />
                                                    </div>
                                                    <div className={`px-3 ${selectedServicesPlan.includes(service.id) && 'text-green-table-items'}`}>
                                                        <h1>{service.name}</h1>
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
                                saveMethod={clear}
                                labelClear='Cancelar'
                                labelSave='Concluir e Ativar'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full max-w-2xl relative bg-white shadow-lg">
                <div className='bg-green-table-items p-4 flex flex-row justify-between items-center'>
                    <h1 className='text-white font-bold text-[13px] uppercase'>Configurações</h1>
                </div>
                <div>
                    <div className="p-4 grid grid-cols-1 sm:grid-cols-12">
                        <div className="sm:col-span-6">
                            <label className="text-green-table-items block text-sm font-medium text-[14px] text-gray-600 dark:text-white">
                                Defina as <strong>periodicidades</strong> e <strong>valores</strong> do plano.
                            </label>
                        </div>
                        <div className="sm:col-span-6"></div>
                        <HorizontalSeparator />
                        <div className="mt-4 sm:col-span-12">
                            <div className='flex flex-row items-center justify-start'>
                                <img width="48" height="48" src={pagamento} alt='pagamento' />
                                <div className='ml-3'>
                                    <h1 className='text-[14px]'>Nenhum valor adicionado</h1>
                                    <h1 className='text-[12px] text-gray80'>Defina as periodicidades e valores de seu plano</h1>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-center p-2 text-[14px] text-green-table-items sm:col-span-12 border border-dashed border-2 border-gray80">
                            <div className='cursor-pointer flex flex-row justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <span>Novo Valor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}