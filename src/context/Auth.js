import React, { useEffect, useState, createContext, useContext } from "react";
import * as auth from './../services/auth';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [businessPartners, setBusinessPartners] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('adm-profit-token');
    const user = localStorage.getItem('adm-profit-user');
    const businessPartners = localStorage.getItem('adm-profit-business-partners');

    if (token && user && businessPartners) {
      setBusinessPartners(JSON.parse(businessPartners));
      setUser(JSON.parse(user));
      setToken(token);

      return
    }

    return navigate('/login')
  }, [])

  async function signIn(login, password) {
    const response = await auth.signIn(login, password)

    if (response.status !== 200) {
      return false
    }

    const { token, user, businessPartners } = response.data;
    const { id, first_name, last_name, email, phone, type, avatar_url, gender, cpf, rg, birthday, height, weight, observation } = user;

    setUser({
      id: id, 
      first_name: first_name, 
      last_name: last_name, 
      email: email, 
      phone: phone, 
      type: type, 
      avatar_url: avatar_url, 
      gender: gender, 
      cpf: cpf, 
      rg: rg, 
      birthday: birthday, 
      height: height, 
      weight: weight, 
      observation: observation, 
    })

    setBusinessPartners(businessPartners);
    setToken(token)

    localStorage.setItem('adm-profit-token', token)
    localStorage.setItem('adm-profit-user', JSON.stringify({
      id: id, 
      first_name: first_name, 
      last_name: last_name, 
      email: email, 
      phone: phone, 
      type: type, 
      avatar_url: avatar_url, 
      gender: gender, 
      cpf: cpf, 
      rg: rg, 
      birthday: birthday, 
      height: height, 
      weight: weight, 
      observation: observation, 
    }))
    localStorage.setItem('adm-profit-business-partners', JSON.stringify(businessPartners))

    return true
  }

  async function signOut() {
    const response = await auth.signOut();

    if (response.status !== 200) {
      return false
    }

    setUser(null);
    setToken(null);
    setBusinessPartners(null);

    localStorage.removeItem('adm-profit-token');
    localStorage.removeItem('adm-profit-user');
    localStorage.removeItem('adm-profit-business-partners');

    return true
  }

  const context = {
    user: user,
    businessPartners: businessPartners,
    token: token,
    signed: Boolean(user),
    signIn: signIn,
    signOut: signOut,
  };

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext);
}