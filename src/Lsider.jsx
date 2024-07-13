import React, { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


function Lsider() {
  // var clrbg = useRef();
  // const clickbg = () => {
  //   return (clrbg.current.style.backgroundColor = "blue")
  // }

  // const [bgclr, setBgclr] = useState(0);

  // const Activate_Bgclr = (x) => {
  //   setBgclr(x)
  // }

  return (
    <>
      <div className='h-[98%]  relative left-2 top-2  p-2 bg-white shadow-sm flex flex-col justify-start align-middle '>
        <NavLink to="/" className={({ isActive, isPending }) => isPending ? " " : isActive ? "bg-blue-800 text-white rounded-lg p-5" : "p-5 hover:bg-blue-800 hover:text-white rounded-lg font-medium hover:shadow-2xl"}>
          <div>
            Module
          </div>
        </NavLink>
        <NavLink to="/Card" className={({ isActive, isPending }) => isPending ? " " : isActive ? "bg-blue-800 text-white rounded-lg p-5" : " p-5 hover:bg-blue-800 hover:text-white rounded-lg font-medium hover:shadow-2xl"}>
          <div  >
            Batch
          </div>
        </NavLink>
        <NavLink to="/Test_Module" className={({ isActive, isPending }) => isPending ? " " : isActive ? "bg-blue-800 text-white rounded-lg p-5" : "p-5 hover:bg-blue-800 hover:text-white rounded-lg font-medium hover:shadow-2xl"}>
          <div >
            Test Module
          </div>
        </NavLink>
        <NavLink to="/Resources" className={({ isActive, isPending }) => isPending ? " " : isActive ? "bg-blue-800 text-white rounded-lg p-5" : "p-5 hover:bg-blue-800 hover:text-white rounded-lg font-medium hover:shadow-2xl"}>
          <div>
            Resources
          </div>
        </NavLink>
      </div>
    </>
  )
}

export default Lsider
