import React from 'react';
import BRother from '../Brother/BRother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <MySelf></MySelf>
                <BRother></BRother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;