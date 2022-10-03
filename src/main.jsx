import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from '@/store'
import { Provider } from 'react-redux'
import '@/style/reset.css'
import '@/style/style.scss'
import '@/style/font.scss'
import '@/components/common/style.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
