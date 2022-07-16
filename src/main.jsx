import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './public/js/adapter'
import 'weui'
import 'react-weui/build/packages/react-weui.css'
import './assets/iconfont/iconfont.css'
import './assets/styles/reset.css'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
)
