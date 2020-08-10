import React from 'react';
import './productdetails.css';
import EditProduct from './editproduct';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';


class ProductDetails extends React.Component {
    constructor(props){
    
        super(props)
        //console.log("got it")
        //console.log(this.props.location.state.id);
        
        this.state={
            data:[],
            filter:[],
            name:'',
            img:'',
            price:0.0,
            category:'',
            productId:0,
            success:false
        }
    }
    componentDidMount(){
        // console.log(this.props.location.state.id); 
        const delid=localStorage.getItem("id"); 
        console.log(delid)
        Axios.get("http://localhost:3000/arrayOfProducts/")
        .then((response)=>{
        // console.log(response)
        
        
        this.setState({data:response.data},()=>{
        console.log(typeof(this.state.data[0].productId))
        const temp=parseInt(delid)
        
        const filter=this.state.data.filter(p=>p.productId==delid)
        // this.setState({filter:filter})
        this.setState({img:filter[0].imgUrl,name:filter[0].name,price:filter[0].price,category:filter[0].category,productId:filter[0].productId})
        
        })
        
        
        }, (error)=>{
        console.log(error)
        })
        }

    editProduct(event){
        this.setState({editProductClicked:true})
    }
    deleteHandler(event)
    {
    const delid=parseInt(localStorage.getItem("id"))
    console.log(typeof(delid))
    Axios.delete("http://localhost:3000/arrayOfProducts/"+delid)
    .then((response)=>{
    console.log(response)
    this.setState({success:true})
    
    }, (error)=>{
    console.log(error)
    })
    
    }
    
    render() {
      if(this.state.success)
        {
            this.setState({success:false})
            return (<Redirect to={{pathname:"/products"}}></Redirect>)
        }
       
        console.log("render fn")
        console.log(this.state.data[0]) 
        return ( 
            <div>
                {!this.state.editProductClicked&&(
                    <div className="container">
 
            
                    <div className="left-column">
                      {/* <img src={this.state.data.imgUrl} alt=""/> */}
                    </div>
                    
                   
                    <div className="right-column">
                   
                    
                      <div className="product-description">
                        {/* <span>{this.state.data[0].category}</span> */}
                        <h1>{this.state.name}</h1>
                        <p>Say hello to Nokia 8 Sirocco - a phone that is designed to help you click stunning images and record quality audio. It comes with 6 GB of RAM and an internal storage of 128 GB. It is powered by the Octa-core Snapdragon Processor to let you enjoy faster browsing. Not to forget, this phone has an elegant design thanks to the beautiful blend of stainless steel.</p>
                      </div>
                  
                      
                      <div className="product-price">
                        <span>Rs.{this.state.price}</span>
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
                          <button class="button" onClick={this.deleteHandler.bind(this)}>Delete Product</button>
                          <button class="button"onClick={this.editProduct.bind(this)}>Edit Product Details</button>
                      </div>
                         
                    </div>
                  </div>
                )}
                {this.state.editProductClicked&&(
                <EditProduct name={this.state.name} category={this.state.category} productId={this.state.productId} price={this.state.price} imgUrl={this.state.img}>

                </EditProduct>
                    
                )}
            
          </div>
         );
    }
}
 
export default ProductDetails;