import React from 'react'

import PaginationLink from './PaginationLink'

class TablePagination extends React.Component {
  constructor(props) {
    super(props); 
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    const newPage = event.target.getAttribute('value');
    this.props.handlePagination(event.target.getAttribute('value'));    
  }

  renderPreviousButtons(start, pageNumber) {
    const liClassName = pageNumber == 1 ? 'paginate_button previous disabled' : 'paginate_button previous';
    const faClassName = start ? 'fa fa-angle-double-left' : 'fa fa-angle-left';
    return (
        <li className={liClassName} id='dt_basic_previous'>
          <a href='#' onClick={this.onClick} value={(start || pageNumber == 1) ? 1 : pageNumber - 1}><i className={faClassName}></i></a>
        </li>   
      );
  }

  renderNextButtons(end, pageNumber, pagesCount) {
    const liClassName = pageNumber == pagesCount ? 'paginate_button next disabled' : 'paginate_button next';
    const faClassName = end ? 'fa fa-angle-double-right' : 'fa fa-angle-right';
    return (
        <li className={liClassName} id='dt_basic_previous'>
          <a href='#' onClick={this.onClick} value={end || pagesCount == pageNumber ? pagesCount : pageNumber + 1}><i className={faClassName}></i></a>
        </li>   
      );
  }

  render() {
    const pagesCount = Math.ceil(this.props.all_records/this.props.limit); 
    const page = parseInt(this.props.page);  
    const pagesList = [
        page-2,
        page-1,
        page,
        page+1,
        page+2
        ].filter(value => (value > pagesCount || value < 1) ? false : true );

    return (
      <div className='dataTables_paginate paging_simple_numbers' id='dt_basic_paginate'>
        <ul className='pagination pagination-sm'>
          { this.renderPreviousButtons(true, page) }
          { this.renderPreviousButtons(false, page) }
          { pagesList.map(pageNumber => <PaginationLink onClick={this.onClick} pageNumber={pageNumber} isActive={page == pageNumber ? true : false} key={pageNumber}/>) }
          { this.renderNextButtons(false, page, pagesCount) }
          { this.renderNextButtons(true, page, pagesCount) }
        </ul>
      </div>
    )
  }
}

export default TablePagination