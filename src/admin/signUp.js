import React from 'react';
import login from './login.jpeg';
import './signIn.css';
class SignUp extends React.Component {

    render() { 
        return ( 
			<div className="bg" style={{ backgroundImage: `url(${login})`}}>
            <div className="login-wrap">
	<div className="login-html">
		<label className="tab">Sign Up</label>
		<div className="login-form">
			<div>
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input"/>
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
               <div className="group">
					<label for="pass" className="label">Re-type Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
                            <input type="submit" className="button" value="Sign Up"/>
                        </div>
				
			</div>
			</div>
		</div>
	</div>
	</div>
         );
    }
}
 
export default SignUp;