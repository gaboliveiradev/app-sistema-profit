import React, { useContext, useState, createContext } from 'react';

import gymGoerIcon from './../assets/icon/homem-check.svg';
import planIcon from './../assets/icon/tag-dinheiro.svg';
import employeeIcon from './../assets/icon/homem-3.svg';
import configIcon from './../assets/icon/chave-boca-mao.svg';
import exerciseIcon from './../assets/icon/levantamento-peso-3.svg';
import docIcon from './../assets/icon/documento.svg';
import treinIcon from './../assets/icon/biceps.svg';
import vendaIcon from './../assets/icon/carrinho-compras.svg';
import estoqueIcon from './../assets/icon/carrinho-caixas.svg';
import productIcon from './../assets/icon/caixa-produto.svg';
import moedaIcon from './../assets/icon/dinheiro-moedas.svg';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [isLoader, setIsLoader] = useState(false);

  const [menu, setMenu] = useState([
    {  
      name: 'Dashboard',
      icon: <img width="28" height="28" src="https://img.icons8.com/external-flaticons-flat-flat-icons/42/external-dashboard-100-most-used-icons-flaticons-flat-flat-icons-2.png" alt="external-dashboard-100-most-used-icons-flaticons-flat-flat-icons-2"/>,
      path: '/' 
    },
    {  
      name: 'Alunos',
      icon: <img width="28" height="28" src={gymGoerIcon} alt="A"/>,
      path: '/alunos' 
    },
    {  
      name: 'Planos',
      icon: <img width="28" height="28" src={planIcon} alt="P"/>,
      path: '/planos' 
    },
    {
      name: 'Treinos',
      icon: <img width="28" height="28" src={treinIcon} alt="P"/>,
      children: [
        { name: 'Fichas', path: '/taxas-cobranca', icon: <img width="28" height="28" src={docIcon} alt="F"/>},
        { name: 'Treinos Predefinidos', path: '/taxas-cobranca', icon: <img width="28" height="28" src={treinIcon} alt="F"/> },
        { name: 'Exercícios', path: '/taxas-cobranca', icon: <img width="28" height="28" src={exerciseIcon} alt="F"/> },
      ],
    },
    {  
      name: 'Funcionários',
      icon: <img width="28" height="28" src={employeeIcon} alt="F"/>,
      path: '/planos' 
    },
    {
      name: 'Vendas',
      icon: <img width="28" height="28" src={vendaIcon} alt="P"/>,
      children: [
        { name: 'Vendas', path: '/taxas-cobranca', icon: <img width="28" height="28" src={vendaIcon} alt="F"/>},
        { name: 'Estoque', path: '/taxas-cobranca', icon: <img width="28" height="28" src={estoqueIcon} alt="F"/> },
        { name: 'Produtos', path: '/taxas-cobranca', icon: <img width="28" height="28" src={productIcon} alt="F"/> },
      ],
    },
    {
      name: 'Configurações',
      icon: <img width="28" height="28" src={configIcon} alt="F"/>,
      children: [
        { name: 'Taxas de Cobrança', path: '/taxas-cobranca', icon: <img width="28" height="28" src={moedaIcon} alt="F"/> },
      ],
    },
  ]);

  const context = {
    isLoader, setIsLoader,
    menu, setMenu,
  };

  return (
    <MainContext.Provider value={context}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  return useContext(MainContext);
};