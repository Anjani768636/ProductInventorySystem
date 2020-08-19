import React from 'react';
import '../ProductDetails/productdetails.css'
import { withRouter } from 'react-router-dom';
class ProductDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    deleteProduct = () => {
        this.props.deleteId(this.props.id)
    }

    editProductById(){
        this.props.editId(this.props.id)
    }

    viewProductById(){
        this.props.viewId(this.props.id)
    }
    render() {
        return (
           
              <div className="columnpl" style={{display:"inline"}} >
                <div className="cardpl" >  
                    <img src={this.props.image} alt={this.props.name}style={{height:"200px",width:"200px"}}/> 
                    <p>{this.props.name} Rs: {this.props.price}</p>
                    <p>Qty: {this.props.quantity}</p>
                    <button className="buttonpl" onClick={this.editProductById.bind(this)} >Update</button>
                    <button className="buttonpl" onClick={this.deleteProduct}>Delete</button>
                    <button className="buttonpl" onClick={this.viewProductById.bind(this)}>View Product</button> 
                </div> 
              </div>
        );
    }
}

export default withRouter (ProductDetail);