import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-md bg-body-tertiary' id='navbar'>
        <div className="container-fluid barre d-flex align-items-center">
            <NavLink to="" className="navbar-brand d-flex align-items-center">
                <img src={logo} className='d-inline-block' alt="Logo" width="50" height="50"/>
                &nbsp; Ann'ski
            </NavLink>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2">
                    <li className="nav-item">
                        <NavLink to="" className='nav-link'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="sorties" className='nav-link'>Sorties</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="shop" className='nav-link'>Goodies</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
