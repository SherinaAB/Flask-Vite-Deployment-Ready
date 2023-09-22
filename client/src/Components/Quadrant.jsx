
import React from 'react'
import { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DBPriceGap from './DBPriceGap';
import DBStoreSales from './DBStoreSales';
import DBCatSales from './DBCatSales';
import DashboardLanding from './DashboardLanding';

function Quadrant() {
  return (
    <>
      <div className="Quadcontainer">
        <Container>
            
            <Col className="QuadRow">
            <DBPriceGap/>
            </Col>
  
            {/* <Col>
            <DBStoreSales/>
            </Col> */}

        </Container>
      </div>
    </>
  );
}

export default Quadrant;

