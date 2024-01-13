import React, { useState } from 'react';
import './style.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Loader from '../components/modals/Loader';

export default function DashboardLayout(props) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
            <div className="dark:bg-boxdark-2 dark:text-bodydark">
                {/* <!-- ===== Page Wrapper Start ===== --> */}
                <div className="flex h-screen">
                    {/* <!-- ===== Sidebar Start ===== --> */}
                    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    {/* <!-- ===== Sidebar End ===== --> */}

                    {/* <!-- ===== Content Area Start ===== --> */}
                    <div className="relative flex flex-1 flex-col h-[100%] overflow-hidden">
                        {/* <!-- ===== Header Start ===== --> */}
                        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                        {/* <!-- ===== Header End ===== --> */}

                        {/* <!-- ===== Main Content Start ===== --> */}
                        {/* Retirar h-[100%] overflow-auto para voltar ao normal (porém layout buga, tem que arrumar) */}
                        <main className='h-full h-[100%] overflow-auto'>
                            <div className="scrollbarConfig overflow-auto w-screen-2xl h-full p-4 md:p-6 2xl:p-4 bg-white dark:bg-boxdark duration-300 ease-linear rounded-xl shadow-xl">
                                {props.page}
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