import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
           <Link to='/'>Home</Link>
           <Link to='/orders'>Orders</Link>
           <Link to='/about'>About</Link>
           <Link to='/grandpa'>Grand PA</Link>
           {/* <Link to='/'>Home</Link> */}
        </nav>
    );
};

export default Header;