// Import needed modules
import React, { Component } from 'react'
import Redirect from 'react-router/es/Redirect'
import { connect } from 'react-redux'
import user from '../../mock/user.json'
import { getUser } from './actions'

// Component to Login
class Login extends Component {
  constructor(props) {
    super(props)

    // Initialise states
    this.state = {
      password: '',
      redirect: false
    }

    this.textInput = React.createRef()
    this.textPassword = React.createRef()
    this.handleClick = this.handleClick.bind(this)
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

  /**
   * handle click
   * @param {Object} e
   */
  handleClick(e) {
    e.preventDefault()

    const { dispatch } = this.props
    const username = this.textInput.current.value
    const password = this.textPassword.current.value

    console.log(username)
    console.log(password)

    this.checkingExistingUser(username, password)

    dispatch(getUser(username))
  }

  // To redirect after actions
  redirect() {
    this.setState({ redirect: true })
  }

  // To know if the user who wants to connect exists
  checkingExistingUser(username, password) {
    let userValidated = ''
    const { data } = this.state

    data.map((existingUsers) => {
      if (existingUsers.name === username && existingUsers.pass === password) {
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
    const { username, redirect } = this.state

    if (redirect) {
      if (localStorage.getItem('status') === '0') {
        return <Redirect to="/reader" />
      }
      return <Redirect to="/qrcode" />
    }

    // What to return in this page
    return (
      <div className="container">
        <h1>{username || ''}</h1>
        <div className="row">
          <div className="col-lg-4" />
          <div className="col-lg-4">
            <br />
            <form>
              <fieldset>
                <legend>Login</legend>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Username"
                    autoComplete="username"
                    ref={this.textInput}
                  />
                </div>
                <br />
                <div>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    ref={this.textPassword}
                  />
                  <br />
                </div>
                <input type="submit" value="Envoyer" className="btn btn-info col-lg-12" onClick={this.handleClick} />
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

export default connect(state => ({
  username: state.login.username
}))(Login)
