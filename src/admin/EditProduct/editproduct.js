import React from 'react';
import Axios from 'axios';
import './editproduct.css';
import { Redirect } from 'react-router-dom';


class EditProduct extends React.Component {
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

    componentDidMount(){
        console.log(this.props)
        this.setState({
            id:this.props.id,
            qty:this.props.qty,
            name:this.props.name,
            category:this.props.category,
            price:this.props.price,
            imgUrl:this.props.imgUrl
        })
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

  

    editProductSubmit=(event)=>{
        event.preventDefault()

        console.log('Edit friend via axios and put')

        let productRequestBody = {
            "name": this.state.name,
            "price": this.state.price,
            "imgUrl":this.state.imgUrl,
            "category":this.state.category,
            "qty":this.state.qty,
            "id":this.state.id
        }
        Axios.put('http://localhost:3000/arrayOfProducts/'+this.state.id, productRequestBody)
                .then(response=>{

                    console.log(response);

                    this.setState({success:true})
                   
                }, error=>{

                    console.error(error);
                })
                
    }

    render() { 
        if(this.state.success)
        {
            this.setState({success:false})
            return (<Redirect to={{pathname:"/products"}}></Redirect>)
        }
     
        return ( 
            <div className="containerep">
    
               <div>
                   <form onSubmit={this.editProductSubmit.bind(this)}>
                   
                       <h2>Product Details:</h2>

                       <div className="rowep">
                            <div className="col-25ep">
                                <label className="labelep">*Add Category:</label>
                            </div>
                            <div className="col-75ep">
                                <input className="inputfieldep" type="text" value={this.state.category} id="category" onChange={this.getCategory} required/>
                            </div>
                       </div>

                       
                       <div className="rowep">
                            <div className="col-25ep">
                                <label className="labelep">*Product ID:</label>
                            </div>
                            <div className="col-75ep">
                                <input className="inputfieldep" type="number" pattern="^[1-9][0-9]*$" id="productID" value={this.state.id} readOnly onChange={this.getID} required/>
                            </div>
                        </div>   
                          
                       <div className="rowep">
                            <div className="col-25ep">
                                <label className="labelep">*Add Image URL:</label>
                            </div>
                            <div className="col-75ep">
                                <input className="inputfieldep" type="text" id="imgUrl" value={this.state.imgUrl} onChange={this.getURL} required/>
                            </div>
                       </div>
                      
                       <div className="rowep">
                            <div className="col-25ep">
                                <label className="labelep">*Product Name:</label>
                            </div>
                            <div className="col-75ep">
                                <input className="inputfieldep" type="text" id="name" value={this.state.name} onChange={this.getName} required/>
                            </div>
                       </div>
                     
                       <div className="rowep">
                            <div className="col-25ep">
                                <label className="labelep">*Price:</label>
                            </div>
                            <div className="col-75ep">
                                <input className="inputfieldep" type="0.25" id="price" pattern="^[1-9][0-9]+([\.,][0-9]+)?" title="Numbers greater than 0 and not preceded by 0" value={this.state.price} onChange={this.getPrice} required/>
                            </div>
                       </div>
                       
                       <div className="rowep">
                            <div className="col-25ep">
                                <label className="labelep">*Quantity:</label>
                            </div>
                            <div className="col-75ep">
                                <input className="inputfieldep" type="number" min="1" title="Numbers greater than 0" value={this.state.qty} onChange={this.getQty} required/>
                            </div>
                       </div>
                       
                       <div>
                            <button className="buttonep">Submit</button>
                       </div>  
    
                   </form>

               </div>
               
            </div>
          
          
         );
    }
}
 
export default EditProduct;