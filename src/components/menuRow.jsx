import React from 'react';
import ProductCard from './productCard'

const MenuRow = ( { products, category } ) => {
    console.log(products);
    return (  
        <React.Fragment>
            <h2 id="heading" className="mt-3">{category.toUpperCase()}</h2>
            <div id="sed-bg" className="row gy-sm-1 gy-md-4 mt-3 mb-3">
                {products.filter(p => p.category === category).map(product => <ProductCard product={product} />)}
            </div>
        </React.Fragment>
    );
}
 
export default MenuRow;