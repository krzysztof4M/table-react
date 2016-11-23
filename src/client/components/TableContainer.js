import React from 'react'
import axios from 'axios'
import Qs from 'qs'

import Table from './Table'

class TableContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      data: [],
      headers: [],
      all_records: 0,
      filter: '',
      limit: 10,
      page: 1,
      order: {
        column: 'id',
        sort: 'asc'
      }
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChangeLimit = this.handleChangeLimit.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }
  componentDidMount(){
    this.fetchData();
  }

  fetchData() {
    const { filter, limit, page, order } = this.state
    const that = this
    this.setState({isLoading: true})
    axios.get(this.props.url, {
      params:{
        filter,
        limit,
        page,
        order
      },
      paramsSerializer: function(params) {
        return Qs.stringify(params, {arrayFormat: 'brackets'})
      }
    })
    .then((response) => {
      that.setState({
        data: response.data.data,
        headers: response.data.headers,
        all_records: response.data.all_records,
        isLoading: false
      })
    })
    .catch(() => {
      that.setState({
        isLoading: false
      })
    });
  }

  handleSearch(newFilter) {     
    this.setState({filter : newFilter, page: 1}, function() {
        this.fetchData();   
    });
  }

  handleChangeLimit(newLimit) {
    this.setState({limit : newLimit, page: 1}, function() {
        this.fetchData();   
    });
  }

  handlePagination(newPage) {
    this.setState({page: newPage}, function() {
        this.fetchData();   
    });
  }

  handleSort(event) {
    event.preventDefault();
    const column = event.target.getAttribute('value');
    let sort = 'asc';
    if(this.state.order.column == event.target.getAttribute('value')) {
      sort = this.state.order.sort == 'asc' ? 'desc' : 'asc';
    }
    this.setState({order: {
      column: column,
      sort: sort
    }}, function() {
        this.fetchData();   
    });
  }

  render() {
    const { filter, limit, page, isLoading, all_records, headers, data } = this.state 
    return (
      <Table  data={data}
              headers={headers}
              all_records={all_records}
              isLoading={isLoading}
              page={page}
              limit={limit}
              filter={filter} />
    )
  }
}

TableContainer.propTypes = {
  url: React.PropTypes.string.isRequired
}

export default TableContainer