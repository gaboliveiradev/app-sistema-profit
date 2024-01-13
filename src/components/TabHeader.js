import React, { Fragment } from 'react';
import { Tab } from '@headlessui/react'

export default function TabHeader({ title }) {
    return (
        <Tab as={Fragment}>
            {({ selected }) => (
                <button className={`${selected ? 'rounded-t-lg text-white bg-primary-color-purple' : 'bg-white text-black'} inline-flex justify-center py-2 px-4 rounded-none border border-transparent text-sm font-medium focus:outline-none`}>
                    {title}
                </button>
            )}
        </Tab>
    );
}
