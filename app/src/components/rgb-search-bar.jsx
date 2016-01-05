import React from 'react';

class SearchBar extends React.Component {

    // @TODO: can I use "static"? I think it's ES2016...
    // @TODO: Also, feels like propTypes definitions should be
    // higher up the component hierarcy...

    // static propTypes = {
    //   products: React.PropTypes.arrayOf(React.PropTypes.object),
    //   onUserInput: React.PropTypes.func,
    //   isLoggedIn: React.PropTypes.bool,
    //   filterText: React.PropTypes.string
    // }

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
      this.props.onUserInput (
        this._filterTextInput.value,
        this._isLoggedInInput.checked,
        this.props.products.filter((product) => {
          let currentInput = this._filterTextInput.value;
          return currentInput.length ?
            product.name.indexOf(this._filterTextInput.value) !== -1 :
            false;
        })
      );
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
                <p>
                    <label>
                        <input
                          type="checkbox"
                          checked={this.props.isLoggedIn}
                          ref={(component) => this._isLoggedInInput = component}
                          onChange={this.handleChange}
                        />
                        {' Log in?'}
                    </label>
                </p>
            </form>
        );
    }
}

SearchBar.propTypes = {
  products: React.PropTypes.arrayOf(React.PropTypes.object),
  onUserInput: React.PropTypes.func,
  isLoggedIn: React.PropTypes.bool,
  filterText: React.PropTypes.string
};

export default SearchBar;
