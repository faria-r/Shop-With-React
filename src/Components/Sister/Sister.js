import React, { useContext } from 'react';
import { moneyContext } from '../GrandPa/GrandPA';

const Sister = () => {
    const [money,setMoney] = useContext(moneyContext);
    return (
        <div>
            <h3>Sister</h3>
            <h4>Money:{money}</h4>
            <button onClick={()=> setMoney(money + 1000)}>ADD 1000</button>
        </div>
    );
};

export default Sister;