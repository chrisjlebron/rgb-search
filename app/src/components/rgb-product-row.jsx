import React from 'react';

const ProductRow = ({product, matches}) => {
  var selector = 'our-results';

  if (product.userLikes) {
    selector += ' in-user-attrs';
  }

  if (matches.length) {
    selector += ' from-input';
  }

  return (
    <li className={selector}>
      <span>{product.name}</span>
    </li>
  );
};

export default ProductRow;
