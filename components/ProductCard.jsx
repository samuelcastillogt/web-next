import React from 'react';
import Link from 'next/link';
const ProductCard = (props) => {
    return (
        <Link href={`/productos/${props.to}`}>
        <div className='product-card' style={{backgroundImage: `url("${props.bg}")`}}>
            <p>Producto</p>
        </div>
        </Link>
        
    );
};

export default ProductCard;