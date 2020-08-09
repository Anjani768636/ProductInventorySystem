import React from 'react';
import './productdetails.css';

import { Link } from 'react-router-dom';


class ProductDetails extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props.location.state.id);
    }
    componentDidMount(){
       
    }
    render() { 
        return ( 
            
            <div class="container">
 
            
            <div class="left-column">
              <img src="https://www.idgcdn.com.au/products/image/12673/angle/8/415x415/345908/" alt=""/>
            </div>
            
           
            <div class="right-column">
           
            
              <div class="product-description">
                <span>SMARTPHONE</span>
                <h1>Nokia 8 Sirocco</h1>
                <p>Say hello to Nokia 8 Sirocco - a phone that is designed to help you click stunning images and record quality audio. It comes with 6 GB of RAM and an internal storage of 128 GB. It is powered by the Octa-core Snapdragon Processor to let you enjoy faster browsing. Not to forget, this phone has an elegant design thanks to the beautiful blend of stainless steel.</p>
              </div>
          
              
              <div class="product-price">
                <span>Price: Rs.36,999</span>
              </div>
          
              
              <div class="row">
                  <div class="column" style={{backgroundcolor:"#aaa"}}>
                     <p>Spec</p>
                  </div>
                  <div class="column" style={{backgroundcolor:"#bbb"}}>
                     <p>Spec</p> 
                  </div>
              </div>
          
             
              <div class="product-description">
                  <span>About Manufacturer</span>
                  <p>Say hello to Nokia 8 Sirocco - a phone that is designed to help you click stunning images and record quality audio. .</p>
              </div>
          
              
              <div class="row">
                  <button class="button ">Delete Product</button>
                  <button class="button ">Edit Product Details</button>
              </div>
                 
            </div>
          </div>
         );
    }
}
 
export default ProductDetails;