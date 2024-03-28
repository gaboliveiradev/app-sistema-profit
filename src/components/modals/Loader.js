import React from 'react';
import './loader.css';

export default function Loader() {
    return (
        <div class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-1 outline-none focus:outline-none" id="modal-id">
            <div class="absolute bg-black opacity-80 inset-0 z-2"></div>
            <div class="loader"></div>
        </div>
    );
}