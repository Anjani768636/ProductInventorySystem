import React from 'react';

import './header.css';
class Header extends React.Component {

    render() { 
        return ( 
            // <h2>HI</h2>
            <div class="header">
               
                <a href="#default" class="logo">Products</a>
                <div class="header-right">
                <a class="active" href="#home">Dashboard</a>
                <a href="#contact">Logout</a>
            </div>
    </div>
         );
    }
}
 
export default Header;