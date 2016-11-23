import React from 'react'

class TablePlaceholder extends React.Component {  
  render() {     
    return (
      <tr>
        <td colSpan={this.props.header.length}>No data to display</td>
      </tr>
    )
  }
}

export default TablePlaceholder