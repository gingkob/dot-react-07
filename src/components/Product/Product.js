import React, { Component } from 'react';
import './Product.css';

export class Product extends Component {

  render() {
    return (
      <div className="product-wrapper">
        <div className='flexible'>
          <span>Shopping Cart: </span><span>{this.props.cartLength} total items.</span>
        </div>
        <div className='flexible'>
          <span>Total: </span><span>{this.props.total} $</span>
          </div>

        <div className="product">
          <span role="img" aria-label={this.props.name}>{this.props.emoji}</span>
        </div>
        <button onClick={this.props.onAdd}>Add</button> 
        <button onClick={this.props.onRemove}>Remove</button>
      </div>
    )
  }
}

export default Product
