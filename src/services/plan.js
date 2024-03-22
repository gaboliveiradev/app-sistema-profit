import api from './api';
const url = '/plans';

export const getModalities = async () => {
    try {
        const response = await api.get('/modalities');

        return (response.status === 200) ? response : [];
    } catch {
        return false;
    }
}

export const getServices = async () => {
    try {
        const response = await api.get('/services');

        return (response.status === 200) ? response : [];
    } catch {
        return false;
    }
}

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
            description: paramerts.description,
            days: paramerts.days,
            price: paramerts.price,
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