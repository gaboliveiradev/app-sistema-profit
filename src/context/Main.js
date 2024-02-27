import React, { useContext, useState, createContext } from 'react';

import { FaGem } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { HiOutlineAdjustments } from "react-icons/hi";
import { PiFilesFill } from "react-icons/pi";
import { RiUser2Fill } from "react-icons/ri";
import { AiFillShop } from "react-icons/ai";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [isLoader, setIsLoader] = useState(false);

  const [menu, setMenu] = useState([
    {  
      name: 'Dashboard',
      icon: MdSpaceDashboard,
      path: '/' 
    },
    {  
      name: 'Alunos',
      icon: FaUserFriends,
      path: '/alunos' 
    },
    {  
      name: 'Planos Academia',
      icon: FaGem,
      path: '/planos' 
    },
    {  
      name: 'Fichas de Treino',
      icon: PiFilesFill,
      path: '/planos' 
    },
    {  
      name: 'Funcionários',
      icon: RiUser2Fill,
      path: '/planos' 
    },
    {  
      name: 'Vitrine Virtual',
      icon: AiFillShop,
      path: '/planos' 
    },
    {
      name: 'Configurações',
      icon: HiOutlineAdjustments,
      children: [
        { name: 'Taxas de Cobrança', path: '/taxas-cobranca' },
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