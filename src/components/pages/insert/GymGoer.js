import React, { useEffect } from 'react';
import { IMaskInput } from 'react-imask';
import { Tab } from '@headlessui/react'
import TabHeader from '../../TabHeader';
import Address from '../../Tabs/GymGoer/Address';
import Enroll from '../../Tabs/GymGoer/Enroll';
import { usePlanContext } from '../../../context/Plan';
import { useBillingFeesContext } from '../../../context/BillingFees';
import { useGymGoerContext } from '../../../context/GymGoer';

export default function GymGoer() {
    const {
        firstName, setFirstName,
        lastName, setLastName,
        email, setEmail,
        cpf, setCpf,
        birthday, setBirthday,
        phone, setPhone,
        gender, setGender,
        height, setHeight,
        weight, setWeight,
        observation, setObservation,
        // methods
        save,
    } = useGymGoerContext();

    const { getPlans } = usePlanContext();
    const { getBillingFees } = useBillingFeesContext();
    const { clear } = useGymGoerContext();

    useEffect(() => {
        getPlans();
        getBillingFees();
    }, []);

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
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
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
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
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
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
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
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
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
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
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
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
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
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                        >
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </select>
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
                                class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
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
                                class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
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
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            rows={3}
                            maxLength="255"
                        />
                    </div>
                </div>
            </div>
            <div className='pt-3'>
                <Tab.Group>
                    <Tab.List class="flex flex-row w-[100%] border-b-2 text-gray-700">
                        <TabHeader title='Endereço' />
                        <TabHeader title='Matrícula' />
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <Address />
                        </Tab.Panel>
                        <Tab.Panel>
                            <Enroll />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <div className='mt-4 w-full flex flex-row items-center justify-end'>
                <button onClick={(e) => clear(e)} class="dark:bg-boxdark dark:text-white hover:text-white hover:bg-red-600 border border-gray-400 flex flex-row justify-center items-center bg-white text-gray-600 active:bg-red-600 uppercase text-sm px-6 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Cancelar
                </button>
                <button onClick={(e) => save(e)} class="hover:bg-secondary-color flex flex-row justify-center border border-primary-color items-center bg-primary-color text-white active:bg-secondary-color uppercase text-sm px-6 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Salvar
                </button>
            </div>
        </form>
    )
}