import React from 'react';
import Axios from 'axios';
import './addproducts.css';
import Header from '../Header/header'
import { withRouter } from 'react-router-dom';

class AddProduct extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            name:'',
            price:0.0,
            image:'',
            category:'',
            quantity:0,
            success:false  
        }
    }



    getName=(event)=>{
        this.setState({name: event.target.value})
    }

    getCategory=(event)=>{
        this.setState({category: event.target.value})
    }

    getURL=(event)=>{
        this.setState({image: event.target.value})
    }

    getPrice=(event)=>{
        this.setState({price: event.target.value})
    }

    getQty=(event)=>{
        this.setState({quantity: event.target.value})
    }

    addProduct(){
      
        let productRequestBody = {
            "id":this.state.id,
            "name": this.state.name,
            "price": this.state.price,
            "image":this.state.image,
            "category":this.state.category,
            "quantity":this.state.quantity
        }

    Axios.post('http://localhost:3000/allProducts', productRequestBody)
        .then(response=>{
        console.log(response);
       this.setState({success:true})
        
        }, error=>{
             console.error(error);
        })
    }

    mainpage(event){
        this.props.history.push('/products')  
    }

    render() { 

        if(this.state.success===true)
        {
            return (
                <div>
                    <Header></Header>
                <center>
                    <h2>Product Added Successfully!!!</h2>
                    <p>Click on OK to redirect to products page.</p>
                    <button type="submit" className="buttonap" onClick={this.mainpage.bind(this)}>OK</button>
                </center>
                </div>
            )
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

 

export default withRouter (AddProduct);



