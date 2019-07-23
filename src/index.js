import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,HashRouter,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';

import store from './store/store';

// import App from './App';
import Admin from './admin';
// import ERouter from './router';

import Home from './client-redux/home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Home />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();