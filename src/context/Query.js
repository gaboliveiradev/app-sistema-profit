import React, { createContext, useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAuthContext } from './Auth';
import { useMainContext } from './Main';

import api from './../services/api';

export const QueryContext = createContext();

export const QueryProvider = ({ children }) => {
    const [searchParams] = useSearchParams();

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

    const _GETBYID = async (urlApi, id) => {
        try {
            setIsLoader(true);
            const response = await api.get(`${urlApi}/${businessPartners.id}/${id}`);

            return (response.status === 200) ? response.data : [];
        } catch {
            return;
        } finally {
            setIsLoader(false);
        }
    }

    const _ISUPDATE = async (urlApi) => {
        const idEdit = searchParams.get('id');
        
        if (idEdit != null) {
            const response = _GETBYID(urlApi, idEdit);
            
            return response;
        }

        return null;
    }

    const context = {
        records, setRecords,
        // methods
        _GET, _GETBYID, _ISUPDATE,
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