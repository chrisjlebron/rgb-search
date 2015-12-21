import React from 'react';
import ProductTable from './components/rgb-product-table';
import SearchBar from './components/rgb-search-bar';
import Legend from './components/rgb-legend';

import getFruits from './fixtures/fruits.js'

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

    const products = getFruits();

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
        <ProductTable
          products={products}
          filterText={this.state.filterText}
          isLoggedIn={this.state.isLoggedIn}
          matches={this.state.matches}
        />
      </div>
    )
  }

}

export default FilterableSearch;
