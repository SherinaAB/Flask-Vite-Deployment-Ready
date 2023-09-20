
import React from 'react'
import { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink,Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
// import {HiOutlineMenuAlt4} from 'react-icons/hi'


function Quadrant({user, setUser, MonthFilter}) {

  function handleLogout(e){
    e.preventDefault()
    fetch("/api/logout", {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
    })
    .then(setUser(null))

  const [month, setMonth] = useState([])

  function fetchMonth() {
    fetch('/api/timeframes')
    .then(res=> {
      if (res.ok){
        res.json()
        .then(data => {
          // console.log(data)
          setMonth(data)})
      }
    })
  }

  const [selectedMonth, setSelectedMonth] = useState("All")
  // console.log(selectedMonth)

  const visibleMonth = month.filter(
    singleMonth => selectedMonth === "All" || singleMonth.timeframe === selectedMonth
  )
  // console.log(visibleMonth)
  }

  useEffect(()=>{
    fetchMonth()

  },[])

  return (
    <>
    <div>
    <MonthFilter month={month} selectedMonth={selectedMonth} onSelectedMonth={setSelectedMonth}/>
      <div>
        <button type="submit"> MonthFilter</button>
      </div>  
    {/*FIRST NAVBAR*/}

    {/* <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> */}
          {/* <Nav className="me-auto">   */}
          {/* <Nav variant="tabs" defaultActiveKey="/dashboardlanding">
          <MonthFilter month={month} selectedMonth={selectedMonth} onSelectedMonth={setSelectedMonth}/>
            <Nav.Item>
              <Nav.Link href="/dbstoresales">All Stores All Categories</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/dbpricegap">Price Gap</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/dbpricegap">Product % Sales by Category</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/dbpricegap">Product Sales by Store</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/dbpricegap">Product Sales by Market</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/dbpricegap">Product Sales by Month</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/dbcatsales">Category Sales by Store</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/dbcatsales">Category Sales by Market</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/dbcategorysalesbymonth">Category Sales by Month</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/dbstoresalesbymonth">Store Sales by Month</Nav.Link>
            </Nav.Item>

          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar> */}

    {/* LAYOUT*/}

    <Container>
      <Row className="justify-content-md-left">

        <Col md="auto">
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                {/* <Nav className="me-auto">   */}
                <Nav variant="tabs" defaultActiveKey="/dashboardlanding">
 
                  <Nav.Item>
                    <Nav.Link href="/dbstoresales">All Stores All Categories</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/dbpricegap">Price Gap</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/dbpricegap">Product % Sales by Category</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/dbpricegap">Product Sales by Store</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/dbpricegap">Product Sales by Market</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/dbpricegap">Product Sales by Month</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/dbcatsales">Category Sales by Store</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/dbcatsales">Category Sales by Market</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/dbcategorysalesbymonth">Category Sales by Month</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/dbstoresalesbymonth">Store Sales by Month</Nav.Link>
                  </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
         
        </Col>

        <Col xs lg="2">
          2 of 2
        </Col>
      </Row>


      <Row className="justify-content-md-right">
        <Col>
        1 of 2
        </Col>

        <Col md="auto">
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                {/* <Nav className="me-auto">   */}
                <Nav variant="tabs" defaultActiveKey="/dashboardlanding">
                  <Nav.Item>
                    <Nav.Link href="/dbstoresales">All Stores All Categories</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/dbpricegap">Price Gap</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/dbpricegap">Product % Sales by Category</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/dbpricegap">Product Sales by Store</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/dbpricegap">Product Sales by Market</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/dbpricegap">Product Sales by Month</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/dbcatsales">Category Sales by Store</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/dbcatsales">Category Sales by Market</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/dbcategorysalesbymonth">Category Sales by Month</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/dbstoresalesbymonth">Store Sales by Month</Nav.Link>
                  </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
          
        </Col>

      </Row>
    </Container>

    {/*SECOND NAVBAR*/}

    {/* <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">  
          <Nav variant="tabs" defaultActiveKey="/dashboardlanding">

            <Nav.Item>
              <Nav.Link href="/dbstoresales">All Stores All Categories</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/dbpricegap">Price Gap</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/dbpricegap">Product % Sales by Category</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/dbpricegap">Product Sales by Store</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/dbpricegap">Product Sales by Market</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/dbpricegap">Product Sales by Month</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/dbcatsales">Category Sales by Store</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/dbcatsales">Category Sales by Market</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/dbcategorysalesbymonth">Category Sales by Month</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/dbstoresalesbymonth">Store Sales by Month</Nav.Link>
            </Nav.Item>

          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar> */}
    </div>
    </>
  );
}

export default Quadrant;




            {/* <Nav.Item>
              <Nav.Link eventKey="link-1">Horizontal Bar Chart</Nav.Link>
            </Nav.Item> */}