import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class Reader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      delay: 300,
      result: 'No result'
    }
    this.handleScan = this.handleScan.bind(this)
  }

  handleScan(data) {
    if (data) {
      this.setState({
        result: data
      })
    }
  }

  handleError(err) {
    return err
  }

  render() {
    const { result } = this.state
    const { delay } = this.state

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h1>
              Lecture du QrCode
            </h1>
            <p>
              Pour lire votre QrCode, placez celui-ci dans la zone rouge affichée.
            </p>
            <QrReader
              delay={delay}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-lg-5">
            <h1>Résultats</h1>
            <p>
              Les informations de votre QrCode
              <br />
              {result}
            </p>
            <p>
              Delay
              <br />
              {delay}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Reader
