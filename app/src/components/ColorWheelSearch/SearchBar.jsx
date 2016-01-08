import React from 'react';

class SearchBar extends React.Component {

    // @TODO: can I use "static"? I think it's ES2016...
    // @TODO: Also, feels like propTypes definitions should be
    // higher up the component hierarcy...

    // static propTypes = {
    //   results: React.PropTypes.arrayOf(React.PropTypes.object),
    //   onUserInput: React.PropTypes.func,
    //   filterText: React.PropTypes.string
    // }

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
      this.props.onUserInput(this._filterTextInput.value);
    }

    render() {
        return (
            <form className="SearchBar">
                <input
                  type="text"
                  placeholder="Search..."
                  value={this.props.filterText}
                  ref={(component) => this._filterTextInput = component}
                  onChange={this.handleChange}
                />
            </form>
        );
    }
}

SearchBar.propTypes = {
  results: React.PropTypes.arrayOf(React.PropTypes.object),
  onUserInput: React.PropTypes.func,
  filterText: React.PropTypes.string
};

export default SearchBar;
