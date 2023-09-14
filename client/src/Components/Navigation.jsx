import React from 'react'
import { NavLink,Link } from 'react-router-dom'
// import {HiOutlineMenuAlt4} from 'react-icons/hi'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation({user, setUser}) {

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
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">CREATE/ANALYZE YOUR DYNAMIC DATA PERFORMANCE DASHBOARDS FOR YOUR BUSINESS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            {user ? <Nav.Link onClick={handleLogout}>Logout</Nav.Link> : <Nav.Link href="/login">Login</Nav.Link>}
            {!user ? <Nav.Link href="/signup">SignUp</Nav.Link> : null}
            <Nav.Link href="/dashboardlanding">Dashboard Views</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Review</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Suggestions</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navigation;