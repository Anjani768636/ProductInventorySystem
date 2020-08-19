import React from 'react';
import  axios from 'axios';
import { Redirect } from 'react-router-dom';
import Header from '../Header/header'
import './products.css';


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
        this.setState({searchtext:event.target.value},()=>{
            console.log(this.state.searchtext)
            const products=this.state.temp.filter(p=>{
               return( p.name.toLowerCase().includes(this.state.searchtext.toLowerCase()) ||
                p.category.toLowerCase().includes(this.state.searchtext.toLowerCase()) ||
                p.qty.toLowerCase().includes(this.state.searchtext.toLowerCase())
            )})
            this.setState({emp:products})
        })
       

    }
   
    viewProduct(event){

        console.log(event.target.id)

        this.setState({viewProductClicked:true, viewproductId:event.target.id})

        localStorage.setItem("id",event.target.id)
        
        //const pid=event.target.id;
        //return <Redirect to ={{pathname:"/productdetails",state:{pid}}}></Redirect>
    }

    addProduct(event){ 
    this.setState({addProductClicked:true})
    }


    render() { 

        if(this.state.addProductClicked){
            this.setState({addProductClicked:false})
            return <Redirect push to="/addproducts" />;
        }

        if(this.state.viewProductClicked){
            this.setState({viewProductClicked:false})

            console.log("problem")
            console.log(this.state.viewproductId)

            const tempId=this.state.viewproductId;
            //return <Redirect push to="/productdetails" />;
             return <Redirect to ={{pathname:"/productdetails",state:{id:tempId}}}></Redirect>
        }

        return ( 
            
            <div>
                <Header></Header>
                <div>
                        {/* <div>
                                <label className="sctpl">Select Category:</label>
                                <select name="category" style={{width:"200px"}}>
                                    <option>--Select--</option>
                                </select>
                            </div> */}
        
                        <div>
                            <form>
                                <div>
                                    <label>Search:</label>
                                    <input type="text" className="searchbarpl" onChange={this.searchHandle.bind(this)}/>
                                </div>   
                            </form>
                        </div>

       

                         <div className="rowpl">
                            <div className="columnpl">
                                <div className="cardpl" >
                                    <img src="https://icon-library.com/images/icon-add/icon-add-0.jpg" onClick={this.addProduct.bind(this)} alt="Add Product" height="236x" width="200px"/> 
                                    <p>Click on the above icon to</p>
                                    <p>Add Product.</p>
                                </div>
                            </div> 
        
                            {this.state.emp.map(p=>(
                            <div className="columnpl" >
                                <div className="cardpl" >  
                                    <img src={p.imgUrl} alt={p.name} style={{height:"200px",width:"200px"}}/> 
                                    <p>{p.name} Rs: {p.price}</p>
                                    <p>Qty: {p.qty}</p>
                                    <button className="buttonpl" onClick={this.viewProduct.bind(this)} id={p.id}>View Product</button>
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