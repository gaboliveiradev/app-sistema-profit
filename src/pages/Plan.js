import React from 'react';
import Insert from '../components/pages/insert/Plan';
import { useLocation } from 'react-router-dom';
import PlanDesktop from '../components/pages/list/PlanDesktop';
import { useNavigate } from 'react-router-dom';
import ButtonAdd from '../components/ButtonAdd';

export default function Plan() {
    const navigate = useNavigate();

    const URL_INSERT = '/plano';
    const URL_LIST = '/planos';

    const location = useLocation();
    const { pathname } = location;

    const handleAddPage = async () => {
        navigate(URL_INSERT);
    }

    return (
        <main>
            <div className='flex items-center justify-between'>
                <div className="py-6 md:py-0 sm:px-4 w-[100%] z-40 md:top-0 flex flex-row items-center justify-between">
                    <div className='w-[100%] px-4 flex flex-row items-start justify-between md:mx-0'>
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Planos</h1>
                        </div>
                        {
                            (pathname === URL_LIST) && (
                                <div className='px-4 flex flex-row items-start justify-start md:mx-0'>
                                    <ButtonAdd method={handleAddPage} />
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