import React, { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [gym, setGym] = useState(null);

  useEffect(() => {
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
  }, [navigate])

  /*async function signIn(login, password) {
    const response = await auth.signIn(login, password)

    if (response.status !== 200) {
      return false
    }

    const { token, user, companie } = response.data;
    const { id, name, email, phone, birthday, cpf, rg, profile, id_companie, created_at, updated_at } = user;

    setUser({
      id: id,
      name: name,
      email: email,
      phone: phone,
      birthday: birthday,
      cpf: cpf,
      rg: rg,
      profile: profile,
      id_companie: id_companie,
      created_at: created_at,
      updated_at: updated_at,
    })

    setCompanie(companie);
    setToken(token)

    localStorage.setItem('sis360-token', token)
    localStorage.setItem('sis360-user', JSON.stringify({
      id: id,
      name: name,
      email: email,
      phone: phone,
      birthday: birthday,
      cpf: cpf,
      rg: rg,
      profile: profile,
      id_companie: id_companie,
      created_at: created_at,
      updated_at: updated_at,
    }))
    localStorage.setItem('sis360-companie', JSON.stringify(companie))

    return true
  }

  async function signOut() {
    const response = await auth.signOut();

    if (response.status !== 200) {
      return false
    }

    setUser(null);
    setToken(null);
    setCompanie(null);

    localStorage.removeItem('sis360-token');
    localStorage.removeItem('sis360-user');
    localStorage.removeItem('sis360-companie');

    return true
  }*/

  const context = {
    user: user,
    gym: gym,
    token: token,
    signed: Boolean(user),
    /*signIn: signIn,
    signOut: signOut,*/
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