import React, { useContext, useState, createContext } from 'react';

import { FaGem } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { HiOutlineAdjustments } from "react-icons/hi";
import { IoExit } from "react-icons/io5";

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