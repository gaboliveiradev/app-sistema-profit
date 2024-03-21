import React from "react";

import biceps from './../../assets/icon/biceps.svg';
import close from './../../assets/icon/deletar.svg';

export default function CardPlan() {
    return (
        <div>
            <div className="p-8 flex flex-col justify-center items-center bg-green-table-items">
                <h1 className="text-[20px] text-white">Musculação</h1>
                <p className="-mb-1 lowercase text-blackd text-[14px] font-bold opacity-[0.6]">a partIr de</p>
                <h1 className="text-[20px] text-white">
                    R$ 100,00
                </h1>
                <div className="text-white text-center text-[11px] w-[80%] mt-4 bg-gren59 px-3 py-2">
                    Mensal, Bimestral
                </div>
            </div>
            <div className="p-8 flex flex-col justify-center items-center bg-grayF5 text-center">
                <div className="cursor-pointer flex flex-col justify-center items-center">
                    <h1 className='uppercase text-[11px] font-bold text-gray79'>Modalidades</h1>
                    <div className='mt-3 flex justify-center items-center rounded-full w-[50px] h-[50px] bg-white'>
                        <img width="28" height="28" src={biceps} alt="A" />
                    </div>
                </div>
                <div className="cursor-pointer pt-3 flex flex-col justify-center items-center">
                    <h1 className='uppercase text-[11px] font-bold text-gray79'>Serviços Incluso</h1>
                    <div className='mt-3 flex justify-center items-center rounded-full w-[50px] h-[50px] bg-white'>
                        <img width="28" height="28" src={close} alt="A" />
                    </div>
                </div>
            </div>
        </div>
    );
}