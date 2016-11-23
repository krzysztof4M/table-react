import React from 'react'

class TableRow extends React.Component {
  
  render() {
    const {id, name, type, status, year, added_person, added_time, actions_url, journal} = this.props.data     
    return (
      <tr>
        <td>{id}</td>
        <td>{name} <p>{journal}</p></td> 
        <td>{type}</td>
        <td>{year}</td>
        <td>{added_person}</td>
        <td style={{"minWidth": "70px"}}>{added_time}</td>
        <td>{status}</td>
        <td>
          <ul className="demo-btns">
            <li>
              <a href={actions_url.details} className="btn btn-default btn-sm"><i className="fa fa-search fa-lg"></i></a>
            </li>
            <li>
              <a href={actions_url.edition} className="btn btn-default btn-sm"><i className="fa fa-pencil fa-lg"></i></a>
            </li>
            <li>
              <a href={actions_url.delete} className="btn btn-default btn-sm"><i className="fa fa-trash-o fa-lg"></i></a>
            </li>
            <li>
              <a href={actions_url.version} className="btn btn-default btn-sm"><i className="fa fa-files-o fa-lg"></i></a>
            </li>   
          </ul>
        </td>
      </tr>
    )
  }
}

export default TableRow