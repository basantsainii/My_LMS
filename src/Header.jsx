import React, { useContext, useState } from 'react';
import './All_css/index.css';
import logo from './assets/logo.jpg';
import Modal from './Modal_portal_prompt/Modal';
import { HumBurgerContext } from './Context_API/responsiveContext';

function Header() {
  const [toggle, setToggle] = useState(false);
  const { isOpen, setIsOpen } = useContext(HumBurgerContext);

  const Toggle_BG = () => setToggle(!toggle);

  return (
    <header className="w-full bg-white shadow-xl shadow-blue-800">
      <div className="flex items-center justify-between px-4 md:px-6 gap-4">
        {/* Hamburger Menu (Mobile Only) */}
        <div className="md:hidden flex items-center w-6 overflow-hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-blue-700 font-bold text-3xl">
            {isOpen ? (
              '✕'
            ) : (
              <ul className="flex flex-col gap-[3px]">
                <li className="border-2 w-6 border-blue-800 rounded"></li>
                <li className="border-2 w-6 border-blue-800 rounded"></li>
                <li className="border-2 w-6 border-blue-800 rounded"></li>
              </ul>
            )}
          </button>
        </div>





        {/* Logo */}
        <div className="flex-shrink-0 w-28">
          <img src={logo} alt="Logo" className="w-full object-contain" />
        </div>

        {/* Right Side Icons */}
        <ul className="hidden md:flex gap-6 items-center ml-auto">
          <li className="hover:cursor-pointer text-lg">
            <i className="fa-regular fa-bell"></i>
          </li>
          <li className="hover:cursor-pointer text-lg">
            <i className="fa-solid fa-user"></i>
          </li>
          <li
            onClick={Toggle_BG}
            className="hover:cursor-pointer text-sm md:text-base"
          >
            Hi, Basant <i className="fa-solid fa-angle-down ml-1"></i>
            {toggle && <Modal ttogle={Toggle_BG} />}
          </li>
        </ul>

        {/* Right Side Icons (Mobile Dropdown) */}
        <ul className="md:hidden flex gap-4 items-center">
          <li className="hover:cursor-pointer text-lg">
            <i className="fa-regular fa-bell"></i>
          </li>
          <li className="hover:cursor-pointer text-lg" onClick={Toggle_BG}>
            <i className="fa-solid fa-user"></i>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
