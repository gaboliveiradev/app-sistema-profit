import React, { createContext, useContext } from 'react';

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
    const LOGIN_FOOTER_TEXT = '© Gabriel Oliveira, 2024. 💜';
    const LOGIN_IMAGE_TEXT = 'O SISTEMA PROFIT é uma inovação projetada para aprimorar a gestão de academias, proporcionando uma experiência mais eficiente e satisfatória aos usuários.';

    const context = {
        LOGIN_FOOTER_TEXT,
        LOGIN_IMAGE_TEXT,
    };

    return (
        <ConfigContext.Provider value={context}>
            {children}
        </ConfigContext.Provider>
    )
}

export const useConfigContext = () => {
    return useContext(ConfigContext);
}