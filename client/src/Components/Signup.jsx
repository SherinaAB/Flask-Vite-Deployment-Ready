import React from 'react';
import { Link, useHistory} from 'react-router-dom'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Components from './Components';

function Signup({updateUser, props}) {

    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    // const [signIn, toggle] = React.useState(true);
       
    function handleSubmit(e){
        e.preventDefault()
        fetch("/api/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                  first_name: first_name,
                  last_name: last_name,
                  email: email,
                  username: username, 
                  password: password,
                  approved_user: true
                })
        })
        .then( res => {
          if(res.ok){
            res.json().then(user => {
                console.log(user)
                updateUser(user)
                history.push('/')
            })
        }
        })
    }
  
  return (
    <>
      <div className="auth-form-container">
          <h2>Register</h2>
        <Form className="signup-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicFirst_Name">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="first_name" placeholder="First Name" value ={first_name} onChange={(e)=>setFirst_Name(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLast_Name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="last_name" placeholder="Last Name" value ={last_name} onChange={(e)=>setLast_Name(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" value ={email} onChange={(e)=>setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUsernme">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value ={password} onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>
          <Button type="submit">Register</Button>
        </Form>
        <Button className="link-btn" onClick={() => props.onFormSwitch('login')}>Don't have an account? Register here.</Button>
      </div>
    </>
  )
}

export default Signup;


{/* <Components.Container>
//       <Components.SignUpContainer signinIn = {signIn}>
//         <Components.Form>
//             <Components.Title>Create Account</Components.Title>
//             <Components.Input type="text" placeholder="First Name"/>
//             <Components.Input type="text" placeholder="Last Name"/>
//             <Components.Input type="email" placeholder="Email"/>
//             <Components.Input type="username" placeholder="Username"/>
//             <Components.Input type="password" placeholder="Password"/>
//             <Components.Button>Sign Up</Components.Button>
//         </Components.Form>
//       </Components.SignUpContainer>

//       <Components.SignInContainer signinIn = {signIn}>
//         <Components.Form>
//             <Components.Title>Sign In</Components.Title>
//             <Components.Input type="username" placeholder="Username"/>
//             <Components.Input type="password" placeholder="Password"/>
//             <Components.Anchor href='#'>Forgot password?</Components.Anchor>
//             <Components.Button>Sign In</Components.Button>
//         </Components.Form>
//       </Components.SignInContainer>

//       <Components.OverLayContainer signinIn={signIn}>
//         <Components.Overlay signinIn={signIn}>

//         <Components.LeftOverlayPanel  signinIn={signIn}>                
//           <Components.Title>Welcome Back!</Components.Title>
//           <Components.Paragraph>
//             To keep connected with us please login with your personal information.
//           </Components.Paragraph>
//           <Components.GhostButton onClick={() => toggle(true)}>
//             Sign In
//           </Components.GhostButton>
//           </Components.LeftOverlayPanel>

//           <Components.RightOverlayPane signinIn={signIn}>
//             <Components.Title>Hello Friend!</Components.Title>
//             <Components.Paragraph>  
//               Enter your personal infomation and begin your journey with us!
//             </Components.Paragraph>
//               <Components.GhostButton onClick={() => toggle(false)}>
//                 Sign Up
//               </Components.GhostButton>
//           </Components.RightOverlayPane>

//         </Components.Overlay>
//       </Components.OverLayContainer>
  
//     </Components.Container> */}