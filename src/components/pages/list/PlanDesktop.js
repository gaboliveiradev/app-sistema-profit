import React, { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import '../../../css/toastify.css';
import { usePlanContext } from "../../../context/Plan";
import CardPlan from "../../SmallComponents/CardPlan";
import addIcon from '../../../assets/icon/add.png';

export default function PlanDesktop() {
    const {
        getPlans,
        destroy,
        listPlans,
        setIsModalVisible,
    } = usePlanContext();

    const navigate = useNavigate();


    /*useEffect(() => {
        getPlans();
    }, []);*/

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

            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
                        <div className="flex justify-between items-center bg-green-table">
                            <div onClick={() => navigate('/plano')} className="cursor-pointer flex items-center text-white p-3 text-[15px]">
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
                        <div class="bg-white shadow-md grid grid-cols-4 gap-4 p-4">

                            {/* ===@ Card Adicionar Novo Plano @=== */}
                            <div onClick={() => navigate('/plano')} className="h-[190px] cursor-pointer flex flex-col justify-center items-center bg-transparent border border-dashed border-2 border-green-table-items">
                                <h1 className="font-bold uppercase text-[16px] text-gray79">
                                    <img width="64" height="64" src={addIcon} alt="+" />
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}