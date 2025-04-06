import React, { useContext, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HumBurgerContext } from './Context_API/ResponsiveContext.jsx'

function Lsider() {
  const {isOpen, setIsOpen} = useContext(HumBurgerContext);

  const Active = "bg-blue-700 text-white rounded-lg p-5"
  const Pending = "p-5 hover:bg-blue-500 hover:text-white rounded-lg font-medium hover:shadow-2xl my-1"

  return (
    <>
      <div onClick={(e)=>e.stopPropagation()} className={`h-full w-40 relative left-2 top-2  p-2 bg-white shadow-sm flex flex-col justify-start align-middle `}>
        <NavLink onClick={()=>setIsOpen(false)} to="/" className={({ isActive, isPending }) => isPending ? " " : isActive ? `${Active}` : `${Pending}`}>
          <div>
            Module
          </div>
        </NavLink>
        <NavLink onClick={()=>setIsOpen(false)} to="/Card" className={({ isActive, isPending }) => isPending ? " " : isActive ? `${Active}` : `${Pending}`}>
          <div  >
            Batch
          </div>
        </NavLink>
        <NavLink onClick={()=>setIsOpen(false)} to="/Test_Module" className={({ isActive, isPending }) => isPending ? " " : isActive ? `${Active}` : `${Pending}`}>
          <div >
            Test Module
          </div>
        </NavLink>
        <NavLink onClick={()=>setIsOpen(false)} to="/Resources" className={({ isActive, isPending }) => isPending ? " " : isActive ? `${Active}` : `${Pending}`}>
          <div>
            Resources
          </div>
        </NavLink>
      </div>
    </>
  )
}

export default Lsider
