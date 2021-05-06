import React, { Component } from 'react';
import RadioInput from './common/radioInput';

class ProductCard extends Component {
  state = { 
    selectedPrice: 0
  }

  handleChange = (price) => {
    this.setState({selectedPrice: price})
  }
  
  render() { 
    const {productName, prices, sizes, img, _id} = this.props.product;
    
    return (        
      
      <React.Fragment>
      <div className="col-sm-12 col-md-3 mt-4 mb-4">
        <div className="card" style={{width:"240px"}}>
            <img className="card-img-top" src={"https://i.pinimg.com/originals/"+img} alt={productName}/>
            <div className="card-body ">
              <h5 className="d-flex justify-content-center mb-3">{productName}</h5>
              <RadioInput 
              key={_id}
              selectedPrice={this.state.selectedPrice}
              prices={prices}
              product={this.props.product}
              onChange={this.handleChange} 
              sizes={sizes} />
              <button onClick={() => this.props.onAdd(productName, img, this.state.selectedPrice)} 
              className="d-flex justify-content-center btn btn-secondary btn-block mt-4">ADD TO CART</button>
          </div>
        </div>
      </div>  
    </React.Fragment>);
  }
}
 
export default ProductCard;