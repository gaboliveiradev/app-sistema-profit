import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';

const Routing = () => {
    return (
        <Routes>
            <Route element={<Login />} path="/login" exact />
            <Route element={<DashboardLayout />} path="/" exact />
        </Routes>
    )
}

export default Routing;