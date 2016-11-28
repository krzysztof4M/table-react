import React from 'react'
import { render } from 'react-dom'

import TableContainer from './components/TableContainer'

import './styles/main.scss' 

render(<TableContainer url='api/data' title='Items list' headers={['id', 'name', 'year', 'added_time', 'editor']} />, document.getElementById('app'));