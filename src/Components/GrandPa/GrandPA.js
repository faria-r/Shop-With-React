import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Graand.css';

export const ringContext = createContext('Gold Ring');
export const moneyContext = createContext(5000);
const GrandPA = () => {
    const [house,sethouse] = useState(1);
    const [money,setMoney] = useState(5000);
  
    const ring = 'diamondRing';
    return (
        <ringContext.Provider value={[house,sethouse]}>
            <moneyContext.Provider value={[money,setMoney]}>
            <div className='grand'>
                <h2>Grandpa</h2>
                <section className='flex'>
                <Father house={house} ring={ring}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
            </moneyContext.Provider>
        </ringContext.Provider>
    );
};

export default GrandPA;