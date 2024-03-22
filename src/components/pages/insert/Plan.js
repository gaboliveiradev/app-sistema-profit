import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useMainContext } from '../../../context/Main';
import { usePlanContext } from '../../../context/Plan';
import "react-toastify/dist/ReactToastify.css";
import '../../../css/toastify.css';
import * as plan from '../../../services/plan';

import biceps from '../../../assets/icon/biceps.svg';
import crossfit from '../../../assets/icon/crossfit.svg';
import funcional from '../../../assets/icon/agachamento.svg';
import geral from '../../../assets/icon/corrida.svg';
import lapis from '../../../assets/icon/lapis-grande.svg'

import estacionamento from '../../../assets/icon/carro.svg';
import armario from './../../../assets/icon/guarda-roupas.svg';
import nutricionista from '../../../assets/icon/frutas-calculadora.svg';
import avaliacaoFisica from '../../../assets/icon/balanca.svg';

export default function Plan() {

    const [modalities, setModalities] = useState([]);
    const [services, setServices] = useState([]);

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

    return (
        <form className='flex flex-row flex-wrap'>
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

            <div class="w-full max-w-6xl mx-auto my-auto relative shadow-lg">
                <div className='bg-green-table-items p-4 flex flex-row justify-between items-center'>
                    <h1 className='text-white font-bold text-[13px] uppercase'>Configurações</h1>
                </div>
                <div className='bg-white'>
                    <div className="p-4 grid grid-cols-1 sm:grid-cols-12">
                        <div className="sm:col-span-12">
                            <div>
                                <input
                                    class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-grayF5 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                                    type="text"
                                    maxLength="255"
                                />
                            </div>
                        </div>
                        <div className="mt-4 sm:col-span-6">
                            <label className="text-green-table-items block text-sm font-medium text-[14px] text-gray-600 dark:text-white">
                                Selecione as <strong>modalidades</strong> e defina as <strong>regras</strong>.
                            </label>
                        </div>
                        <div className="mt-4 sm:col-span-6"></div>
                        <div className="mt-4 sm:col-span-12">
                            <div class="flex flex-wrap">
                                {
                                    modalities.map((modality) => {
                                        return (
                                            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                                                <div className='flex items-center'>
                                                    <div className='cursor-pointer text-center flex justify-center items-center rounded-full w-[60px] h-[60px] bg-white border border-dashed border-2 border-green-table-items'>
                                                        <img width="32" height="32" src={(modality.id === 1) ? geral : (modality.id === 2) ? biceps : (modality.id === 3) ? funcional : (modality.id === 4) && crossfit} alt="A" />
                                                    </div>
                                                    <div className='cursor-pointer px-3'>
                                                        <h1>{modality.name}</h1>
                                                        <div className='flex flex-row justify-start items-center'>
                                                            <img width="12" height="12" src={lapis} alt="A" />
                                                            <p className='pl-1 text-[12px] text-red-700'>Configurar</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="mt-4 sm:col-span-6">
                            <label className="text-green-table-items block text-sm font-medium text-[14px] text-gray-600 dark:text-white">
                                Selecione os <strong>serviços</strong> incluso no plano.
                            </label>
                        </div>
                        <div className="mt-4 sm:col-span-6"></div>
                        <div className="mt-4 sm:col-span-12">
                            <div class="flex flex-wrap">
                                {
                                    services.map((service) => {
                                        return (
                                            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                                                <div className='flex items-center'>
                                                    <div className='cursor-pointer text-center flex justify-center items-center rounded-full w-[60px] h-[60px] bg-white border border-dashed border-2 border-green-table-items'>
                                                        <img width="32" height="32" src={(service.id === 1) ? armario : (service.id === 2) ? estacionamento : (service.id === 3) ? avaliacaoFisica : (service.id === 4) && nutricionista} alt="A" />
                                                    </div>
                                                    <div className='cursor-pointer px-3'>
                                                        <h1>{service.name}</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <hr className="mt-4 sm:col-span-12"></hr>
                        <div className="mt-4 sm:col-span-12 flex flex-row justify-end">
                            <button class="text-white bg-red-600 flex flex-row justify-center items-center active:bg-red-600 uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                                <span className='pl-1'>Cancelar</span>
                            </button>
                            <button class="flex flex-row justify-center items-center bg-green-table-items text-white active:bg-secondary-color rounded uppercase text-sm px-6 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                <span className='pr-1'>Continuar</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}