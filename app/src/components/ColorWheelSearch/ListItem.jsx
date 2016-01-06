import React from 'react';
import {findIndex} from 'lodash';

const ListItem = ({result}) => {
  var selector = '';

  // if (matches.length && findIndex(matches, result) !== -1) {
  //   selector += ' from-input';
  // }

  return (
    <li className={selector}>
      <span>{result.name}</span>
    </li>
  );
};

export default ListItem;
