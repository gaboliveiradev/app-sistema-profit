import React from 'react';
import Insert from '../components/pages/insert/Plan';
import { useLocation } from 'react-router-dom';
import PlanDesktop from '../components/pages/list/PlanDesktop';
import { useNavigate } from 'react-router-dom';
import ButtonAdd from '../components/ButtonAdd';

export default function Plan() {
    const navigate = useNavigate();

    const URL_INSERT = '/plano';
    const URL_LIST = '/planos';

    const location = useLocation();
    const { pathname } = location;

    const handleAddPage = async () => {
        navigate(URL_INSERT);
    }

    return (
        <main className="mx-auto max-w-7xl px-2">
            {
                pathname === URL_LIST ? (
                    <div className='py-2 mx-auto'>
                        <PlanDesktop />
                    </div >
                ) : pathname === URL_INSERT && (
                    <div className='py-2 mx-auto'>
                        <Insert />
                    </div>
                )
            }
        </main >
    );
}