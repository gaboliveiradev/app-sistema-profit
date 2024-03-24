import React from 'react';

export default function ButtonsFooterForms({ clearMethod, saveMethod, labelClear, labelSave }) {
    return (
        <>
            <button onClick={(ev) => clearMethod(ev)} class="text-white active:bg-red-400 bg-red-600 flex flex-row justify-center items-center active:bg-red-600 uppercase text-[13px] px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <span className='pl-1'>{labelClear}</span>
            </button>
            <button onClick={(ev) => saveMethod(ev)} class="flex flex-row justify-center items-center bg-green-table-items text-white active:bg-secondary-color rounded uppercase text-[13px] px-6 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <span className='pl-1'>{labelSave}</span>
            </button>
        </>
    );
}