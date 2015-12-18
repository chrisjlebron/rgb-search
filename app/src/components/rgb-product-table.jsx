import React from 'react';
import ProductRow from './rgb-product-row';

const ProductTable = ({products, filterText, inUserAttrs}) => {

    let rows = [];

    products.map((product) => {
        if (product.name.indexOf(filterText) === -1 || (product.stocked && inUserAttrs)) {
            return;
        }

        rows.push(<ProductRow product={product} key={product.name}/>);
    });

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default ProductTable;
