import React from 'react';
import { useCardFeesContext } from '../../context/CardFees';

export default function InsertCardFeesModal() {
    const { clear } = useCardFeesContext();

    return (
        <div class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-1 outline-none focus:outline-none" id="modal-id">
            <div class="absolute bg-black opacity-80 inset-0 z-2"></div>
            <div class="w-full max-w-2xl p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white ">
                <div className='px-5 pt-5 pb-2'>
                    <h1 className='text-[20px] font-bold text-gray-800'>Adicionar Taxa de Cartão</h1>
                </div>
                <div className="px-5 mt-[20px] grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12 pb-2">
                    <div className="sm:col-span-12">
                        <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                            Tipo *
                        </label>
                        <div className="mt-1">
                            <select
                                class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                                type="text"
                            >
                                <option value="credit">Crédito</option>
                                <option value="debit">Débito</option>
                            </select>
                        </div>
                    </div>
                    <div className="sm:col-span-12">
                        <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                            Bandeira *
                        </label>
                        <div className="mt-1">
                            <select
                                class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                                type="text"
                            >
                                <option value="mastercard">Mastercard</option>
                                <option value="visa">Visa</option>
                                <option value="elo">Elo</option>
                                <option value="american-express">American Express</option>
                                <option value="hipercard">Hipercard</option>
                                <option value="alelo">Alelo</option>
                            </select>
                        </div>
                    </div>
                    <div className="sm:col-span-12">
                        <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                            Porcentagem *
                        </label>
                        <div className="mt-1">
                            <input
                                class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                                type="text"
                                maxLength="255"
                            />
                        </div>
                    </div>
                </div>
                <div className='p-5 mt-4 w-full flex flex-row items-center justify-end border-t text-gray-700'>
                    <button onClick={(e) => clear(e)} class="dark:bg-boxdark dark:text-white hover:text-white hover:bg-red-600 border border-gray-400 flex flex-row justify-center items-center bg-white text-gray-600 active:bg-red-600 uppercase text-sm px-6 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Cancelar
                    </button>
                    <button class="hover:bg-secondary-color flex flex-row justify-center border border-primary-color items-center bg-primary-color text-white active:bg-secondary-color uppercase text-sm px-6 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
}