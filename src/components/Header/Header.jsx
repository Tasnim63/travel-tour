import React, { useState } from "react";
import navlogo from "../../assets/travel-logo.png";
import {TbGridDots} from 'react-icons/tb'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import './header.scss'
export default function Header() {
  const [active ,setActive]=useState('navBar');
  // functions for navbar 
const showNav =()=>{
  setActive('navBar activeNavbar')
}
const removeNav =()=>{
  setActive('navBar ')
}
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <img src={navlogo} alt="" />
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex
          ">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiOutlineCloseSquare className="icon"></AiOutlineCloseSquare>
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"></TbGridDots>
        </div>
      </header>
    </section>
  );
}
