import React from 'react';
import Cart from './cart';
import Navbar from './Navbar';
import  * as firebase from 'firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
       products: [],
       loading: true
    }
    this.db = firebase.firestore();
}

componentDidMount () {
  // firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot) => {
  //     console.log(snapshot);

  //     snapshot.docs.map((doc) => {
  //       console.log(doc.data());
  //     });

  //     const products = snapshot.docs.map((doc) => {

  //       const data = doc.data();
  //       data['id'] = doc.id;
  //       return data;
  //     })
  //     this.setState({
  //       products: products,
  //       loading: false

  //     })
  //   })

  this.db
  .collection('products')
  // ".where" is used to sort content according to the parameters passed
  // we can use multiple ".where"
  // .where('price','==',999)
  // ".orderBy" is used to arrange content either in acsending or descending order
    // .orderBy('price','asc')
  .onSnapshot((snapshot) => {
    console.log(snapshot);

    snapshot.docs.map((doc) => {
      console.log(doc.data());
    });

    const products = snapshot.docs.map((doc) => {

      const data = doc.data();
      data['id'] = doc.id;
      return data;
    })
    this.setState({
      products: products,
      loading: false

    })
  })
}
handleIncreaseQuantity = ( product ) => {
    console.log('Hey, increase the quantity',product);
    const {products} = this.state;
    const index = products.indexOf(product);

    // products[index].Qty += 1;

    // this.setState({
    //     products: products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        Qty:products[index].Qty + 1
      })
      .then(() => {
        console.log('Updated Successfully !!');
      })
      .catch((error) => {
        console.log('error', error);
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
    // products[index].Qty -= 1;

    // this.setState({
    //     products: products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        Qty: products[index].Qty - 1
      })
      .then(() => {
        console.log('Updated Successfully !!');
      })
      .catch((error) => {
        console.log('error',error);
      })
}
handleDeleteProduct =(id) => {
    const{products} = this.state;

    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //     products: items
    // })

    const docRef = this.db.collection('products').doc(id);
    docRef
      .delete()
      .then(() => {
        console.log('Deleted Successfully !!');
      })
      .catch((error) => {
        console.log('error', error);
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
    if(product.Qty > 0)
    {
      cartTotal = cartTotal + (product.Qty * product.price);
    }
    return '';
  });
  return cartTotal;
}
addProduct =() => {
  this.db
    .collection('products')
    .add({
      img: 'https://images.unsplash.com/photo-1558893885-06a2e8f6ece1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      price: 900,
      Qty: 2,
      title: 'Perfume'
    })
    .then((docRef) => {
      console.log('product has been added !',docRef);
    })
    .catch((error) => {
      console.log('error', error);
    })

}
  render() {
    const {products,loading} = this.state;
    return (
      <div className="App">
        {/* <h1>Cart</h1> */}
        <Navbar count = { this.getCartCount() }/>
        <button onClick={this.addProduct }style= {{padding:10, fontSize: 25}}>Add a Product</button>
        <Cart
          products = {products}
          onIncreaseQuantity = { this.handleIncreaseQuantity}
          onDecreaseQuantity = { this.handleDecreaseQuantity}
          onDeleteProduct = { this.handleDeleteProduct}
        />
          {loading && <h1>Loading Products...</h1>}
        <div style={{fontSize:20, padding:10}}>TOTAL: <span>&#8377;</span> {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
