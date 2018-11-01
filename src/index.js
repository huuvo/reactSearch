import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { createStore, applyMiddleware } from "redux";
import  rootReducers from './reducers';
import  ReduxPromise from 'redux-promise';



const createStoreWiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store = {createStoreWiddleware(rootReducers)}>
        <App />
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
