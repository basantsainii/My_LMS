import React, { useState } from 'react'
import './All_css/index.css'
import logo from './assets/logo.jpg'
import Modal from './Modal_portal_prompt/Modal';

function Header() {
  const [toggle, setToggle] = useState(false);
  function Toggle_BG() {

    setToggle(!toggle)
  }
  return (
    <>
      <ul className='w-screen  px-10 flex justify-around align-middle gap-5 bg-white shadow-xl shadow-blue-800	'>
        <li className=' mr-auto w-28'><img src={logo} alt="logo" /></li>
        <li className='p-3 hover:cursor-pointer'><i className="fa-regular fa-bell"></i></li>
        <li className='p-3 hover:cursor-pointer'><i className="fa-solid fa-user"></i></li>
        <li className='p-3 hover:cursor-pointer' onClick={Toggle_BG}>Hi, Basant <i className="fa-solid fa-angle-down"></i> {toggle && <Modal ttogle={Toggle_BG} />}</li>
      </ul>
    </>
  )
}

export default Header
