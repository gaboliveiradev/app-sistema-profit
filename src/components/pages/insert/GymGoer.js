import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import SelectCombo from '../../SelectCombo';
import { Tab } from '@headlessui/react'
import TabHeader from '../../TabHeader';
import Address from '../../Tabs/GymGoer/Address';

export default function GymGoer() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthday, setBirthday] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [observation, setObservation] = useState('');

    const genders = [
        { id: 1, name: 'Masculino', initial: 'M' },
        { id: 2, name: 'Femenino', initial: 'F' },
    ]

    return (
        <form>
            <div className="mt-[20px] grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12 pb-2">
                <div className="sm:col-span-4">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Nome *
                    </label>
                    <div className="mt-1">
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            maxLength="255"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Sobrenome *
                    </label>
                    <div className="mt-1">
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            maxLength="255"
                        />
                    </div>
                </div>

                <div className="sm:col-span-5">
                    <label className="block text-sm text-[16px] font-medium text-gray-700 dark:text-white">
                        Email *
                    </label>
                    <div className="mt-1">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            maxLength="255"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label className="block text-sm text-[16px] font-medium text-gray-700 dark:text-white">
                        CPF *
                    </label>
                    <div className="mt-1">
                        <IMaskInput
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            mask="000.000.000-00"
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label className="block text-sm text-[16px] font-medium text-gray-700 dark:text-white">
                        Data Nasc. *
                    </label>
                    <div className="mt-1">
                        <input
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="date"
                            maxLength="255"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label className="block text-sm text-[16px] font-medium text-gray-700 dark:text-white">
                        Telefone *
                    </label>
                    <div className="mt-1">
                        <IMaskInput
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            mask="(00) 00000-0000"
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            maxLength="15"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label className="block text-sm text-[16px] font-medium text-gray-700 dark:text-white">
                        Sexo *
                    </label>
                    <div className="mt-1">
                        <SelectCombo
                            field='name'
                            object={genders}
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label className="block text-sm text-[16px] font-medium text-gray-700 dark:text-white">
                        Altura
                    </label>
                    <div className="mt-1">
                        <div class="relative mt-1 rounded-md shadow-sm">
                            <IMaskInput
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                mask="num"
                                blocks={{
                                    num: {
                                        mask: Number,
                                        scale: 2,
                                        radix: ',',
                                        max: 300,
                                    },
                                }}
                                lazy={false}
                                class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                                type="text"
                                maxLength="255"
                            />
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                <span class="dark:text-gray-300 text-gray-500 sm:text-sm" id="price-currency">CM</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label className="block text-sm text-[16px] font-medium text-gray-700 dark:text-white">
                        Peso
                    </label>
                    <div className="mt-1">
                        <div class="relative mt-1 rounded-md shadow-sm">
                            <IMaskInput
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                mask="num"
                                blocks={{
                                    num: {
                                        mask: Number,
                                        scale: 2,
                                        radix: ',',
                                        max: 300,
                                    },
                                }}
                                lazy={false}
                                class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                                type="text"
                                maxLength="255"
                            />
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                <span class="dark:text-gray-300 text-gray-500 sm:text-sm" id="price-currency">KG</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-12">
                    <label className="block text-sm text-[16px] font-medium text-gray-700 dark:text-white">
                        Observação
                    </label>
                    <div className="mt-1">
                        <textarea
                            value={observation}
                            onChange={(e) => setObservation(e.target.value)}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            rows={3}
                            maxLength="255"
                        />
                    </div>
                </div>
            </div>
            <div>
                <Tab.Group>
                    <Tab.List class="flex gap-2 border-b pt-3 text-gray-700">
                        <TabHeader
                            title='Dados de Endereço'
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                                </svg>
                            }
                        />
                        <TabHeader
                            title='Plano da Matrícula'
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                                </svg>
                            }
                        />
                        <TabHeader
                            title='Dados de Cobrança'
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                </svg>
                            }
                        />
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <Address />
                        </Tab.Panel>
                        <Tab.Panel>Plano | Modulo em Desenvolvimento</Tab.Panel>
                        <Tab.Panel>Pagamento | Modulo em Desenvolvimento</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <div className='mt-4 w-full flex flex-row items-center justify-end'>
                <button class="dark:bg-boxdark dark:text-white hover:text-white hover:bg-red-600 border border-gray-400 flex flex-row justify-center items-center bg-white text-gray-600 active:bg-blue-600 uppercase text-sm px-6 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Cancelar
                </button>
                <button class="hover:bg-secondary-color-purple flex flex-row justify-center border border-primary-color-purple items-center bg-primary-color-purple text-white active:bg-blue-600 uppercase text-sm px-6 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Salvar
                </button>
            </div>
        </form>
    )
}