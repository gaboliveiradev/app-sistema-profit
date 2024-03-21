import React from 'react';
import PlanDesktop from '../components/Pages/List/PlanDesktop';
import { usePlanContext } from '../context/Plan';
import PlanModal from '../components/Modals/Insert/PlanModal';

export default function Plan() {

    const { isModalVisible } = usePlanContext();

    return (
        <>
            { isModalVisible && <PlanModal /> }
            <main className="mx-auto max-w-7xl px-2">
                <div className='py-2 mx-auto'>
                    <PlanDesktop />
                </div >
            </main >
        </>
    );
}