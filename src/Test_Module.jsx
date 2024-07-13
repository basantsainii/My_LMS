import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
function T_Module() {


  return (
    <>
      <div>
        <NavLink to = '/Test_Module' className={({ isActive, isPending }) => isActive ? "border border-blue-700 p-1 px-2 mr-2 rounded rounded-md bg-blue-800 text-white" : isPending ? "border border-blue-700 p-1 px-2 mr-2 rounded rounded-md text-blue-800 hover:bg-blue-800 hover:text-white " : "border border-blue-700 p-1 px-2 mr-2 rounded rounded-md text-blue-800 hover:bg-blue-800 hover:text-white"}>All Tests</NavLink>
        <NavLink to = 'Create_test' className={({ isActive, isPending }) => isActive ? "border border-blue-700 p-1 px-2 mr-2 rounded rounded-md bg-blue-800 text-white" : isPending ? "border border-blue-700 p-1 px-2 mr-2 rounded rounded-md text-blue-800 hover:bg-blue-800 hover:text-white " : "border border-blue-700 p-1 px-2 mr-2 rounded rounded-md text-blue-800 hover:bg-blue-800 hover:text-white"}>Create Test</NavLink>
        <NavLink to = 'Test_Results'className={({ isActive, isPending }) => isActive ? "border border-blue-700 p-1 px-2 mr-2 rounded rounded-md bg-blue-800 text-white" : isPending ? "border border-blue-700 p-1 px-2 mr-2 rounded rounded-md text-blue-800 hover:bg-blue-800 hover:text-white " : "border border-blue-700 p-1 px-2 mr-2 rounded rounded-md text-blue-800 hover:bg-blue-800 hover:text-white"}>Test Results</NavLink>
        <Outlet/>
      </div>
    </>
  )
}

export default T_Module
