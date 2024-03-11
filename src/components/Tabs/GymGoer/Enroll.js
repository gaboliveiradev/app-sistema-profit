import React from 'react';
import { usePlanContext } from '../../../context/Plan';
import { useBillingFeesContext } from '../../../context/BillingFees';
import { capitalizeFirstLetter } from '../../../common/string';
import { useGymGoerContext } from '../../../context/GymGoer';

export default function Address() {
    const { listPlans } = usePlanContext();
    const { listBillingFees } = useBillingFeesContext();

    const {
        idPlan, setIdPlan,
        billingDate, setBillingDate,
        paymentMethod, setPaymentMethod,
        amountPaid, setAmountPaid,
        amountReceived, setAmountReceived,
        idBillingFees, setIdBillingFees,
        percentageRate, setPercentageRate,
        moneyRate, setMoneyRate,
    } = useGymGoerContext();

    const textBillingFees = (obj) => {
        var identification = obj.identification;
        var flag = capitalizeFirstLetter(obj.flag);
        var percentage = obj.percentage + "%";

        var string = identification + ' - ' + flag + ' - ' + percentage;

        return string;
    }

    const days = () => {
        if (idPlan === '' || idPlan === null) return 'N/A';

        const filteredPlans = listPlans.filter((p) => p.id === parseInt(idPlan))[0];
        return filteredPlans.days;
    }

    const price = () => {
        if (idPlan === '' || idPlan === null) {
            setAmountReceived('');

            return 'N/A';
        }

        const filteredPlans = listPlans.filter((plan) => plan.id === parseInt(idPlan))[0];
        setAmountReceived(filteredPlans.price.toFixed(2));
        return parseFloat(filteredPlans.price).toFixed(2);
    }

    return (
        <form>
            <div className="mt-[20px] grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12 pb-8 border-b-2 border-gray-200 dark:border-gray-500">
                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Plano da Academia *
                    </label>
                    <div className="mt-1">
                        <select
                            value={idPlan}
                            onChange={(e) => setIdPlan(e.target.value)}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                        >
                            <option value='' className='text-center'>-- Selecione --</option>
                            {
                                (listPlans.length > 0) ? listPlans.map((plan) => {
                                    return <option value={plan.id}>{plan.description}</option>
                                }) : (
                                    <option disabled>N/A</option>
                                )
                            }
                        </select>
                    </div>
                </div>

                <div className="sm:col-span-1">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Dias *
                    </label>
                    <div className="mt-1">
                        <input
                            disabled
                            value={days()}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            maxLength="255"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Valor *
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span class="text-gray-500 sm:text-sm">R$</span>
                        </div>
                        <input
                            disabled
                            value={price()}
                            class="pl-9 pr-12 dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="text"
                            maxLength="255"
                        />
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <span class="text-gray-500 sm:text-sm" id="valor">BRL</span>
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Forma de Pagamento *
                    </label>
                    <div className="mt-1">
                        <select
                            value={paymentMethod}
                            onChange={(e) => {
                                setPaymentMethod(e.target.value);

                                if (e.target.value === "") {
                                    setPercentageRate('0');
                                }

                                if (e.target.value === 'money') {
                                    setIdBillingFees('');
                                }
                            }}
                            disabled={idPlan === '' || idPlan === null}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                        >
                            <option value='' className='text-center'>-- Selecione --</option>
                            <option value="credit">Cartão de Crédito</option>
                            <option value="debit">Cartão de Débito</option>
                            <option value="pix">PIX</option>
                            <option value="money">Dinheiro</option>
                        </select>
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Taxas de Cobrança *
                    </label>
                    <div className="mt-1">
                        <select
                            value={idBillingFees}
                            onChange={(e) => {
                                setIdBillingFees(e.target.value);

                                const filteredBillingFees = (e.target.value === '' || e.target.value === null) ? '0' : listBillingFees.filter((billingfees) => billingfees.id === parseInt(e.target.value))[0].percentage;
                                
                                setPercentageRate(filteredBillingFees);
                                setMoneyRate(((parseFloat(filteredBillingFees) / 100) * amountReceived).toFixed(2))
                                setAmountPaid((parseFloat(((parseFloat(filteredBillingFees) / 100) * amountReceived)) + parseFloat(amountReceived)).toFixed(2))
                            }}
                            disabled={paymentMethod === "money" || paymentMethod === '' || paymentMethod === null}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                        >
                            <option value='' className='text-center'>-- Selecione --</option>
                            {
                                (listBillingFees.length > 0) ? listBillingFees.map((billingfees) => {
                                    return <option value={billingfees.id}>{textBillingFees(billingfees)}</option>
                                }) : (
                                    <option disabled>N/A</option>
                                )
                            }
                        </select>
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                        Data de Pagamento *
                    </label>
                    <div className="mt-1">
                        <input
                            value={billingDate}
                            onChange={(e) => setBillingDate(e.target.value)}
                            class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                            type="date"
                            maxLength="255"
                        />
                    </div>
                </div>

                {
                    (paymentMethod === 'money') ? (
                        <div className="sm:col-span-12 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                                    Taxa (%)
                                </label>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <input
                                        value='0'
                                        class="pr-12 dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                                        type="text"
                                        maxLength="255"
                                        disabled
                                    />
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <span class="text-gray-500 sm:text-sm" id="valor">%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                                    Taxa (R$)
                                </label>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span class="text-gray-500 sm:text-sm">R$</span>
                                    </div>
                                    <input
                                        value="0"
                                        class="pl-9 pr-12 dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                                        type="text"
                                        maxLength="255"
                                        disabled
                                    />
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <span class="text-gray-500 sm:text-sm" id="valor">BRL</span>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                                    Valor Recebido
                                </label>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span class="text-gray-500 sm:text-sm">R$</span>
                                    </div>
                                    <input
                                        value={amountReceived}
                                        onChange={(e) => {
                                            setAmountReceived(e.target.value);
                                            setAmountPaid(e.target.value);
                                        }}
                                        class="pl-9 pr-12 dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                                        type="text"
                                        maxLength="255"
                                    />
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <span class="text-gray-500 sm:text-sm" id="valor">BRL</span>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                                    Troco
                                </label>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span class="text-gray-500 sm:text-sm">R$</span>
                                    </div>
                                    <input
                                        disabled
                                        class="pl-9 pr-12 dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                                        type="text"
                                        maxLength="255"
                                    />
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <span class="text-gray-500 sm:text-sm" id="valor">BRL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (paymentMethod === 'credit' || paymentMethod === 'debit' || paymentMethod === 'pix' || paymentMethod === '') && (
                        <div className="sm:col-span-12 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                                    Taxa (%)
                                </label>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <input
                                        value={percentageRate}
                                        class="pr-12 dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                                        type="text"
                                        maxLength="255"
                                        disabled
                                    />
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <span class="text-gray-500 sm:text-sm" id="valor">%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                                    Taxa (R$)
                                </label>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span class="text-gray-500 sm:text-sm">R$</span>
                                    </div>
                                    <input
                                        value={parseFloat(moneyRate).toFixed(2)}
                                        class="pl-9 pr-12 dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                                        type="text"
                                        maxLength="255"
                                        disabled
                                    />
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <span class="text-gray-500 sm:text-sm" id="valor">BRL</span>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                                    Valor s/Taxa
                                </label>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span class="text-gray-500 sm:text-sm">R$</span>
                                    </div>
                                    <input
                                        value={(idPlan === '' || idPlan === null) ? '0.00' : parseFloat(amountReceived)}
                                        class="pl-9 pr-12 dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                                        type="text"
                                        maxLength="255"
                                        disabled
                                    />
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <span class="text-gray-500 sm:text-sm" id="valor">BRL</span>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label className="block text-sm font-medium text-[16px] text-gray-700 dark:text-white">
                                    Valor c/Taxa
                                </label>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span class="text-gray-500 sm:text-sm">R$</span>
                                    </div>
                                    <input
                                        value={parseFloat(amountPaid).toFixed(2)}
                                        class="pl-9 pr-12 dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:ring-primary-color focus:border-primary-color rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
                                        type="text"
                                        maxLength="255"
                                        disabled
                                    />
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <span class="text-gray-500 sm:text-sm" id="valor">BRL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </form >
    );
}