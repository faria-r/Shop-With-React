import React, { useContext } from 'react';
import { ringContext } from '../GrandPa/GrandPA';

const Cousin = () => {
    const [house,sethouse] = useContext(ringContext);
    return (
        <div>
            <h3>Cousin</h3>
            <h3>House:{house}</h3>
            <button onClick={()=> sethouse(house-1)}>Reduce </button>
        </div>
    );
};

export default Cousin;