import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house,ring}) => {
    return (
        <div>
            <h2>ME</h2>
            <p>HOuse:{house}</p>
            <section>
                <Special ring={ring}>
                    
                </Special>
            </section>
        </div>
    );
};

export default MySelf;