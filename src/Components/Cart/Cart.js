import React from 'react';

const Cart = ({cart,handleRemoveItem}) => {
    return (
        <div>
            <h3>this is cart</h3>
            <h3>{cart.length}</h3>
            {
                cart.map(tshirt => <p 
                key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={()=>handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;