import Nav from 'react-bootstrap/Nav';

function ChartQuadrant1() {
  return (
    <Nav variant="tabs" defaultActiveKey="/dashboardlanding">

      <Nav.Item>
        <Nav.Link href="/dashboardlanding"></Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-1">Horizontal Bar Chart</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-1">Horizontal Bar Chart</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-1">Horizontal Bar Chart</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-1">Horizontal Bar Chart</Nav.Link>
      </Nav.Item>

      {/* <Nav.Item>
        <Nav.Link eventKey="link-1">Horizontal Bar Chart</Nav.Link>
      </Nav.Item> */}

    </Nav>
  );
}

export default ChartQuadrant1;