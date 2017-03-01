

import React from 'react';
import ReactDOM from 'react-dom';

import "./css/todomvc-app-css/index.css";
import "./css/todomvc-common/base.css"

import App from './components/App';
import MainSection from './components/MainSection';

import { Router, Route, browserHistory,hashHistory,Redirect } from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Redirect from="/" to="/all" />
        <Route path="/:filter" component={App} />
    </Router>,
    document.getElementById('root')
);