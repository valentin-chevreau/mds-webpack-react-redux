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
    let item = ''
    const now = this.formatDate()
    data.map((course) => {
      if (course.date === now) {
        item = course.id
          + course.name
          + course.teacher_name
          + course.classroom
          + course.public
          + course.date
      }
      return ''
    })
    return item
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
              <br />
              <span>
                Mock:
                { this.compareDataToMock() }
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Reader)
