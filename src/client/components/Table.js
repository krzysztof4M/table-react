import React from 'react'

import Loader from './Loader'
import TablePlaceholder from './TablePlaceholder'
import TableFilter from './TableFilter'
import TableLength from './TableLength'
import TableHeader from './TableHeader'
import TableCounter from './TableCounter'
import TablePagination from './TablePagination'
import TableRow from './TableRow'

class Table extends React.Component {

  displayBody() {
    if (this.props.isLoading) {
      return <Loader length={this.props.headers.length} />
    }
    let content = !this.props.data.length ? <TablePlaceholder length={this.props.headers.length} /> : this.props.data.map((el,i) => <TableRow key={i} data={el} />)
    return content
  }

  render() {
    const { title, filter, headers, handleSearch, all_records, page, limit, handlePagination, handleChangeLimit, handleSort } = this.props       
    return (
      <div className='wrapper'>
        <header>
          <h2>{title}</h2>
        </header>
        <div>
          <div className=''>
            <div className=''>
              <div className='toolbar'>
                <div className=''>
                  <TableFilter  filter={filter} 
                                handleSearch={handleSearch} />
                </div>
                <div className=''>
                  <TableLength handleChangeLimit={handleChangeLimit} />
                </div>
              </div>
              <table className='table'>
                <thead>
                  <TableHeader  headers={headers}
                                handleSort={handleSort}
                  />
                </thead>
                <tbody>
                  {
                    this.displayBody()
                  }
                </tbody>
              </table>
              <div className='footer'>
                <div className=''>
                  <TableCounter all_records={all_records} page={page} limit={limit} />
                </div>
                <div className=''>
                  <TablePagination handlePagination={handlePagination} limit={limit} all_records={all_records} page={this.props.page} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Table.propTypes = {
  title: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired,
  headers: React.PropTypes.array.isRequired,  
  all_records: React.PropTypes.number.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  page: React.PropTypes.number.isRequired,
  limit: React.PropTypes.number.isRequired,
  filter: React.PropTypes.string.isRequired,
  handlePagination: React.PropTypes.func.isRequired,
  handleSort: React.PropTypes.func.isRequired,
  handleChangeLimit: React.PropTypes.func.isRequired,
  handleSearch: React.PropTypes.func.isRequired
}

export default Table
