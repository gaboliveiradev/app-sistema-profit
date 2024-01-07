import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';
import ProtectedRoutes from './ProtectedRoutes';
import NotFound from './pages/NotFound';
import GymGoer from './pages/GymGoer';

const Routing = () => {
    return (
        <Routes>
            <Route element={ <Login /> } path="/login" exact />
            <Route element={ <NotFound /> } path="*" exact />

            {/* Dashboard */}
            <Route path="/" exact element={
                <ProtectedRoutes>
                    <DashboardLayout />
                </ProtectedRoutes>
            } />

            {/* Alunos */}
            <Route path="/alunos" exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<GymGoer />} />
                </ProtectedRoutes>
            } />
        </Routes>
    )
}

export default Routing;