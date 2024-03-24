import React from 'react';
import HorizontalSeparator from '../SmallComponents/HorizontalSeparator';
import { usePlanContext } from '../../context/Plan';
import ButtonsFooterForms from '../SmallComponents/ButtonsFooterForms';

export default function AddValuePlanModal() {
    const { setAddValuePlanModal } = usePlanContext();

    const clear = async (ev) => {
        ev.preventDefault();
        setAddValuePlanModal(false);
    }

    return (
        <div class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-1 outline-none focus:outline-none" id="modal-id">
            <div class="absolute bg-black opacity-80 inset-0 z-2"></div>
            <div class="w-[18%] max-w-2xl relative mx-auto my-auto shadow-lg ">
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
                                <select class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-1.5">
                                    <option value="1">Mensal</option>
                                    <option value="2">Bimestral</option>
                                    <option value="3">Trimestral</option>
                                    <option value="4">Semestral</option>
                                    <option value="5">Anual</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-6">
                            <label className="block text-sm text-[12px] font-medium text-gray-700 dark:text-white">
                                Valor Total *
                            </label>
                            <div className="mt-1">
                                <input
                                    class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-1.5"
                                    type="text"
                                    maxLength="255"
                                />
                            </div>
                        </div>
                        <HorizontalSeparator />
                        <div className="mt-4 sm:col-span-12 flex flex-row justify-end">
                            <ButtonsFooterForms
                                clearMethod={clear}
                                saveMethod={clear}
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