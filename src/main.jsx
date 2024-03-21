import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router.jsx'
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import { HelmetProvider } from 'react-helmet-async'


const myStore = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById('root')).render(
  
	<HelmetProvider>
    <Provider store={myStore}>
		<RouterProvider router={Router}/>
	</Provider>
	</HelmetProvider>,
)
