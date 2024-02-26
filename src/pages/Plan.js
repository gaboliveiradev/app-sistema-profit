import React from 'react';
import Insert from '../components/pages/insert/Plan';
import { useLocation } from 'react-router-dom';
import PlanDesktop from '../components/pages/list/PlanDesktop';
import { useNavigate } from 'react-router-dom';

export default function Plan() {
    const navigate = useNavigate();

    const URL_INSERT = '/plano';
    const URL_LIST = '/planos';

    const location = useLocation();
    const { pathname } = location;

    return (
        <main className="flex-1 px-2">
            <div className='flex items-center justify-between'>
                <div className="py-6 md:py-0 sm:px-4 w-[100%] z-40 md:top-0 flex flex-row items-center justify-between">
                    <div className='w-[100%] px-4 flex flex-row items-start justify-between md:mx-0'>
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Planos</h1>
                        </div>
                        {
                            (pathname === URL_LIST) && (
                                <div className='px-4 flex flex-row items-start justify-start md:mx-0'>
                                    <button onClick={(e) => navigate(URL_INSERT)} class="hover:bg-secondary-color flex flex-row justify-center border border-primary-color items-center bg-primary-color text-white active:bg-secondary-color uppercase text-sm px-6 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Adicionar</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            {
                pathname === URL_LIST ? (
                    <div className="mx-auto max-w-7xl px-4">
                        <div className='py-4 mx-auto'>
                            <PlanDesktop />
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
        </main >
    );
}