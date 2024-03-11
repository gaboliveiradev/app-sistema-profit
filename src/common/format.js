export const formatCurrencyBRL = (valor) => {
    // Formata o valor para o formato de moeda brasileira
    const formatoMoeda = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return formatoMoeda.format(valor);
};


export const cpf = (cpf) => {
    if (!cpf) return 'N/A';
    cpf = cpf.replace(/\D/g, '');
    
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export const phone = (telefone) => {
    if (!telefone) return 'N/A';
    telefone = telefone.replace(/\D/g, '');

    return telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
};