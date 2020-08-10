import React from 'react';
import SignIn from './signIn'
import SignUp from './signUp';
import Products from './products';
import ProductDetails from './productdetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddProduct from './addproducts';
import Dashboard from './dashboard';
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
               <Route path='/addproducts' component={()=><AddProduct/>}></Route>   
               <Route path='/dashboard' component={()=><Dashboard/>}></Route>   
               </Switch>  
            </div>
        );
    }
}
export default RootComponent;