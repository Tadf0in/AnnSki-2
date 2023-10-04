import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-md bg-body-tertiary' id='navbar'>
        <div className="container-fluid barre">
            <Link to="/" className="navbar-brand">
                <img src={logo} className='d-inline-block' alt="Logo" width="50" height="50"/>
                &nbsp; Ann'ski
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2">
                    <li className="nav-item">
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <a href="#events" className='nav-link'>Sorties</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop" className='nav-link'>Boutique</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
