import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { CounterApp } from './CounterApp'
import './stylesheet.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
)
