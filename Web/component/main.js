import React from 'react'
import ReactDOM from 'react-dom'
import ReactRouter from './Router.js'
import { Provider } from "react-redux"
import store from "./store"

// Load the react router and render it into bundle.js 
ReactDOM.render(<Provider store={store}>
                <ReactRouter/>
                </Provider>, document.getElementById('root'))
