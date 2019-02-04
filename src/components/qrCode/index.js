import React, { Component } from 'react'
import QRCode from 'qrcode-react'
import { connect } from 'react-redux'

class Courses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.courses.data
    }
  }

  formatDate() {
    const date = new Date()
    const day = `0${date.getDate()}`.slice(-2)
    const month = `0${date.getMonth() + 1}`.slice(-2)
    const year = date.getFullYear()
    const dateString = `${year}-${month}-${day}`

    return dateString
  }

  dataToString() {
    // Props : state globale de l'app
    // this.state : state du component
    const { courses } = this.props
    const { data } = courses
    let qrCode = ''
    const now = this.formatDate()
    data.map((lesson) => {
      if (lesson.date === now) {
        qrCode = lesson.id + lesson.name + lesson.hash
        return ''
      }
      return ''
    })
    return qrCode
  }

  render() {
    return (
      <div className="container">
        <QRCode value={this.dataToString()} />
      </div>
    )
  }
}

export default connect(state => state)(Courses)
