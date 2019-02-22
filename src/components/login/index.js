import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: props.user.data.name,
      password: props.user.data.password
    }
    console.log('initial-state', this.state)

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
    const { usernameUpdate } = update(username)
    const { passwordUpdate } = update(password)
    return (usernameUpdate, passwordUpdate)
  }

  dataToString() {
    // Props : state globale de l'app
    // this.state : state du component
    const { user } = this.props
    const { data } = user
    console.log('D', data)
    let connectedUser = ''
    data.map((request) => {
      if (data.name === this.handleSubmit) {
        connectedUser = request.id + request.name
        return ''
      }
      return ''
    })
    console.log('connectedUser', connectedUser)
  }

  render() {
    const { username } = this.state
    const { password } = this.state

    console.log('userInRender', username)
    console.log('passwordInRender', password)

    return (
      <div className="container">
        <div className="row">
          <form className="form-row" onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Connection to user account</legend>
              <div className="form-group col-lg-8">
                Username
                <input type="text" className="form-control" name="username" value={username} onChange={this.handleUsernameChange} />
              </div>
              <div className="form-group col-lg-8">
                Password
                <input type="password" className="form-control" name="password" autoComplete="" value={password} onChange={this.handlePasswordChange} />
                <br />
              </div>
              <div className="form-group col-lg-8">
                <input type="submit" value="Submit" className="btn btn-primary mb-2" />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Login)
