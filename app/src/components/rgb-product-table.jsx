import React from 'react';
import ProductRow from './rgb-product-row';

const ProductTable = ({products, filterText, isLoggedIn, matches}) => {

  let rows = [];
  let inputRows = products.filter((product) => {
    let textInName = filterText.length && product.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
    return textInName;
  });
  let userRows = products.filter((product) => {
    return product.userLikes && isLoggedIn;
  });
  let resultRows = products.filter((product) => {
    return inputRows.indexOf(product) === -1 && userRows.indexOf(product) === -1;
  });

  inputRows = inputRows.sort((a, b) => b.userLikes - a.userLikes);

  rows = rows.concat(inputRows, userRows, resultRows).reduce((arr, product) => {
    arr.push(<ProductRow key={product.name} product={product} matches={matches} isLoggedIn={isLoggedIn}/>);
    return arr;
  }, []);

  /*
    Need to:
    - also apply query matching sort to userLikes when logged in
    - avoid "flattenChildren" error
   */


  // let rows = products.reduce((arr, product) => {
  //   let pushit = (newArr) => {
  //     newArr.push(<ProductRow key={product.name} product={product} matches={matches} isLoggedIn={isLoggedIn}/>);
  //     return newArr;
  //   };
  //
  //   // if (userRows.indexOf(product) !== -1) {
  //   //   return pushit(arr);
  //   // }
  //
  //   // if (inputRows.indexOf(product) !== -1) {
  //   //   return pushit(arr);
  //   // }
  //   // arr.push(<ProductRow key={product.name} product={product} matches={matches} isLoggedIn={isLoggedIn}/>);
  //   return pushit(arr);
  // }, []);

  // let rows = products.map((product) => {
  //   let textInName = product.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
  //   let productRow = <ProductRow key={product.name} product={product} matches={matches} isLoggedIn={isLoggedIn}/>;
  //
  //   if (textInName) {
  //     return productRow;
  //     // rows.push(productRow);
  //     // if product.name in matches, move to top of list...
  //     // Otherwise, place after matches
  //       // return;
  //   } else {
  //     return;
  //     // rows.push(productRow);
  //   }
  //
  //   // rows.push(<ProductRow key={product.name} product={product} matches={matches} isLoggedIn={isLoggedIn}/>);
  // });

  return (
    <ul className="ProductTable">{rows}</ul>
  );
}

export default ProductTable;
