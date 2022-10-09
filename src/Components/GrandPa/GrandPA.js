import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Graand.css'
const GrandPA = () => {
    return (
        <div className='grand'>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default GrandPA;