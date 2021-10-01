import React from 'react';
import './Cart.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserAlt} from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faUserAlt} />;
    const {cart}=props;
    let total=0;
    for(const poet of cart){
        total=total+poet.salary;
    }
    return (
        <div className='cart'>
            <h3>{cartIcon} Poets Added: {props.cart.length}</h3>
            <h3>Total Cost: ${total}</h3>
            <div className='poet-value'>
                {cart.map(poet=><p className='item'><img src={poet.img} alt="" />{poet.name}</p>)}
                </div>
            <br />
            <button className='btn'>Buy Now</button>
        </div>
    );
};

export default Cart;