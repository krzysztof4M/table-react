import React from 'react'

class PaginationLink extends React.Component {
	constructor(props) {
    super(props); 
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault()
    this.props.handlePagination(this.props.pageNumber)
  }

  displayContent() {
    const { icon, pageNumber } = this.props
    let content = icon ? <i className={icon}></i> : pageNumber
    return content 
  }

  render() {
    const { isActive, isDisabled } = this.props
    
    const activeClass = isActive ? 'active' : ''
    const disabledClass = isDisabled ? 'disabled' : ''

    return (     
        <li className={`paginate-button ${activeClass} ${disabledClass}`}>
          <a href='#' onClick={!isDisabled ? this.onClick : null}>
            { this.displayContent() }
          </a>
        </li>
      );
  }
}

PaginationLink.propTypes = {
  isActive: React.PropTypes.bool.isRequired,
  isDisabled: React.PropTypes.bool.isRequired,
  pageNumber: React.PropTypes.number.isRequired,
  handlePagination: React.PropTypes.func,
  icon: React.PropTypes.string
}

export default PaginationLink