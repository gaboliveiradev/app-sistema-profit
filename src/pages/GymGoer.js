import React from 'react';
import { useLocation } from 'react-router-dom';
import Insert from './../components/pages/insert/GymGoer';

export default function GymGoer() {
    const URL_INSERT = '/aluno';
    const URL_VIEW = '/alunos';

    const location = useLocation();
    const { pathname } = location;

    return (
        <main className="flex-1 px-2">
            <div className="py-6 md:py-0 sm:px-4 z-40 md:top-0 flex flex-row items-center justify-between">
                <div className='px-4 flex flex-row items-start justify-start md:mx-0'>
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Alunos</h1>
                    </div>
                </div>
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