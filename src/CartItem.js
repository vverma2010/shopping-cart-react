import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 899,
            title: 'Mobile Phone',
            Qty: 1,
            img:''
        }
    }
    render ()
    {
        const {price, title, Qty} = this.state;
        return (
            <div className = "cart-item">
                <div className="left-block">
                    <img style={styles.image}></img>
                </div>
                <div className="right-block">
        <div style ={{fontSize:25,color: '#020204'}}>{title}</div>
        <div style={{ color: '#E45B27' }}>{price}</div>
        <div style={{ color: '#5F5F5F' }}>Qty:{Qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/1828/1828919.svg"></img>
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/1828/1828899.svg"></img>
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1758/1758438.svg"></img>
                    </div>
                </div>
                
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#CCC'
    }
}

export default CartItem;