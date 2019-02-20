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
        <section className="col-lg-4">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <fieldset>
                <legend>
                  Connexion à un compte utilisateur
                </legend>
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
              </fieldset>
            </div>
          </form>
        </section>
        <aside className="col-lg-4">
          <p>
            This is the actual username:
            {` ${username} `}
          </p>
          <p>
            This is the actual passwd:
            {` ${password} `}
          </p>
        </aside>
      </div>
    )
  }
}

export default connect(state => state)(Login)
