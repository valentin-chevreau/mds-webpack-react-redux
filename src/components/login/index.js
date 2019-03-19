import React, { Component } from 'react'

import Redirect from 'react-router/es/Redirect'
import user from '../../mock/user.json'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      redirect: false
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({ data: this.formatUsers(user.users) })
  }

  formatUsers(events) {
    return events.map(event => ({
      id: event.id,
      name: event.name,
      pass: event.password,
      status: event.status
    }))
  }

  update() {
    this.state.data = this.formatUsers(user.users)
    this.setState({
      data: this.formatUsers(user.users)
    })
  }

  handleUsernameChange(event) {
    event.preventDefault()
    this.setState({ username: event.target.value })
  }

  handlePasswordChange(event) {
    event.preventDefault()
    this.setState({ password: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.updateBind = this.update.bind(this)
    const { username } = this.state
    const { password } = this.state
    this.updateBind(username)
    this.updateBind(password)
    this.checkingExistingUser()
  }

  redirect() {
    this.setState({ redirect: true })
  }

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
    const { username, password, redirect } = this.state
    if (redirect) {
      return <Redirect to="/qrcode" />
    }
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

export default Login
