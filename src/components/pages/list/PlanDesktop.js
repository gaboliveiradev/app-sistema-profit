import React, { useEffect } from "react";
import { Tooltip } from "flowbite-react";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { usePlanContext } from "../../../context/Plan";

import biceps from '../../../assets/icon/biceps.svg';
import crossfit from '../../../assets/icon/crossfit.svg';
import funcional from '../../../assets/icon/agachamento.svg';
import geral from '../../../assets/icon/corrida.svg';
import estacionamento from '../../../assets/icon/carro.svg';
import armario from './../../../assets/icon/guarda-roupas.svg';
import nutricionista from '../../../assets/icon/frutas-calculadora.svg';
import avaliacaoFisica from '../../../assets/icon/balanca.svg';
import close from '../../../assets/icon/deletar.svg';

import { formatCurrencyBRL } from "../../../common/format";

export default function PlanDesktop() {
    const {
        getPlans,
        getPlanById,
        listPlans,
    } = usePlanContext();

    const navigate = useNavigate();

    useEffect(() => {
        getPlans();
    }, []);

    const getById = async (idPlan) => {
        getPlanById(idPlan)
    }

    return (
        <div class="mt-8 flex flex-col">
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

            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
                        <div className="flex justify-between items-center bg-green-table">
                            <div onClick={() => navigate('/plano')} className="cursor-pointer flex items-center text-white p-3 text-[15px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <span>Adiconar</span>
                            </div>
                            <div className="w-[25%] flex items-center">
                                <div className="w-[100%] flex items-center">
                                    <input
                                        placeholder="Filtrar"
                                        class="p-3 bg-green-table-items placeholder-white outline-none border-none text-white block flex-1  w-full text-sm border-transparent"
                                        type="text"
                                        maxLength="255"
                                    />
                                    <div className="cursor-pointer p-3 bg-green-table-items text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white'>
                            <div className="p-4 grid grid-cols-1 sm:grid-cols-12">
                                <div className="sm:col-span-12">
                                    <div class="flex flex-wrap">
                                        {
                                            listPlans.map((plan, index) => {
                                                return (
                                                    <div key={index} class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                                                        <div onDoubleClick={(e) => getById(plan.id)}>
                                                            <div className="p-8 flex flex-col justify-center items-center bg-green-table-items">
                                                                <h1 className="text-[14px] text-center text-white">{plan.name}</h1>
                                                                <p className="-mb-1 lowercase text-blackd text-[14px] font-bold opacity-[0.6]">a partir de</p>
                                                                <h1 className="text-[20px] text-white">
                                                                    {formatCurrencyBRL(plan.prices[0].price)}
                                                                </h1>
                                                                <div className="text-white text-center text-[11px] w-[80%] mt-4 bg-gren59 px-3 py-2">
                                                                    {
                                                                        plan.prices.map((price) => {
                                                                            return (
                                                                                price.period_name + " "
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className="grid grid-cols-1 sm:grid-cols-12 p-4 flex flex-col justify-center items-center bg-grayF5 text-center">
                                                                <div className="sm:col-span-12">
                                                                    <h1 className="uppercase text-[12.5px] text-text-sh font-bold">
                                                                        Modalidades
                                                                    </h1>
                                                                </div>
                                                                <div className="sm:col-span-12 flex flex-row flex-wrap justify-around">
                                                                    {
                                                                        (plan.modalities.length === 0) && (
                                                                            <Tooltip content='Nenhuma Modalidade'>
                                                                                <div className='cursor-pointer my-4 text-center flex justify-center items-center rounded-full w-[50px] h-[50px] bg-white'>
                                                                                    <img width="32" height="32" src={close} alt="A" />
                                                                                </div>
                                                                            </Tooltip>  
                                                                        )
                                                                    }
                                                                    {
                                                                        plan.modalities.map((modality) => {
                                                                            return (
                                                                                <Tooltip content={modality.modality_name}>
                                                                                    <div className='cursor-pointer my-4 text-center flex justify-center items-center rounded-full w-[50px] h-[50px] bg-white'>
                                                                                        <img width="32" height="32" src={(modality.id_modality === 1) ? geral : (modality.id_modality === 2) ? biceps : (modality.id_modality === 3) ? funcional : (modality.id_modality === 4) && crossfit} alt="A" />
                                                                                    </div>
                                                                                </Tooltip>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                                <div className="sm:col-span-12">
                                                                    <h1 className="uppercase text-[12.5px] text-text-sh font-bold">
                                                                        Serviços
                                                                    </h1>
                                                                </div>
                                                                <div className="sm:col-span-12 flex flex-row flex-wrap justify-around">
                                                                    {
                                                                        (plan.services.length === 0) && (
                                                                            <Tooltip content='Nenhum Serviço'>
                                                                                <div className='cursor-pointer my-4 text-center flex justify-center items-center rounded-full w-[50px] h-[50px] bg-white'>
                                                                                    <img width="32" height="32" src={close} alt="A" />
                                                                                </div>
                                                                            </Tooltip>  
                                                                        )
                                                                    }
                                                                    {
                                                                        plan.services.map((service) => {
                                                                            return (
                                                                                <Tooltip content={service.service_name}>
                                                                                    <div className='cursor-pointer my-4 text-center flex justify-center items-center rounded-full w-[50px] h-[50px] bg-white'>
                                                                                        <img width="32" height="32" src={(service.id_service === 1) ? armario : (service.id_service === 2) ? estacionamento : (service.id_service === 3) ? avaliacaoFisica : (service.id_service === 4) && nutricionista} alt="A" />
                                                                                    </div>
                                                                                </Tooltip>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                            {/* ===@ Card Adicionar Novo Plano @=== */}
                            {/*
                                <div onClick={() => navigate('/plano')} className="h-[190px] cursor-pointer flex flex-col justify-center items-center bg-transparent border border-dashed border-2 border-green-table-items">
                                    <h1 className="font-bold uppercase text-[16px] text-gray79">
                                        <img width="64" height="64" src={addIcon} alt="+" />
                                    </h1>
                                </div>
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}