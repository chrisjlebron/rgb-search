import React from 'react';
import ProductRow from './rgb-product-row';

const ProductTable = ({products, filterText, inUserAttrs, matches}) => {

    let rows = [];

    products.map((product) => {
      let textInName = product.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;

      if (!textInName || (!product.userLikes && inUserAttrs)) {
          return;
      }

      // @TODO: Not great. This isn't the "React way"
      // if (textInName && product.userLikes) {
      //   matches = true;
      // }

      rows.push(<ProductRow key={product.name} product={product} matches={matches}/>);
    });

    return (
      <ul className="ProductTable">{rows}</ul>
    );
}

export default ProductTable;
