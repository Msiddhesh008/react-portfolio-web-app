import React, { Component } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import sm from "../images/sm.svg"

class Navbar extends Component {
  render() {
    return (    
    <nav className="navbar fixed-top container-fluid">
    <div className="container">
    <Link  className="navbar-brand text-white fs-1" to="/">
    <img src={sm} alt="" width={60} className='logo'/>
    </Link>
    <button className="navbar-toggler fw-bolder border-none border-radius-0 hamburger bg-white text-black" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      Menu
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
    <img className="offcanvas-title" id="offcanvasNavbarLabel" src={sm} alt="" width={60} />
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link  className="nav-link active" aria-current="page" to="#">Home</Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
    </nav>
    )
  }
}

export default Navbar
