import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import "primereact/resources/themes/saga-blue/theme.css"; // 테마
import "primereact/resources/primereact.min.css"; // PrimeReact 기본 CSS
import "primeicons/primeicons.css"; // PrimeIcons

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
