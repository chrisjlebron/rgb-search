import React from 'react';
import {findIndex} from 'lodash';

import ProductRow from './rgb-product-row';

const ProductTable = ({products, filterText, isLoggedIn, matches}) => {

  let rows = [];
  // return arry filtered by match with query
  let inputRows = products.filter((product) => {
    let textInName = filterText.length && product.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
    return textInName;
  });
  // return array filtered by user preferences
  let userRows = products.filter((product) => {
    return product.userLikes && isLoggedIn;
  });
  // return remaining array
  let resultRows = products.filter((product) => {
    return findIndex(inputRows, product) === -1 && findIndex(userRows, product) === -1;
  });

  // sort matched results by user prefs, if logged in
  inputRows = inputRows.sort((a, b) => {
    if (isLoggedIn) return b.userLikes - a.userLikes
  });

  rows = rows.concat(inputRows, userRows, resultRows)
    .reduce((newArr, product, index) => {
      // if product is not in new array, add it, else move on
      if (findIndex(newArr, product) === -1) newArr.push(product);
      return newArr;
    }, [])
    .map((product) => {
      return <ProductRow
        key={product.name}
        product={product}
        matches={matches}
        isLoggedIn={isLoggedIn}
        />;
    });

  return (
    <ul className="ProductTable">{rows}</ul>
  );
}

export default ProductTable;
