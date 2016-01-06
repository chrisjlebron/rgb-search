import React from 'react';
import {findIndex} from 'lodash';

const ListItem = ({result}) => {
  let color = result.value;
  let liStyles = {
    backgroundColor: color
  };
  let spanStyles = {
    backgroundColor: 'rgba(0,0,0,.6)',
    padding: '.25em'
  };

  return (
    <li style={liStyles}>
      <span style={spanStyles}>{result.name}</span>
    </li>
  );
};

export default ListItem;
