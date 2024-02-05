import React, { useState, createContext, useContext } from "react";

export const GymGoerContext = createContext();

export const GymGoerProvider = ({ children }) => {

    const [stepper, setStepper] = useState(1);

    const context = {
        stepper, setStepper,
    };

    return (
        <GymGoerContext.Provider value={context}>
            {children}
        </GymGoerContext.Provider>
    )
}

export const useGymGoerContext = () => {
    return useContext(GymGoerContext);
}