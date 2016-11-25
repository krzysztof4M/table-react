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

  render() {
    const { all_records, limit, page } = this.props
    const pagesCount = Math.ceil(all_records / limit);   
    const pagesList = [
        page-2,
        page-1,
        page,
        page+1,
        page+2
        ].filter(value => !(value > pagesCount || value < 1));

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
            isDisabled={pagesCount == page}
            isActive={false}
            icon={'fa fa-angle-right'}
          />
          <PaginationLink 
            handlePagination={this.handlePagination} 
            pageNumber={pagesCount} 
            isDisabled={pagesCount == page}
            isActive={false}
            icon={'fa fa-angle-double-right'}
          />
        </ul>
      </div>
    )
  }
}

TablePagination.propTypes = {
  all_records: React.PropTypes.number.isRequired,
  limit: React.PropTypes.number.isRequired,
  page:React.PropTypes.number.isRequired,
  handlePagination: React.PropTypes.func.isRequired
}

export default TablePagination