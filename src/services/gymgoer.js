import api from './api';
const url = '/user/gym-goer';

export const create = async (paramerts) => {
    try {
        const respose = await api.post(url, {
            id_gym: paramerts.id_gym,
            first_name: paramerts.first_name,
            last_name: paramerts.last_name,
            email: paramerts.email,
            phone: paramerts.phone,
            gender: paramerts.gender,
            cpf: paramerts.cpf,
            birthday: paramerts.birthday,
            height: paramerts.height,
            weight: paramerts.weight,
            observation: paramerts.observation,
            zip_code: paramerts.zip_code,
            street: paramerts.street,
            district: paramerts.district,
            number: paramerts.number,
            city: paramerts.city,
            state: paramerts.state,
            complement: paramerts.complement,
            id_plan: paramerts.id_plan,
            billing_date: paramerts.billing_date,
            payment_date: paramerts.payment_date,
            payment_method: paramerts.payment_method,
            amount_paid: paramerts.amount_paid,
            amount_received: paramerts.amount_received,
        });

        return (respose.status === 201) ? true : false;
    } catch {
        return false;
    }
}