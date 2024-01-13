import React, { Fragment } from 'react';
import { Tab } from '@headlessui/react'

export default function TabHeader({ title, icon }) {
    return (
        <Tab as={Fragment}>
            {({ selected }) => (
                <button className={`${selected ? 'rounded-t-lg text-white bg-primary-color-purple' : 'bg-white text-black'} inline-flex items-center justify-center py-2 px-4 rounded-none border border-transparent text-sm font-medium focus:outline-none`}>
                    {icon}
                    <span className='pl-2'>{title}</span>
                </button>
            )}
        </Tab>
    );
}
