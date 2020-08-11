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
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/'>Logout</Link>
            </div>
    </div>
         );
    }
}
 
export default Header;