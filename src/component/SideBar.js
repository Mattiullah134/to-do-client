import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GradeIcon from '@mui/icons-material/Grade';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PersonIcon from '@mui/icons-material/Person';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const SideBar = () => {
    const active = 'bg-gray-500';
    const location = useLocation();
    return (
        <div className='' >

            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full  px-3 py-4 overflow-y-auto bg-gray-50 bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>

                            <form>
                                <label for="default-search" className="mb-2 text-sm font-medium  sr-only text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5  text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm  rounded-lg text-white  outline-none bg-gray-700 " placeholder="Search..." required />

                                </div>
                            </form>

                        </li>
                        <li>
                            <Link to={"/"} className={`flex items-center  p-2 ${location.pathname === "/" ? active : ""} rounded-lg text-white hover:bg-gray-600 `}>
                                <OtherHousesOutlinedIcon />
                                <span className=" ml-3 whitespace-nowrap">Tasks</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/myday'} className={`flex items-center p-2 ${location.pathname === "/myday" ? active : ""} rounded-lg text-white hover:bg-gray-700 `}>
                                <WbSunnyIcon />
                                <span className="ml-3">My Day</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/important"} className={`flex items-center ${location.pathname === "/important" ? active : ""} w-full p-2  transition duration-75 rounded-lg group hover:bg-gray-700 text-white `} aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <GradeIcon />
                                <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Important</span>

                            </Link>

                        </li>
                        <li>
                            <Link to={"/planed"} className={`flex items-center ${location.pathname === "/planed" ? active : ""} p-2  rounded-lg text-white hover:bg-gray-700 `}>
                                <AssignmentIcon />
                                <span className="ml-3 whitespace-nowrap">Planed</span>

                            </Link>
                        </li>
                        <li>
                            <Link to={"/alltask"} className={`flex items-center ${location.pathname === "/alltask" ? active : ""} p-2  rounded-lg text-white hover:bg-gray-700 `}>
                                <AllInclusiveIcon />
                                <span className="ml-3 whitespace-nowrap">All</span>

                            </Link>
                        </li>
                        <li>
                            <Link to={"/completed"} className={`flex items-center ${location.pathname === "/completed" ? active : ""} p-2  rounded-lg text-white hover:bg-gray-700 `}>
                                <TaskAltIcon />
                                <span className=" ml-3 whitespace-nowrap">Completed</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/assigntome"} className={`flex items-center ${location.pathname === "/assigntome" ? active : ""} p-2  rounded-lg text-white hover:bg-gray-700 `}>
                                <PersonIcon />
                                <span className=" ml-3 whitespace-nowrap">Assigned To me</span>
                            </Link>
                        </li>

                        <li>
                            <div className={"flex items-center p-2  rounded-lg text-white hover:bg-gray-700 "}>
                                <LogoutOutlinedIcon />
                                <span className="ml-3 whitespace-nowrap">Logout</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>



        </div>
    )
}

export default SideBar
