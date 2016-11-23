import React from 'react'
import { render } from 'react-dom'

import TableContainer from './components/TableContainer'

import style from './styles/main.scss' // eslint-disable-line no-unused-vars

render(<TableContainer url='api/data' />, document.getElementById('app'));