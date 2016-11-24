import React from 'react'
import { render } from 'react-dom'

import TableContainer from './components/TableContainer'

import './styles/main.scss' 

render(<TableContainer url='api/data' title='Items list' />, document.getElementById('app'));