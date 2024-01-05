import React, { useState, useEffect, createContext, useContext } from "react";
import * as auth from './../services/auth';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [gym, setGym] = useState(null);

  /*useEffect(() => {
    const token = localStorage.getItem('profit-token');
    const user = localStorage.getItem('profit-user');
    const gym = localStorage.getItem('profit-gym');

    if (token && user && gym) {
      setGym(JSON.parse(gym));
      setUser(JSON.parse(user));
      setToken(token);

      return
    }

    return navigate('/login')
  }, [])*/

  async function signIn(login, password) {
    const response = await auth.signIn(login, password)

    if (response.status !== 200) {
      return false
    }

    const { token, user, gym } = response.data;
    const { id, first_name, last_name, email, phone, id_gym, profile, avatar_url, gender, cpf, rg, birthday, height, weight, observation, zip_code, street, district, number, city, state, complement, created_at, updated_at } = user;

    setUser({
      id: id, 
      first_name: first_name, 
      last_name: last_name, 
      email: email, 
      phone: phone, 
      id_gym: id_gym, 
      profile: profile, 
      avatar_url: avatar_url, 
      gender: gender, 
      cpf: cpf, 
      rg: rg, 
      birthday: birthday, 
      height: height, 
      weight: weight, 
      observation: observation, 
      zip_code: zip_code, 
      street: street, 
      district: district, 
      number: number, 
      city: city, 
      state: state, 
      complement: complement, 
      created_at: created_at, 
      updated_at: updated_at,
    })

    setGym(gym);
    setToken(token)

    localStorage.setItem('profit-token', token)
    localStorage.setItem('profit-user', JSON.stringify({
      id: id, 
      first_name: first_name, 
      last_name: last_name, 
      email: email, 
      phone: phone, 
      id_gym: id_gym, 
      profile: profile, 
      avatar_url: avatar_url, 
      gender: gender, 
      cpf: cpf, 
      rg: rg, 
      birthday: birthday, 
      height: height, 
      weight: weight, 
      observation: observation, 
      zip_code: zip_code, 
      street: street, 
      district: district, 
      number: number, 
      city: city, 
      state: state, 
      complement: complement, 
      created_at: created_at, 
      updated_at: updated_at,
    }))
    localStorage.setItem('profit-gym', JSON.stringify(gym))

    return true
  }

  async function signOut() {
    const response = await auth.signOut();

    if (response.status !== 200) {
      return false
    }

    setUser(null);
    setToken(null);
    setGym(null);

    localStorage.removeItem('profit-token');
    localStorage.removeItem('profit-user');
    localStorage.removeItem('profit-gym');

    return true
  }

  const context = {
    user: user,
    gym: gym,
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