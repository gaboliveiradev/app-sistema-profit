import React, { useEffect, useState } from 'react';
import { useMainContext } from '../../../context/Main';
import { usePlanContext } from '../../../context/Plan';
import "react-toastify/dist/ReactToastify.css";
import * as plan from '../../../services/plan';

import biceps from '../../../assets/icon/biceps.svg';
import crossfit from '../../../assets/icon/crossfit.svg';
import funcional from '../../../assets/icon/agachamento.svg';
import geral from '../../../assets/icon/corrida.svg';
import pagamento from '../../../assets/icon/pagamento-dinheiro.svg';
import fechar from '../../../assets/icon/deletar.svg';

import estacionamento from '../../../assets/icon/carro.svg';
import armario from './../../../assets/icon/guarda-roupas.svg';
import nutricionista from '../../../assets/icon/frutas-calculadora.svg';
import avaliacaoFisica from '../../../assets/icon/balanca.svg';
import ButtonsFooterForms from '../../SmallComponents/ButtonsFooterForms';
import HorizontalSeparator from '../../SmallComponents/HorizontalSeparator';
import AddValuePlanModal from '../../Modals/AddValuePlanModal';
import { formatCurrencyBRL } from '../../../common/format';
import ModalAddModality from '../../Modals/ModalAddModality';

export default function Plan() {

    const [services, setServices] = useState([]);

    const {
        namePlan, setNamePlan,
        modalitiesSelected, setModalitiesSelected,
        selectedServicesPlan, setSelectedServicesPlan,
        addValuePlanModal, setAddValuePlanModal,
        selectedValuesPlan,
        setIsOpenMdlAddModality,
        isOpenMdlAddModality,
        clear, save,
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

    return (
        <>
            <form className='flex flex-row flex-wrap justify-center'>
                {(addValuePlanModal) && <AddValuePlanModal />}
                {(isOpenMdlAddModality) && <ModalAddModality />}

                <div class="w-full max-w-5xl relative shadow-lg mr-10">
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
                                    Selecione as <strong>modalidades</strong> e defina as <strong>regras</strong>. ({modalitiesSelected.length}/4)
                                </label>
                            </div>
                            <div className="mt-4 sm:col-span-6"></div>
                            <div key={1} className="mt-4 sm:col-span-12">
                                <div class="flex flex-wrap">
                                    {
                                        modalitiesSelected.map((modality, index) => {
                                            return (
                                                <>
                                                    <div key={index} class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                                                        <div className='cursor-pointer flex items-center'>
                                                            <div className='text-center flex justify-center items-center rounded-full w-[60px] h-[60px] bg-grayF5'>
                                                                <img width="32" height="32" src={(modality.id === 1) ? geral : (modality.id === 2) ? biceps : (modality.id === 3) ? funcional : (modality.id === 4) && crossfit} alt="A" />
                                                            </div>
                                                            <div className='px-3 text-gray80'>
                                                                <h1 className='flex flex-row'>
                                                                    {modality.name}
                                                                    <img width="14" height="14" src={fechar} alt='A' />
                                                                </h1>
                                                                <div className='flex flex-row justify-start items-center'>
                                                                    <p className='text-[12px] text-green-table-items'>{modality.days} Dia(s) Semanal(is)</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }

                                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                                        <div onClick={(e) => setIsOpenMdlAddModality(true)} className='cursor-pointer flex items-center'>
                                            <div className='text-center flex justify-center items-center rounded-full w-[60px] h-[60px] bg-grayF5 border border-dashed border-2 border-green-table-items'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#039665" className="w-8 h-8">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
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
                                        services.map((service, index) => {
                                            return (
                                                <div key={index} class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
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
                                    saveMethod={save}
                                    labelClear='Cancelar'
                                    labelSave='Concluir e Ativar'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full max-w-xl relative bg-white shadow-lg">
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
                            {
                                (selectedValuesPlan.length <= 0) && (
                                    <div className="mt-4 sm:col-span-12">
                                        <div className='flex flex-row items-center justify-start'>
                                            <img width="48" height="48" src={pagamento} alt='pagamento' />
                                            <div className='ml-3'>
                                                <h1 className='text-[14px]'>Nenhum valor adicionado</h1>
                                                <h1 className='text-[12px] text-gray80'>Defina as periodicidades e valores de seu plano</h1>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                (selectedValuesPlan.length > 0) && (
                                    selectedValuesPlan.map((value) => {
                                        return (
                                            <div className="mt-4 sm:col-span-12">
                                                <div className='flex flex-row items-center justify-between'>
                                                    <div className='text-[16px]'>{value.name}</div>
                                                    <div className='text-[16px]font-bold'>{formatCurrencyBRL(value.value)}</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                )
                            }

                            <div className="mt-4 text-center p-2 text-[14px] text-green-table-items sm:col-span-12 border border-dashed border-2 border-gray80">
                                <div onClick={() => setAddValuePlanModal(true)} className='cursor-pointer flex flex-row justify-center items-center'>
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
        </>
    );
}