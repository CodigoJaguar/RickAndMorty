import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import storeRicknMorty from './components/redux/Store'

ReactDOM.render(

  <Provider store = {storeRicknMorty}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

  ,document.getElementById('root')
)


