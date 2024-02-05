import React, { Fragment } from 'react';
import { Tab } from '@headlessui/react'

export default function TabHeader({ title }) {

    return (
        <Tab className="w-[50%]" as={Fragment}>
            {({ selected }) => (
                <button className={`${selected ? 'rounded-md text-white bg-primary-color' : 'bg-white text-black'} inline-flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium focus:outline-none`}>
                    <span className='pl-2'>{title}</span>
                </button>
            )}
        </Tab>
    );
}
