import React from 'react';

import './signIn.css';
class SignUp extends React.Component {

    render() { 
        return ( 
            <div class="login-wrap">
	<div class="login-html">
		<label class="tab">Sign Up</label>
		<div class="login-form">
			<div>
				<div class="group">
					<label for="user" class="label">Username</label>
					<input id="user" type="text" class="input"/>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password"/>
				</div>
               <div class="group">
					<label for="pass" class="label">Re-type Password</label>
					<input id="pass" type="password" class="input" data-type="password"/>
				</div>
				<div class="group">
                            <input type="submit" class="button" value="Sign Up"/>
                        </div>
				
			</div>
			</div>
		</div>
	</div>
         );
    }
}
 
export default SignUp;