import React, { useState, createContext, useContext } from "react";

export const GymGoerContext = createContext();

export const GymGoerProvider = ({ children }) => {

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

    const [zipCode, setZipCode] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [complement, setComplement] = useState('');

    const [idPlan, setIdPlan] = useState('');
    const [billingDate, setBillingDate] = useState('');
    const [paymentDate, setPaymentDate] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [amountPaid, setAmountPaid] = useState('');
    const [amountReceived, setAmountReceived] = useState('');

    const [idBillingFees, setIdBillingFees] = useState('');
    const [percentageRate, setPercentageRate] = useState('0');

    const clear = async (ev) => {
        ev.preventDefault();

        setFirstName('');
        setLastName('');
        setEmail('');
        setCpf('');
        setBirthday('');
        setPhone('');
        setGender('');
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
        setBillingDate('')
        setPaymentDate('')
        setPaymentMethod('')
        setAmountPaid('');
        setAmountReceived('');

        setIdBillingFees('');
        setPercentageRate('0');
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
        paymentDate, setPaymentDate,
        paymentMethod, setPaymentMethod,
        amountPaid, setAmountPaid,
        amountReceived, setAmountReceived,
        // controlls payments
        idBillingFees, setIdBillingFees,
        percentageRate, setPercentageRate,
        // methods
        clear,
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