import React from 'react';
import StaticInfo from '../components/StaticInfo';

export default function Dashboard() {
    return (
        <main className="flex-1 px-2">
            <div className="py-6 md:py-0 sm:px-4 z-40 md:top-0 flex flex-row flex-wrap items-center justify-between">
                <div className='px-4 flex flex-row items-center justify-between md:mx-0 flex-auto'>
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
                </div>
            </div>
            <div className="mx-auto max-w">
                <div className='py-6 mx-auto'>
                    <StaticInfo />
                </div>
            </div>
        </main>
    )
}