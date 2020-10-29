import React from 'react'
import { Link } from 'react-router-dom';
import './css/Navigation.css'

function Navigation() {
  return (
    <div className="nav__container">
      <div className="nav__inner">
        <Link className="nav__logo" to="/">logo</Link>
        <Link to="">New</Link>
        <Link to="">Best</Link>
        <Link to="">Choice</Link>
        <Link to="/about">About</Link>
        <Link to="">Support</Link>
      </div>
    </div>
  )
}

export default Navigation
