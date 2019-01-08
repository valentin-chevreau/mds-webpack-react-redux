import React from 'react'
import { Link } from 'react-router-dom'

const Courses = ({ data }) => (
  <ul className="list-group">
    { data.map(item => (
      <li
        key={item.id}
        className="list-group-item"
      >
        <Link className="nav-link posts font-weight-bold" to={`/details/${item.id}`}>{`${item.name}`}</Link>
        <p className="nav-link posts">{`${item.id}`}</p>
      </li>
    ))}
  </ul>
)

export default Courses
