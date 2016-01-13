import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

import colors from '../../fixtures/colors-only';
import colorCategories from '../../fixtures/color-categories';

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
    return (
      <div>
        <h2>{'Color Wheel Search'}</h2>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
          results={this.props.results}
          categories={this.props.categories}
        />
        <SearchResults
          results={this.props.results}
          filterText={this.state.filterText}
          categories={this.props.categories}
          onUserClick={this.handleUserInput}
        />
      </div>
    );
  }

}

// Set default props for ColorWheelSearch
ColorWheelSearch.defaultProps = {
  results: colors.get(),
  categories: colorCategories.get()
};

// Set prop validation
ColorWheelSearch.propTypes = {
  results: React.PropTypes.arrayOf(React.PropTypes.object),
  categories: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default ColorWheelSearch;
