import React from "react";
import { Link, useHistory} from "react-router-dom";
import { useState } from "react";

// would like to add functionality to create an account to route to new page

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const handleSubmit = () => {
      e.preventDefault();
      console.log(email);
    }

    return (
        // <>Login Button</>
        <div className="auth-form-container">
            <form onSubmit ={handleSubmit}>
              <label htmlfor= "email">email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremy@gmail.com" />
              <label htmlfor= "password">password</label>
              <input value={pass}onChange={(e)=> setPass(e.target.value)}type="password" placeholder="***************" id="password" name="password" />
              <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('Login')}>Don't have an account? Register HERE.</button>
        </div>
    )
}