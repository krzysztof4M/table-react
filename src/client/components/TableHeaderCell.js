import React from 'react'

class TableHeaderCell extends React.Component {
  constructor(props) {
    super(props); 
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.handleSort(this.props.value);
  }

  render() {
    return <th><a href="#" onClick={this.onClick}>{this.props.title}</a></th>
  }
}


export default TableHeaderCell