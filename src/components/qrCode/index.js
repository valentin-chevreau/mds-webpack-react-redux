import React, { Component } from 'react'
import { connect } from 'react-redux'
import QRCode from 'qrcode-react'

import { getLastEvents } from './actions'

class Code extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(getLastEvents())
  }

  render() {
    const { courses } = this.props

    console.log(courses)

    return (
      <div className="container">
        <QRCode value="data" />
      </div>
    )
  }
}

export default connect(state => state)(Code)
