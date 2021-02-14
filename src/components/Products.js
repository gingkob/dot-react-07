import React from 'react'
import Product from './Product/Product'

const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 5
  },
  {
    emoji: '🍩',
    name: 'donuts',
    price: 2.5,
  },
  {
    emoji: '🍉',
    name: 'watermelon',
    price: 4
  }
];

class Products extends React.Component {

  state = {
    cart: [],
    total: 0
  }

  onAdd = (name, price) => {
    this.setState(prevState => ({ cart: [...prevState.cart, name], total: prevState.total + price }))
  }

  onRemove = (name, price) => {
    if (this.state.cart.length === 0) {
      return;
    }
    this.setState(prevState => {
      let itemIndex = prevState.cart.indexOf(name);
      if (itemIndex < 0) {
        return;
      }
      let newCart = [...prevState.cart]
      newCart.splice(itemIndex, 1)
      return ({ cart: newCart, total: prevState.total - price })
    })
  }

  currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }

  getTotal = () => {
    return this.state.total.toLocaleString("en-US", this.currencyOptions)
  }


  render() {
    const productList = products.map((product, index) => (
      <Product key={index}
        emoji={product.emoji}
        name={product.name}
        price={product.price}
        onAdd={() => this.onAdd(product.name, product.price)}
        onRemove={() => this.onRemove(product.name, product.price)}
        cartLength={this.state.cart.length}
        total={this.getTotal()}
      />
    ))
    return (<>
      {productList}
    </>)
  }
}

export default Products
