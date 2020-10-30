import React from 'react'
import { Link } from 'react-router-dom';
import './css/Navigation.css'

function Navigation() {

  const onClickHandler = () => {
    const navMenu = document.querySelector('.navigation__menu');
    const navCheck = document.querySelector('.navigation__check');
    navMenu.classList.toggle('active');
    navCheck.classList.toggle('active');
  }

  return (
    <>
      <nav className="navigation__navbar">
        <div className="navigation__inner">
          <div className="navigation__logo">
            <Link className="nav__logo" to="/">
              <i className="fas fa-carrot fa-2x"></i>
            </Link>
          </div>

          <ul className="navigation__menu">
            <li><Link to="#">New</Link></li>
            <li><Link to="#">Best</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="#">Support</Link></li>
          </ul>

          <div className="navigation__check">
            <Link to="#">Login</Link>
            <Link to="#">Logout</Link>
          </div>

          <a href="#" className="navigation__togglebtn" onClick={onClickHandler}>
            <i className="fas fa-bars"></i>
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navigation




