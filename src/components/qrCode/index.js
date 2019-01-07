import React, { Component } from 'react'
import QRCode from 'qrcode-react'

class Code extends Component {
  render() {
    return (
      <div className="container">
        <h1>QRCode de validation de cours</h1>
        <div className="row">
          <div className="col-sm" />
          <div className="col-sm">
            <QRCode value="ValentinC" />
          </div>
          <div className="col-sm" />
        </div>
      </div>
    )
  }
}

export default Code
