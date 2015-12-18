import React from 'react';
import ProductTable from './components/product-table';
import SearchBar from './components/search-bar';

import fruits from './fixtures/fruits.json'

class FilterableSearch extends React.Component {

  constructor() {
    super();

    this.handleUserInput = this.handleUserInput.bind(this);

    this.state = {
      filterText: '',
      inUserAttrs: false
    }
  }

  handleUserInput(filterText, inUserAttrs) {
    this.setState({
      filterText: filterText,
      inUserAttrs: inUserAttrs
    });
  }

  render() {

    const results = fruits;

    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inUserAttrs={this.state.inUserAttrs}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          results={results}
          filterText={this.state.filterText}
          inUserAttrs={this.state.inUserAttrs}
        />
      </div>
    )
  }

}

export default FilterableSearch;
