import React, { Component } from 'react'
import Redirect from 'react-router/es/Redirect'

// Component to Logout
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
