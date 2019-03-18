import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './components/login'
import Header from './components/header'
import Footer from './components/footer'
import Courses from './components/qrCode'
import Reader from './components/qrCodeReader'
import Logout from './components/logout'

class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Login} exact />
              <Route path="/qrcode" component={Courses} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/reader" component={Reader} exact />
              <Route path="/logout" component={Logout} exact />
              <Login />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default Routes
