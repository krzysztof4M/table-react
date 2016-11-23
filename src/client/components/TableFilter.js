import React from 'react'

class TableFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: this.props.filter};

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({filter: event.target.value});  
  }

  handleKeyPress(event) {
    if(event.key == 'Enter'){
      this.props.handleSearch(this.state.filter);
    }
  }

  render() {

    return (
      <div id="dt_basic_filter" className="dataTables_filter">
        <label>
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-search"></i>
          </span>
          <input type="search" className="form-control" placeholder="" value={this.state.filter}
            onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
          
        </label>
      </div>
    )
  }
}

export default TableFilter