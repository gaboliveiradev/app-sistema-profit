import React, { createContext, useContext, useState } from 'react';

import { useAuthContext } from './Auth';
import { useMainContext } from './Main';

import api from './../services/api';

export const QueryContext = createContext();

export const QueryProvider = ({ children }) => {

    const { setIsLoader } = useMainContext();
    const { businessPartners } = useAuthContext();

    const [records, setRecords] = useState([]);

    const _GET = async (urlApi) => {
        try {
            setIsLoader(true);
            const response = await api.get(`${urlApi}/${businessPartners.id}`);

            if (response.status === 200) {
                setRecords(response.data.obj);

                return;
            }

            setRecords([]);
        } catch {
            return;
        } finally {
            setIsLoader(false);
        }
    }

    const _GETBYID = async (urlApi, id, arrSetState) => {
        try {
            setIsLoader(true);
            const response = await api.get(`${urlApi}/${businessPartners.id}/${id}`);

            if (response.status === 200) {
                console.log(response.data)

                return;
            }
        } catch {
            return;
        } finally {
            setIsLoader(false);
        }
    }

    const context = {
        records, setRecords,
        // methods
        _GET, _GETBYID,
    };

    return (
        <QueryContext.Provider value={context}>
            {children}
        </QueryContext.Provider>
    )
};

export const useQueryContext = () => {
    return useContext(QueryContext);
}