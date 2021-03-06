import React from 'react'

class Loader extends React.Component {
  render() {
    return (
      <tr>
        <td className='table-loader' colSpan={this.props.length} >
          <div className='spinner'>
            <div className='bounce1'></div>
            <div className='bounce2'></div>
            <div className='bounce3'></div>
          </div>
        </td>
      </tr>
    )
  }
}

export default Loader