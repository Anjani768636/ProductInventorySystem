import React from 'react';
import  axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import './products.css';
import ProductDetails from './productdetails';

class Products extends React.Component {
    
    state={
        searchtext:"",
        viewProductClicked:false,
        viewproductId:0,
        emp:[],
        temp:[]
    }

    componentDidMount(){
       
        this.getProducts();
    }
    getProducts(){
        axios.get('http://localhost:3000/arrayOfProducts')
            .then((response)=>{
                console.log(response)
                console.log(response.data)
                this.setState({emp: response.data,temp:response.data})
                
                console.log(this.state.emp)
            }, (error)=>{
                console.log(error)
            })
    }



    searchHandle(event){
        this.setState({searchtext:event.target.value})
    }
    searchSubmit(event){
        console.log("inside searchtext")
        const products=this.state.temp.filter(p=>p.name.toLowerCase().includes(this.state.searchtext.toLowerCase()))
        this.setState({emp:products})
    }
    viewProduct(event){
        console.log(event.target.id)
        this.setState({viewProductClicked:true, viewproductId:event.target.id})
        localStorage.setItem("id",event.target.id)
        // return <ProductDetails/>
        //const pid=event.target.id;
        //return <Redirect to ={{pathname:"/productdetails",state:{pid}}}></Redirect>
    }


    render() { 
        if(this.state.viewProductClicked){
            this.setState({viewProductClicked:false})
            // return <ProductDetails/>
             return <Redirect to ={{pathname:"/productdetails",state:{id:this.state.viewproductId}}}></Redirect>
        }
        return ( 
            <div>
              <div>

            <div>
                <label className="sct">Select Category:</label>
                <select name="category" style={{width:"200px"}}>
                <option>--Select--</option>
                </select>
           </div>
        
        <div>
          <form>
                <div>
                    <label className="scts">Search:</label>
                    <input type="text" onChange={this.searchHandle.bind(this)}/>
                </div>   
                    <div className="scts">
                        <button className="button" onClick={this.searchSubmit.bind(this)}style={{marginLeft:"50px"}}>Search</button>
                    </div>  
          </form>
        </div>

        </div>

        <div className="container">
  
        <div className="card" style={{marginRight:"10px",width:"300px"}}>
        {/* <img src="plusicon.png" alt="Denim Jeans" style="width:100%"/> */}
        <p>Add Product.</p>
        <button className="button" >Add Product</button>
        </div>
        
        {this.state.emp.map(p=>(
         
        <div className="card" style={{marginRight:"10px"}}>
         <img src={p.imgUrl} alt={p.name} style={{width:"100%"}}/> 
        <p>{p.name} Rs: {p.price}</p>
        <button className="button" onClick={this.viewProduct.bind(this)} id={p.productId}>View Product</button>

        </div>

        ))
    }

        
      
</div>
</div>
         );
    }
}
 
export default Products;