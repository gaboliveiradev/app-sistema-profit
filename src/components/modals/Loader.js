import React from 'react';
import { Hourglass } from 'react-loader-spinner'

export default function Loader() {
    return (
        <div class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none" id="modal-id">
            <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                <div class="p-5 flex flex-col justify-center items-center">
                    <Hourglass
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="hourglass-loading"
                        colors={['#5A1A92', '#46BC9C']}
                    />
                    <h2 class="text-xl font-bold py-4 ">Aguarde...</h2>
                </div>
            </div>
        </div>
    );
}