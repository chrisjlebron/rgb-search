import React from 'react';
import ResultList from './ResultList';
import SearchBar from './SearchBar';

import colors from '../../fixtures/colors.js'

class ColorWheelSearch extends React.Component {

  constructor() {
    super();

    this.handleUserInput = this.handleUserInput.bind(this);

    this.state = {
      filterText: ''
    }
  }

  handleUserInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {

    const colorResults = colors.get();

    return (
      <div>
        <h2>{'Color Wheel Search'}</h2>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
          results={colorResults}
        />
        <ResultList
          results={colorResults}
          filterText={this.state.filterText}
        />
      </div>
    );
  }

}

export default ColorWheelSearch;
