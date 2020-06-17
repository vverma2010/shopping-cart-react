import React from 'react';

class CartItem extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         price: 899,
    //         title: 'Mobile Phone',
    //         Qty: 1,
    //         img:''
    //     }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    // }
    increaseQuantity = () => {
        console.log('this.state', this.state);
        // setState type 1
        // this.setState({
        //     Qty: this.state.Qty + 1
        // });

        // setState type 2
        this.setState((prevState) => {
            return {
                Qty : prevState.Qty + 1
            }
        });
    }
    decreaseQuantity = () => {
        this.setState((prevState) => {
            const {Qty} = this.state;
            if(Qty === 0)
            {
                return;
            }
            return {
                Qty: prevState.Qty - 1
            }
        });
    }
    render ()
    {
        const {price, title, Qty} = this.props.product;
        return (
            <div className = "cart-item">
                <div className="left-block">
                    <img style={styles.image}></img>
                </div>
                <div className="right-block">
        <div style ={{fontSize:25,color: '#020204'}}>{title}</div>
        <div style={{ color: '#E45B27' }}><span>&#8377;</span> {price}</div>
        <div style={{ color: '#5F5F5F' }}>Qty: {Qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/1828/1828919.svg"
                        onClick = {this.increaseQuantity}>
                        </img>
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/1828/1828899.svg"
                        onClick = {this.decreaseQuantity}>
                        </img>
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1758/1758438.svg"></img>
                    </div>
                </div>
                
            </div>
        )
    }
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