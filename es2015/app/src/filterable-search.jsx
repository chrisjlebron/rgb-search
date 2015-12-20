import React from 'react';
import ProductTable from './components/rgb-product-table';
import SearchBar from './components/rgb-search-bar';

import getFruits from './fixtures/fruits.js'

class FilterableSearch extends React.Component {

  constructor() {
    super();

    this.handleUserInput = this.handleUserInput.bind(this);

    this.state = {
      filterText: '',
      inUserAttrs: false,
      matches: []
    }
  }

  handleUserInput(filterText, inUserAttrs, matches) {
    this.setState({
      filterText: filterText,
      inUserAttrs: inUserAttrs,
      matches: matches
    });
  }

  render() {

    const products = getFruits();

    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inUserAttrs={this.state.inUserAttrs}
          onUserInput={this.handleUserInput}
          matches={this.state.matches}
          products={products}
        />
        <ProductTable
          products={products}
          filterText={this.state.filterText}
          inUserAttrs={this.state.inUserAttrs}
          matches={this.state.matches}
        />
      </div>
    )
  }

}

export default FilterableSearch;
