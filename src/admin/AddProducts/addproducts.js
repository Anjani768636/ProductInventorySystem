import React from 'react';
import Axios from 'axios';
import './addproducts.css';
import { Link, Redirect } from 'react-router-dom';
import Header from '../Header/header'

class AddProduct extends React.Component {
    constructor(props){
    
        super(props)
        this.state ={
            id:0,
            name:'',
            price:0.0,
            imgUrl:'',
            category:'',
            qty:0,
            success:false
            
        }
    
    }
 

    getName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({name: event.target.value})
        
    }

    getCategory=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({category: event.target.value})
        
    }

    getURL=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({imgUrl: event.target.value})
    }

    getPrice=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({price: event.target.value})
    }

    getQty=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({qty: event.target.value})
    }

    getID=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({id: event.target.value})
    }

    addProduct=()=>{
        console.log('Add Product via axios and post')
        let productRequestBody = {
            "id":this.state.id,
            "name": this.state.name,
            "price": this.state.price,
            "imgUrl":this.state.imgUrl,
            "category":this.state.category,
            "qty":this.state.qty
            
        }
        console.log(productRequestBody)
        Axios.post('http://localhost:3000/arrayOfProducts', productRequestBody)
                .then(response=>{
                    console.log(response);
                    this.setState({success:true})
                    
                }, error=>{
                    console.error(error);
                })
                return <Redirect push to="/productdetails" />;
    }

    render() { 
        if(this.state.success)
        {
            this.setState({success:false})
            return (<Redirect to={{pathname:"/products"}}></Redirect>)
        }
        return ( 
            <div>
            <Header></Header>
            <div className="main-block">
             
            <div >
               
               <div className="part-one">
                   <form onSubmit={this.addProduct.bind(this)}>
                   
                       <h2>Product Details:</h2>
       
                       {/* <div>
                           <label>Select Category:</label>
                           <select name="category" style={{width:"200px"}}>
                               <option>--Select--</option>
                           </select>
                       </div> */}
                      
                       <div>
                           <label>*Add Category:</label>
                           <input type="text" id="category" onChange={this.getCategory} required/>
                           {/* <button className="button">Add</button> */}
                       </div>

                       <div>
                           <label>*Product ID:</label>
                           <input type="number" id="productID" onChange={this.getID} required/>
                       </div>
                      
                       <div>
                           <label>*Add Image URL:</label>
                           <input type="text" id="imgUrl" onChange={this.getURL} required/>
                           {/* <button className="button">Add Images</button> */}
                       </div>
                      
                       <div>
                           <label>*Product Name:</label>
                           <input type="text" id="name" onChange={this.getName} required/>
                       </div>
                     
                       <div>
                           <label>Product Description:</label>
                           <div>
                               <input type="text" style={{height:"200px",width:"300px"}} />
                           </div>
                       </div>
                      
                       <div>
                           <label>*Price:</label>
                           <input type="0.25" pattern="^[1-9][0-9]*$" title="Numbers greater than 0" id="price" onChange={this.getPrice} required/>
                       </div>
                       
                       <div>
                           <label>*Quantity:</label>
                           <input type="number" pattern="^[1-9][0-9]*$" title="Numbers greater than 0" onChange={this.getQty} required/>
                       </div>
                      
                       <div>
                           <label>About Manufacturer</label>
                           <div>
                               <input type="textarea"/>
                           </div>
                       </div>
                       <div>
                           
                           <button className="button" >Submit</button>
                       </div>  
                   
                   </form>
               </div>
               
                {/* <div class="part-two">
               <form>
                   
                       <h2>Additional Details:</h2>
                       <div>
                           <label>Specifications:</label>
                           <div>
                               <input type="text" style={{height:"200px",width:"300px"}}/>
                           </div>
                       </div>
                      
                       <div>
                           <label>About Manufacturer</label>
                           <div>
                               <input type="text" style={{height:"200px",width:"300px"}}/>
                           </div>
                       </div>
                       
                       <div>
                           <label>Stock Threshold:</label>
                           <input type="text"/>
                       </div>
                       
                       <div>
                           
                       
                           <button className="button" onClick={this.addProduct.bind(this)}>Submit</button>
                       </div>  
                       
                   
               </form>
               </div> */}
            </div>
           </div>
           </div>
         );
    }
}
 
export default AddProduct;