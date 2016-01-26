import React from 'react';

const ListItem = ({result, onUserClick}) => {
  let color = result.value;
  let liStyles = {
    backgroundColor: color
  };

  return {
    handleClick() {
      onUserClick(result.name);
    },

    render() {
      return (
        <li
          className="ListItem"
          style={liStyles}
          onClick={this.handleClick}
        >
          <span className="result-name">{result.name}</span>
        </li>
      );
    }
  }
};

export default ListItem;
