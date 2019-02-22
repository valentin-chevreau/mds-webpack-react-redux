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
    /*
    *
    //Props : state globale de l'app
    this.state : state du component
    */
    const { courses } = this.props
    const { data } = courses
    let qrCode = ''
    const now = this.formatDate()
    data.map((lesson) => {
      if (lesson.date === now) {
        qrCode = (lesson.id)
          + lesson.name
          + lesson.teacher_name
          + lesson.classroom
          + lesson.public
          + lesson.hash
          + lesson.date
      }
      return ''
    })
    return qrCode
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <section className="col-lg-5">
            <h1>Informations</h1>

            <p>Le QrCode permet de contrôler que vous êtes bien venus en cours.</p>

            <p>Le QrCode sera affiché par votre intervenant au début de votre heure en cours.</p>

          </section>
          <section className="col-lg-5">
            <h1>Validité du QrCode</h1>
            {this.dataToString() ? (
              <QRCode
                value={this.dataToString()}
                size={200}
                includeMargin={false}
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="J"
                renderAs="canvas"
              />
            ) : (
              <div className="alert alert-warning" role="alert">
                Pas de QrCode disponible actuellement !
              </div>
            )}
          </section>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Courses)
