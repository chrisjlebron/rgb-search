import React from 'react';

const ProductRow = ({product}) => {
    var name = product.stocked ? product.name : <span style={{color: 'red'}}> {product.name} </span>;
    return (
        <tr>
            <td>{name}</td>
        </tr>
    );
};

export default ProductRow;
