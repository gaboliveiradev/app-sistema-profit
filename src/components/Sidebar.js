import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from './../assets/logo_dark.png';
import SidebarLinkGroup from './SmallComponents/SidebarLinkGroup';
import { useMainContext } from '../context/Main';
import { IoIosArrowDown } from "react-icons/io";
import deletarIcon from './../assets/icon/deletar.svg';

export default function Sidebar(props) {

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const { menu } = useMainContext();

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !props.sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      props.setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!props.sidebarOpen || keyCode !== 27) return;
      props.setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (

    <aside
      ref={sidebar}
      className={`scrollbarConfig absolute left-0 top-0 z-1 flex h-screen w-72.5 flex-col overflow-y-auto bg-sidebar duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${props.sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="margin-auto bg-sidebar dark:bg-boxdark duration-300 ease-linear flex items-center justify-center gap-2 px-6 py-5.5 ">
        <button
          ref={trigger}
          onClick={() => props.setSidebarOpen(!props.sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={props.sidebarOpen}
          className="block"
        >
          <NavLink to="/">
            <img src={Logo} alt="Logo" className='w-40' />
          </NavLink>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="h-screen flex flex-col max-h-[calc(100vh-65px)] duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="bg-sidebar dark:bg-boxdark duration-300 ease-linear h-full py-4 px-4 flex flex-col justify-start items-start">
          <div className='w-full'>
            {
              menu.map((item, index) => {
                return (
                  <SidebarLinkGroup>
                    {(handleClick, open) => {
                      return (
                        <React.Fragment>
                          <NavLink key={index} to={(item.children) ? '#' : item.path} onClick={() => (item.children) ? (sidebarExpanded ? handleClick() : setSidebarExpanded(true)) : ''} className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-[15px] text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}>
                            {item.icon}
                            {item.name}
                            {
                              (item.children) && (
                                <IoIosArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'}`} width="20" height="20" />
                              )
                            }
                          </NavLink>

                          {
                            (item.children) && (
                              <div className={`translate transform overflow-hidden ${!open && 'hidden'}`}>
                                <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                  {
                                    item.children.map((children, indexChildren) => {
                                      return (
                                        <li key={indexChildren}>
                                          <NavLink to={children.path} className={({ isActive }) => 'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' + (isActive && '!text-white')}>
                                            {children.icon}
                                            {children.name}
                                          </NavLink>
                                        </li>
                                      )
                                    })
                                  }
                                </ul>
                              </div>
                            )
                          }
                        </React.Fragment>
                      );
                    }}
                  </SidebarLinkGroup>
                )
              })
            }

            <SidebarLinkGroup>
              {(handleClick, open) => {
                return (
                  <NavLink to="#" className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}>
                    <img width="28" height="28" src={deletarIcon} alt="A"/>
                    Sair
                  </NavLink>
                );
              }}
            </SidebarLinkGroup>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};