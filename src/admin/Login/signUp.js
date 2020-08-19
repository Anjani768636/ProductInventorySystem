import React from 'react';
import login from './login.jpeg';
import './signUp.css';
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
    {  
	   console.log(event.target.value)

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
		}

		console.log(signupRequestBody)

        if(this.state.password===this.state.repassword){
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
		
		<div className="bgsu" style={{ backgroundImage: `url(${login})`}}>
            <div className="login-wrapsu">
				<div className="login-htmlsu">
					<form onSubmit={this.onSubmit.bind(this)}>

						<label className="tabsu">Sign Up</label>

							<div className="login-formsu">

				   					<div className="groupsu">
										<label htmlFor="usersu" className="labelsu">Username(Email)</label>
										<input id="usersu" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={this.onChangeUser.bind(this)} className="inputsu" required/>
									</div>

									<div className="groupsu">
										<label htmlFor="passsu" className="labelsu">Password</label>
										<input id="passsu" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={this.onChangePassword.bind(this)} type="password" className="inputsu" data-type="password"/>
									</div>

               						<div className="groupsu">
										<label htmlFor="passsu" className="labelsu">Re-type Password</label>
										<input id="passsu" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={this.onChangeRePassword.bind(this)} type="password" className="inputsu" data-type="password"/>
									</div>
									
									<div className="groupsu">
                            			<button className="buttonsu" value="Sign Up">Sign Up</button>
                        			</div>

									<div className="hrsu"></div>

                            		<div className="foot-lnksu">                          
                                		<Link to='/'>Already have an account?</Link>  
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