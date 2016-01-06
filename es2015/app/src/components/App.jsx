import '../../stylesheets/main.scss';
import React from 'react';

import Home from './Home';
import FilterableSearch from '../../src/components/FilterableSearch/FilterableSearch';
import ColorWheelSearch from '../../src/components/ColorWheelSearch/ColorWheelSearch';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      route: window.location.hash.substr(1)
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render() {
    let Child;
    let activeClass = 'active';
    const HomeRoute = '/';
    const FSRoute = '/filterable-search';
    const CWRoute = '/color-wheel-search';

    switch (this.state.route) {
      case FSRoute:
        Child = FilterableSearch;
        break;
      case CWRoute:
        Child = ColorWheelSearch;
        break;
      case HomeRoute: Child = Home;
      default: Child = Home;
    }


    return (
      <div className="App">
        <h1>{'RGB Search Prototypes'}</h1>
        <ul className="nav">
          <li className={this.state.route === HomeRoute ? 'active' : ''}>
            <a href="#/">{'Home'}</a>
          </li>
          <li className={this.state.route === FSRoute ? 'active' : ''}>
            <a href="#/filterable-search">{'Filterable Search'}</a>
          </li>
          <li className={this.state.route === CWRoute ? 'active' : ''}>
            <a href="#/color-wheel-search">{'Color Wheel Search'}</a>
          </li>
        </ul>
        <Child/>
      </div>
    )
  }
}

export default App;
