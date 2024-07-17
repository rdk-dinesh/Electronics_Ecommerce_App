import React, { useState } from 'react'
import "./Navbar.css"
import { NavLink, Outlet } from 'react-router-dom'
import { routes } from './NavLinkDetails';

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div className='navbar_container'>
          <div className='navbar_elements'>
            {
              routes.map(route =>
                <NavLink to={route.path} className='btn' key={route.id} end>{route.pageName}</NavLink>
              )
            }
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar
