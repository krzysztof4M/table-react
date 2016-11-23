import React from 'react'

class PaginationLink extends React.Component {
  render() {
    const className = this.props.isActive ? "paginate_button active" : "paginate_button";
    return (     
        <li className={className}>
          <a onClick={this.props.onClick} href="#" value={ this.props.pageNumber }>{ this.props.pageNumber }</a>
        </li>
      );
  }
}

export default PaginationLink