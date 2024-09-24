import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CounterApp, CounterWhitCustomHook, SimpleFormHook, SimpleForm, PokeApi } from './apps'
import './index.css'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <PokeApi />
  </StrictMode>
)