// Import needed modules
import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

// Component to read the QrCode
class Reader extends Component {
  constructor(props) {
    super(props)

    // Initialise states
    this.state = {
      delay: 300,
      result: '',
      data: props.courses.data,
      presence: false
    }
    this.handleScan = this.handleScan.bind(this)
  }

  // To scan
  handleScan(data) {
    if (data) {
      this.setState({
        result: data
      })
      this.compareDataToMock()
    }
  }

  // If there is a error
  handleError(err) {
    return err
  }

  // To format the date
  formatDate() {
    const date = new Date()
    const day = `0${date.getDate()}`.slice(-2)
    const month = `0${date.getMonth() + 1}`.slice(-2)
    const year = date.getFullYear()
    const dateString = `${year}-${month}-${day}`

    return dateString
  }

  // To compare the Data received by the QrCode and the mock
  compareDataToMock() {
    // Declare const & let to update state and props
    const { courses } = this.props
    const { data } = courses
    const { result } = this.state
    let item = ''
    const now = this.formatDate()

    // For each value of Data,
    data.map((course) => {
      item = course.qrcodeData
      if (item === result) {
        if (course.date === now) {
          this.setState({ presence: true })
        } else {
          this.setState({ presence: false })
        }
      }
      return <Redirect to="/logout" />
    })
    return item
  }

  render() {
    // Declare const & let to update state and props
    const { delay, result, presence } = this.state
    if (presence) {
      return <Redirect to="/logout" />
    }

    // What to return in this page
    return (
      <div className="container">
        { localStorage.getItem('user') === null ? (
          <Redirect to="/login" refresh="true" />
        ) : (
          <div className="row">
            <div className="col-lg-4" />
            <div className="col-lg-4">
              <QrReader
                delay={delay}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: '105%' }}
              />
              {result}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default connect(state => state)(Reader)
