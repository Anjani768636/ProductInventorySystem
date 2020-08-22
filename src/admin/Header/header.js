import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
class Header extends React.Component {

    render() { 
        return ( 
           
            <div className="header">
               
                <a href="#default" className="logo">Product Inventory System</a>

                <div className="header-right">
                    <Link to='/addproducts'>Add Products</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/'>Logout</Link>
                </div>
                
            </div>
         );
    }
}
 
export default Header;