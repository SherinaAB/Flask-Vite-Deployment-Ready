import React from 'react';
import ProductCard from './ProductCard';

function Products({itemList}){
    // console.log("Show me products!")
    const productList = itemList.map((item) => (
        <ProductCard key={item.id} item={item}
        />
    ))

    return (
        <div className="product-list"> 
            <h2></h2>
            <div>
                {productList}
            </div>
        </div>
    )
}

export default Products;