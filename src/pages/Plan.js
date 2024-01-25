import React from 'react';
import Insert from '../components/pages/insert/Plan';
import { useMainContext } from '../context/Main';
import PlanDesktop from '../components/pages/list/PlanDesktop';

export default function Plan() {
    const { isListPlan, setIsListPlan } = useMainContext();

    return (
        <main className="flex-1 px-2">
            <div className="py-6 md:py-0 sm:px-4 z-40 md:top-0 flex flex-row items-center justify-between">
                <div className='px-4 flex flex-row items-start justify-start md:mx-0'>
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Planos</h1>
                    </div>
                </div>
                <div className="mt-2 px-4">
                    {
                        isListPlan
                            ? <button onClick={() => {
                                setIsListPlan(!isListPlan);
                            }} class="hover:bg-secondary-color-purple flex flex-row justify-center border border-primary-color-purple items-center bg-primary-color-purple text-white active:bg-blue-600 text-sm px-6 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                <span>Adicionar</span>
                            </button>
                            : <button onClick={() => {
                                setIsListPlan(!isListPlan);
                            }} class="hover:bg-secondary-color-purple flex flex-row justify-center border border-primary-color-purple items-center bg-primary-color-purple text-white active:bg-blue-600 text-sm px-6 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                <span>Listagem</span>
                            </button>
                    }
                </div>
            </div>

            {
                isListPlan
                    ? (
                        <div className="mx-auto max-w-7xl px-4">
                            <div className='py-4 mx-auto'>
                                <PlanDesktop />
                            </div >
                        </div >
                    )
                    : (
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