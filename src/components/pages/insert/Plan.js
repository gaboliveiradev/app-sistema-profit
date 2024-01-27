import React, { useState } from 'react';
import * as plan from '../../../services/plan';
import { useMainContext } from '../../../context/Main';
import Swal from 'sweetalert2'
import { useAuthContext } from '../../../context/Auth';

export default function Plan() {

    const [name, setName] = useState('');
    const [days, setDays] = useState('');
    const [price, setPrice] = useState('');

    const { setIsLoader } = useMainContext();
    const { gym } = useAuthContext();

    const handleClickSave = async (ev) => {
        ev.preventDefault();
        setIsLoader(true);

        const paramerts = {
            id_gym: gym.id,
            description: name,
            days: days,
            price: price,
        };

        const response = await plan.create(paramerts);

        if(response) {
            Swal.fire({
                icon: 'success',
                title: 'Plano Criado.',
            })
        }

        handleClickClear(ev);
        setIsLoader(false);
    }

    const handleClickClear = async (ev) => {
        ev.preventDefault();

        setName('');
        setDays('');
        setPrice('');

    }

    return (
        <form>
            <div className="mt-[20px] grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12 pb-2">
                <div className="sm:col-span-9">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Nome *
                    </label>
                    <div className="mt-1">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            maxLength="255"
                        />
                    </div>
                </div>

                <div className="sm:col-span-1">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Dias *
                    </label>
                    <div className="mt-1">
                        <input
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
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
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            class="pl-9 pr-12 dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            maxLength="255"
                        />
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <span class="text-gray-500 sm:text-sm" id="valor">BRL</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4 w-full flex flex-row items-center justify-end border-t pt-3 text-gray-700'>
                <button onClick={(e) => handleClickClear(e)} class="dark:bg-boxdark dark:text-white hover:text-white hover:bg-red-600 border border-gray-400 flex flex-row justify-center items-center bg-white text-gray-600 active:bg-blue-600 uppercase text-sm px-6 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Cancelar
                </button>
                <button onClick={(e) => handleClickSave(e)} class="hover:bg-secondary-color-purple flex flex-row justify-center border border-primary-color-purple items-center bg-primary-color-purple text-white active:bg-blue-600 uppercase text-sm px-6 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Salvar
                </button>
            </div>
        </form>
    );
}