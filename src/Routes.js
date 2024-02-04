import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';
import ProtectedRoutes from './ProtectedRoutes';
import NotFound from './pages/NotFound';
import GymGoer from './pages/GymGoer';
import Plan from './pages/Plan';

const Routing = () => {
    return (
        <Routes>
            <Route element={<Login />} path="/login" exact />
            <Route element={<NotFound />} path="*" exact />

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
            <Route path="/aluno" exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<GymGoer />} />
                </ProtectedRoutes>
            } />

            {/* Planos */}
            <Route path="/planos" exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<Plan />} />
                </ProtectedRoutes>
            } />
            <Route path="/plano" exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<Plan />} />
                </ProtectedRoutes>
            } />
        </Routes>
    )
}

export default Routing;