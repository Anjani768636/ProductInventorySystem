import React from 'react';
import SignIn from './signIn'
import SignUp from './signUp';
import Products from './products';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class RootComponent extends React.Component {
    state={ }
    render(){
        return(
            <div>
               <Switch>
               <Route exact path="/" component={()=><SignIn/>} ></Route> 
               <Route path='/signUp' component={()=><SignUp/>}></Route> 
               <Route path='/products' component={()=><Products/>}></Route> 
               </Switch>  
            </div>
        );
    }
}
export default RootComponent;