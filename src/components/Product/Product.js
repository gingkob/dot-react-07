import React, { Component } from 'react';
import './Product.css';

export class Product extends Component {

  state = {
    items: 0
  }

  onAdd = () => {
    this.setState( prevState =>({ items: prevState.items + 1 }))
  }

  onRemove = () => {
    if(this.state.items === 0){
      return;
    }
    this.setState( prevState =>({ items:prevState.items - 1}))
  }

  render() {
    return (
      <div className="product-wrapper">
        <div className='flexible'>
          <span>Shopping Cart: </span><span>{this.state.items} total items.</span>
        </div>
        <div className='flexible'>
          <span>Total: </span><span>{this.state.items * 5} $</span>
          </div>

        <div className="product">
          <span role="img" aria-label="ice cream">🍦</span>
        </div>
        <button onClick={this.onAdd}>Add</button> 
        <button onClick={this.onRemove}>Remove</button>
      </div>
    )
  }
}

export default Product
