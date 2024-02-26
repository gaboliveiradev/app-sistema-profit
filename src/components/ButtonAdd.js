import React from 'react';

export default function ButtonAdd({ method }) {
    return (
        <div className='px-4 flex flex-row items-start justify-start md:mx-0'>
            <button onClick={() => method()} class="hover:bg-secondary-color flex flex-row justify-center border border-primary-color items-center bg-primary-color text-white active:bg-secondary-color uppercase text-sm px-6 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Adicionar</button>
        </div>
    );
}