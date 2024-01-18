import React from 'react'
import { Button } from 'react-bootstrap'
import { FaBell, FaBlog } from 'react-icons/fa'
import { FaArrowsRotate } from "react-icons/fa6";
import {  IoSettings } from "react-icons/io5";

const Header = () => {
  return (
    <header id='header' className='d-flex shadow justify-content-between py-3 px-4  bg-white'>
        <div className='d-flex gap-3 align-items-center'>
            <FaBlog color='blue' size={30}/>
            <Button variant='primary'>+ New</Button>
        </div>
        <div className='w-50 '>
            <input type="text" className='w-100 py-2 px-3 rounded'  placeholder='Search group and join...' />
        </div>
        <div className='d-flex gap-4 align-items-center '>
            <FaArrowsRotate size={25} />
            <FaBell size={25}/>
                <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <IoSettings size={25}/>
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="login">Log out</a></li>
                </ul>
        </div>
      </header>
  )
}

export default Header
