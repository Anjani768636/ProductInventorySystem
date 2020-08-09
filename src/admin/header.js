import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
class Header extends React.Component {

    render() { 
        return ( 
            // <h2>HI</h2>
            <div className="header">
               
                <Link to='/products'>Products</Link>
                <div className="header-right">
                <a href="#home">Dashboard</a>
                <a href="#contact">Logout</a>
            </div>
    </div>
         );
    }
}
 
export default Header;