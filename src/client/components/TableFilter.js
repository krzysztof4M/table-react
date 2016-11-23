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
      <div className='filter-box'>
          <input type='search' className='' placeholder='Search...' value={this.state.filter}
            onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
      </div>
    )
  }
}

export default TableFilter