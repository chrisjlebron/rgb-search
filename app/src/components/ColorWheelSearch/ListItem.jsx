import React from 'react';

const ListItem = ({result, onUserClick}) => {
  let color = result.value;
  let liStyles = {
    backgroundColor: color
  };
  let spanStyles = {
    display: 'inline-block',
    verticalAlign: 'bottom',
    padding: '.25em',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,.6)',
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
          <span style={spanStyles}>{result.name}</span>
        </li>
      );
    }
  }
};

export default ListItem;
