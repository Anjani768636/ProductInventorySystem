import React from 'react';
import './productdetails.css';
import EditProduct from '../EditProduct/editproduct';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import Header from '../Header/header'


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
            qty:0,
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
        console.log(typeof(this.state.data[0].id))
        const temp=parseInt(delid)
        
        const filter=this.state.data.filter(p=>p.id==delid)
        // this.setState({filter:filter})
        this.setState({img:filter[0].imgUrl,name:filter[0].name,price:filter[0].price,category:filter[0].category,id:filter[0].id,qty:filter[0].qty})
        
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
            <Header></Header>
          
            <div>
              
                {!this.state.editProductClicked&&(
                    <div className="container">
 
            
                    <div className="left-column">
                     <img src={this.state.img} alt=""/>
                    </div>
                    
                   
                    <div className="right-column">
                   
                    
                      <div className="product-description">
                        {/* <span>{this.state.data[0].category}</span> */}
                        <h1>{this.state.name}</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      </div>
                  
                      
                      <div className="product-price">
                        <span>Rs.{this.state.price}</span>
                      </div>
                  
                      
                      {/* <div className="row">
                          <div className="column" style={{backgroundcolor:"#aaa"}}>
                          <p>simply dummy text of spec. </p>
                          </div>
                          <div className="column" style={{backgroundcolor:"#bbb"}}>
                          <p>simply dummy text of spec. </p>
                          </div>
                      </div> */}
                  
                     
                      <div className="product-description">
                          <span>About Manufacturer</span>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      </div>
                  
                      
                      <div className="row">
                          <button class="button" onClick={this.deleteHandler.bind(this)}>Delete Product</button>
                          <button class="button"onClick={this.editProduct.bind(this)}>Edit Product Details</button>
                      </div>
                         
                    </div>
                  </div>
                )}
                {this.state.editProductClicked&&(
                <EditProduct name={this.state.name} category={this.state.category} id={this.state.id} price={this.state.price} imgUrl={this.state.img} qty={this.state.qty}>

                </EditProduct>
                    
                )}
            
          </div>
          </div>
         );
    }
}
 
export default ProductDetails;