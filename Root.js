import React from 'react';
import {object} from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/CombineReducers';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Router, Route, IndexRoute } from 'react-router';

import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import App from './App';
import ArticleContainer from './js/components/Articles/ArticleContainer';
import ArticleCard from './js/components/Articles/ArticleCard';

const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

let store = createStore(
    reducers,
    applyMiddleware(middleware, thunk)
);

const Root = () => (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>
);

export default Root;
