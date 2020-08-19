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
            searchValue: ''
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
            pathname: '/editproduct',
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
    getSearch = (e) => {
        let searchV = e.target.value
        if (searchV === '') {
            this.getAllProducts()
        }
        this.setState({ searchValue: searchV })
        console.log(searchV);
        let searchF = this.state.productsList.filter(f => {
            return (f.name.toLowerCase().match(searchV.toLowerCase().trim()) ||
                f.category.toLowerCase().match(searchV.toLowerCase().trim()))

        })
        console.log(searchF);
        this.setState({ products: searchF })

    }
    render() {

        return (
            <div>
                <Header></Header>
                    <div>
                        {/* <form>
                            <label>Search:</label>
                            <input type="text" className="searchbarpl"placeholder="Search by Name/Category/Qty" value={this.state.searchValue} onChange={this.getSearch}></input>
                            <button className="add" onClick={this.addProduct.bind(this)}>Add Product</button>
                        </form> */}
                        <div>
                            <form>
                                <div>
                                    <label>Search:</label>
                                    <input type="text" className="searchbarpl" value={this.state.searchValue} onChange={this.getSearch}/>
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
                        </div>
                
                
                {this.renderAllProducts()}



            </div>
            </div>
        );
    }
}

export default withRouter (Product);