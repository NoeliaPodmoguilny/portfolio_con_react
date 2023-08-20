import React from 'react'
import ReactDOM from 'react-dom/client'
import { PortfolioApp } from './PortfolioApp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PortfolioApp />
    </React.StrictMode>,
)
