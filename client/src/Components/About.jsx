import React from 'react'

function About() {
  const paragraphStyles = {
    fontSize: '40px',
    lineHeight: '1.5',
    color: 'blue',
    marginLeft: 'auto',
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    height: 'relative',
    padding: '50px',
    textAlign: "center",
  }
  
  const centerStyles = {
    fontSize: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15vh',
    padding: '50px',
    textAlign: 'center',
  }

  return (
    <div>
      <h1>About Us</h1> 

      <h1 style={centerStyles}>CREATE ANDANALYZE YOUR DYNAMIC DATA PERFORMANCE DASHBOARDS FOR YOUR BUSINESS</h1>

      <h2 style={paragraphStyles}>
        A performance dashboard is a layered information delivery system that parcels out information, insights, and alerts to users on demand so they can measure, monitor, and manage business performance more effectively.
      </h2>

    </div>
  );
}

export default About