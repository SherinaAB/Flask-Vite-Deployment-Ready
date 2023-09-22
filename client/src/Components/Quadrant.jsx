
import React from 'react'
import { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink,Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import DBPriceGap from './DBPriceGap';
import DBStoreSales from './DBStoreSales';
import DBCatSales from './DBCatSales';
import DashboardLanding from './DashboardLanding';
import * as styles from '/src/Quad.css';
// import {HiOutlineMenuAlt4} from 'react-icons/hi'

function Quadrant() {
  return (
    <div className="Quadcontainer">
      <Container>
        <Row className="row">
          <Col className="col-sm-6">
          <DBPriceGap/>
          </Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col className="col-sm-6">1 of 2</Col>
          <Col>
          <DBStoreSales/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Quadrant;

