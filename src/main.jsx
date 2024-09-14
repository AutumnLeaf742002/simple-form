import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CounterApp, CounterWhitCustomHook, SimpleForm } from './apps'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleForm />
  </StrictMode>,
)
