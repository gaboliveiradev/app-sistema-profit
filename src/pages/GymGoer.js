import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Insert from './../components/pages/insert/GymGoer';
import ButtonAdd from '../components/ButtonAdd';
import GymGoerDesktop from '../components/pages/list/GymGoerDesktop';

export default function GymGoer() {
    const navigate = useNavigate();

    const URL_INSERT = '/aluno';
    const URL_LIST = '/alunos';

    const location = useLocation();
    const { pathname } = location;

    const handleAddPage = async () => {
        navigate(URL_INSERT);
    }

    return (
        <main className="flex-1 px-2">
            <div className="py-6 md:py-0 sm:px-4 z-40 md:top-0 flex flex-row flex-wrap items-center justify-between">
                <div className='px-4 flex flex-row items-center justify-between md:mx-0 flex-auto'>
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Alunos</h1>
                    {
                        (pathname === URL_LIST) && (
                            <ButtonAdd method={handleAddPage} />
                        )
                    }
                </div>
            </div>
            {
                pathname === URL_LIST ? (
                    <div className="mx-auto max-w-7xl px-4">
                        <div className='py-6 mx-auto'>
                            <GymGoerDesktop />
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