import React from 'react'

class TableLength extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleChangeLimit(parseInt(event.target.value,0));
  }

  render() {
    return (
      <div className='length-box'>
          <select className='' onChange={this.handleChange}>
            <option value='3'>3</option>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='25'>25</option>
          </select>
      </div>
    )
  }
}

TableLength.propTypes = {
  handleChangeLimit: React.PropTypes.func.isRequired
}

export default TableLength