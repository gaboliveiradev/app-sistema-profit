import api from './api';

export const getIncomeMonthly = async () => {
    try {
        const response = await api.get('/income/monthly');

        return (response.status === 200) ? response : false;
    } catch {
        return false;
    }
}