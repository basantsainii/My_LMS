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
  const Active = "bg-blue-700 text-white rounded-lg p-5"
  const Pending = "p-5 hover:bg-blue-500 hover:text-white rounded-lg font-medium hover:shadow-2xl my-1"

  return (
    <>
      <div className='h-[98%]  relative left-2 top-2  p-2 bg-white shadow-sm flex flex-col justify-start align-middle '>
        <NavLink to="/" className={({ isActive, isPending }) => isPending ? " " : isActive ? `${Active}` : `${Pending}`}>
          <div>
            Module
          </div>
        </NavLink>
        <NavLink to="/Card" className={({ isActive, isPending }) => isPending ? " " : isActive ? `${Active}` : `${Pending}`}>
          <div  >
            Batch
          </div>
        </NavLink>
        <NavLink to="/Test_Module" className={({ isActive, isPending }) => isPending ? " " : isActive ? `${Active}` : `${Pending}`}>
          <div >
            Test Module
          </div>
        </NavLink>
        <NavLink to="/Resources" className={({ isActive, isPending }) => isPending ? " " : isActive ? `${Active}` : `${Pending}`}>
          <div>
            Resources
          </div>
        </NavLink>
      </div>
    </>
  )
}

export default Lsider
