import React from 'react';

const Navbar = (props) => {
    return (
        <div style = { styles.nav}>
            <div style = {styles.cartIconContainer}>
                <img style = {styles.cartIcon} src="https://image.flaticon.com/icons/png/512/833/833339.png" alt="Cart-Icon"/>
    <span style = {styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )
}

const styles = {
    cartIcon: {
        height: 32,
        marginRight:20 
    },
    nav: {
        height:70,
        background: '#A5BECF',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer:{
        positive: 'relative'
    },
    cartCount: {
        background:'yellow',
        borderRadius:'50%',
        padding: '4px 10px',
        position: 'absolute',
        right: 0,
        top: 0 
    }
}

export default Navbar;