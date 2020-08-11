import React from 'react';
import login from './login.jpeg';
import './signIn.css';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
class SignUp extends React.Component {
	state={
		user:'',
		password:'',
		repassword:'',
		success:false
	}
	onChangeUser(event)
    {
      this.setState({user:event.target.value})
    }
    onChangePassword(event)
    {  console.log(event.target.value)
        this.setState({password:event.target.value})
	}
	onChangeRePassword(event)
    {  
        this.setState({repassword:event.target.value})
	}
	onSubmit(event){
		console.log("On submit fn")
		event.preventDefault()
		let signupRequestBody={
			"id":this.state.user,
			"password":this.state.password,
			//"repassword":this.state.repassword
			
			
		}
		console.log(signupRequestBody)
       if(this.state.password===this.state.repassword){
		//event.preventDefault()
		Axios.post('http://localhost:3000/login', signupRequestBody)
		.then(response=>{
			console.log(response);
			this.setState({success:true})
			
		}, error=>{
			console.error(error);
			alert("Email Id already exists")
		})
	   }
	   else{
		   alert("Passwaord and Confirm Password should match")
	   }
	}
	

    render() { 
		if(this.state.success)
		{
			this.setState({success:false})
			return (<Redirect to={{pathname:"/products"}}></Redirect>)
		}
        return ( 
		
			<div className="bg" style={{ backgroundImage: `url(${login})`}}>
            <div className="login-wrap">
	<div className="login-html">
		<form onSubmit={this.onSubmit.bind(this)}>
		<label className="tab">Sign Up</label>
		<div className="login-form">
			<div>
				<div className="group">
					<label for="user" className="label">Username(Email)</label>
					<input id="user" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={this.onChangeUser.bind(this)} className="input" required/>
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={this.onChangePassword.bind(this)}type="password" className="input" data-type="password"/>
				</div>
               <div className="group">
					<label for="pass" className="label">Re-type Password</label>
					<input id="pass" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={this.onChangeRePassword.bind(this)} type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
                            <button className="button" value="Sign Up">Sign Up</button>
                        </div>
						
				
			</div>
			</div>
			</form>
		</div>
	</div>
	</div>
         );
    }
}
 
export default SignUp;