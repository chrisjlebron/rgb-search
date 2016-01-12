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

    render() {
      let handleClick = function(newFilterText) {
        onUserClick(result.name);
      };

      return (
        <li
          className="ListItem"
          style={liStyles}
          onClick={handleClick}
        >
          <span style={spanStyles}>{result.name}</span>
        </li>
      );
    }
  }
};

export default ListItem;
