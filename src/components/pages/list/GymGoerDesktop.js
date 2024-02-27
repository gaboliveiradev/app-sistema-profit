import React, { useEffect } from "react";
import DataTable from 'react-data-table-component';
import { optionsPagination } from "../../../common/options";
import { formatCurrencyBRL } from "../../../common/format";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import '../../../css/toastify.css';
import { usePlanContext } from "../../../context/Plan";

export default function GymGoerDesktop() {
    const columns = [
        {
            name: <th scope="col" class="px-3 py-3.5 text-center text-sm font-normal text-gray-900"></th>,
            selector: row => (
                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
                    <button type="button" class="inline-flex items-center p-1 border border-transparent rounded-l shadow-sm text-white bg-verde2 hover:bg-verde1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                    </button>
                    <button type="button" class="inline-flex items-center p-1 border border-transparent rounded-r shadow-sm text-white bg-roxo2 hover:bg-roxo1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                </td>
            )
        },
        {
            name: <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-gray-900">Descrição</th>,
            selector: row => (
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-500">Nome: <strong>{row.description}</strong></div>
                </td>
            ),
        },
        {
            name: <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-gray-900">Dias</th>,
            selector: row => (
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-500">Tempo: <strong>{row.days}x por semana</strong></div>
                </td>
            ),
        },
        {
            name: <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-gray-900">Valor</th>,
            selector: row => (
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-500">Preço: <strong>{formatCurrencyBRL(row.price)}</strong></div>
                </td>
            ),
        },
    ];

    return (
        <div class="mt-8 flex flex-col">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12 pb-5">
                <div className="sm:col-span-12">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Pesquisar
                    </label>
                    <div className="mt-1">
                        <input
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            maxLength="255"
                        />
                    </div>
                </div>
            </div>
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <DataTable
                            columns={columns}
                            paginationPerPage={6}
                            pagination paginationComponentOptions={optionsPagination}
                            paginationRowsPerPageOptions={[6, 12, 18]}
                            noDataComponent={<p className='text-[14px] p-[10px]'>Nenhum registro encontrado</p>}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}