import React from 'react';
import Axios from 'axios';
import './addproducts.css';
import { Redirect } from 'react-router-dom';
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
                    <div>
                        <div>
                            <h2>Add Product Details</h2>
                        </div>
                        <div className="containerap">
               
                            <form onSubmit={this.addProduct.bind(this)}>

                                <div className="rowap">
                                    <div className="col-25ap">
                                        <label className="labelap">*Add Category:</label>
                                    </div>
                                    <div className="col-75ap">
                                        <input className="inputfield" type="text" id="category" onChange={this.getCategory} required/>
                                    </div>
                                </div>

                                <div className="rowap">
                                    <div className="col-25ap">
                                        <label className="labelap">*Product ID:</label>
                                    </div>
                                    <div className="col-75ap">
                                        <input className="inputfield" type="number" min="1" id="productID" onChange={this.getID} required/>
                                    </div>
                                </div>

                                <div className="rowap">
                                    <div className="col-25ap">
                                        <label className="labelap">*Add Image URL:</label>
                                    </div>
                                    <div className="col-75ap">
                                        <input className="inputfield" type="text" id="imgUrl" onChange={this.getURL} required/>
                                    </div>
                                </div>

                                <div className="rowap">
                                    <div className="col-25ap">
                                        <label className="labelap">*Product Name:</label>
                                    </div>
                                    <div className="col-75ap">
                                        <input className="inputfield" type="text" id="name" onChange={this.getName} required/> 
                                    </div>
                                </div>
                    
                                <div className="rowap">
                                    <div className="col-25ap">
                                        <label className="labelap">*Price:</label>
                                    </div>
                                    <div className="col-75ap">
                                        <input className="inputfield" type="0.25" pattern="^[1-9][0-9]*$" title="Numbers greater than 0 and not preceded by 0 " id="price" onChange={this.getPrice} required/>
                                    </div>
                                </div>

                                <div className="rowap">
                                    <div className="col-25ap">
                                        <label className="labelap">*Quantity:</label>
                                    </div>
                                    <div className="col-75ap">
                                        <input className="inputfield" type="number" min="1" title="Numbers greater than 0" onChange={this.getQty} required/>
                                    </div>
                                </div>

                                <div className="rowap">
                                    <button className="buttonap" >Submit</button>
                                </div>
                            </form>

                        </div>

                    </div>
            </div> 
         );
    }
}
 
export default AddProduct;