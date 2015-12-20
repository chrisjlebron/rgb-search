import React from 'react';

class SearchBar extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
      this.props.onUserInput (
        this.refs['filterTextInput'].value,
        this.refs['isLoggedInInput'].checked,
        this.props.products.filter((product) => {
          let currentInput = this.refs.filterTextInput.value;
          return currentInput.length ?
            product.name.indexOf(this.refs.filterTextInput.value) !== -1 :
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
                    ref="filterTextInput"
                    onChange={this.handleChange}
                />
                <p>
                    <label>
                        <input
                            type="checkbox"
                            checked={this.props.isLoggedIn}
                            ref="isLoggedInInput"
                            onChange={this.handleChange}
                        />
                        {' '}
                        Log in?
                    </label>
                </p>
            </form>
        );
    }
}

export default SearchBar;
