import { useLocalePT } from '@utils/hooks/useLocalePt.ts'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

useLocalePT()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
