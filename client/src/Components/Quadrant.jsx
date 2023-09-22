
import React from 'react'
import { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DBPriceGap from './DBPriceGap';
import DBStoreSales from './DBStoreSales';
import DBCatSales from './DBCatSales';
import DashboardLanding from './DashboardLanding';
import * as styles from '/src/Quad.css';

function Quadrant() {
  return (
    <>
      <div className="Quadcontainer">
        <Container>

          <Row className="row">
            
            <Col xs={12} md={8}>
            <DBPriceGap/>
            </Col>

            <Col xs={6} md={4}>

            </Col>
          </Row>


          <Row>
            <Col xs={6} md={4}>

            </Col>

            <Col xs={12} md={8}>
            <DBStoreSales/>
            </Col>

          </Row>

        </Container>
      </div>
    </>
  );
}

export default Quadrant;

