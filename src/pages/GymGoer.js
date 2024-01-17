import React from 'react';
//import { BrowserView, MobileView } from 'react-device-detect';
import Insert from './../components/pages/insert/GymGoer';
import { useMainContext } from '../context/Main';

export default function GymGoer() {
    const { isListGymGoer, setIsListGymGoer } = useMainContext();

    return (
        <main className="flex-1 px-2">
            <div className="py-6 md:py-0 sm:px-4 z-40 md:top-0 flex flex-row items-center justify-between">
                <div className='px-4 flex flex-row items-start justify-start md:mx-0'>
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Alunos</h1>
                    </div>
                </div>
                <div className="mt-2 px-4">
                    {
                        isListGymGoer
                            ? <button onClick={() => {
                                setIsListGymGoer(!isListGymGoer);
                            }} class="hover:bg-secondary-color-purple flex flex-row justify-center items-center bg-primary-color-purple text-white active:bg-blue-600  text-sm px-4 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                                <span className='pl-2'>Adicionar</span>
                            </button>
                            : <button onClick={() => {
                                setIsListGymGoer(!isListGymGoer);
                            }} class="hover:bg-secondary-color-purple flex flex-row justify-center items-center bg-primary-color-purple text-white active:bg-blue-600 text-sm px-4 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                </svg>
                                <span className='pl-2'>Listagem</span>
                            </button>
                    }
                </div>
            </div>

            {
                isListGymGoer
                    ? (
                        <div className="mx-auto max-w-6xl mt-44 px-4">
                            <div className='py-4 mx-auto'>
                                Lista
                            </div>
                        </div>
                    )
                    : (
                        <div className="mx-auto max-w-7xl px-4">
                            <div className='mx-auto'>
                                <Insert />
                            </div>
                        </div>
                    )
            }
        </main>
    )
}