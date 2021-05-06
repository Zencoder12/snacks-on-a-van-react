import React, { Component } from 'react';
import RadioInput from './common/radioInput';

class ProductCard extends Component {
  state = { selectedPrice: 0 }
  
  handleSelect = (id) => {
    window.location = `product/${id}`
  };

  handleChange = (price) => {
    this.setState({selectedPrice: price})
    console.log(price);
  }
  
  render() { 
    const {productName, prices, sizes, img, _id} = this.props.product;
    
    return (        
      
    <React.Fragment>
      <div className="col-sm-12 col-md-3 mt-4 mb-4">
        <div className="card" style={{width:"230px"}}>
            <img className="card-img-top" src={"https://i.pinimg.com/originals/"+img} alt={productName}/>
            <div className="card-body ">
              <h5 className="d-flex justify-content-center mb-3">{productName}</h5>
              <RadioInput 
              key={_id} 
              selectedPrice={this.state.selectedPrice}
              prices={prices}
              onChange={this.handleChange} 
              sizes={sizes} />
              <a href="#" className="d-flex justify-content-center btn btn-secondary">ADD TO CART</a>
          </div>
        </div>
      </div>  
    </React.Fragment>);
  }
}
 
export default ProductCard;