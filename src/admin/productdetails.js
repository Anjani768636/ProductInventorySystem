import React from 'react';
import './productdetails.css';

import { Link } from 'react-router-dom';
import Axios from 'axios';


class ProductDetails extends React.Component {
    constructor(props){
    
        super(props)
        // console.log(this.props.location.state.id);
        this.state={data:[]}
    }
    componentDidMount(){
        // console.log(this.props.location.state.id); 
        const delid=localStorage.getItem("id"); 
        Axios.get("http://localhost:3000/arrayOfProducts/")
        .then((response)=>{
            console.log(response)
            console.log(response.data)
            const data=response.data.filter(t=>t.productId==delid)
            console.log(typeof(data))
            this.setState({data:data},()=>console.log(this.state.data[0].imgUrl))
        }, (error)=>{
            console.log(error)
        })
    }

    deleteProduct(){
      
        // Axios.delete("http://localhost:3000/arrayOfProducts/delid")
        // .then((response)=>{
        //     console.log(response)
        //     console.log(response.data)
        // }, (error)=>{
        //     console.log(error)
        // })
    }
    render() {
        console.log("render fn")
        console.log(this.state.data[0]) 
        return ( 
            
            <div className="container">
 
            
            <div className="left-column">
              {/* <img src={this.state.data.imgUrl} alt=""/> */}
            </div>
            
           
            <div className="right-column">
           
            
              <div className="product-description">
                {/* <span>{this.state.data[0].category}</span> */}
                {/* <h1>{this.state.data.name}</h1> */}
                <p>Say hello to Nokia 8 Sirocco - a phone that is designed to help you click stunning images and record quality audio. It comes with 6 GB of RAM and an internal storage of 128 GB. It is powered by the Octa-core Snapdragon Processor to let you enjoy faster browsing. Not to forget, this phone has an elegant design thanks to the beautiful blend of stainless steel.</p>
              </div>
          
              
              <div className="product-price">
                <span>Price: Rs.36,999</span>
              </div>
          
              
              <div className="row">
                  <div className="column" style={{backgroundcolor:"#aaa"}}>
                     <p>Spec</p>
                  </div>
                  <div className="column" style={{backgroundcolor:"#bbb"}}>
                     <p>Spec</p> 
                  </div>
              </div>
          
             
              <div className="product-description">
                  <span>About Manufacturer</span>
                  <p>Say hello to Nokia 8 Sirocco - a phone that is designed to help you click stunning images and record quality audio. .</p>
              </div>
          
              
              <div className="row">
                  <button class="button" onClick={this.deleteProduct()}>Delete Product</button>
                  <button class="button">Edit Product Details</button>
              </div>
                 
            </div>
          </div>
         );
    }
}
 
export default ProductDetails;