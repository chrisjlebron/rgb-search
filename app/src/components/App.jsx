import '../../stylesheets/main.scss';
import React from 'react';
import {Link, IndexLink} from 'react-router';

class App extends React.Component {
  render() {
    let pathname = this.props.location.pathname;

    return (
      <div className="App">
        <h1>{'RGB Search Prototypes'}</h1>
        <ul className="nav">
          <li className={pathname === '/' ? 'active' : ''}>
            <IndexLink to={'/'}>{'Home'}</IndexLink>
          </li>
          <li className={pathname === '/filterable-search' ? 'active' : ''}>
            <Link to={'/filterable-search'}>{'Filterable Search'}</Link>
          </li>
          <li className={pathname === '/color-wheel-search' ? 'active' : ''}>
            <Link to={'/color-wheel-search'}>{'Color Wheel Search'}</Link>
          </li>
          <li className={pathname === '/chat-search' ? 'active' : ''}>
            <Link to={'/chat-search'}>{'Chat Search'}</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App;
