import api from "./api";
const url = '/plans'

export const create = async (paramerts) => {
    await api.post(url, {
        description: paramerts.description,
        days: paramerts.days,
        price: paramerts.price,
    }).then((data) => {
        console.log(data);
        return true;
    }).catch((err) => {
        console.log(err);
        return false;
    })
}