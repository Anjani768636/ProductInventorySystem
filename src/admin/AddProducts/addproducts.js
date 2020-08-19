import React from 'react';
import './content.css'
import Axios from 'axios';
import Header from '../Header/header';

class AddProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productId: 0,
            productImage: '',
            productName: '',
            productPrice: 0,
            productQuantity: 0,
            productCategory: '',
            iderror: '',
            nameerror: '',
            categoryerror: '',
            imageerror: '',


        }
    }



    getName = (event) => {
        this.setState({ productName: event.target.value })
        this.checkName()
    }
    getPrice = (event) => {
        this.setState({ productPrice: event.target.value })

    }
    getQuantity = (event) => {
        this.setState({ productQuantity: event.target.value })

    }
    getCategory = (event) => {
        this.setState({ productCategory: event.target.value })
        this.checkCategory()
    }

    getImage = (event) => {
        console.log(event.target.value.substr(12))
        this.setState({ productImage: event.target.value.substr(12) })
        this.checkImage()
    }


    checkName = () => {
        let nameerror = ''
        if (this.state.productName.length < 1) {
            nameerror = "* Give Valid Name"
            this.setState({ nameError: nameerror })
        } else {
            this.setState({ nameError: "" })
        }
    }


    checkCategory = () => {
        let categoryerror = ''
        if (this.state.productCategory.length <= 1) {
            categoryerror = "* Give valid Category "
            this.setState({ categoryError: categoryerror })
        } else {
            this.setState({ categoryError: "" })
        }
    }

    checkImage = () => {
        let imageerror = ''
        if (this.state.productImage) {
            imageerror = "Add Image"
            this.setState({ imageError: imageerror })
        } else {
            this.setState({ imageError: "" })
        }
    }

    addProduct = () => {
        let productRequest = {
            "id": this.state.productId,
            "image": this.state.productImage,
            "name": this.state.productName,
            "price": this.state.productPrice,
            "quantity": this.state.productQuantity,
            "category": this.state.productCategory,


        }

        if (this.state.nameError === '' && this.state.categoryError === '' && this.state.imageError === '') {
            Axios.post("http://localhost:3000/allProducts", productRequest)
                .then(response => {
                    console.log(response)
                    this.props.history.push('/products')
                }, error => {
                    console.log(error)
                })
        }



    }



    render() {
        return (
            <div >
                <Header></Header>





                <form >
                    <fieldset style={{ marginTop: '2px' }}  >
                        <center style={{ padding: '10px' }}>
                            <h2 >Add Product</h2>

                            <input type="text" placeholder="Product Name" onChange={this.getName} required >

                            </input>
                            <div>{this.state.nameError}</div>
                            <input type="number" placeholder="Price" onChange={this.getPrice} min="1" required ></input>
                            <br></br>
                            <input type="number" placeholder="Quantity" onChange={this.getQuantity} min="1" required ></input>
                            <br></br>
                            <input type="text" placeholder="Category" onChange={this.getCategory} required  ></input>
                            <div>{this.state.categoryError}</div>

                            <input type="file" onChange={this.getImage} required multiple accept='image/*'></input>



                            <button type="submit" onClick={this.addProduct} >Add</button>
                        </center>
                    </fieldset>
                </form>

            </div>
        );
    }
}

export default AddProduct;