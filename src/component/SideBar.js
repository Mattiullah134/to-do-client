import React from 'react'
import { Link } from 'react-router-dom'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GradeIcon from '@mui/icons-material/Grade';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PersonIcon from '@mui/icons-material/Person';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Button } from '@mui/material';
const SideBar = () => {
    return (
        <div className='' >

            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full  px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">
                        <li>

                            <form>
                                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </div>
                                    <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm  rounded-lg text-white  outline-none bg-gray-700 " placeholder="Search..." required />

                                </div>
                            </form>

                        </li>
                        <li>
                            <Link to={"/"} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <OtherHousesOutlinedIcon />
                                <span class=" ml-3 whitespace-nowrap">Tasks</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/myday'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <WbSunnyIcon />
                                <span class="ml-3">My Day</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/important"} class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <GradeIcon />
                                <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Important</span>

                            </Link>

                        </li>
                        <li>
                            <Link to={"/planed"} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <AssignmentIcon />
                                <span class="ml-3 whitespace-nowrap">Planed</span>

                            </Link>
                        </li>
                        <li>
                            <Link to={"/alltask"} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <AllInclusiveIcon />
                                <span class="ml-3 whitespace-nowrap">All</span>

                            </Link>
                        </li>
                        <li>
                            <Link to={"/completed"} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <TaskAltIcon />
                                <span class=" ml-3 whitespace-nowrap">Completed</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/assigntome"} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <PersonIcon />
                                <span class=" ml-3 whitespace-nowrap">Assigned To me</span>
                            </Link>
                        </li>

                        <li>
                            <Button class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <LogoutOutlinedIcon />
                                <span class="ml-3 whitespace-nowrap">Logout</span>
                            </Button>
                        </li>
                    </ul>
                </div>
            </aside>



        </div>
    )
}

export default SideBar
