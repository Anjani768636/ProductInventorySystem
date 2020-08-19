import React from 'react';
import login from './login.jpeg';
import Axios from 'axios';
import './signIn.css'
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class SignIn extends React.Component {
    state={
        user:'',
        password:'',
        success:false,
    }
  
    onButtonClick(event)
    {
       console.log(typeof(this.state.password))

        Axios.get("http://localhost:3000/login/"+this.state.user)
        .then((response)=>{
        
        console.log(response.data)

        if(this.state.password===response.data.password){
            console.log("Got password")
            this.setState({success:true})
        }
        else{
            alert("Password incorrect")
        }

        }, (error)=>{

        console.log(error)

        alert("User does not exist. Create Account")
    })
       
    
    }
    onChangeUser(event)
    {
      this.setState({user:event.target.value})
    }
    onChangePassword(event)
    {  
        this.setState({password:event.target.value})
    }


    render() { 

        if(this.state.success)
        {   this.setState({success:false})
           return (<Redirect to={{pathname:"/products"}}></Redirect>)
        }
        
        return ( 
        <div className="bgsi" style={{ backgroundImage: `url(${login})`}}>
            <div className="login-wrapsi" >
                
                <div className="login-htmlsi">
                    <label className="tabsi">Sign In</label>
                    <div className="login-formsi">
                        
                            <div className="groupsi">
                                <label htmlFor="usersi" className="labelsi">Username</label>
                                <input id="usersi" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="inputsi" onChange={this.onChangeUser.bind(this)}/>
                            </div>

                            <div className="groupsi">
                                <label htmlFor="passsi" className="label">Password</label>
                                <input id="passsi" type="password" className="inputsi" onChange={this.onChangePassword.bind(this)} data-type="password"/>
                            </div>

                            <div className="groupsi">
                            <button  className="buttonsi" value="Sign In"  onClick={this.onButtonClick.bind(this)}>Sign in</button>
                            </div>

                            <div className="hrsi"></div>

                            <div className="foot-lnksi">                          
                                <Link to='/signUp'>Don't have an account?</Link>  
                            </div>

                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default SignIn;