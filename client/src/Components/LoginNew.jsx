import { Link, useHistory} from 'react-router-dom'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login({updateUser, props}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [signup, setSignup] = useState(false);
    const history = useHistory();
  
    function handleUsername(e){
        setUsername(e.target.value)
    }
  
    function handlePassword(e){
        setPassword(e.target.value)
    }
  
    function handleClick(){
        setSignup(!signup)
    }
  
    function handleSubmit(e){
        e.preventDefault()
        console.log(signup)
        console.log(username, password)
        // console.log(!signup?"/api/login":"/api/users")
        fetch(!signup?"/api/login":"/api/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username: username, password: password})
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
  
    function handleLogout(e){
        e.preventDefault()
        fetch("/api/logout", {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
        })
        .then(setUser(null))
    }
  return (
    <>
      <div className="auth-form-container">
          <h2 className="formbox">Login</h2>
        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsername}/>
            <Form.Text className="text-muted">
              
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value ={password} onChange={handlePassword}/>
          </Form.Group>
          <Button type="submit">Log In</Button>
        </Form>        
        {/* <Button className="link-btn" onClick={() => props.onFormSwitch('signup')}>
            Already have an account? Login here.
        </Button> */}
      </div>  
    </>
  )
}

export default Login