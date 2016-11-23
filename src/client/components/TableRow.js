import React from 'react'

class TableRow extends React.Component {
  
  render() {
    const { data } = this.props     
    return (
      <tr>
        {
          Object.keys(data).map((el, i) => 
            <td key={i}>{data[el]}</td>
          )
        }
      </tr>
    )
  }
}

TableRow.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default TableRow