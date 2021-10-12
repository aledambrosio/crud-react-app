import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { CssBaseline } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'

/**
 * Render index
 */
ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <StrictMode>
      <CssBaseline />
      <App />
    </StrictMode>
  </StyledEngineProvider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
