import React from 'react';
import Cart from './cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
       products: [
        {
            price: 899,
            title: 'Mobile Phone',
            Qty: 1,
            img:'',
            id: 1
        },
        {
            price: 299,
            title: 'Watch',
            Qty: 1,
            img:'',
            id: 2
        },
        {
            price: 38999,
            title: 'Laptop',
            Qty: 1,
            img:'',
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
      </div>
    );
  }
}

export default App;
