import React, { useEffect } from "react";
import DataTable from 'react-data-table-component';
import { optionsPagination } from "../../../common/options";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useBillingFeesContext } from "../../../context/BillingFees";
import { capitalizeFirstLetter } from "../../../common/string";

export default function CardFeesDesktop() {
    const {
        listBillingFees,
        destroy,
        getBillingFees,
        isOpenModalInsert, setIsOpenModalInsert,
        setIdBillingFees, setIdentification,
        setFlag, setType, setPercentage,
    } = useBillingFeesContext();

    useEffect(() => {
        getBillingFees();
    }, []);

    const update = async (e, row) => {
        e.preventDefault();

        setIdBillingFees(row.id);
        setIdentification(row.identification);
        setFlag(row.flag);
        setType(row.type);
        setPercentage(row.percentage);

        setIsOpenModalInsert(true);
    }

    const columns = [
        {
            name: <th scope="col" class="px-3 py-3.5 text-center text-sm font-normal text-gray-900"></th>,
            selector: row => (
                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
                    <button onClick={(e) => update(e, row)} type="button" class="inline-flex items-center p-1 border border-transparent rounded-l shadow-sm text-white bg-verde2 hover:bg-verde1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                    </button>
                    <button onClick={(e) => destroy(e, row.id)} type="button" class="inline-flex items-center p-1 border border-transparent rounded-r shadow-sm text-white bg-roxo2 hover:bg-roxo1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                </td>
            )
        },
        {
            name: <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-gray-900">Maquina de Cartão</th>,
            selector: row => (
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-500">Identificação: <strong>{row.identification}</strong></div>
                </td>
            ),
        },
        {
            name: <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-gray-900">Bandeira</th>,
            selector: row => (
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-500">Tipo: <strong>{capitalizeFirstLetter(row.flag)}</strong></div>
                </td>
            ),
        },
        {
            name: <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-gray-900">Canal de Pagamento</th>,
            selector: row => (
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-500">Tipo: <strong>{(row.type === 'credit' ? 'Cartão de Crédito' : (row.type === 'debit') ? 'Cartão de Débito' : 'Pix')}</strong></div>
                </td>
            ),
        },
        {
            name: <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-gray-900">Taxa</th>,
            selector: row => (
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-500">Porcentagem: <strong>{row.percentage} %</strong></div>
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
            <div className="flex justify-between items-center bg-green-table">
                <div className="cursor-pointer flex items-center text-white p-3 text-[15px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span>Adiconar</span>
                </div>
                <div className="w-[25%] flex items-center">
                    <div className="w-[100%] flex items-center">
                        <input
                            placeholder="Filtrar"
                            class="p-3 bg-green-table-items placeholder-white outline-none border-none text-white block flex-1  w-full text-sm border-transparent"
                            type="text"
                            maxLength="255"
                        />
                        <div className="cursor-pointer p-3 bg-green-table-items text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="-my-2    -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <DataTable
                            columns={columns}
                            data={listBillingFees}
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