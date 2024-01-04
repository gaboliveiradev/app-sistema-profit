import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';

const Routing = () => {
    return (
        <Routes>
            <Route element={<Login />} path="/login" exact />
        </Routes>
    )
}

export default Routing;