import React from 'react';
import { usePlanContext } from '../../../context/Plan';

export default function Address() {
    const { list } = usePlanContext();

    return (
        <form>
            <div className="mt-[20px] grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12 pb-8 border-b-2 border-gray-200 dark:border-gray-500">
                <div className="sm:col-span-3">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Plano da Academia *
                    </label>
                    <div className="mt-1">
                        <select
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                        >
                            {
                                list.map((plan) => {
                                    return <option value={plan.id}>{plan.description}</option>
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className="sm:col-span-1">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Dias *
                    </label>
                    <div className="mt-1">
                        <input
                            disabled
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="number"
                            maxLength="255"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Preço *
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span class="text-gray-500 sm:text-sm">R$</span>
                        </div>
                        <input
                            disabled
                            class="pl-9 pr-12 dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            maxLength="255"
                        />
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <span class="text-gray-500 sm:text-sm" id="valor">BRL</span>
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Forma de Pagamento *
                    </label>
                    <div className="mt-1">
                        <select
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                        >
                            <option value="">Cartão de Crédito</option>
                            <option value="">Cartão de Débito</option>
                            <option value="">Dinheiro</option>
                            <option value="">PIX</option>
                        </select>
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Taxas de Cartão *
                    </label>
                    <div className="mt-1">
                        <select
                            disabled
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                        >
                            <option value="">Mastercard - Débito - 3.5%</option>
                            <option value="">Visa - Crédito - 2.5%</option>
                        </select>
                    </div>
                </div>

                <div className="sm:col-span-6">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Primeiro Pagamento *
                    </label>
                    <div className="mt-1">
                        <input
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="date"
                            maxLength="255"
                        />
                    </div>
                </div>
                
                <div className="sm:col-span-6">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Próximo Pagamento *
                    </label>
                    <div className="mt-1">
                        <input
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="date"
                            maxLength="255"
                        />
                    </div>
                </div>

            </div>
        </form>
    );
}