import React from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import Legend from './Legend';

import fruits from '../../fixtures/fruits.js'

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

    const products = fruits.get();

    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          isLoggedIn={this.state.isLoggedIn}
          onUserInput={this.handleUserInput}
          matches={this.state.matches}
          products={products}
        />
        <Legend/>
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
