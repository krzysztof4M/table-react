import React from 'react'

import Loader from './Loader'
import TablePlaceholder from './TablePlaceholder'

class Table extends React.Component {

  displayBody() {
    if (this.props.isLoading) {
      return <Loader />
    }
    let content = !this.props.data.length ? <TablePlaceholder length={this.props.headers.length} /> : this.props.data.map((el,i) => <TableRow key={i} data={el} />)
    return content
  }

  render() {      
    return (
      <div className='jarviswidget jarviswidget-color-darken jarviswidget-sortable'>
        <header role='heading'>
          <h2>Publikacje naukowe</h2>
        </header>
        <div role='content'>
          <div className='widget-body no-padding'>
            <div className='dataTables_wrapper form-inline no-footer'>
              <div className='dt-toolbar'>
                <div className='col-xs-12 col-sm-6'>
                  <TableFilter  filter={this.props.filter} 
                                handleSearch={this.props.handleSearch}
                  />
                </div>
                <div className='col-sm-6 col-xs-12 hidden-xs'>
                  <TableLength handleChangeLimit={this.props.handleChangeLimit}/>
                </div>
              </div>
              <table className='table table-striped table-bordered table-hover dataTable no-footer'>
                <thead>
                  <TableHeader  headers={this.props.headers}
                                handleSort={this.props.handleSort}
                  />
                </thead>
                <tbody>
                  {
                    this.displayBody()
                  }
                </tbody>
              </table>
              <div className='dt-toolbar-footer'>
                <div className='col-sm-6 col-xs-12 hidden-xs'>
                  <TableCounter all_records={this.props.all_records} page={this.props.page} limit={this.props.limit} />
                </div>
                <div className='col-xs-12 col-sm-6'>
                  <TablePagination handlePagination={this.props.handlePagination} limit={this.props.limit} all_records={this.props.all_records} page={this.props.page} />
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
  data: React.PropTypes.array.isRequired,
  headers: React.PropTypes.array.isRequired,  
  all_records: React.PropTypes.number.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  page: React.PropTypes.number.isRequired,
  limit: React.PropTypes.number.isRequired,
  filter: React.PropTypes.string.isRequired,
}

export default Table
