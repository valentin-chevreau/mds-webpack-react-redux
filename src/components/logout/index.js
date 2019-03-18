import React, { Component } from 'react'
import Redirect from 'react-router/es/Redirect'

/**
 * Redirect to Login Page after logout
 */
class Logout extends Component {
  signout() {
    localStorage.clear()
    return <Redirect to="/login" />
  }

  render() {
    return (
      this.signout()
    )
  }
}

export default Logout
