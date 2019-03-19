// Import needed modules
import React, { Component } from 'react'
import Redirect from 'react-router/es/Redirect'
import { connect } from 'react-redux'
import user from '../../mock/user.json'

// Component to Login
class Login extends Component {
  constructor(props) {
    super(props)

    // Initialise states
    this.state = {
      username: '',
      password: '',
      redirect: false
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // To get users Data
  componentDidMount() {
    this.setState({ data: this.formatUsers(user.users) })
  }

  // To format user data
  formatUsers(events) {
    return events.map(event => ({
      id: event.id,
      name: event.name,
      pass: event.password,
      status: event.status
    }))
  }

  // Update user state
  update() {
    this.state.data = this.formatUsers(user.users)
    this.setState({
      data: this.formatUsers(user.users)
    })
  }

  // To handle data username in form
  handleUsernameChange(event) {
    event.preventDefault()
    this.setState({ username: event.target.value })
  }

  // To handle data username in form
  handlePasswordChange(event) {
    event.preventDefault()
    this.setState({ password: event.target.value })
  }

  // Actions to do where form is submitted
  handleSubmit(event) {
    event.preventDefault()
    this.updateBind = this.update.bind(this)
    const { username } = this.state
    const { password } = this.state
    this.updateBind(username)
    this.updateBind(password)
    this.checkingExistingUser()
  }

  // To redirect after actions
  redirect() {
    this.setState({ redirect: true })
  }

  // To know if the user who wants to connect exists
  checkingExistingUser() {
    let userValidated = ''
    const { data } = this.state
    let { username } = this.state
    let { password } = this.state

    data.map((existingUsers) => {
      if (existingUsers.name === username && existingUsers.pass === password) {
        username = this.state
        password = existingUsers.pass
        userValidated = existingUsers.id + existingUsers.name
        localStorage.setItem('user', JSON.stringify(existingUsers.name))
        localStorage.setItem('status', JSON.stringify(existingUsers.status))
        this.redirect()
      }
      return ''
    })
    return userValidated
  }

  render() {
    // Declare const & let to update state and props
    const { username, password, redirect } = this.state

    if (redirect) {
      if (localStorage.getItem('status') === '0') {
        return <Redirect to="/reader" />
      }
      return <Redirect to="/qrcode" />
    }

    // What to return in this page
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4" />
          <div className="col-lg-4">
            <br />
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <legend>Login</legend>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    placeholder="Username"
                    onChange={this.handleUsernameChange}
                    autoComplete="username"
                  />
                </div>
                <br />
                <div>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={this.handlePasswordChange}
                    autoComplete="current-password"
                  />
                  <br />
                </div>
                <input type="submit" value="Envoyer" className="btn btn-info col-lg-12" onClick={this.handleSubmit} />
                <br />
              </fieldset>
            </form>
            <br />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Login)
