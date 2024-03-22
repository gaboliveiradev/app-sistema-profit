import React from 'react';
import { usePlanContext } from '../../../../context/Plan';
import biceps from '../../../../assets/icon/biceps.svg';
import crossfit from '../../../../assets/icon/crossfit.svg';
import funcional from '../../../../assets/icon/agachamento.svg';
import geral from '../../../../assets/icon//corrida.svg';

export default function PlanModal() {

    const { setIsModalVisible } = usePlanContext();

    return (
        <div class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-1 outline-none focus:outline-none" id="modal-id">
            <div class="absolute bg-black opacity-80 inset-0 z-2"></div>
            <div class="w-full max-w-4xl relative mx-auto my-auto shadow-lg ">
                <div className='bg-green-table-items p-4 flex flex-row justify-between items-center'>
                    <h1 className='text-white font-bold text-[13px] uppercase'>Adicionando Plano</h1>
                    <div onClick={() => setIsModalVisible(false)} className='cursor-pointer text-white opacity-[0.7] hover:opacity-[1] font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
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
                            <div className='flex flex-row justify-between flex-wrap'>
                                <div className='flex items-center'>
                                    <div className='mt-3 flex justify-center items-center rounded-full w-[60px] h-[60px] bg-white border border-dashed border-2 border-green-table-items'>
                                        <img width="32" height="32" src={geral} alt="A" />
                                    </div>
                                    <div className='px-3'>
                                        <h1>Geral</h1>
                                        <p className='text-[12px]'>Configurar</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='mt-3 flex justify-center items-center rounded-full w-[60px] h-[60px] bg-white border border-dashed border-2 border-green-table-items'>
                                        <img width="32" height="32" src={biceps} alt="A" />
                                    </div>
                                    <div className='px-3'>
                                        <h1>Musculação</h1>
                                        <p className='text-[12px]'>Configurar</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='mt-3 flex justify-center items-center rounded-full w-[60px] h-[60px] bg-white border border-dashed border-2 border-green-table-items'>
                                        <img width="32" height="32" src={funcional} alt="A" />
                                    </div>
                                    <div className='px-3'>
                                        <h1>Funcional</h1>
                                        <p className='text-[12px]'>Configurar</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='mt-3 flex justify-center items-center rounded-full w-[60px] h-[60px] bg-white border border-dashed border-2 border-green-table-items'>
                                        <img width="32" height="32" src={crossfit} alt="A" />
                                    </div>
                                    <div className='px-3'>
                                        <h1>Crossfit</h1>
                                        <p className='text-[12px]'>Configurar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}