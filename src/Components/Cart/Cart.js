import React from 'react';
import './Cart.css';
const Cart = ({cart,handleRemoveItem}) => {
    // conditional renderring 
    let message;
    if(cart.length === 0){
        message= <p>Please Buy at least One Item.</p>
    }
    //we can add more condition also
    else if(cart.length >= 1 && cart.length <=4){
        message= <div>
            <h3>Wow! You can Buy More Products!</h3>
        </div>
    }
    else{
        message= <p>Thanks For Shopping With Us!</p>
    }
    return (
        <div className={cart.length === 2 ? `orange` : 'slate'}>
            <h3>this is cart</h3>
            <h3 className={`bold ${cart.length === 2 ? 'green' : 'purple'}`}>{cart.length}</h3>
            {
                cart.map(tshirt => <p 
                key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={()=>handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {
                cart.length === 5 ? <p>Wow You selected 5 Items</p> : <p></p>
            }

            <p>and-&& operator</p>
            {
                cart.length === 3 && <p>Three Items!</p>
            }

            <p>OR - || operator</p>
            {
                cart.length === 8 || <p>Two Items!</p>
            }       
        </div>
    );
};

export default Cart;
/**
 * conditional renderring
 * 1.use element in a variable and then use if else to set value
 * 2.ternary operator condition ? true : false;
 * 3.&& operator (if condition is true i want to display something)
 * 4. or/ || operator (if condition is false i want to display something)
 */