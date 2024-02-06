import api from './api';
const url = '/card-fees';

export const get = async () => {
    try {
        const response = await api.get(url);

        return (response.status === 200) ? response : false;
    } catch {
        return false;
    }
}

export const create = async (paramerts) => {
    try {
        const respose = await api.post(url, {
            id_gym: paramerts.id_gym,
            card_machine: paramerts.cardMachine,
            flag: paramerts.flag,
            type: paramerts.type,
            percentage: paramerts.percentage,
        });

        return (respose.status === 201) ? true : false;
    } catch {
        return false;
    }
}

export const destroy = async (id) => {
    try {
        const response = await api.delete(`${url}/${id}`);

        return (response.status === 200) ? true : false;
    } catch {
        return false;
    }
}