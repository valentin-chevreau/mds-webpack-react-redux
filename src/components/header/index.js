import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Projet React-Redux</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link className="nav-link" to="/reader">Lire</Link>
            <Link className="nav-link" to="/qrcode">QrCode</Link>
            <Link className="nav-link" to="/login">Sign-up</Link>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
