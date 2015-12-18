import React from 'react';

class SearchBar extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
      // debugger;
        this.props.onUserInput (
            this.refs['filterTextInput'].value,
            this.refs['inUserAttrsInput'].checked
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
                            checked={this.props.inUserAttrs}
                            ref="inUserAttrsInput"
                            onChange={this.handleChange}
                        />
                        {' '}
                        Only show products in user attrs
                    </label>
                </p>
            </form>
        );
    }
}

export default SearchBar;
