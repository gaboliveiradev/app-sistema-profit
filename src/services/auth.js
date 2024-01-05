import api from "./api";

export const signIn = async (login, password) => {
    const response = await api.post('/login', {
        email: login,
        password: password,
        remember: false,
    }).catch((err) => {
        console.log(err);
        return false;   
    })

    return response;
}

export const signOut = async () => {
    const response = await api.post('/logout', {
    }).catch((err) => {
        console.log(err);
        return false;   
    })

    return response;
}