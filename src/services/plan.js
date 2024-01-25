import api from "./api";
const url = '/plans'

export const create = async (paramerts) => {
    try {
        const respose = await api.post(url, {
            description: paramerts.description,
            days: paramerts.days,
            price: paramerts.price,
        });

        return (respose.status === 201) ? true : false;
    } catch {
        return false;
    }
}