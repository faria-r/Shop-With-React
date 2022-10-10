import React from 'react';
import BRother from '../Brother/BRother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({house,ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <h3>House NO:{house}</h3>
            <section className='flex'>
                <MySelf house={house} ring={ring}></MySelf>
                <BRother house={house}></BRother>
                <Sister house={house}></Sister>
            </section>
        </div>
    );
};

export default Father;