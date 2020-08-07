import React from 'react';
import  axios from 'axios';
import { Link } from 'react-router-dom';

import './products.css';

class Products extends React.Component {
    
    state={
        emp:[]
    }

    componentDidMount(){
        this.getProducts();
    }
    getProducts(){
        axios.get('http://localhost:3000/arrayOfProducts')
            .then((response)=>{
                console.log(response)
                console.log(response.data)
                this.setState({emp: response.data})
                console.log(this.state.emp)
            }, (error)=>{
                console.log(error)
            })
    }

    render() { 
        return ( 
            <div>
          <div>  
            <div>
            <label class="sct">Select Category:</label>
            <select name="category" style={{width:"200px"}}>
                <option>--Select--</option>
            </select>
           </div>
        
        <div>
        <form>
            <div>
            <label class="scts">Search:</label>
                    <input type="text"/>
                </div>   
              
                    <div class="scts">
                        <button class="button" style={{marginLeft:"50px"}}>Search</button>
                    </div>
            
          </form>
         
        </div>
        </div>
        <div class="container">
  
        <div class="card" style={{marginRight:"10px",width:"300px"}}>
        {/* <img src="plusicon.png" alt="Denim Jeans" style="width:100%"/> */}
        <p>Add Product.</p>
        <button class="button">Add Product</button>
        </div>
        
        {this.state.emp.map(p=>(
         
        <div className="card" style={{marginRight:"10px"}}>
         <img src={p.imgUrl} alt={p.name} style={{width:"100%"}}/> 
        <p>{p.name} Rs: {p.price}</p>
        <button className="button">View Product</button>
        </div>

        ))
    }

        
      
</div>
</div>
         );
    }
}
 
export default Products;