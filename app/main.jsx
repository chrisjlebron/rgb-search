import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './src/components/App';
import Home from './src/components/Home';
import FilterableSearch from './src/components/FilterableSearch/FilterableSearch';
import ColorWheelSearch from './src/components/ColorWheelSearch/ColorWheelSearch';
import ChatSearch from './src/components/ChatSearch/ChatSearch';


function renderShell() {
    let shell = document.createElement('div');
    shell.className = 'app-shell';
    document.body.appendChild(shell);
    render((
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='filterable-search' component={FilterableSearch} />
          <Route path='color-wheel-search' component={ColorWheelSearch} />
          <Route path='chat-search' component={ChatSearch} />
        </Route>
      </Router>
    ), shell);
}

// init shell
renderShell();
