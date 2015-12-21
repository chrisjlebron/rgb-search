import React from 'react';
import {findIndex} from 'lodash';

const ProductRow = ({product, matches, isLoggedIn}) => {
  var selector = 'our-results';

  if (product.userLikes && isLoggedIn) {
    selector += ' user-likes';
  }

  if (matches.length && findIndex(matches, product) !== -1) {
    selector += ' from-input';
  }

  return (
    <li className={selector}>
      <span>{product.name}</span>
    </li>
  );
};

export default ProductRow;
