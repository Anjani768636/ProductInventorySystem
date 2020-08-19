import React from 'react';
import '../AddProducts/content.css'
import Axios from 'axios'
import Navbar from '../Header/header';
import { withRouter } from 'react-router-dom';
class EditProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            image: '',
            name: '',
            price: 0,
            quantity: 0,
            category: '',
            status: '',
            nameerror: '',
           buttonStatus:false

        }
    }

    componentWillMount() {
        if (this.props.location.state !== undefined) {
            Axios.get("http://localhost:3000/allProducts/" + this.props.location.state.myid).then(response => {
                console.log(response)
                this.setState({
                    id: response.data.id,
                    image: response.data.image,
                    name: response.data.name,
                    price: response.data.price,
                    quantity: response.data.quantity,
                    category: response.data.category,

                })
            }, error => {
                console.log(error)
            })
        }
    }


    getName = (event) => {
        this.setState({ name: event.target.value })
        this.checkName()
    }
    getPrice = (event) => {
        this.setState({ price: event.target.value })

    }
    getQuantity = (event) => {
        this.setState({ quantity: event.target.value })

    }
    getCategory = (event) => {
        this.setState({ category: event.target.value })
    }

    checkName = () => {
        let nameerror = ''
        if (this.state.name.length < 2) {
            nameerror = "* Give Valid Name"
            this.setState({ nameError: nameerror ,buttonStatus:true})
        } else {
            this.setState({ nameError: "" ,buttonStatus:false})
        }
    }

     editProduct = () => {

        let productRequest = {
            "id": this.state.id,
            "image": this.state.image,
            "name": this.state.name,
            "price": this.state.price,
            "quantity": this.state.quantity,
            "category": this.state.category

        }
      
      
        Axios.put("http://localhost:3000/allProducts/" + this.state.id, productRequest)
            .then(response => {
                console.log(response)
                this.props.history.push('/products')
            }, error => {
                console.log(error)
            })
            

        


    }
    goBack(){
        this.props.history.push('/products')
    }
    render() {
        if (this.props.location.state === undefined) {
            return (
                <div>
                    <center>
                        <h3>Product Not Available!!</h3><br></br>
                        <button type="submit" onClick={this.goBack}>Go Back</button>
                    </center>
                </div>
            )
        }
        return (
            <div >
                <Navbar></Navbar>
                <form onSubmit={this.editProduct}>
                    <fieldset style={{ padding: '20px' }}>
                        <center style={{ padding: '0px' }}>
                            <h2>Update Product</h2>

                            <label >Product Name </label>
                            <input type="text" value={this.state.name} onChange={this.getName} required style={{ marginLeft: '3px' }}></input>
                            <div>{this.state.nameError}</div>
                            <label >Price </label>
                            <input type="number" value={this.state.price} onChange={this.getPrice} required min="1" style={{ marginLeft: '57px' }}  ></input>
                            <br></br>
                            <label >Quantity </label>
                            <input type="number" value={this.state.quantity} onChange={this.getQuantity} required min="1" style={{ marginLeft: '42px' }}  ></input>
                            <br></br>
                            <label >Category </label>
                            <input type="text" value={this.state.category} onChange={this.getCategory} readOnly style={{ marginLeft: '42px' }} ></input>
                            <br></br>

                            <button type="submit" disabled={this.state.buttonStatus}>Update</button><br></br>
                        </center>
                    </fieldset>
                </form>

            </div>
        );
    }
}

export default withRouter (EditProduct);