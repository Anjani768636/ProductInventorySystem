import React from 'react';
import login from './login.jpeg';

import { Link } from 'react-router-dom';


class SignIn extends React.Component {

    render() { 
        return ( 
            
            <div className="login-wrap" style={{ backgroundImage: `url(${login})` }}>
               
            <div class="login-html">
                <label class="tab">Sign In</label>
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
                            <input type="submit" class="button" value="Sign In"/>
                        </div>
                        <div class="hr"></div>
                        <div class="foot-lnk">
                            <a href="#forgot">Forgot Password?</a>
                          
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