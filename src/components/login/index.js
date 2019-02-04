import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    const { update } = this.props
    const { username } = this.state
    const { password } = this.state
    update(username)
    update(password)
  }

  render() {
    const { username } = this.state
    const { password } = this.state

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <fieldset>
              <legend>Connection to user account</legend>
              <div className="col">
                Username
                <input type="text" className="form-control" name="username" value={username} onChange={this.handleUsernameChange} />
              </div>
              <div className="col">
                Password
                <input type="password" className="form-control" name="password" autoComplete="" value={password} onChange={this.handlePasswordChange} />
                <br />
              </div>
              <input type="submit" value="Submit" className="btn btn-primary mb-2" />
              <br />
              {` ${username} `}
              {` ${password} `}
            </fieldset>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
