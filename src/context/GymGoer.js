import React, { useState, createContext, useContext } from "react";

import * as gymgoer from '../services/gymgoer';
import { toast, Flip } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useMainContext } from './Main';
import { useAuthContext } from './Auth';
import { getCurrentDate } from "../common/date";

export const GymGoerContext = createContext();

export const GymGoerProvider = ({ children }) => {

  const { setIsLoader } = useMainContext();
  const { gym } = useAuthContext();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('M');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [observation, setObservation] = useState('');

  const [zipCode, setZipCode] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [complement, setComplement] = useState('');

  const [idPlan, setIdPlan] = useState('');
  const [billingDate, setBillingDate] = useState(getCurrentDate());
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amountPaid, setAmountPaid] = useState(0);
  const [amountReceived, setAmountReceived] = useState(0);

  const [idBillingFees, setIdBillingFees] = useState('');
  const [percentageRate, setPercentageRate] = useState(0);
  const [moneyRate, setMoneyRate] = useState(0);

  const [listGymGoer, setListGymGoer] = useState([]);

  const getGymGoers = async () => {
    setIsLoader(true);

    const response = await gymgoer.get();
    setListGymGoer(response.data);
    setIsLoader(false);
  }

  const save = async (ev) => {
    ev.preventDefault();
    setIsLoader(true);

    const paramerts = {
      id_gym: gym.id,
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone.replace(/[^\w]/g, ''),
      gender: gender,
      cpf: cpf.replace(/[^\w]/g, ''),
      birthday: birthday,
      height: height,
      weight: weight,
      observation: observation,
      zip_code: zipCode.replace(/[^\w]/g, ''),
      street: street,
      district: district,
      number: number,
      city: city,
      state: state,
      complement: complement,
      id_plan: parseFloat(idPlan),
      billing_date: billingDate,
      payment_method: paymentMethod,
      amount_paid: amountPaid,
      amount_received: amountReceived,
    };

    const response = await gymgoer.create(paramerts);

    if (response) {
      toast.success('🏋🏻‍♀️ Aluno matriculado com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    }

    clear(ev);
    setIsLoader(false);
  }

  const clear = async (ev) => {
    ev.preventDefault();

    setFirstName('');
    setLastName('');
    setEmail('');
    setCpf('');
    setBirthday('');
    setPhone('');
    setGender('M');
    setHeight('');
    setWeight('');
    setObservation('');

    setZipCode('');
    setStreet('');
    setNumber('');
    setDistrict('');
    setCity('');
    setState('');
    setComplement('');

    setIdPlan('')
    setBillingDate(getCurrentDate())
    setPaymentMethod('')
    setAmountPaid(0);
    setAmountReceived(0);

    setIdBillingFees('');
    setPercentageRate(0);
    setMoneyRate(0);
  }

  const context = {
    // header
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
    // address
    zipCode, setZipCode,
    street, setStreet,
    number, setNumber,
    district, setDistrict,
    city, setCity,
    state, setState,
    complement, setComplement,
    // enroll
    idPlan, setIdPlan,
    billingDate, setBillingDate,
    paymentMethod, setPaymentMethod,
    amountPaid, setAmountPaid,
    amountReceived, setAmountReceived,
    // controlls payments
    idBillingFees, setIdBillingFees,
    percentageRate, setPercentageRate,
    moneyRate, setMoneyRate,
    // others
    listGymGoer, setListGymGoer,
    // methods
    clear, save, getGymGoers,
  };

  return (
    <GymGoerContext.Provider value={context}>
      {children}
    </GymGoerContext.Provider>
  )
}

export const useGymGoerContext = () => {
  return useContext(GymGoerContext);
}