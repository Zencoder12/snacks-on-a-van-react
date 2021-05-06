import React from 'react';

const MediaComponent = ({cartItem}) => {

    return (  
        <div className="container">
            <div className="d-flex flex-row">
                <div>
                    <img className="media-img" 
                    src={"https://i.pinimg.com/originals/"+cartItem.img} 
                    alt={cartItem.productName} />
                </div>
                <div>
                    <h3 className="media-heading">{cartItem.productName}</h3>
                    <p className="media-product-size">Small</p>
                    <button className="btn btn-secondary btn-sm">REMOVE</button>
                </div>
            </div>
        </div>
    );
}
 
export default MediaComponent;