import React from 'react'

class TableHeader extends React.Component {
  render() {
    const { headers, handleSort } = this.props
    return (
      <tr>
        {
          Object.keys(headers).map((el,i) => 
            <th key={i}><a href='#' value={el} onClick={handleSort}>{headers[el]}</a></th>
          )
        }
      </tr>
    )
  }
}

TableHeader.propTypes = {
  headers: React.PropTypes.array.isRequired,
  handleSort: React.PropTypes.func.isRequired
}

export default TableHeader