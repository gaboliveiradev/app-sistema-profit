import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
    return (
        <section class="bg-white dark:bg-gray-900 ">
            <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div class="wf-ull lg:w-1/2">
                    <h1 class="mt-3 text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">SISTEMA <span className="text-primary-color">PROFIT</span></h1>
                    <p class="mt-4 text-gray-500 dark:text-gray-400">Desculpe, a página que você procura não está disponível no momento. Por favor, verifique o endereço ou tente novamente mais tarde.</p>

                    <div class="flex items-center mt-6 gap-x-3">
                        <NavLink to="/login">
                            <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 bg-primary-color border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-secondary-color dark:text-gray-200 dark:border-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                                <span>Voltar</span>
                            </button>
                        </NavLink>
                    </div>
                </div>

                <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img class="w-full max-w-lg lg:mx-auto" src="https://merakiui.com/images/components/illustration.svg" alt="" />
                </div>
            </div>
        </section>
    );
}