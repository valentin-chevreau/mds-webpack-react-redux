import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { connect } from 'react-redux'

class Reader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      delay: 300,
      result: 'No result',
      data: props.courses.data,
      presenceOk: false
    }
    this.handleScan = this.handleScan.bind(this)
  }

  handleScan(data) {
    if (data) {
      this.setState({
        result: data
      })
      this.compareDataToMock()
    }
  }

  handleError(err) {
    return err
  }

  formatDate() {
    const date = new Date()
    const day = `0${date.getDate()}`.slice(-2)
    const month = `0${date.getMonth() + 1}`.slice(-2)
    const year = date.getFullYear()
    const dateString = `${year}-${month}-${day}`

    return dateString
  }

  compareDataToMock() {
    const { courses } = this.props
    const { data } = courses
    const { result } = this.state
    let item = ''
    const now = this.formatDate()
    data.map((course) => {
      item = course.qrcodeData
      if (item === result) {
        if (course.date === now) {
          this.setState({ presenceOk: true })
        } else {
          this.setState({ presenceOk: false })
        }
      }
      return ''
    })
    return item
  }

  render() {
    const { delay } = this.state

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4" />
          <div className="col-lg-4">
            <QrReader
              delay={delay}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '105%' }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Reader)
