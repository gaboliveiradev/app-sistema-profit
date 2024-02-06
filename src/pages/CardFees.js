import React from 'react';
import CardFeesDesktop from '../components/pages/list/CardFeesDesktop';

export default function Plan() {
    return (
        <main className="flex-1 px-2">
            <div className="py-6 md:py-0 sm:px-4 z-40 md:top-0 flex flex-row items-center justify-between">
                <div className='px-4 flex flex-row items-start justify-start md:mx-0'>
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Taxas de Cobrança</h1>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-4">
                <div className='py-4 mx-auto'>
                    <CardFeesDesktop />
                </div >
            </div>
        </main >
    );
}