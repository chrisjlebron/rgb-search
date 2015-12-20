import React from 'react';

const ProductRow = ({product, matches, isLoggedIn}) => {
  var selector = 'our-results';

  if (product.userLikes && isLoggedIn) {
    selector += ' user-likes';
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
