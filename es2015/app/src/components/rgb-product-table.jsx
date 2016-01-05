import React from 'react';
import ProductRow from './rgb-product-row';

const ProductTable = ({products, filterText, isLoggedIn, matches}) => {

  let rows = products.reduce((newArr, product) => {
    let textInName = filterText.length && product.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
    let isShowingUserPrefs = product.userLikes && isLoggedIn;
    let addToProductArrayAtIndex = (index) => newArr[index] = newArr[index] ? newArr[index].concat(product) : [product];

    // add sorted arrays to the new array,
    // based on text match, user status, & defaults.
    // Sorting ordered by:
    if (textInName && isShowingUserPrefs) {
      // 1) text matched query & user prefs
      addToProductArrayAtIndex(0);
    } else if (textInName) {
      // 2) text matched query
      addToProductArrayAtIndex(1);
    } else if (isShowingUserPrefs) {
      // 3) user prefs
      addToProductArrayAtIndex(2);
    } else {
      // 4) defaults
      addToProductArrayAtIndex(3);
    }

    return newArr;
  }, [])
  // flatten array of arrays
  .reduce((a, b) => a.concat(b))
  .map((product) => {
    return (
      <ProductRow
        key={product.name}
        product={product}
        matches={matches}
        isLoggedIn={isLoggedIn}
      />
    );
  });

  return (
    <ul className="ProductTable">{rows}</ul>
  );
}

export default ProductTable;
