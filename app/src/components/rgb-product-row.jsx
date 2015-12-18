import React from 'react';

const ProductRow = ({product, matches}) => {
  var selector = 'our-results';

  if (product.userLikes) {
    selector += ' in-user-attrs';
  }
  debugger;

  // @TODO: again, NOT the "React way"
  if (matches) {
    selector += ' from-input';
  }

  return (
    <tr>
      <td>
        <span className={selector}>{product.name}</span>
      </td>
    </tr>
  );
};

export default ProductRow;
