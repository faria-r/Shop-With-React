import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../tshirt/TShirt';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setcart]= useState([]);
  const handleAddToCart = tshirt =>{
    const exists = cart.find(shirt => shirt.id === tshirt._id);
    if(exists){
        alert('this product is already added');
    }
    else{
        const newCart = [...cart,tshirt];
        setcart(newCart);
        // alert('successfully added');
    }
  };
  const handleRemoveItem = tshirt =>{
const remaining = cart.filter(shirt => shirt._id !== tshirt._id);
setcart(remaining);
  }
    return (
        
        <div className='home-container'>
            <div className="tshirt-container">
            {
                tshirts.map(tshirt => <TShirt
                key={tshirt._id}
                tshirt= {tshirt}
            handleAddToCart= {handleAddToCart}

                ></TShirt>)
            }
            </div>
            <div className="cart-container">
                <Cart 
                cart ={cart}
                setcart={setcart}
                handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;