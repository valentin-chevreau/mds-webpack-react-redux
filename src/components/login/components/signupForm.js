import React from 'react'

const SignForm = ({ data }) => (
  <ul className="list-group">
    { data.map(item => (
      <li
        key={item.id}
      >
        ID:
        {` ${item.id}`}
        <br />
        Username:
        {` ${item.name}`}
        <br />
        Password:
        {` ${item.password}`}
        <br />
        <br />
      </li>
    ))
    }
  </ul>
)

export default SignForm
