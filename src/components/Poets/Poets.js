import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Poet from '../Poet/Poet';
import './Poets.css';

const Poets = () => {
    
const [poets, setPoets]= useState ([]);
const [cart, setCart]=useState([]);

    useEffect(()=>{
        fetch('./poetList.JSON')
        .then(res=>res.json())
        .then(data=>setPoets(data))
      } , []);

      const handleAddToCart=poet=>{
        const newCart=[...cart, poet];
        setCart(newCart);
    }
    return (
        <>
        <div className="poets-container">
            <div className="poet-container">
            {
                poets.map(poet=> <Poet key={poet.key} poet={poet} handleAddToCart={handleAddToCart}> </Poet>)
            }
            </div>
            <div className="cart-container">
            <Cart cart={cart} ></Cart>           
            </div>
        </div>
        </>
    );
};

export default Poets;