import React from 'react';
import login from './login.jpeg';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class SignIn extends React.Component {
    state={
        user:'',
        password:'',
        success:false,

    }
    componentDidMount()
    {

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
        // let logindata=response.data
        // console.log(logindata[0])
        // if(logindata[0].user===this.state.user && logindata[0].password===this.state.password)
        // {   console.log("hiii")
        //     this.setState({success:true},()=>{console.log(this.state.successs)})
        // }
       
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
            <div className="bg" style={{ backgroundImage: `url(${login})`}}>
            <div className="login-wrap" >
               
            <div className="login-html">
                <label className="tab">Sign In</label>
                <div className="login-form">
                    <div>
                        <div className="group">
                            <label HtmlFor="user" className="label">Username</label>
                            <input id="user" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" class="input" onChange={this.onChangeUser.bind(this)}/>
                        </div>
                        <div className="group">
                            <label for="pass" className="label">Password</label>
                            <input id="pass" type="password" class="input" onChange={this.onChangePassword.bind(this)} data-type="password"/>
                        </div>
                        <div className="group">
                        <button  className="button" value="Sign In"  onClick={this.onButtonClick.bind(this)}>Sign in</button>
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            <a href="#forgot">Forgot Password?</a>
                          
                              <Link to='/signUp'>Don't have an account?</Link>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
         );
    }
}
 
export default SignIn;