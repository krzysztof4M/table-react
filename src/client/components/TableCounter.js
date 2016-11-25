import React from 'react'

class TableCounter extends React.Component {
  render() {
    const {page, limit, all_records} = this.props
    return (
      <div className='dataTables_info'>
        Showing <span className='txt-color-darken'>{(page - 1) * limit + 1}</span> to <span className='txt-color-darken'>{Math.min(page * limit, all_records)}</span> of <span className='text-primary'>{all_records}</span> entries
      </div>
    )
  }
}

TableCounter.propTypes = {
	page: React.PropTypes.number.isRequired,
	limit: React.PropTypes.number.isRequired,
	all_records:React.PropTypes.number.isRequired
}

export default TableCounter