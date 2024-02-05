import React, { useState } from 'react';
import { useAuthContext } from '../context/Auth';
import { useNavigate } from 'react-router-dom';

import Logo from './../assets/logo_light.png';

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginLoader, setIsLoginLoader] = useState(false);

    const { signIn } = useAuthContext();

    const handleClickSignIn = async (e) => {
        e.preventDefault();
        setIsLoginLoader(true)

        const response = await signIn(email, password);

        if (response) return navigate('/');

        setIsLoginLoader(false);
        return navigate('/login');
    }

    return (
        <div class="bg-white dark:bg-gray-900">
            <div class="flex justify-center h-screen">
                <div class="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: 'url(https://imgur.com/Y8Dx5qr.png)' }}>
                    <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-90">
                        <div>
                            <h2 class="text-4xl font-bold text-white">SISTEMA <span className='text-primary-color'>PROFIT</span></h2>
                            <p class="max-w-xl mt-3 text-gray-300">O SISTEMA PROFIT é uma inovação projetada para aprimorar a gestão de academias, proporcionando uma experiência mais eficiente e satisfatória aos usuários.</p>
                        </div>
                    </div>
                </div>

                <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div class="flex-1">
                        <div class="flex justify-center items-center">
                            <img src={Logo} className='w-50' />
                        </div>

                        <div class="mt-8">
                            <form>
                                <div>
                                    <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        type="password"
                                        name="password"
                                        placeholder="SuaSenha@dificil12"
                                    />
                                </div>

                                <div class="mt-6">
                                    <button
                                        class="flex items-center justify-center w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary-color rounded-md hover:bg-secondary-color focus:outline-none focus:bg-secondary-color focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                        onClick={(e) => handleClickSignIn(e)}
                                    >
                                        {
                                            (isLoginLoader) ? (
                                                <svg aria-hidden="true" role="status" class="inline mr-2 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                                </svg>
                                            )
                                        }
                                        <span>Entrar</span>
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