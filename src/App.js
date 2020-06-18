import React from 'react';
import Cart from './cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
       products: [
        {
            price: 28999,
            title: 'Mobile Phone',
            Qty: 1,
            img:'https://images.unsplash.com/photo-1575719362347-a70b129740e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            id: 1
        },
        {
            price: 2999,
            title: 'Watch',
            Qty: 1,
            img:'https://images.unsplash.com/photo-1511370235399-1802cae1d32f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1937&q=80',
            id: 2
        },
        {
            price: 48999,
            title: 'Laptop',
            Qty: 1,
            img:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            id: 3
        },
       ]
    }
}
handleIncreaseQuantity = ( product ) => {
    console.log('Hey, increase the quantity',product);
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].Qty += 1;

    this.setState({
        products: products
    })
}
handleDecreaseQuantity = (product) => {
    console.log('hey. decrease thr quantity', product);
    const{products} = this.state;
    const index = products.indexOf(product);

    if(products[index].Qty === 0)
    {
        return;
    }
    products[index].Qty -= 1;

    this.setState({
        products: products
    })
}
handleDeleteProduct =(id) => {
    const{products} = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    })
}

getCartCount = () => {
  const {products} = this.state;

  let count = 0;

  products.forEach((product) => {
    count += product.Qty;
  })
  return count;
}
getCartTotal = () => {
  const {products} = this.state;
  let cartTotal = 0;
  products.map((product) => {
    cartTotal = cartTotal + (product.Qty * product.price);
  })
  return cartTotal;
}
  render() {
    const {products} = this.state;
    return (
      <div className="App">
        {/* <h1>Cart</h1> */}
        <Navbar count = { this.getCartCount() }/>
        <Cart
          products = {products}
          onIncreaseQuantity = { this.handleIncreaseQuantity}
          onDecreaseQuantity = { this.handleDecreaseQuantity}
          onDeleteProduct = { this.handleDeleteProduct}
        />
        <div style={{fontSize:20, padding:10}}>TOTAL: <span>&#8377;</span> {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
