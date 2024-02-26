import React from 'react';
import BillingFeesDesktop from '../components/pages/list/BillingFeesDesktop';
import { useBillingFeesContext } from '../context/BillingFees';
import ButtonAdd from '../components/ButtonAdd';

export default function Plan() {
    const { setIsOpenModalInsert } = useBillingFeesContext();

    const handleAddPage = async () => {
        setIsOpenModalInsert(true);
    }

    return (
        <main className="flex-1 px-2">
            <div className="py-6 md:py-0 sm:px-4 z-40 w-[100%] md:top-0 flex flex-row items-center justify-between">
                <div className='px-4 flex flex-row w-[100%] items-start justify-between md:mx-0'>
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Taxas de Cobrança</h1>
                    </div>
                    <div className='px-4 flex flex-row items-start justify-start md:mx-0'>
                        <ButtonAdd method={handleAddPage} />
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