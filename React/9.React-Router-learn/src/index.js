

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,browserHistory ,IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';
import Topic from './components/Topic';

ReactDOM.render(
    <Router history={browserHistory }>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>   
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics}>
                <Route path="/topic/:subject" component={Topic} />
            </Route>    
        </Route>    
    </Router>,
    document.getElementById('root')
);