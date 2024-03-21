import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Insert from './../components/Pages/Insert/GymGoer';
import GymGoerDesktop from '../components/Pages/List/GymGoerDesktop';

export default function GymGoer() {
    const navigate = useNavigate();

    const URL_INSERT = '/aluno';
    const URL_LIST = '/alunos';

    const location = useLocation();
    const { pathname } = location;

    return (
        <main className="mx-auto max-w-7xl px-2">
            {
                pathname === URL_LIST ? (
                    <div className='py-2 mx-auto'>
                        <GymGoerDesktop />
                    </div >
                ) : pathname === URL_INSERT && (
                    <div className='py-2 mx-auto'>
                        <Insert />
                    </div>
                )
            }
        </main>
    )
}