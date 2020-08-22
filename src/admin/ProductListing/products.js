import React from 'react';
import '../ProductListing/products.css'
import axios from 'axios';
import ProductDetail from '../ProductDetails/productdetails';
import Header from '../Header/header'
import { withRouter } from 'react-router-dom';

class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            productsList: [],
            myid: 0,
            noData:false,
            sortvalue:false
        }
    }

    componentWillMount() {
        this.getAllProducts()
    }

    getAllProducts = () => {
        axios.get("http://localhost:3000/allProducts").then(response => {
        this.setState({ products: response.data, productsList: response.data })
        }, error => {
            console.log(error)
        })
    }

    deleteProductById = (id) => {
        axios.delete("http://localhost:3000/allProducts/" + id).then(response => {
        this.getAllProducts()
        this.myFunction()
        }, error => {
            console.log(error)
        })
    }

    editProductById = (id) => {
        console.log(id)
        this.setState({ myid: id })
        this.props.history.push({
            pathname: '/editproduct',
            state: { myid: id }
        })
    }
    viewProductById = (id) => {
        console.log(id)
        this.setState({ myid: id })
        this.props.history.push({
            pathname: '/productdesc',
            state: { myid: id }
        })
    }

    renderAllProducts = () => {
        return this.state.products.map(product => {
            return (
                <ProductDetail
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    category={product.category}

                    deleteId={this.deleteProductById}
                    editId={this.editProductById.bind(this)}
                    viewId={this.viewProductById.bind(this)}
                >
                </ProductDetail>
            )
        })
    }
    addProduct() {
        this.props.history.push('/addproducts')
    }

    searchHandle(event){
        this.setState({searchtext:event.target.value},()=>{
        console.log(this.state.searchtext)
        const prod=this.state.productsList.filter(p=>{
        return( p.name.toLowerCase().includes(this.state.searchtext.toLowerCase()) ||
        p.category.toLowerCase().includes(this.state.searchtext.toLowerCase()) ||
        p.quantity.toLowerCase().includes(this.state.searchtext.toLowerCase())
        )})
        if(!prod.length){
        this.setState({noData:true})   
        }
        this.setState({products:prod})
        })
    }

    myFunction() {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }

      sorting(){
          console.log("inside sorting")
        const newlist=this.state.products;
        if(this.state.sortvalue===false){
            console.log("sort value false")
            newlist.sort((a,b)=>
                a.price - b.price)            
            this.setState({products:newlist})
            console.log(newlist)
            return this.setState({sortvalue:true})
        }
        if(this.state.sortvalue===true){
            console.log("sort value true")
            console.log(newlist)
            this.getAllProducts()
            return this.setState({sortvalue:false})
        }
    }
 
    render() {
        if(this.state.noData){
            this.setState({noData:false})
            return(
                
            <div>
            <Header></Header>
                <div>
                    <div>
                        <form>
                            <div>
                                <label>Search:</label>
                                <input type="text" className="searchbarpl" onChange={this.searchHandle.bind(this)}/>
                            </div> 
                            <div>Product Not Found</div>  
                        </form>
                    </div>
                    
                </div>
        </div>


            );
        }

        return (
         
            <div>
                <Header></Header>
                    <div>
                        <div>
                            <form>
                                <div>
                                    <label>Search:</label>
                                    <input type="text" className="searchbarpl" onChange={this.searchHandle.bind(this)}/>
                                </div> 
                                <div>
                                <button className="buttonpl" onClick={this.sorting.bind(this)}>Sort</button>
                                </div>
                                <div id="snackbar">Product Deleted Successfully!!!</div>  
                            </form>
                        </div>
                        {this.renderAllProducts()}
                    </div>
            </div>
        );
    }
}

export default withRouter (Product);