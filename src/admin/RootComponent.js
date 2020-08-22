import React from 'react';
import SignIn from './Login/signIn'
import SignUp from './Login/signUp';
import Products from './ProductListing/products';
import ProductDetails from './ProductDetails/productdetails';
import { Route, Switch } from 'react-router-dom';
import AddProduct from './AddProducts/addproducts';
import Dashboard from './Dashboard/dashboard';
import EditProduct from './EditProduct/editproduct';
import ProductDesc from './ProductDetails/productdesc'
class RootComponent extends React.Component {
    state={ }
    render(){
        return(
            <div>
               <Switch>
               <Route exact path="/" component={()=><SignIn/>} ></Route> 
               <Route path='/signUp' component={()=><SignUp/>}></Route> 
               <Route path='/products' component={()=><Products/>}></Route> 
               <Route path='/productdetails' component={()=><ProductDetails/>}></Route>
               <Route path='/productdesc' component={()=><ProductDesc/>}></Route>  
               <Route path='/addproducts' component={()=><AddProduct/>}></Route> 
               <Route path='/editproduct' component={()=><EditProduct/>}></Route>   
               <Route path='/dashboard' component={()=><Dashboard/>}></Route>   
               </Switch>  
            </div>
        );
    }
}
export default RootComponent;