import React from 'react'
import { useState } from 'react'
import Image from 'react-bootstrap/Image';

function Home({}) {
  const [createDashboard, setCreateDashboard] = useState(false)

  function handleClick(){
    createDashboard(!createDashboard);
  }    

  return (

    <>
      <div id="LandingPageBackground">
          {/* <img src="assets/PaperStyle.jpg" alt="Image by Freepik"
          /> */}
            {/* <h1 className="text-5xl font-bold">PERFORMANCE DASHBOARD</h1> */}
            <p className="">
              A performance dashboard is a layered information delivery system that parcels out information, insights, and alerts to users on demand so they can measure, monitor, and manage business performance more effectively.
            </p>
            {/* <button className="btn btn-primary"onClick={handleClick}>View or Create Your Preferred Dashboards Here</button>
      
            <button onClick={handleClick}>{createDashboard?"View or Create Your Preferred Dashboard":"Login"}</button> */}
      </div>

        {/* ============================ ADD MINI SAMPLE DASHBOARDS ON HOME PAGE ========================= */}
    </>
  );
}

export default Home;