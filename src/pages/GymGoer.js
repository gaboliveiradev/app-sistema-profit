import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Insert from './../components/pages/insert/GymGoer';

export default function GymGoer() {
    const URL_INSERT = '/aluno';
    const URL_VIEW = '/alunos';

    const location = useLocation();
    const { pathname } = location;

    const [stepper, setStepper] = useState(1);

    return (
        <main className="flex-1 px-2">
            <div className="py-6 md:py-0 sm:px-4 z-40 md:top-0 flex flex-row flex-wrap items-center justify-between">
                <div className='px-4 flex flex-row items-center justify-start md:mx-0 flex-auto'>
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Alunos</h1>
                </div>

                {
                    pathname === URL_INSERT && (
                        <div className='accordion-body flex-auto'>
                            <div class="mx-4 p-4">
                                <div class="flex items-center">
                                    <div onClick={() => setStepper(1)} class="flex items-center text-white relative cursor-pointer">
                                        <div class="border-stepper-active bg-stepper-active flex justify-center items-center rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                            </svg>
                                        </div>
                                        <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium text-teal-600">
                                            <span>Dados Pessoais</span>
                                        </div>
                                    </div>
                                    <div class={`${(stepper === 2 || stepper === 3) && 'border-stepper-active'} flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300`}></div>
                                    <div onClick={() => setStepper(2)} class={`${(stepper === 2 || stepper === 3) && 'text-white'} flex items-center relative cursor-pointer`}>
                                        <div class={`${(stepper === 2 || stepper === 3) ? 'border-stepper-active bg-stepper-active' : 'border-gray-300'} flex justify-center items-center rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                            </svg>
                                        </div>
                                        <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium text-teal-600">
                                            <span>Endereço</span>
                                        </div>
                                    </div>
                                    <div class={`${(stepper === 3) && 'border-stepper-active'} flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300`}></div>
                                    <div onClick={() => setStepper(3)} class={`${(stepper === 3) && 'text-white'} flex items-center relative cursor-pointer`}>
                                        <div class={`${(stepper === 3) ? 'border-stepper-active bg-stepper-active' : 'border-gray-300'} flex justify-center items-center rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                                            </svg>
                                        </div>
                                        <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium text-teal-600">
                                            <span>Pagamento</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            {
                pathname === URL_VIEW ? (
                    <div className="mx-auto max-w-7xl px-4">
                        <div className='py-4 mx-auto'>
                            Lista
                        </div >
                    </div>
                ) : pathname === URL_INSERT && (
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