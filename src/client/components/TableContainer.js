import React from 'react'
import axios from 'axios'

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
    // let query = {
    //   department_id: this.props.department_id,
    //   type: this.props.type,
    //   filter: this.state.filter,
    //   limit: this.state.limit,
    //   page: this.state.page,
    //   order: this.state.order.column + '-' + this.state.order.sort
    // }
    this.fetchData();
  }

  fetchData() {
    const that = this
    this.setState({isLoading: true})
    axios.get('api/data', {
      params: this.getQuery()
    })
    .then(function (response) {
      that.setState({
        data: response.data.data,
        headers: response.data.headers,
        all_records: response.data.all_records,
        isLoading: false
      })
    })
    .catch(function (error) {
      that.setState({
        isLoading: false
      })
    });
  }

  getQuery() {
    const { department_id, type } = this.props
    const { filter, limit, page, order } = this.state
    
    return {
      department_id: department_id,
      type: type,
      filter: filter,
      limit: limit,
      page: page,
      order: order.column + '-' + order.sort
    }
  }

  displayView(){
    const { filter, limit, page, isLoading, all_records, headers, data } = this.state 
    return (
      <div>hej</div>
    )
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
    //jeżeli po raz kolejny sortujemy tą samą kolumną to posortuj w drugą stronę
    if(this.state.order.column == event.target.getAttribute('value')) {
      sort = this.state.order.sort == 'asc' ? 'desc' : 'asc';
    }
    console.log(event.target.getAttribute('value'));
    this.setState({order: {
      column: column,
      sort: sort
    }}, function() {
        this.fetchData();   
    });
  }

  render() {
    return (
      <div>
        {
          this.displayView()
        }
      </div>
    );
  }
}

export default TableContainer