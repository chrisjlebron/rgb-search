import React from 'react';

const ListItem = ({result}) => {
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

  return (
    <li style={liStyles} className="ListItem">
      <span style={spanStyles}>{result.name}</span>
    </li>
  );
};

export default ListItem;
