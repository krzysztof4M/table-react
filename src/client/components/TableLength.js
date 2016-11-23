import React from 'react'

class TableLength extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.limit};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.handleChangeLimit(event.target.value);
  }

  render() {
    return (
      <div className="dataTables_length">
        <label>
          <select name="dt_basic_length" className="form-control" onChange={this.handleChange}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </label>
      </div>
    )
  }
}

export default TableLength