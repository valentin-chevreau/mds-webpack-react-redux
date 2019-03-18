import React, { Component } from 'react'
import QRCode from 'qrcode-react'
import { connect } from 'react-redux'

/**
 * Class courses to display QrCode
 */
class Courses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.courses.data
    }
  }

  /**
   * formatDate()
   * @returns {string}
   */
  formatDate() {
    const date = new Date()
    const day = `0${date.getDate()}`.slice(-2)
    const month = `0${date.getMonth() + 1}`.slice(-2)
    const year = date.getFullYear()
    const dateString = `${year}-${month}-${day}`

    return dateString
  }

  /**
   *
   * @returns {string}
   */
  dataToString() {
    /*
    //Props : state globale de l'app
    this.state : state du component
    */
    const { courses } = this.props
    const { data } = courses
    let qrCode = ''
    const now = this.formatDate()
    data.map((lesson) => {
      if (lesson.date === now) {
        qrCode = lesson.id
          + lesson.name
          + lesson.teacher_name
          + lesson.classroom
          + lesson.public
          + lesson.date
        // console.log(localStorage)
      }
      return ''
    })
    return qrCode
  }

  /**
   *
   * @returns {*}
   */
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4" />
          <div className="col-lg-4">
            {this.dataToString() ? (
              <QRCode
                value={this.dataToString()}
                size={340}
                includeMargin={false}
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="J"
                renderAs="canvas"
              />
            ) : (
              <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Aucun cours prévu ce jour.</strong>
              </div>

            )}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Courses)
