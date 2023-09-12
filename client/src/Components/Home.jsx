import React from "react";
// import Products from "./Products";

function Home({}) {
  return (
    <>
    {/* this is for a hero page and need to adjust the colors */}
      <div className="hero min-h-screen">
        {/* bg-base-200 for above to make background different color */}
        <div className="hero-content flex-col lg:flex-row">
          <img src="assets/PaperStyle.jpg" alt="Image by <a href="https://www.freepik.com/free-vector/paper-style-monochromatic-smooth-background_14670104.htm"> Freepik </a>
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">PERFORMANCE DASHBOARD</h1>
            <p className="py-6">
              A performance dashboard is a layered information delivery system that parcels out information, insights, and alerts to users on demand so they can measure, monitor, and manage business performance more effectively.
            </p>
            <button className="btn btn-primary">View or Create Your Preferred Dashboards Here</button>
          </div>
        </div>
      </div>

        {/* <Products products={products} handleEdit = {handleEdit} history = {history}/> */}
        {/* ============================ ADD MINI SAMPLE DASHBOARDS ON HOME PAGE ========================= */}
    </>
  );
}

export default Home;