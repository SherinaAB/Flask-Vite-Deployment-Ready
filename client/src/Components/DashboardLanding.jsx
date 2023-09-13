import React from 'react'
import { useRef, useState, useEffect  } from 'react';
import { Bar, getDatasetAtEvent } from 'react-chartjs-2';

function DashboardLanding() {
  // <div>Dashboard Landing Page</div>
  const chartRef = useRef();
  const onClick = (event) => {
    console.log(getDatasetAtEvent(chartRef.current, event));
  }

  return (
    <Bar
      ref={chartRef}
      data={data}
      onClick={onClick}
    />
  );
}


    
export default DashboardLanding


// import React, { useRef } from 'react';
// import { Bar, getDatasetAtEvent } from 'react-chartjs-2';

// function App() {
//   const chartRef = useRef();

//   // Sample data for the Bar chart
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May'],
//     datasets: [
//       {
//         label: 'Sample Data',
//         data: [12, 19, 3, 5, 2],
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const onClick = (event) => {
//     const dataset = getDatasetAtEvent(chartRef.current, event);
//     if (dataset.length > 0) {
//       // Log the dataset information when clicking on the chart
//       console.log(dataset[0]);
//     }
//   };

//   return (
//     <div>
//       <h2>Bar Chart Example</h2>
//       <Bar ref={chartRef} data={data} onClick={onClick} />
//     </div>
//   );
// }

// export default App;
