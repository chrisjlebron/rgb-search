import '../../stylesheets/main.css';
import React from 'react';
import {render} from 'react-dom';
import FilterableSearch from '../../src/components/FilterableSearch/FilterableSearch';
import ColorWheelSearch from '../../src/components/ColorWheelSearch/ColorWheelSearch';

class Home extends React.Component {
  render() {
    return <div>{'Select a Prototype Above'}</div>
  }
}


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
    switch (this.state.route) {
      case '/filterable-search': Child = FilterableSearch; break;
      case '/color-wheel-search': Child = ColorWheelSearch; break;
      default: Child = Home;
    }

    return (
      <div>
        <h1>{'RGB Search Prototypes'}</h1>
        <ul>
          <li><a href="#/">{'Home'}</a></li>
          <li><a href="#/filterable-search">{'Filterable Search'}</a></li>
          <li><a href="#/color-wheel-search">{'Color Wheel Search'}</a></li>
        </ul>
        <Child/>
      </div>
    )
  }
}

export default App;
