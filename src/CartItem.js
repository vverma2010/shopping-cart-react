import React from 'react';

const CartItem = (props) => {
    

        const {price, title, Qty} = props.product;
        // using this so that we don't have to write "this.props" repeatedly 
        const {product, onIncreaseQuantity, onDecreaseQuantity,onDeleteProduct} = props;
        return (
            <div className = "cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img}></img>
                </div>
                <div className="right-block">
        <div style ={{fontSize:25,color: '#020204'}}>{title}</div>
        <div style={{ color: '#E45B27' }}><span>&#8377;</span> {price}</div>
        <div style={{ color: '#5F5F5F' }}>Qty: {Qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/1828/1828919.svg"
                        onClick = {() => onIncreaseQuantity(product)}>
                        </img>
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/1828/1828899.svg"
                        onClick = {() => onDecreaseQuantity(product)}>
                        </img>
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1758/1758438.svg"
                        onClick = { () => onDeleteProduct(product.id)}>
                        </img>
                    </div>
                </div>
                
            </div>
        )
}

const styles = {
    image: {
        height: 120,
        width: 120,
        borderRadius: 4,
        background: '#CCC'
    }
}

export default CartItem;