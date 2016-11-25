import React from 'react'

class TableCounter extends React.Component {
  render() {
    const {page, limit, all_records} = this.props
    return (
      <div>
        Showing <span>{(page - 1) * limit + 1}</span> to <span>{Math.min(page * limit, all_records)}</span> of <span>{all_records}</span> entries
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