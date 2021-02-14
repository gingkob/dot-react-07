import React, { Component } from 'react';
import './Product.css';

export class Product extends Component {

  state = {
    cart: [],
    total: 0
  }

  onAdd = () => {
    this.setState( prevState =>({ cart: [...prevState.cart, 'ice cream'], total: prevState.total + 5}))
  }

  onRemove = () => {
    if(this.state.cart.length === 0){
      return;
    }
    this.setState( prevState =>({ cart: prevState.cart.slice(0,-1), total: prevState.total - 5}))
  }

  currencyOptions = {
    minimumFractionDigits:2,
    maximumFractionDigits:2
  }

  getTotal = () =>{
    return this.state.total.toLocaleString("en-US", this.currencyOptions)
  }

  render() {
    return (
      <div className="product-wrapper">
        <div className='flexible'>
          <span>Shopping Cart: </span><span>{this.state.cart.length} total items.</span>
        </div>
        <div className='flexible'>
          <span>Total: </span><span>{this.getTotal()} $</span>
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
