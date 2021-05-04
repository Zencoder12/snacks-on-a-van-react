import React from 'react';

const ProductCard = ({product}) => {

    const {productName, prices, img} = product;
    console.log('https://pixabay.com/images/'+img);

    return (  
        <React.Fragment>
          <div className="col-sm-12 col-md-3 mt-4 mb-4">
            <div className="inner">
                <div className="d-flex justify-content-center">
                  <img src="https://source.unsplash.com/evRB-x0TJkM" alt={productName}/>
                </div>
                <h5 className="d-flex justify-content-center mt-3 mb-3">{productName}</h5>
                <p className="d-flex justify-content-center">{'Price from:$'+prices[0]}</p>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-secondary">SELECT</button>
                </div>
            </div>
          </div>
        </React.Fragment>
    );
}
 
export default ProductCard;