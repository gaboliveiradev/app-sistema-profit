import React from 'react';
import { usePlanContext } from '../../context/Plan';

import biceps from '../../assets/icon/biceps.svg';
import crossfit from '../../assets/icon/crossfit.svg';
import funcional from '../../assets/icon/agachamento.svg';
import geral from '../../assets/icon/corrida.svg';
import ButtonsFooterForms from '../SmallComponents/ButtonsFooterForms';
import HorizontalSeparator from '../SmallComponents/HorizontalSeparator';

export default function DefineModalityRulesModal() {
    const { setDefineModalityRulesModal, selectedModalityDefineRules } = usePlanContext();

    const clear = async (ev) => {
        ev.preventDefault();
        setDefineModalityRulesModal(false)
    }

    return (
        <div class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-1 outline-none focus:outline-none" id="modal-id">
            <div class="absolute bg-black opacity-80 inset-0 z-2"></div>
            <div class="w-full max-w-2xl relative mx-auto my-auto shadow-lg ">
                <div className='bg-green-table-items p-4 flex flex-row justify-between items-center'>
                    <h1 className='text-white font-bold text-[13px] uppercase'>Regras da Modalidade</h1>
                    <div onClick={() => setDefineModalityRulesModal(false)} className='cursor-pointer text-white opacity-[0.7] hover:opacity-[1] font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className='bg-white'>
                    <div className="p-3 grid grid-cols-1 sm:grid-cols-12">
                        <div className="sm:col-span-12">
                            <div class="flex flex-wrap">
                                <div className='cursor-pointer flex items-center'>
                                    <div className={`text-center flex justify-center items-center rounded-full w-[60px] h-[60px] bg-grayF5`}>
                                        <img width="32" height="32" src={(selectedModalityDefineRules.id === 1) ? geral : (selectedModalityDefineRules.id === 2) ? biceps : (selectedModalityDefineRules.id === 3) ? funcional : (selectedModalityDefineRules.id === 4) && crossfit} alt="A" />
                                    </div>
                                    <div className={`px-3`}>
                                        <h1>{selectedModalityDefineRules.name}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <HorizontalSeparator />
                        <div className="sm:col-span-8 mt-4">
                            <div className='text-[14px] text-green-table-items flex flex-row justify-center items-center'>
                                <h1 className='pr-2'>Poderá frequentar</h1>
                                <select class="text-[14px] dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-grayF5 border text-gray-900 block flex-1 text-sm border-gray-300 p-1.5">
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
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-green-table-items bg-gray-100 border-gray-300 focus:ring-primary-color dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-1" class="ms-2 text-[13px] font-medium text-gray-900 dark:text-gray-300">Acesso único por dia</label>
                                </div>
                            </div>
                            <div class="-mt-4 flex items-center mb-4">
                                <div className='pr-2'>
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-green-table-items bg-gray-100 border-gray-300 focus:ring-primary-color dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-1" class="ms-2 text-[13px] font-medium text-gray-900 dark:text-gray-300">Poderá acessar no mesmo dia</label>
                                </div>
                                <select class="text-[14px] dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-grayF5 border text-gray-900 block flex-1 text-sm border-gray-300 p-1.5">
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
                                saveMethod={clear}
                                labelClear='Cancelar'
                                labelSave='Salvar Alterações'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}