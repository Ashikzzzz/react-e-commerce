import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

// for header 

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                {/* header bar start  */}

                
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>


                  {/* header bar enf  */}
            </div>
        </nav>
    );
};

export default Header;