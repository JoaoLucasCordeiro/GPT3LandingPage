import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri'
import logo from '../../assets/logo.svg'


const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <p> <a href='#home'>Início</a> </p>
          <p> <a href='#wgpt3'>O que é  o GPT3?</a> </p>
          <p> <a href='#possibility'>Open AI</a> </p>
          <p> <a href='#f&atures'>Cases de estudo</a> </p>
          <p> <a href='#blog'>Blog</a> </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar