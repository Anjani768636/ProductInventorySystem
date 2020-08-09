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
        addProductClicked:false,
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
    addProduct(event){ 
    //     console.log('Add Product via axios and post')
    // let productRequestBody = {
    //     "name": this.state.name,
    //     "since": this.state.friendsince,
    //     "friendimage":this.state.friendimage
    // }
    // axios.post('http://localhost:3000/allfriends', productRequestBody)
    //         .then(response=>{
    //             console.log(response);
    //             this.props.history.push('/')
    //         }, error=>{
    //             console.error(error);
    //         })
    this.setState({addProductClicked:true})
    
}


    render() { 
        if(this.state.addProductClicked){
            this.setState({addProductClicked:false})
            return <Redirect push to="/addproducts" />;
        }
        if(this.state.viewProductClicked){
            this.setState({viewProductClicked:false})
            // return <ProductDetails/>
            console.log("problem")
            console.log(this.state.viewproductId)
            const tempId=this.state.viewproductId;
            //return <Redirect push to="/productdetails" />;
             return <Redirect to ={{pathname:"/productdetails",state:{id:tempId}}}></Redirect>
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
        <div className="cards">
  
        <div className="card" style={{marginRight:"10px"}}>
        <img src="" alt="Add Product"/> 
        <p>Click Here To</p>
        <p>Add Product.</p>
        <button className="button" onClick={this.addProduct.bind(this)}>Add Product</button>
        </div>
        
        {this.state.emp.map(p=>(
         
        <div className="card" style={{marginRight:"10px"}}>
            <div style={{height:"70%"}}>
         <img src={p.imgUrl} alt={p.name} style={{height:"70%",width:"100%"}}/> 
         </div>
         <div>
        <p>{p.name} Rs: {p.price}</p>
        <button className="button" onClick={this.viewProduct.bind(this)} id={p.productId}>View Product</button>
        {/* <button className="button" >Edit</button>
        <button className="button" >Delete</button> */}
         </div>
        </div>
        

        ))
        
    }
    </div>

        
      
</div>
</div>
         );
    }
}
 
export default Products;