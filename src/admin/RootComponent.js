import React from 'react';
import Header from './header';
import SignIn from './signIn'
class RootComponent extends React.Component {
    state={ }
    render(){
        return(
            <div>
               <Header></Header>
               <SignIn></SignIn>
            </div>
        );
    }
}
export default RootComponent;