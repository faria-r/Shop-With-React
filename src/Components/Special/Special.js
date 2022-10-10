import React, { useContext } from 'react';
import { ringContext } from '../GrandPa/GrandPA';

const Special = () => {
    // const rings = useContext(ringContext);
    const [house,sethouse] = useContext(ringContext);
    return (
        <div>
            <h3>I am your special ONe!</h3>
            <p>Gift:{house}</p>
            <button onClick={()=> sethouse(house + 1)}>Increase</button>
        </div>
    );
};

export default Special;