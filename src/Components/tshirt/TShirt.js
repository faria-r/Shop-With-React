import React from 'react';
import './thsirt.css'

const TShirt = ({tshirt,handleAddToCart}) => {
    const {picture,name,price} = tshirt;
    return (
        <div className='tshirt'>
         <img src={picture} alt="" srcset="" />
         <h2>{name}</h2>
         <h4>Price:{price}</h4>
         <button onClick={()=> handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;