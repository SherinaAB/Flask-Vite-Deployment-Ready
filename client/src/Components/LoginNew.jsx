import { Link, useHistory} from 'react-router-dom'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginNew({updateUser}) {

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
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsername}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" value ={password} onChange={handlePassword}/>
    </Form.Group>
    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group> */}
    <Button variant="primary" type="submit">
      Submit
    </Button>
    <Button variant="primary" type="submit" onClick={handleClick}>
      Signup
    </Button>    
  </Form>
  )
}

export default LoginNew