import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store/index'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // removing strict mode otherwise useEffect runs twice
  <Provider store={store}>
    <App />
  </Provider>
)
