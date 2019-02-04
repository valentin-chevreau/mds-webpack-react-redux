import React, { Component } from 'react'
import QRCode from 'qrcode-react'
import { connect } from 'react-redux'

class Courses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.courses.data
    }
    console.log(this.state)
  }

  dataToString() {
    // Props : state globale de l'app
    // this.state : state du component
    const { courses } = this.props
    const { data } = courses
    const tabQrCode = []
    let qrCode = ''
    data.map((lesson) => {
      // if(lesson.date === Date.now()) {

      // }
      qrCode = lesson.id + lesson.name + lesson.hash
      tabQrCode.push(qrCode)
      return ''
    // Ici, recup la date du jour
    // Comparer a la date de ta lesson
    // Si dateLesson =
    })
    return tabQrCode
  }

  render() {
    return (
      <div className="container">
        <QRCode value={this.dataToString()[0]} />
      </div>
    )
  }
}

export default connect(state => state)(Courses)
