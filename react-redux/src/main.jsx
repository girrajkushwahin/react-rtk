import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'

store.subscribe(() => console.log(store.getState()))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)