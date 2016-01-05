import './stylesheets/main.css';
import React from 'react';
import {render} from 'react-dom';
import FilterableSearch from './src/components/FilterableSearch/FilterableSearch';


function renderShell() {
    var shell = document.createElement('div');
    shell.className = 'app-shell';
    document.body.appendChild(shell);
    render(<FilterableSearch/>, shell);
}

// init shell
renderShell();
