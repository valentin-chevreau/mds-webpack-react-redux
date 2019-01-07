import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './components/login'
import Header from './components/header'
import Footer from './components/footer'
import Code from './components/qrCode'

class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Login} exact />
              <Route path="/qrcode" component={Code} exact />
              <Route path="/login" component={Login} exact />
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
