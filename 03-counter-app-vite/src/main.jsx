import React from 'react'
import ReactDOM from 'react-dom/client'
import App, {HelloWorldApp} from './App'
import './stylesheet.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorldApp />
  </React.StrictMode>,
)