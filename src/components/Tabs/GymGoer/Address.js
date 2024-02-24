import React, { useRef } from 'react';
import axios from 'axios';
import { toast, Flip } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
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

    const numberInputRef = useRef(null);

    const getCEP = async (ev) => {
        ev.preventDefault();

        if (zipCode === null || zipCode === '') {
            toast.error('Preencha um CEP válido!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip,
            });

            return;
        }
        axios.get(`http://viacep.com.br/ws/${zipCode.replace(/[^\w]/g, '')}/json/`).then((res) => {
            setDistrict(res.data.bairro);
            setCity(res.data.localidade);
            setStreet(res.data.logradouro);
            setState(res.data.uf);
            setComplement(res.data.complemento);

            if (res.data.hasOwnProperty('erro')) {
                toast.error('Não foi possível buscar o CEP!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Flip,
                });

                return;
            }

            toast.success('CEP Encontrado com Sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip,
            });

            numberInputRef.current.focus();
        }).catch((err) => {
            console.log(err);

            toast.error('Não foi possível buscar o CEP!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip,
            });
        })
    }

    return (
        <form>
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
            <div className="mt-[20px] grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12 pb-8 border-b-2 border-gray-200 dark:border-gray-500">
                <div class="sm:col-span-2">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        CEP *
                    </label>
                    <div class="mt-1 flex">
                        <div className="relative flex flex-grow items-stretch focus-within:z-10">
                            <input
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                                type="text"
                                name="cep"
                                id="cep"
                                autocomplete="cep"
                                class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-l-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            />
                        </div>
                        <button onClick={(e) => getCEP(e)} type="button" className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-primary-color bg-primary-color px-4 py-2 text-sm font-medium text-white hover:opacity-80">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
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
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
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
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            ref={numberInputRef} 
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
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
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
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
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
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
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
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            maxLength="255"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}