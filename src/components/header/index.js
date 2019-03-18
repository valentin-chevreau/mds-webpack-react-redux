import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="#">School absences</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {
              localStorage.getItem('user') === null ? (
                <Link className="nav-item nav-link" to="/login">Sign in</Link>
              ) : (
                <div style={{ display: 'flex' }}>
                  <Link className="nav-item nav-link" to="/reader">Lire</Link>
                  <Link className="nav-item nav-link" to="/qrcode">QrCode</Link>
                  <Link className="nav-item nav-link" to="/logout">Logout</Link>
                </div>
              )
            }
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
