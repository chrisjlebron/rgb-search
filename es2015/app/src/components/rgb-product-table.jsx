import React from 'react';
import ProductRow from './rgb-product-row';

const ProductTable = ({products, filterText, isLoggedIn, matches}) => {

    let rows = [];

    products.map((product) => {
      let textInName = product.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;

      // if (!textInName || (!product.userLikes && isLoggedIn)) {
      //     return;
      // }

      if (!textInName) {
        // if product.name in matches, move to top of list...
        // Otherwise, place after matches
          return;
      }

      rows.push(<ProductRow key={product.name} product={product} matches={matches} isLoggedIn={isLoggedIn}/>);
    });

    return (
      <ul className="ProductTable">{rows}</ul>
    );
}

export default ProductTable;
