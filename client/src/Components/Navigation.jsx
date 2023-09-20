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
        <Navbar.Brand href="/signup">{user && (<p> Welcome, {user.first_name}!</p>)}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Navbar.Text>
            <a href="/signup">{user && (<p> Welcome, {user.first_name}!</p>)}</a>
          </Navbar.Text> */}
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            {!user ? <Nav.Link href="/signup">SignUp</Nav.Link> : null}
            {user ? <Nav.Link href="/chartquadrant">View Dashboards</Nav.Link> : null}
            {user ? <Nav.Link onClick={handleLogout}>Logout</Nav.Link> : <Nav.Link href="/login">Login</Nav.Link>}
            {/* <Nav.Link href="/dashboardlanding">Dashboard Views</Nav.Link>
            <Nav.Link href="/dbpricegap">Price Gap</Nav.Link>
            <Nav.Link href="/dbcatsales">Sales by Category</Nav.Link>
            <Nav.Link href="/dbcategorysalesbymonth">Category Sales by Month</Nav.Link> */}
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Communicate" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="/about">About</NavDropdown.Item> */}
              <NavDropdown.Item href="/comment">
                Review</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Suggestions</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Live Chat Link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navigation;