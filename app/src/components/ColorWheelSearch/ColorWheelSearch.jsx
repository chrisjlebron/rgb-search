import React from 'react';
import ProductList from './../FilterableSearch/ProductList';
import SearchBar from './../FilterableSearch/SearchBar';

import colors from '../../fixtures/colors.js'

class FilterableSearch extends React.Component {

  constructor() {
    super();

    this.handleUserInput = this.handleUserInput.bind(this);

    this.state = {
      filterText: '',
      isLoggedIn: false,
      matches: []
    }
  }

  handleUserInput(filterText, isLoggedIn, matches) {
    this.setState({
      filterText: filterText,
      isLoggedIn: isLoggedIn,
      matches: matches
    });
  }

  render() {

    const products = colors.get();

    return (
      <div>
        <h2>{'Color Wheel Search'}</h2>
        <SearchBar
          filterText={this.state.filterText}
          isLoggedIn={this.state.isLoggedIn}
          onUserInput={this.handleUserInput}
          matches={this.state.matches}
          products={products}
        />
        <ProductList
          products={products}
          filterText={this.state.filterText}
          isLoggedIn={this.state.isLoggedIn}
          matches={this.state.matches}
        />
      </div>
    );
  }

}

export default FilterableSearch;
