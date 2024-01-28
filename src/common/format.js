export const formatCurrencyBRL = (valor) => {
    // Formata o valor para o formato de moeda brasileira
    const formatoMoeda = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return formatoMoeda.format(valor);
};