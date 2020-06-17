import React from 'react';
import CartItem from './CartItem'

class Cart extends React.Component {
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
    render ()
    {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return <CartItem product={product} key={products.id} />
                })}
            </div>
        );
    }
}



export default Cart;