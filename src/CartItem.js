import React from 'react';

class CartItem extends React.Component {
    render ()
    {
        return (
            <div className = "cart-item">
                <div className="left-block">
                    <img style={styles.image}></img>
                </div>
                <div className="right-block">
                    <div style ={{fontSize:25,color: '#020204'}}>Phone</div>
                    <div style={{ color: '#E45B27' }}>Rs 899</div>
                    <div style={{ color: '#5F5F5F' }}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
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