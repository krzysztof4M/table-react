import React from 'react'

import PaginationLink from './PaginationLink'

class TablePagination extends React.Component {
  constructor(props) {
    super(props); 
    this.handlePagination = this.handlePagination.bind(this);
  }

  handlePagination(page) {
    this.props.handlePagination(page);    
  }

  renderPreviousButtons(start, pageNumber) {
    const liClassName = pageNumber == 1 && 'disabled';
    const icon = start ? 'fa fa-angle-double-left' : 'fa fa-angle-left';
    return (
        <li className={`paginate-button ${liClassName}`}>
          <a href='#' onClick={this.onClick} value={(start || pageNumber == 1) ? 1 : pageNumber - 1}><i className={icon}></i></a>
        </li>   
      );
  }

  renderNextButtons(end, pageNumber, pagesCount) {
    const liClassName = pageNumber == pagesCount && 'disabled';
    const icon = end ? 'fa fa-angle-double-right' : 'fa fa-angle-right';
    const value = end || pagesCount == pageNumber ? pagesCount : pageNumber + 1
    return (
        <li className={`paginate-button ${liClassName}`}>
          <a href='#' onClick={this.onClick} value={end || pagesCount == pageNumber ? pagesCount : pageNumber + 1}><i className={icon}></i></a>
        </li>   
      );
  }

  render() {
    const pagesCount = Math.ceil(this.props.all_records/this.props.limit); 
    const page = this.props.page;  
    const pagesList = [
        page-2,
        page-1,
        page,
        page+1,
        page+2
        ].filter(value => (value > pagesCount || value < 1) ? false : true );

    return (
      <div className=''>
        <ul className='pagination-list'>
          <PaginationLink 
            handlePagination={this.handlePagination} 
            pageNumber={1} 
            isDisabled={page == 1}
            isActive={false}
            icon={'fa fa-angle-double-left'}
          />
          <PaginationLink 
            handlePagination={this.handlePagination} 
            pageNumber={Math.max(1, page - 1)} 
            isDisabled={page == 1}
            isActive={false}
            icon={'fa fa-angle-left'}
          />
          { 
            pagesList.map(pageNumber => 
              <PaginationLink 
                handlePagination={this.handlePagination} 
                pageNumber={pageNumber} 
                key={pageNumber}
                isDisabled={false}
                isActive={pageNumber == page}
              />
              )
          }
          <PaginationLink 
            handlePagination={this.handlePagination} 
            pageNumber={Math.min(pagesCount, page + 1)} 
            isDisabled={pagesCount == 1}
            isActive={false}
            icon={'fa fa-angle-right'}
          />
          <PaginationLink 
            handlePagination={this.handlePagination} 
            pageNumber={pagesCount} 
            isDisabled={pagesCount == 1}
            isActive={false}
            icon={'fa fa-angle-double-right'}
          />
        </ul>
      </div>
    )
  }
}

TablePagination.propTypes = {
  handlePagination: React.PropTypes.func.isRequired
}

export default TablePagination