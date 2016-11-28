import React from 'react'

import TableHeaderCell from './TableHeaderCell'

class TableHeader extends React.Component {
  render() {
    const { headers, handleSort } = this.props
    return (
      <tr>
        {
          Object.keys(headers).map((el,i) => 
            <TableHeaderRow key={i} handleSort={handleSort} value={el} title={headers[el]} />
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