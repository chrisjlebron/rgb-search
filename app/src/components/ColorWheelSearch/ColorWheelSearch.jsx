import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

import colors from '../../fixtures/colors-only';
import colorCategories from '../../fixtures/color-categories';
import articles from '../../fixtures/articles';

import '../../../stylesheets/components/ColorWheelSearch.scss';

class ColorWheelSearch extends React.Component {

  constructor() {
    super();

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      filterText: '',
      view: 'colors'
    }
  }

  handleUserInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleToggle(view) {
    this.setState({
      view: view
    });
  }

  render() {
    return (
      <div>
        <h2>{'Color Wheel Search'}</h2>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
          results={this.props.colors}
          categories={this.props.categories}
        />
        <SearchResults
          results={this.state.view === 'colors' ? this.props.colors : this.props.articles}
          filterText={this.state.filterText}
          categories={this.props.categories}
          onUserClick={this.handleUserInput}
          onViewToggle={this.handleToggle}
        />
      </div>
    );
  }

}

// Set prop validation
ColorWheelSearch.propTypes = {
  colors: React.PropTypes.arrayOf(React.PropTypes.object),
  categories: React.PropTypes.arrayOf(React.PropTypes.object),
  articles: React.PropTypes.arrayOf(React.PropTypes.object)
}

// Set default props for ColorWheelSearch
ColorWheelSearch.defaultProps = {
  colors: colors.get(),
  categories: colorCategories.get(),
  articles: articles.get()
};

export default ColorWheelSearch;
