import React from 'react';
import {render} from 'react-dom';
import App from './src/components/App';

function renderShell() {
    let shell = document.createElement('div');
    shell.className = 'app-shell';
    document.body.appendChild(shell);
    render(<App/>, shell);
}

// init shell
renderShell();
