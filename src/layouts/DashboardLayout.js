import React, { useState } from 'react';
import './style.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Loader from '../components/modals/Loader';
import { useMainContext } from '../context/Main';

import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

export default function DashboardLayout(props) {
    const { isLoader } = useMainContext();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <ReactNotifications />

            {/* <!-- ===== Page Wrapper Start ===== --> */}
            <div className="flex h-screen">
                {/* <!-- ===== Sidebar Start ===== --> */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {/* <!-- ===== Sidebar End ===== --> */}

                {/* <!-- ===== Content Area Start ===== --> */}
                <div className="relative flex flex-1 flex-col h-[100%] overflow-hidden">
                    {/* <!-- ===== Main Content Start ===== --> */}
                    {/* Retirar h-[100%] overflow-auto para voltar ao normal (porém layout buga, tem que arrumar) */}
                    <main className='h-full h-[100%] overflow-auto'>
                        <div className=" bg-white rounded-md shadow-md scrollbarConfig overflow-auto w-screen-2xl h-full p-0 md:p-0 2xl:p-0 bg-bottom dark:bg-boxdark duration-300 ease-linear dark:rounded-md dark:shadow:md">
                            {props.page}
                            {
                                isLoader && (
                                    <Loader />
                                )
                            }
                        </div>
                    </main>
                    {/* <!-- ===== Main Content End ===== --> */}
                </div>
                {/* <!-- ===== Content Area End ===== --> */}
            </div>
            {/* <!-- ===== Page Wrapper End ===== --> */}
        </div>
    );
}