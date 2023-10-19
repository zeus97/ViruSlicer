import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
//Bootstrap and animate.css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css';
import './index.scss'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
