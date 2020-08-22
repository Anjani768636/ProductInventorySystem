import React from 'react';
import './productdetails.css';
import Axios from 'axios';
import Header from '../Header/header'
import { withRouter } from 'react-router-dom';

class ProductDesc extends React.Component {

    constructor(props){
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


    render() {
        return ( 
            <div>
              <Header></Header>
                    <div>
                        <div className="containerpd">
                            <div className="left-columnpd">
                                <img src={this.state.image} alt="Image not found"/>
                            </div>
                            <div className="right-columnpd">
                                <div className="product-descriptionpd">
                                    <span>{this.state.category}</span>
                                    <h1>{this.state.name}</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                                <div className="product-pricepd">
                                    <span>Rs.{this.state.price}</span>
                                </div>
                                <div className="product-descriptionpd">
                                    <span>About Manufacturer</span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>

         );

    }

}
export default withRouter (ProductDesc);