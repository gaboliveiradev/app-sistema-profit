import React, { useContext, useState, createContext } from 'react';
import {
  Squares2X2Icon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {

  const [isListTechnicalPartner, setIsListTechnicalPartner] = useState(false);

  const [navigation, setNavigation] = useState([
    {
      name: 'Dashboard',
      icon: Squares2X2Icon,
      href: '/'
    },
    /*{
      name: 'Cadastros',
      icon: BookOpenIcon,
      children: [
        { name: 'Lojas Afiliadas', href: '/affiliate-store' },
        { name: 'Categorias', href: '/categories' },
        { name: 'Sub Categorias', href: '/sub-categories' },
        { name: 'Produtos', href: '/products' },
        { name: 'Ofertas', href: '/offers' },
        { name: 'Avaliações', href: '/rates' },
      ],
    },*/
    {
      name: 'Parceiro Técnico',
      icon: BuildingOffice2Icon,
      href: '/technical-partner'
    },
    /*{
      name: 'Vendas',
      icon: ShoppingCartIcon,
      href: '/sales'
    },
    {
      name: 'Logout',
      icon: ClipboardDocumentCheckIcon,
      href: '/login'
    },*/
  ]);

  const context = {
    navigation, setNavigation,
    isListTechnicalPartner, setIsListTechnicalPartner,
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