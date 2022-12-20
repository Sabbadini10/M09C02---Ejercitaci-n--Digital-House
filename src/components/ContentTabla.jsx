import React from 'react'

function ContentTabla(props) {
  return (
        <tr>
            <th scope="row">{props.title}</th>
            <td>{props.length}</td>
            <td>{props.rating}</td>
            <td>{props.genre}</td>
            <td>{props.awards}</td>
        </tr>
    )
}

export default ContentTabla;