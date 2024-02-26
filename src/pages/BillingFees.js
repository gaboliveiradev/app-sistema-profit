import React from 'react';
import BillingFeesDesktop from '../components/pages/list/BillingFeesDesktop';
import { useBillingFeesContext } from '../context/BillingFees';

export default function Plan() {
    const { setIsOpenModalInsert } = useBillingFeesContext();

    return (
        <main className="flex-1 px-2">
            <div className="py-6 md:py-0 sm:px-4 z-40 w-[100%] md:top-0 flex flex-row items-center justify-between">
                <div className='px-4 flex flex-row w-[100%] items-start justify-between md:mx-0'>
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Taxas de Cobrança</h1>
                    </div>
                    <div className='px-4 flex flex-row items-start justify-start md:mx-0'>
                        <button onClick={() => setIsOpenModalInsert(true)} class="hover:bg-secondary-color flex flex-row justify-center border border-primary-color items-center bg-primary-color text-white active:bg-secondary-color uppercase text-sm px-6 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Adicionar</button>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-4">
                <div className='py-4 mx-auto'>
                    <BillingFeesDesktop />
                </div >
            </div>
        </main >
    );
}