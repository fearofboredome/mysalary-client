import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware()
));

render(
    <Provider store={store}>
        <App />
    </Provider>, document.querySelector('#root'));
