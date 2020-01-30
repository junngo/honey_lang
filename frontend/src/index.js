import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from "./redux/configureStore";
import './index.css';
import { Provider } from 'react-redux';


console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
