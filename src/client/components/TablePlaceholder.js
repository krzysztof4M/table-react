import React from 'react'

class TablePlaceholder extends React.Component {  
  render() {     
    return (
      <tr>
        <td colSpan={this.props.length}>No data to display</td>
      </tr>
    )
  }
}

TablePlaceholder.propTypes = {
  length: React.PropTypes.number.isRequired
}

export default TablePlaceholder