import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Insert from './../components/pages/insert/GymGoer';

export default function GymGoer() {
    const navigate = useNavigate();

    const URL_INSERT = '/aluno';
    const URL_LIST = '/alunos';

    const location = useLocation();
    const { pathname } = location;

    return (
        <main className="flex-1 px-2">
            <div className="py-6 md:py-0 sm:px-4 z-40 md:top-0 flex flex-row flex-wrap items-center justify-between">
                <div className='px-4 flex flex-row items-center justify-between md:mx-0 flex-auto'>
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Alunos</h1>
                    {
                        (pathname === URL_LIST) && (
                            <div className='px-4 flex flex-row items-start justify-start md:mx-0'>
                                <button onClick={(e) => navigate(URL_INSERT)} class="hover:bg-secondary-color flex flex-row justify-center border border-primary-color items-center bg-primary-color text-white active:bg-secondary-color uppercase text-sm px-6 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Adicionar</button>
                            </div>
                        )
                    }
                </div>
            </div>
            {
                pathname === URL_LIST ? (
                    <div className="mx-auto max-w-7xl px-4">
                        <div className='py-6 mx-auto'>
                            Lista
                        </div >
                    </div>
                ) : pathname === URL_INSERT && (
                    <div className="mx-auto max-w-7xl px-4">
                        <div className='py-6 mx-auto'>
                            <Insert />
                        </div>
                    </div>
                )
            }
        </main>
    )
}