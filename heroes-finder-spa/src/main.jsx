import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


import { HeroesApps } from './HeroesApps'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <HeroesApps/>
  </BrowserRouter>
  </React.StrictMode>,
)
