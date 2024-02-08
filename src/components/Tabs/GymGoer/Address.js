import React from 'react';
import { useGymGoerContext } from '../../../context/GymGoer';

export default function Address() {
    const {
        zipCode, setZipCode,
        street, setStreet,
        number, setNumber,
        district, setDistrict,
        city, setCity,
        state, setState,
        complement, setComplement,
    } = useGymGoerContext();

    return (
        <form>
            <div className="mt-[20px] grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12 pb-8 border-b-2 border-gray-200 dark:border-gray-500">
                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        CEP *
                    </label>
                    <div className="mt-1">
                        <input
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            maxLength="255"
                        />
                    </div>
                </div>

                <div className="sm:col-span-8">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Logradouro *
                    </label>
                    <div className="mt-1">
                        <input
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            maxLength="255"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Número
                    </label>
                    <div className="mt-1">
                        <input
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            maxLength="255"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Bairro *
                    </label>
                    <div className="mt-1">
                        <input
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            maxLength="255"
                        />
                    </div>
                </div>

                <div className="sm:col-span-5">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Cidade *
                    </label>
                    <div className="mt-1">
                        <input
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            maxLength="255"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Estado *
                    </label>
                    <div className="mt-1">
                        <input
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            maxLength="255"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Complemento
                    </label>
                    <div className="mt-1">
                        <input
                            value={complement}
                            onChange={(e) => setComplement(e.target.value)}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            maxLength="255"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}