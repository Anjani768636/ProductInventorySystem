import React from 'react';
import Axios from 'axios';
import './addproducts.css';
import { Link, Redirect } from 'react-router-dom';


class EditProduct extends React.Component {
    constructor(props){
    
        super(props)
        this.state ={
            productId:0,
            name:'',
            price:0.0,
            imgUrl:'',
            category:'',
            qty:0,
            success:false
        }
    
    }

    componentDidMount(){
        console.log(this.props)
        this.setState({
            productId:this.props.productId,
            name:this.props.name,
            category:this.props.category,
            price:this.props.price,
            imgUrl:this.props.imgUrl
        })
    }
    // componentWillMount(){
    //     if(this.props.location.state !== undefined){
    //         Axios.get('http://localhost:3000/products/'+this.props.location.state.myid)
    //             .then(response=>{
    //                 console.log(response);
    //                 this.setState({
    //                     name: response.data.name,
    //                     since:response.data.since,
    //                     id: response.data.id
    //                 })
    //             }, error=>{
    //                 console.error(error);
    //             })
    //     }
    // }


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
        this.setState({friendsince: event.target.value})
    }

    editProductSubmit=(event)=>{
        event.preventDefault()
        console.log('Edit friend via axios and put')
        let productRequestBody = {
            "name": this.state.name,
            "price": this.state.price,
            "imgUrl":this.state.imgUrl,
            "productId":this.state.productId,
            "category":this.state.category,
            "qty":this.state.qty,
            "id":this.state.productId
        }
        Axios.put('http://localhost:3000/arrayOfProducts/'+this.state.productId, productRequestBody)
                .then(response=>{
                    console.log(response);
                    this.setState({success:true})
                   
                }, error=>{
                    console.error(error);
                })
                //return <Redirect to="/productdetails" />;
                
    }

    render() { 
        if(this.state.success)
        {
            this.setState({success:false})
            return (<Redirect to={{pathname:"/products"}}></Redirect>)
        }
     
        return ( 
            <div className="main-block">
        
            <div style={{display:"flex"}}>
               
               <div className="part-one">
                   <form>
                   
                       <h2>Product Details:</h2>
       
                       <div>
                           <label>*Select Category:</label>
                           <select name="category" style={{width:"200px"}}>
                               <option>--Select--</option>
                           </select>
                       </div>
                      
                       <div>
                           <label>Add Category:</label>
                           <input type="text" value={this.state.category} onChange={this.getCategory}/>
                           <button className="button">Add</button>
                       </div>

                       <div>
                           <label>Product ID:</label>
                           <input type="number" value={this.state.productId} readOnly id="productID" onChange={this.getID}/>
                       </div>
                      
                       <div>
                           <label>*Add Image URL:</label>
                           <input type="text" id="imgUrl" value={this.state.imgUrl} onChange={this.getURL}/>
                           {/* <button className="button">Add Images</button> */}
                       </div>
                      
                       <div>
                           <label>*Product Name:</label>
                           <input type="text" id="name" value={this.state.name} onChange={this.getName}/>
                       </div>
                     
                       <div>
                           <label>Product Description:</label>
                           <div>
                               <input type="text" style={{height:"200px",width:"300px"}}/>
                           </div>
                       </div>
                      
                       <div>
                           <label>*Price:</label>
                           <input type="0.25" id="price" value={this.state.price} onChange={this.getPrice}/>
                       </div>
                       
                       <div>
                           <label>Quantity:</label>
                           <input type="text" value={this.state.qty} onChange={this.getQty}/>
                       </div>
                      
                       <div>
                           <label>Max Quantity:</label>
                           <input type="text"/>
                       </div>
                       
                   
                   </form>
               </div>
               
                <div class="part-two">
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
                           
                           
                       <button className="button" onClick={this.editProductSubmit.bind(this)}>Submit</button>
                       </div>  
                       
                   
               </form>
               </div>
            </div>
           </div>
         );
    }
}
 
export default EditProduct;