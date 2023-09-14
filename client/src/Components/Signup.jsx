import { Link, useHistory} from 'react-router-dom'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signup({updateUser}) {

    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
  
    // function handleFirst_Name(e){
    //     setUsername(e.target.value)
    // }
  
    // function handleLast_Name(e){
    //   setUsername(e.target.value)
    // }

    // function handleEmail(e){
    //   setUsername(e.target.value)
    // }

    // function handleUsername(e){
    //   setUsername(e.target.value)
    // }

    // function handlePassword(e){
    //     setPassword(e.target.value)
    // }
  
  
  
    function handleSubmit(e){
        e.preventDefault()
        // console.log(signup)
        // console.log(username, password)
        // console.log(!signup?"/api/login":"/api/users")
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
    <Form onSubmit={handleSubmit}>
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
    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group> */}
    <Button variant="primary" type="submit">Submit</Button>
    {/* <Button variant="primary" type="submit" onClick={handleClick}>Signup</Button>     */}
  </Form>
  )
}

export default Signup