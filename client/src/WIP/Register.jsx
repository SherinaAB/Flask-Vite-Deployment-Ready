import React, { useState } from 'react'

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    
    return (
        <div>Register & Create New Login</div>
    //     <div className="auth-form-container">
    //     <form onSubmit ={handleSubmit}>
    //         <label html for ="name">Full Name</label>
    //         <input value={name} name='name' id='name' placeholder='full Name'/>
    //         <label htmlfor= "email">email</label>
    //         <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremy@gmail.com" />
    //         <label htmlfor= "password">password</label>
    //         <input value={pass}onChange={(e)=> setEmail(e.target.value)}type="password" placeholder="***************" id="password" name="password" />
    //         <button type="submit">Log In</button>
    //     </form>
    //     <button onClick={() => props.onFormSwitch('register')}>Already have an account? Login HERE.</button>
    // </div>
    )
}

export default Register;