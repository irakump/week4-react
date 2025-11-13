import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import './assets/tähän tiedosto'
import App from './App.jsx'
//import App from './App-Demo.jsx'

//reateRoot(document.getElementById('root')).render(
// <StrictMode>
//   <App />
//   <App-Demo />
// </StrictMode>,
//

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
