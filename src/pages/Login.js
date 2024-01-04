import React from 'react';

export default function Login() {
    return (
        <div class="bg-white dark:bg-gray-900">
            <div class="flex justify-center h-screen">
                <div class="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: 'url(https://imgur.com/Y8Dx5qr.png)' }}>
                    <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-90">
                        <div>
                            <h2 class="text-4xl font-bold text-white">Sistema Pro<span className='text-primary-color-purple'>Fit</span></h2>
                            <p class="max-w-xl mt-3 text-gray-300">O Sistema ProFit é uma inovação projetada para aprimorar a gestão de academias, proporcionando uma experiência mais eficiente e satisfatória aos usuários.</p>
                        </div>
                    </div>
                </div>

                <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div class="flex-1">
                        <div class="text-center">
                            <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">Pro<span className='text-primary-color-purple'>Fit</span></h2>
                        </div>

                        <div class="mt-8">
                            <form>
                                <div>
                                    <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                                    <input
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        type="email"
                                        name="email"
                                        placeholder="usuario@sistemaprofit.com.br"
                                    />
                                </div>

                                <div class="mt-6">
                                    <div class="flex justify-between mb-2">
                                        <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Senha</label>
                                        <a href="/" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Esqueceu sua senha?</a>
                                    </div>

                                    <input
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        type="password"
                                        name="password"
                                        placeholder="SuaSenha@dificil12"
                                    />
                                </div>

                                <div class="mt-6">
                                    <button 
                                        class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary-color-purple rounded-md hover:bg-secondary-color-purple focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                    >
                                        Entrar
                                    </button>
                                </div>

                            </form>

                            <p class="mt-6 text-sm text-center text-gray-400">© Gabriel Oliveira, 2024. 💜</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}