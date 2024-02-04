import React from 'react';
import Insert from '../components/pages/insert/Plan';
import { useLocation } from 'react-router-dom';
import PlanDesktop from '../components/pages/list/PlanDesktop';

export default function Plan() {
    const URL_INSERT = '/plano';
    const URL_VIEW = '/planos';

    const location = useLocation();
    const { pathname } = location;

    return (
        <main className="flex-1 px-2">
            <div className="py-6 md:py-0 sm:px-4 z-40 md:top-0 flex flex-row items-center justify-between">
                <div className='px-4 flex flex-row items-start justify-start md:mx-0'>
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Planos</h1>
                    </div>
                </div>
            </div>

            {
                pathname === URL_VIEW ? (
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